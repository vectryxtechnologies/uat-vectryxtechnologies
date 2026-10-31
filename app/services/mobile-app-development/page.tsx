import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data/services";
import { ServiceDetailView } from "@/components/services/service-detail-view";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Native and cross-platform mobile applications for iOS and Android with intuitive fluid interfaces and offline-first persistence.",
};

export default function MobileAppDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "mobile-app-development");
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
