export interface TechnologyItem {
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Databases" | "AI & ML" | "Cloud & DevOps";
  description: string;
  level: "Core Production" | "Advanced" | "Supported";
  slug: string;
}

export const technologiesData: TechnologyItem[] = [
  // Frontend
  { name: "Next.js", category: "Frontend", description: "Production App Router, React Server Components & SSR", level: "Core Production", slug: "nextjs" },
  { name: "React", category: "Frontend", description: "Component-driven architecture and modern client state", level: "Core Production", slug: "react" },
  { name: "TypeScript", category: "Languages", description: "Strict static typing across frontend and backend stacks", level: "Core Production", slug: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", description: "Design-system tokenized, utility-first UI styling", level: "Core Production", slug: "tailwind" },
  { name: "Angular", category: "Frontend", description: "Enterprise frontends with robust dependency injection", level: "Supported", slug: "angular" },

  // Programming Languages
  { name: "Python", category: "Languages", description: "AI/ML engineering, data analysis, and microservices", level: "Core Production", slug: "python" },
  { name: "JavaScript", category: "Languages", description: "Modern ESNext asynchronous runtime execution", level: "Core Production", slug: "javascript" },

  // Backend
  { name: "Node.js", category: "Backend", description: "Event-driven asynchronous server runtimes & APIs", level: "Core Production", slug: "nodejs" },
  { name: "Express", category: "Backend", description: "Minimalist, robust HTTP server frameworks", level: "Core Production", slug: "express" },
  { name: "FastAPI", category: "Backend", description: "High-performance asynchronous Python REST APIs", level: "Core Production", slug: "fastapi" },

  // Databases
  { name: "PostgreSQL", category: "Databases", description: "ACID-compliant relational database with JSONB indexing", level: "Core Production", slug: "postgresql" },
  { name: "MongoDB", category: "Databases", description: "High-throughput document store with aggregation pipelines", level: "Core Production", slug: "mongodb" },
  { name: "MySQL", category: "Databases", description: "Proven relational data storage for structured business apps", level: "Supported", slug: "mysql" },

  // AI & Machine Learning
  { name: "PyTorch", category: "AI & ML", description: "Deep learning models, neural networks, and embeddings", level: "Advanced", slug: "pytorch" },
  { name: "TensorFlow", category: "AI & ML", description: "End-to-end open source machine learning platform", level: "Supported", slug: "tensorflow" },

  // Cloud & DevOps
  { name: "Docker", category: "Cloud & DevOps", description: "Containerized reproducible application packaging", level: "Core Production", slug: "docker" },
  { name: "GitHub Actions", category: "Cloud & DevOps", description: "Automated CI/CD deployment workflows and test gates", level: "Core Production", slug: "github-actions" },
  { name: "Vercel", category: "Cloud & DevOps", description: "Global edge CDN and serverless Next.js hosting", level: "Core Production", slug: "vercel" },
];

export const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Databases",
  "AI & ML",
  "Cloud & DevOps",
] as const;
