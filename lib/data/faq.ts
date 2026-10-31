export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Process & Pricing" | "Support";
}

export const faqData: FAQItem[] = [
  {
    question: "What services does Vectryx Technologies provide?",
    answer: "Vectryx Technologies delivers end-to-end software engineering and digital solutions. Our core services encompass custom website development, enterprise software systems, artificial intelligence and machine learning integration, native and cross-platform mobile apps, data science & analytics, cloud/DevOps automation, and disciplined technical project guidance for students and researchers.",
    category: "General",
  },
  {
    question: "Do you develop custom websites?",
    answer: "Yes. We engineer fully bespoke websites and web applications built from scratch on Next.js, React, TypeScript, and modern CSS architectures. We avoid generic, slow website builders in favor of clean, performant code that achieves sub-second load times, superior SEO rankings, and tailored visual brand identities.",
    category: "Services",
  },
  {
    question: "Do you build complete software projects?",
    answer: "Absolutely. We specialize in full-lifecycle product development — from initial requirement analysis and architectural design to database modeling, backend API construction, frontend engineering, testing, and production cloud deployment.",
    category: "Services",
  },
  {
    question: "Do you provide AI and machine learning solutions?",
    answer: "Yes. We design and integrate intelligent systems, including Large Language Model (LLM) workflows, semantic search, document processing engines (NLP), predictive machine learning models, and autonomous workflow agents. We prioritize accuracy, security, and low-latency inference.",
    category: "Services",
  },
  {
    question: "Do you support startups?",
    answer: "Yes. We actively collaborate with early-stage founders and startups to engineer Minimum Viable Products (MVPs), design high-converting web presences, and establish clean, scalable codebases that can comfortably transition from proof-of-concept into high-growth production.",
    category: "General",
  },
  {
    question: "Do you provide technical mentorship?",
    answer: "Yes. Through our Technical Project Development track, we provide one-on-one architectural consultation, hands-on code reviews, debugging assistance, and viva/defense preparation for students and independent builders. Our focus is strictly on comprehension, skill acquisition, and institution-compliant guidance.",
    category: "Services",
  },
  {
    question: "How can I start a project?",
    answer: "You can initiate a project by navigating to our dedicated Start Your Project portal (/start-project) or by submitting the contact form on our website. Outline your requirements, project scope, budget preference, and timeline. Our engineering leads will review your inquiry and connect with you within 24 business hours to arrange an introductory consultation.",
    category: "Process & Pricing",
  },
  {
    question: "How is project pricing determined?",
    answer: "Project pricing is determined transparently based on system scope, technical complexity, architectural requirements, and target timeline. Rather than publishing generic one-size-fits-all prices that may not fit your specific needs, we prepare clear, milestone-based custom quotations following our initial technical discovery session.",
    category: "Process & Pricing",
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Yes. Every production software deployment includes an initial warranty period for defect remediation. Furthermore, we offer ongoing maintenance agreements covering security patching, runtime dependency upgrades, performance tuning, uptime monitoring, and feature iteration.",
    category: "Support",
  },
  {
    question: "How can I contact your team?",
    answer: "You can reach us through our online inquiry forms, via email at inquiries@vectryx.com, or through our verified WhatsApp channel (when activated). You can also submit inquiries directly via our Contact page (/contact) or Start Project portal (/start-project).",
    category: "General",
  },
];
