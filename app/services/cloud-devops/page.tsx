import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Cloud & DevOps Solutions",
  description:
    "Automated CI/CD pipelines, containerization with Docker, cloud infrastructure deployment on Vercel/AWS, and 99.9% uptime monitoring.",
};

export default function CloudDevOpsPage() {
  const service = servicesData.find((s) => s.slug === "cloud-devops");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
