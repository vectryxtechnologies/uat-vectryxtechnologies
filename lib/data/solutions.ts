export interface SolutionAudience {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
}

export const solutionsData: SolutionAudience[] = [
  {
    id: "students",
    badge: "Academic & Learning",
    title: "For Students & Individuals",
    subtitle: "Mentorship, hands-on guidance, and rigorous code understanding.",
    description: "Engineering education often falls short on practical implementation. We partner with students and individual builders to demystify complex architectures, conduct deep code walkthroughs, optimize algorithms, and help prepare institution-compliant project documentation and defense presentations.",
    painPoints: [
      "Struggling to integrate frontend and backend systems independently",
      "Cryptic bugs and deployment blockers slowing down project progress",
      "Lack of architectural clarity when facing technical viva or defense committees",
      "Need for honest, compliant guidance rather than generic pre-packaged code",
    ],
    deliverables: [
      "1-on-1 guided architecture reviews and live debugging sessions",
      "Complete code walkthrough ensuring 100% personal comprehension",
      "UML system flow diagrams and IEEE-aligned documentation guidance",
      "Viva / defense question preparation tailored to your tech stack",
    ],
    ctaText: "Get Mentorship Guidance",
    ctaLink: "/start-project?category=Technical+Project+Guidance&type=Student+%2F+Individual",
  },
  {
    id: "startups",
    badge: "Speed to Market",
    title: "For Startups & Entrepreneurs",
    subtitle: "Rapid MVP engineering and scalable foundational architecture.",
    description: "Startups require rapid execution without accruing crippling technical debt. We help founders validate product-market fit by building lean, high-performance MVPs, investor-ready prototypes, and scalable web/mobile platforms that can comfortably grow from zero to tens of thousands of active users.",
    painPoints: [
      "Slow development cycles burning through runway without shipping",
      "Fragile prototype code that cannot support actual user scaling",
      "Lack of senior engineering leadership to evaluate architectural tradeoffs",
      "Need for a high-converting web presence to impress early adopters and backers",
    ],
    deliverables: [
      "Fast-turnaround MVP development with production-grade type safety",
      "Modular API backend architecture ready for future feature expansion",
      "Conversion-optimized landing pages with integrated analytics",
      "Clear technical roadmap and clean codebase ready for investor audits",
    ],
    ctaText: "Build Your Startup MVP",
    ctaLink: "/start-project?type=Startup",
  },
  {
    id: "businesses",
    badge: "Operational Scale",
    title: "For Businesses & SMBs",
    subtitle: "Modern digital presence and automated operational workflows.",
    description: "We help growing businesses eliminate repetitive manual processes, modernize outdated legacy systems, and establish authoritative digital storefronts that generate qualified customer leads consistently.",
    painPoints: [
      "Manual data entry and fragmented spreadsheets creating operational bottlenecks",
      "Outdated corporate websites failing to convert modern enterprise clients",
      "Lack of integration between customer inquiries and internal fulfillment",
      "Concerns regarding data security, uptime, and ongoing website maintenance",
    ],
    deliverables: [
      "Bespoke business web platforms with sub-second page performance",
      "Internal tooling and automated pipeline workflows",
      "Secure customer inquiry capture with automated email notifications",
      "Ongoing maintenance, security patch updates, and uptime monitoring",
    ],
    ctaText: "Modernize Business Operations",
    ctaLink: "/start-project?type=Small+Business",
  },
  {
    id: "enterprises",
    badge: "Mission Critical",
    title: "For Enterprises & Organizations",
    subtitle: "Resilient systems, custom data tools, and technical consulting.",
    description: "For established organizations requiring specialized technical execution, we engineer high-throughput systems, custom data analytics engines, and robust integrations with strict compliance, security headers, and clean documentation.",
    painPoints: [
      "Legacy software architectures unable to handle modern integration needs",
      "Strict data privacy, rate-limiting, and compliance mandates",
      "Complex cross-departmental data streams lacking consolidated intelligence",
      "Need for disciplined engineering partners with defensive security practices",
    ],
    deliverables: [
      "Secure, containerized microservices and API gateways",
      "Centralized executive analytics dashboards and automated reporting",
      "Strict OWASP-aligned security posture and automated CI/CD gating",
      "Enterprise SLAs, architectural consulting, and engineering documentation",
    ],
    ctaText: "Request Enterprise Consultation",
    ctaLink: "/start-project?type=Enterprise",
  },
];
