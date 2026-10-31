import { Resend } from "resend";
import { InquiryFormData } from "@/lib/validation/inquiry";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendInquiryEmail(data: InquiryFormData): Promise<{ success: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "inquiries@vectryx.com";

  if (!apiKey || apiKey === "re_your_api_key_here") {
    // Development / demo mode fallback
    console.info("[Inquiry Email System - Dev Mode]", {
      timestamp: new Date().toISOString(),
      to: recipient,
      lead: {
        name: data.fullName,
        email: data.email,
        customerType: data.customerType,
        category: data.projectCategory,
        budget: data.budget || "Not specified",
        timeline: data.timeline || "Not specified",
      },
      note: "RESEND_API_KEY not configured. Simulating successful transmission for development.",
    });

    return {
      success: true,
      id: `mock-resend-${Date.now()}`,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const safeName = escapeHtml(data.fullName);
    const safeEmail = escapeHtml(data.email);
    const safeCustomerType = escapeHtml(data.customerType);
    const safeCategory = escapeHtml(data.projectCategory);
    const safeCompany = escapeHtml(data.companyOrInstitution || "None provided");
    const safePhone = escapeHtml(data.phone || "None provided");
    const safeWhatsapp = escapeHtml(data.whatsapp || "None provided");
    const safeBudget = escapeHtml(data.budget || "Not decided");
    const safeTimeline = escapeHtml(data.timeline || "Flexible");
    const safeMethod = escapeHtml(data.preferredContactMethod || "Email");
    const safeLink = data.projectLink ? escapeHtml(data.projectLink) : "None";
    const safeDescription = escapeHtml(data.projectDescription).replace(/\n/g, "<br/>");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080808; color: #F5F5F5; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #303030; border-radius: 8px; padding: 32px; }
            .header { border-bottom: 1px solid #303030; padding-bottom: 20px; margin-bottom: 24px; }
            .badge { display: inline-block; background: #181818; color: #D9D9D9; border: 1px solid #404040; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-family: monospace; }
            .row { margin-bottom: 16px; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #929292; margin-bottom: 4px; }
            .value { font-size: 15px; color: #FFFFFF; font-weight: 500; }
            .description-box { background: #181818; border-left: 3px solid #D9D9D9; padding: 16px; border-radius: 4px; margin-top: 12px; color: #E5E5E5; line-height: 1.6; }
            .footer { border-top: 1px solid #202020; margin-top: 32px; padding-top: 16px; font-size: 12px; color: #707070; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">NEW PROJECT INQUIRY</span>
              <h2 style="margin: 12px 0 0 0; color: #FFFFFF; font-size: 22px;">Vectryx Technologies</h2>
              <p style="margin: 4px 0 0 0; color: #929292; font-size: 14px;">Inquiry submitted via online project portal</p>
            </div>

            <div class="row">
              <div class="label">Client Information</div>
              <div class="value">${safeName} &lt;${safeEmail}&gt;</div>
              <div style="color: #A7A7A7; font-size: 13px; margin-top: 2px;">Company / Institution: ${safeCompany}</div>
            </div>

            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="flex: 1;">
                <div class="label">Customer Segment</div>
                <div class="value">${safeCustomerType}</div>
              </div>
              <div style="flex: 1;">
                <div class="label">Project Scope</div>
                <div class="value">${safeCategory}</div>
              </div>
            </div>

            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="flex: 1;">
                <div class="label">Estimated Budget</div>
                <div class="value">${safeBudget}</div>
              </div>
              <div style="flex: 1;">
                <div class="label">Target Timeline</div>
                <div class="value">${safeTimeline}</div>
              </div>
            </div>

            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="flex: 1;">
                <div class="label">Phone / WhatsApp</div>
                <div class="value">Tel: ${safePhone} | WA: ${safeWhatsapp}</div>
              </div>
              <div style="flex: 1;">
                <div class="label">Preferred Channel</div>
                <div class="value">${safeMethod}</div>
              </div>
            </div>

            ${data.projectLink ? `
            <div class="row">
              <div class="label">Reference Link / Materials</div>
              <div class="value"><a href="${safeLink}" style="color: #D9D9D9; text-decoration: underline;">${safeLink}</a></div>
            </div>
            ` : ""}

            <div class="row">
              <div class="label">Project Requirements & Description</div>
              <div class="description-box">${safeDescription}</div>
            </div>

            <div class="footer">
              This message was securely generated by the Vectryx Technologies Lead Generation System.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: responseData, error } = await resend.emails.send({
      from: "Vectryx Website <noreply@vectryx.com>",
      to: [recipient],
      replyTo: data.email,
      subject: `[New Inquiry] ${data.projectCategory} - ${data.fullName} (${data.customerType})`,
      html: emailHtml,
    });

    if (error) {
      console.error("[Resend Delivery Error]:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: responseData?.id };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to deliver email message";
    console.error("[Email Dispatch Exception]:", errorMsg);
    return { success: false, error: errorMsg };
  }
}
