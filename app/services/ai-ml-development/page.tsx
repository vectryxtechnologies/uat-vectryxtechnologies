import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "AI & Machine Learning Development Services",
  description:
    "Intelligent automation, LLM integrations, document intelligence NLP, and modern machine learning pipelines engineered by Vectryx Technologies.",
};

export default function AIMLDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "ai-ml-development");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
