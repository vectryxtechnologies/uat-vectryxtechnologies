import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation/inquiry";
import { sendInquiryEmail } from "@/lib/email/resend";
import { rateLimit } from "@/lib/security/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "127.0.0.1";

    // 2. Rate limit: 5 submissions per 60 seconds per IP
    const rateCheck = rateLimit(`inquiry:${ip}`, 5, 60_000);
    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions from your connection. Please wait ${rateCheck.reset} seconds before trying again.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": rateCheck.reset.toString(),
          },
        }
      );
    }

    // 3. Body validation & size check
    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const parseResult = inquirySchema.safeParse(rawBody);
    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0]?.message || "Validation failed";
      return NextResponse.json(
        {
          success: false,
          error: firstError,
          fieldErrors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 4. Send email safely via Resend / safe fallback
    const emailResult = await sendInquiryEmail(parseResult.data);
    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "We could not dispatch your inquiry at this moment. Please try again or reach out directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to Vectryx Technologies. Our engineering leads will review your inquiry and connect with you within 24 business hours.",
        inquiryId: emailResult.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Never expose stack trace to client
    console.error("[Inquiry API Handler Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
