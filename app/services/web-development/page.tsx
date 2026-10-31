import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Website Development Services",
  description:
    "High-performance corporate websites, scalable web applications, and conversion-optimized landing pages engineered by Vectryx Technologies using Next.js and TypeScript.",
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
