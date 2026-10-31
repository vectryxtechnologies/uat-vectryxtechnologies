export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverables: string[];
}

export const developmentProcessData: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    shortDesc: "Understanding your vision, business domain, constraints, and success metrics.",
    details: "We start with a comprehensive technical and business discovery session. We analyze the core problem, clarify target user personas, establish technical constraints, and define measurable milestones.",
    deliverables: ["Project Discovery Summary", "Initial Feasibility Analysis", "Scope Boundaries"],
  },
  {
    step: "02",
    title: "Planning & Architecture",
    shortDesc: "System design, technology selection, database schemas, and milestone roadmaps.",
    details: "We map out system components, API boundaries, entity relationships, and hosting requirements. We choose the right stack based on performance, cost efficiency, and long-term maintainability.",
    deliverables: ["Architecture Blueprint", "Database Schema Diagram", "Delivery Milestone Schedule"],
  },
  {
    step: "03",
    title: "UI/UX Design",
    shortDesc: "Wireframing, interactive prototypes, design tokens, and accessibility testing.",
    details: "We translate specifications into sleek, intuitive interfaces following strict WCAG 2.1 AA accessibility guidelines, balanced typographic hierarchies, and luxury dark/chrome visual design systems.",
    deliverables: ["High-Fidelity Wireframes", "Design System Tokens", "Responsive Component Specs"],
  },
  {
    step: "04",
    title: "Development",
    shortDesc: "Clean code execution, component modularity, and strict type safety.",
    details: "Using modern Next.js, TypeScript, React, and Python/Node backend stacks, we write clean, self-documenting code. Features are developed incrementally in feature branches with automated git workflows.",
    deliverables: ["Production-Ready Source Code", "Modular Component Library", "Version-Controlled Git Repo"],
  },
  {
    step: "05",
    title: "Testing & Hardening",
    shortDesc: "Quality assurance, performance auditing, edge-case validation, and security reviews.",
    details: "Every application undergoes rigorous automated testing, manual edge-case auditing, lighthouse performance profiling (target 95+), cross-device responsive checks, and OWASP security validation.",
    deliverables: ["Lighthouse Performance Audit", "Security Verification Report", "Cross-Browser Compatibility Matrix"],
  },
  {
    step: "06",
    title: "Deployment",
    shortDesc: "Automated CI/CD setup, edge network configuration, and zero-downtime release.",
    details: "We configure production hosting on Vercel or cloud containers (Docker/AWS), set up automated GitHub Actions, attach custom domains with SSL certificates, and tune CDN caching rules.",
    deliverables: ["Live Production URL", "Automated CI/CD Pipeline", "Production Environment Configuration"],
  },
  {
    step: "07",
    title: "Support & Maintenance",
    shortDesc: "Uptime monitoring, dependency upgrades, security patches, and iterative enhancements.",
    details: "Engineering excellence extends beyond launch. We provide ongoing support, monitor server metrics, resolve unforeseen environment shifts, and support progressive feature roadmaps.",
    deliverables: ["Uptime Monitoring Telemetry", "Scheduled Maintenance Updates", "Direct Engineering Support Access"],
  },
];
