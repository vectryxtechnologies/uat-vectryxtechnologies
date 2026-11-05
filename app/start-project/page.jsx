import { SITE } from "@/lib/site";
import { PageHeader, Section, card } from "@/components/section";
export const metadata = { title: "Start a project" };

const subject = encodeURIComponent("New project enquiry");
const body = encodeURIComponent("Hi Vectryx,\n\nWhat we want to build:\nBudget range:\nTarget timeline:\nOur company/website:\n");

export default function StartProject() {
  return (
    <>
      <PageHeader eyebrow="Start a project" title="Tell us what you want to build." intro="The quickest way to start is an email with a few details." />
      <Section className="pt-4">
        <div className={card + " max-w-2xl"}>
          <h2 className="mb-3 text-xl font-bold text-white">Helpful to include</h2>
          <ul className="mb-6 list-disc space-y-1.5 pl-5 text-slate-400">
            <li>What problem you want to solve</li><li>Who will use the system</li><li>Rough budget and timeline</li><li>Any existing tools or spreadsheets</li>
          </ul>
          <a href={`mailto:${SITE.email}?subject=${subject}&body=${body}`} className="inline-flex rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500">Email us your brief</a>
        </div>
      </Section>
    </>
  );
}
