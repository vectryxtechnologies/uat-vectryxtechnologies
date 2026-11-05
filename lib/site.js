import { Code2, Globe, Smartphone, Brain, BarChart3, Cloud, Compass } from "lucide-react";

// ✏️ EDIT EVERYTHING HERE: all site text lives in this one file.
export const SITE = {
  name: "Vectryx Technologies",
  url: "https://vectryxtechnologies.com",
  email: "hello@vectryxtechnologies.com",
  phone: "+00 000 000 0000",
  whatsapp: "https://wa.me/",
  location: "Your city, Country",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Technologies", href: "/technologies" },
  { label: "Contact", href: "/contact" },
];

// image: set to "/images/your-file.jpg" (file in /public/images) to show a real photo
export const SERVICES = [
  { slug: "software-development", title: "Software Development", icon: Code2, image: null,
    short: "Custom business software, from internal tools to full ERP systems, built around how you work.",
    points: ["Custom ERP, CRM and back-office tools", "API design and system integrations", "Legacy system modernisation", "Maintainable, documented code"] },
  { slug: "web-development", title: "Web Development", icon: Globe, image: null,
    short: "Fast, accessible websites and web platforms that turn visitors into customers.",
    points: ["Marketing sites and landing pages", "Portals and dashboards", "E-commerce and booking platforms", "SEO-ready, responsive builds"] },
  { slug: "mobile-app-development", title: "Mobile App Development", icon: Smartphone, image: null,
    short: "iOS and Android apps with smooth UX, offline support and clean back-end integration.",
    points: ["Cross-platform apps (React Native / Flutter)", "Native iOS and Android", "Push notifications and offline mode", "App Store and Play Store launch"] },
  { slug: "ai-ml-development", title: "AI & ML Development", icon: Brain, image: null,
    short: "Practical AI: assistants, automation and predictive models that fit real workflows.",
    points: ["LLM assistants and chatbots", "Document and data automation", "Prediction and recommendation models", "Safe, measurable rollouts"] },
  { slug: "data-science", title: "Data Science", icon: BarChart3, image: null,
    short: "Turn scattered spreadsheets and databases into clear dashboards and decisions.",
    points: ["Data pipelines and warehousing", "Dashboards and reporting", "Statistical analysis", "Forecasting and insights"] },
  { slug: "cloud-devops", title: "Cloud & DevOps", icon: Cloud, image: null,
    short: "Reliable, secure and cost-aware infrastructure with automated delivery.",
    points: ["AWS, Azure and GCP setup", "CI/CD pipelines", "Monitoring and incident readiness", "Cost and security reviews"] },
  { slug: "technical-project-guidance", title: "Technical Project Guidance", icon: Compass, image: null,
    short: "Senior technical advice to scope, plan and de-risk your project before you build.",
    points: ["Architecture and stack reviews", "Vendor and estimate checks", "Roadmaps and scoping", "Ongoing technical advisory"] },
];

export const SOLUTIONS = [
  { title: "ERP & Internal Tools", text: "Replace spreadsheets and paper forms with one connected system for orders, stock, HR and finance." },
  { title: "Online Platforms", text: "Customer portals, marketplaces and booking systems built to grow with you." },
  { title: "Mobile Apps", text: "Apps for customers or field teams, with real-time data and offline support." },
  { title: "AI Automation", text: "Automate repetitive work: document reading, replies, reporting and approvals." },
  { title: "Data & Dashboards", text: "One trusted view of your numbers, updated automatically." },
  { title: "Cloud Modernisation", text: "Move to the cloud safely, with CI/CD, monitoring and backups in place." },
];

// ✏️ Sample projects: replace with your real work.
export const PROJECTS = [
  { slug: "inventory-erp", title: "Inventory & Orders ERP", tag: "Software", image: null,
    summary: "A custom ERP that replaced spreadsheets for a multi-branch distributor.",
    challenge: "Orders and stock lived in separate spreadsheets, causing delays and errors.",
    solution: "A single web system for orders, stock, invoicing and reports with role-based access.",
    results: ["Single source of truth for stock", "Faster order processing", "Real-time branch reports"], stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"] },
  { slug: "field-service-app", title: "Field Service Mobile App", tag: "Mobile", image: null,
    summary: "A mobile app for technicians to receive jobs, capture photos and sign off on site.",
    challenge: "Job updates were passed by chat messages and often lost.",
    solution: "An offline-first app syncing jobs, photos and signatures to a manager dashboard.",
    results: ["Jobs tracked end-to-end", "Works without signal", "Less admin follow-up"], stack: ["React Native", "Firebase", "TypeScript"] },
  { slug: "sales-insights-dashboard", title: "Sales Insights Dashboard", tag: "Data & AI", image: null,
    summary: "A live dashboard with forecasting that unified data from several systems.",
    challenge: "Management waited days for manual monthly reports.",
    solution: "Automated pipelines feeding dashboards with simple demand forecasting.",
    results: ["Reports always current", "Clear trend visibility", "Better stock planning"], stack: ["Python", "dbt", "BigQuery", "Next.js"] },
];

export const TECH = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Flutter"] },
  { group: "Backend", items: ["Node.js", "Python", "Django", "FastAPI", "GraphQL", "REST"] },
  { group: "Data & AI", items: ["PostgreSQL", "MongoDB", "BigQuery", "PyTorch", "OpenAI", "LangChain"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions"] },
];

export const STEPS = [
  { title: "Discover", text: "We learn how your business runs, what hurts, and what success looks like." },
  { title: "Design", text: "Flows, wireframes and a clear scope and estimate, agreed before any code." },
  { title: "Build", text: "Short iterations with regular demos, so you see progress and steer early." },
  { title: "Launch & Support", text: "Deployment, training and ongoing improvements after go-live." },
];
