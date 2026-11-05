import { InfoPage } from "@/components/section";
export const metadata = { title: "Privacy Policy" };
export default function Privacy() {
  return <InfoPage eyebrow="Legal" title="Privacy Policy" blocks={[
    ["Overview", "This is placeholder text. Replace it with your real privacy policy, reviewed by a qualified professional."],
    ["Information we collect", "This website is static and does not collect personal data itself. If you email us, we store what you send to respond to your enquiry."],
    ["Contact", "Questions about privacy can be sent to the email address on our Contact page."],
  ]} />;
}
