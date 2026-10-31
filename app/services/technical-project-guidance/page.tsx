import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Technical Project Guidance & Mentorship",
  description:
    "Disciplined technical consultation, architecture design, development mentorship, and institution-compliant project guidance for students and solo innovators.",
};

export default function TechnicalProjectGuidancePage() {
  const service = servicesData.find((s) => s.slug === "technical-project-guidance");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
