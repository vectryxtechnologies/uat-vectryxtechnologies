import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Custom software systems, robust microservices, business automation, and enterprise APIs engineered for high-throughput reliability.",
};

export default function SoftwareDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "software-development");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
