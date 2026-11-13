import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const CLIENT_PROJECTS = [
  {
    slug: "travel-booking-platform",
    title: "Travel Booking Platform",
    tag: "Web Application",
    summary: "A full-featured travel booking platform enabling users to search, compare and book travel packages with a seamless experience.",
    challenge: "The client needed a modern, responsive travel platform that could handle dynamic listings, real-time availability, and a smooth booking flow across devices — replacing their outdated manual process.",
    solution: "We designed and developed a complete travel booking web application with dynamic search, package listings, booking management, and an admin panel for the client to manage content and reservations.",
    results: [
      "Streamlined booking experience for end users",
      "Admin dashboard for managing listings and bookings",
      "Responsive design across all devices",
      "Improved customer engagement and conversion",
      "Scalable architecture for future growth",
    ],
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS"],
    cover: "/client_work_images/travel1.jpg",
    images: [
      "/client_work_images/travel1.jpg",
      "/client_work_images/travel2.jpg",
      "/client_work_images/travel3.jpg",
      "/client_work_images/travel4.jpg",
      "/client_work_images/travel5.jpg",
    ],
  },
  {
    slug: "p2p-platform",
    title: "P2P Platform",
    tag: "Web Application",
    summary: "A peer-to-peer platform connecting users directly for transactions, collaboration and secure communication.",
    challenge: "The client required a secure, user-friendly peer-to-peer platform that facilitates direct interactions between users while maintaining trust, transparency and data security.",
    solution: "We built a robust P2P web application with user authentication, real-time communication features, transaction management and an intuitive interface designed for ease of use.",
    results: [
      "Secure peer-to-peer transaction flow",
      "User-friendly interface with smooth onboarding",
      "Real-time updates and notifications",
      "Scalable platform architecture",
    ],
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    cover: "/client_work_images/p2p1.jpg",
    images: ["/client_work_images/p2p1.jpg"],
  },
  {
    slug: "loop-application",
    title: "Loop Application",
    tag: "Web Application",
    summary: "A workflow-driven application designed to streamline recurring business processes and team collaboration.",
    challenge: "The client's team relied on scattered tools and manual follow-ups to manage recurring tasks, leading to missed deadlines and lack of visibility across workflows.",
    solution: "We developed a centralised loop-based application that automates recurring workflows, provides clear task ownership, and gives management real-time visibility into progress.",
    results: [
      "Automated recurring task management",
      "Clear ownership and accountability",
      "Real-time progress tracking",
      "Reduced manual follow-ups",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    cover: "/client_work_images/loop1.jpg",
    images: ["/client_work_images/loop1.jpg"],
  },
  {
    slug: "dr-project",
    title: "DR Project",
    tag: "Web Application",
    summary: "A data-rich web application built to manage, visualise and report on critical business information efficiently.",
    challenge: "The client needed a reliable system to consolidate data from multiple sources, generate actionable reports, and support decision-making with clear visual dashboards.",
    solution: "We built a comprehensive data reporting application with interactive dashboards, automated report generation, and role-based access to ensure the right people see the right information.",
    results: [
      "Consolidated data from multiple sources",
      "Interactive dashboards and visual reports",
      "Role-based access control",
      "Faster and more informed decision-making",
    ],
    stack: ["React", "Python", "Node.js", "PostgreSQL", "REST APIs"],
    cover: "/client_work_images/dr1.jpg",
    images: ["/client_work_images/dr1.jpg"],
  },
];

export default function ClientWorkGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CLIENT_PROJECTS.map((p) => (
        <Link key={p.slug} href={`/client-work/${p.slug}`} className="group">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-subtle transition-all hover:border-border-strong hover:shadow-lg">
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex w-full items-center justify-between p-4">
                <span className="text-sm font-medium text-white">{p.title}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">{p.tag}</p>
          <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em]">{p.title}</h3>
          <p className="mt-1 text-sm text-muted">{p.summary}</p>
        </Link>
      ))}
    </div>
  );
}
