import { SITE } from "@/lib/site";
import { PageHeader, Section, card } from "@/components/section";
import Button from "@/components/ui/button";
export const metadata = { title: "Start a project" };

const subject = encodeURIComponent("New project enquiry");
const body = encodeURIComponent("Hi Vectryx,\n\nWhat we want to build:\nBudget range:\nTarget timeline:\nOur company/website:\n");

export default function StartProject() {
  return (
    <>
      <PageHeader eyebrow="Start a project" title="Tell us what you want to build." intro="The quickest way to start is an email with a few details." />
      <Section>
        <div className={card + " max-w-3xl"}>
          <h2 className="mb-3 text-xl font-semibold tracking-[-0.03em]">Helpful to include</h2>
          <ul className="mb-6 list-disc space-y-1.5 pl-5 text-muted">
            <li>What problem you want to solve</li><li>Who will use the system</li><li>Rough budget and timeline</li><li>Any existing tools or spreadsheets</li>
          </ul>
          <Button href={`mailto:${SITE.email}?subject=${subject}&body=${body}`} variant="primary">Email us your brief</Button>
        </div>
      </Section>
    </>
  );
}
