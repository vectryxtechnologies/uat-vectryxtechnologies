import { InfoPage } from "@/components/section";
export const metadata = { title: "Terms & Conditions" };
export default function Terms() {
  return <InfoPage eyebrow="Legal" title="Terms & Conditions" blocks={[
    ["Use of this website", "This is placeholder text. Replace it with your real terms, reviewed by a qualified professional."],
    ["Content", "Information on this site is provided for general purposes and may change without notice."],
    ["Projects", "Services are governed by a separate written agreement signed by both parties."],
  ]} />;
}
