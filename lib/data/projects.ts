export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Web Platform" | "Mobile & Web" | "AI / NLP" | "AI Assistant";
  projectType: "Production Platform" | "Client Project" | "Internal System" | "Applied Prototype";
  status: "Completed" | "Active" | "In Development";
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  metricsOrHighlights: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  coverImage: string;
  architectureNotes?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "collabflow",
    slug: "collabflow",
    title: "CollabFlow",
    tagline: "Real-Time Collaborative Project Management Platform",
    category: "Web Platform",
    projectType: "Production Platform",
    status: "Completed",
    overview: "CollabFlow is a centralized project orchestration platform engineered for distributed software and product teams. It unites Kanban task visualization, real-time presence indicators, instant milestone tracking, and granular permission structures into an ultra-fast web interface.",
    challenge: "Traditional management suites often suffer from bloated client bundles, high latency when multiple operators update boards concurrently, and cumbersome permission administration.",
    solution: "Built on an event-driven architecture using Next.js and WebSocket channels, CollabFlow ensures updates synchronize with minimal latency across all active browser sessions while maintaining optimistic UI updates.",
    keyFeatures: [
      "Real-time multi-user board state synchronization",
      "Interactive drag-and-drop Kanban workflow with swimlanes",
      "Granular role-based access control (Admin, Member, Viewer)",
      "Automated task progress telemetry and milestone deadlines",
      "Audit trail history and revision recovery",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    metricsOrHighlights: [
      { label: "Architecture", value: "Event-Driven" },
      { label: "Concurrency", value: "Zero-Collision Sync" },
      { label: "Deployment", value: "Docker / Cloud" },
    ],
    githubUrl: "https://github.com/subhamoy05/Vectryx",
    coverImage: "/projects/collabflow.svg",
    architectureNotes: [
      "Optimistic UI state dispatch with rollback on network failure",
      "Normalized relational schema for subtasks and team permissions",
      "Sub-100ms API response latency on board mutations",
    ],
  },
  {
    id: "mybazar",
    slug: "mybazar",
    title: "MyBazar",
    tagline: "Hyperlocal Grocery & Local Merchant Marketplace",
    category: "Mobile & Web",
    projectType: "Applied Prototype",
    status: "Completed",
    overview: "MyBazar bridges neighbourhood retail shops and local consumers through a geo-fenced ordering and delivery workflow. Consumers get instant inventory visibility from nearby stores, and local shop owners manage inventory via a streamlined merchant dashboard.",
    challenge: "Hyperlocal commerce requires tight geolocation filtering, real-time inventory updates for volatile stock, and simple interfaces operable on low-bandwidth mobile connections.",
    solution: "Designed with an offline-first caching layer, location-indexed product querying, and responsive mobile-first layouts that load under 1.8 seconds on 4G cellular networks.",
    keyFeatures: [
      "Radius-based merchant discovery and distance sorting",
      "Real-time stock management portal for vendors",
      "Cart grouping and order tracking pipeline",
      "Clean SMS/WhatsApp automated invoice dispatch",
      "Optimized for 360px mobile viewports up to desktop",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    metricsOrHighlights: [
      { label: "Latency", value: "<1.8s Mobile First" },
      { label: "Stack", value: "Full-Stack Node" },
      { label: "Coverage", value: "Hyperlocal Radius" },
    ],
    githubUrl: "https://github.com/subhamoy05/Vectryx",
    coverImage: "/projects/mybazar.svg",
    architectureNotes: [
      "Geospatial indexing using 2dsphere coordinates in MongoDB",
      "Lightweight responsive client without heavy dependencies",
    ],
  },
  {
    id: "ai-resume-analyzer",
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline: "Intelligent Resume Evaluation & Job Match Scoring Engine",
    category: "AI / NLP",
    projectType: "Applied Prototype",
    status: "Completed",
    overview: "An automated document intelligence tool that parses unstructured resumes in PDF/DOCX formats, maps extracted technical competencies against target job descriptions, and highlights quantifiable skill gaps with targeted suggestions.",
    challenge: "Keyword-based ATS parsers frequently misclassify non-standard resume formats and fail to evaluate semantic relevance beyond verbatim keyword matching.",
    solution: "Employs modern NLP parsing and semantic embedding vectors to assess contextual fit, experience depth, and missing prerequisite skills rather than basic string equality.",
    keyFeatures: [
      "Automated extraction of education, work experience, and tech stacks",
      "Semantic similarity scoring against detailed job descriptions",
      "Actionable recommendations for missing keywords and project impact",
      "Downloadable assessment summary with visual match breakdowns",
      "Strict data privacy — resumes are processed in memory and never permanently stored without consent",
    ],
    techStack: ["Python", "FastAPI", "NLP / Spacy", "Sentence-Transformers", "Next.js", "Tailwind CSS"],
    metricsOrHighlights: [
      { label: "Analysis Engine", value: "Semantic NLP" },
      { label: "Format Support", value: "PDF & DOCX" },
      { label: "Data Safety", value: "Zero-Persistence" },
    ],
    githubUrl: "https://github.com/subhamoy05/Vectryx",
    coverImage: "/projects/resume-analyzer.svg",
    architectureNotes: [
      "FastAPI microservice executing tokenization and cosine similarity calculations",
      "Strict in-memory streaming with immediate file descriptor cleanup",
    ],
  },
  {
    id: "ai-personal-assistant",
    slug: "ai-personal-assistant",
    title: "AI-Powered Personal Assistant",
    tagline: "Context-Aware Autonomous Productivity & Task Agent",
    category: "AI Assistant",
    projectType: "Applied Prototype",
    status: "Active",
    overview: "A lightweight autonomous assistant capable of orchestrating daily developer workflows, drafting technical summaries, executing natural language task queries, and synthesizing complex documentation.",
    challenge: "Generic chat interfaces lack situational context regarding developer repositories, local environments, and specific team project structures.",
    solution: "Constructed an agent architecture featuring structured tool execution, context windows managed by relevance ranking, and safe sandboxed command evaluation.",
    keyFeatures: [
      "Natural language schedule and task planning",
      "Context-aware codebase and technical document querying",
      "Autonomous tool dispatch with safety confirmation boundaries",
      "Markdown report generation with structured action points",
    ],
    techStack: ["Python", "FastAPI", "LangChain", "Vector DB", "React", "Tailwind CSS"],
    metricsOrHighlights: [
      { label: "Agent Pattern", value: "ReAct Loop" },
      { label: "Context Window", value: "Ranked Retrieval" },
      { label: "Status", value: "Active Iteration" },
    ],
    githubUrl: "https://github.com/subhamoy05/Vectryx",
    coverImage: "/projects/assistant.svg",
    architectureNotes: [
      "Chain-of-thought verification before external action execution",
      "Modular prompt templates with defensive hallucination guardrails",
    ],
  },
];
