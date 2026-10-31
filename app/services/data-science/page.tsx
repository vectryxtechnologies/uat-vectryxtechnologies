import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Data Science & Analytics Services",
  description:
    "Data processing pipelines, executive dashboards, predictive modeling, and strategic business intelligence by Vectryx Technologies.",
};

export default function DataSciencePage() {
  const service = servicesData.find((s) => s.slug === "data-science");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
