import { InfoPage } from "@/components/section";
export const metadata = { title: "Terms & Conditions" };
export default function Terms() {
  return <InfoPage eyebrow="Legal" title="Terms & Conditions" blocks={[
    ["Use of this website", "By accessing or using the Vectryx Technologies website, you agree to comply with and be bound by these terms."],
    ["Content", "Information on this site is provided for general purposes and may change without notice."],
    ["Projects", "Services are governed by a separate written agreement signed by both parties."],
  ]} />;
}
