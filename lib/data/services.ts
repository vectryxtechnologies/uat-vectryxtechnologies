export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  overview: string;
  iconName: string;
  subCategories: string[];
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  deliverables: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Website Development",
    shortDescription: "High-performance corporate websites, scalable web applications, and conversion-optimized landing pages.",
    heroTagline: "Engineered for speed, aesthetics, and unmatched digital presence.",
    overview: "We engineer bespoke web applications and corporate websites built on modern architectures (Next.js, React, TypeScript). Every platform is designed for lightning-fast loading speeds, seamless accessibility, high conversion rates, and robust SEO infrastructure.",
    iconName: "Globe",
    subCategories: [
      "Corporate Websites",
      "Business Websites",
      "Conversion Landing Pages",
      "Custom E-Commerce Platforms",
    ],
    features: [
      {
        title: "Sub-Second Performance",
        description: "Zero bloat, optimized asset pipelines, server-side rendering, and CDN caching ensuring instant page responses.",
      },
      {
        title: "Enterprise SEO Foundations",
        description: "Semantic HTML5, automated sitemaps, structured schema data, and OpenGraph optimization baked into every route.",
      },
      {
        title: "Fluid Responsive Layouts",
        description: "Pixel-perfect visual harmony calibrated across mobile (360px) to ultra-wide (1920px+) viewports.",
      },
      {
        title: "Accessible & WCAG AA Compliant",
        description: "Strict adherence to contrast requirements, keyboard navigability, ARIA standards, and screen reader compatibility.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    deliverables: [
      "Complete Source Code Repository",
      "Production CI/CD Deployment Pipeline",
      "Lighthouse 95+ Audit Certification",
      "Comprehensive Admin/User Documentation",
    ],
    idealFor: "Modern businesses, growing brands, and startups seeking a distinguished corporate identity online.",
  },
  {
    id: "software-dev",
    slug: "software-development",
    title: "Software Development",
    shortDescription: "Custom software systems, robust microservices, business automation, and enterprise APIs.",
    heroTagline: "Resilient backend systems and mission-critical application architectures.",
    overview: "From distributed APIs to full-stack internal enterprise tools, we develop tailored software that scales reliably under production loads. Our engineering emphasis is placed on domain-driven design, clean code architecture, type safety, and defensive security.",
    iconName: "Code2",
    subCategories: [
      "Custom Software Systems",
      "Web Applications & SaaS",
      "Business Workflow Automation",
      "Scalable API Architecture",
    ],
    features: [
      {
        title: "Clean Domain Architecture",
        description: "Modular boundaries, decoupled business logic, and strict typing that make future codebase evolution effortless.",
      },
      {
        title: "High-Throughput APIs",
        description: "RESTful and GraphQL interfaces engineered with token-bucket rate limiting, caching, and automated validation.",
      },
      {
        title: "Enterprise Database Design",
        description: "Optimized relational (PostgreSQL) and document (MongoDB) schemas indexed for rapid transactional throughput.",
      },
      {
        title: "Defensive Security Layers",
        description: "OWASP-aligned security enforcement, CSRF defense, strict authentication protocols, and sanitized data boundaries.",
      },
    ],
    techStack: ["Node.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker"],
    deliverables: [
      "Scalable Backend Services & APIs",
      "Interactive Swagger/OpenAPI Documentation",
      "Automated Unit & Integration Test Suites",
      "Containerized Docker Configurations",
    ],
    idealFor: "Companies needing bespoke operational workflows, SaaS product development, or core backend modernization.",
  },
  {
    id: "ai-ml",
    slug: "ai-ml-development",
    title: "AI & Machine Learning",
    shortDescription: "Intelligent automation, LLM integrations, predictive models, and modern machine learning pipelines.",
    heroTagline: "Infusing pragmatic intelligence and autonomous capability into your software ecosystem.",
    overview: "We turn artificial intelligence from theoretical research into battle-tested production capability. Whether deploying retrieval-augmented generation (RAG), custom NLP parsing pipelines, or classification systems, we focus on accuracy, latency, and operational cost efficiency.",
    iconName: "Cpu",
    subCategories: [
      "AI-Powered Applications",
      "Machine Learning Solutions",
      "NLP & Document Intelligence",
      "Intelligent Process Automation",
    ],
    features: [
      {
        title: "Pragmatic LLM Integration",
        description: "Structured prompt workflows, semantic search, vector embeddings, and fallback-guarded model inference.",
      },
      {
        title: "Autonomous Workflow Agents",
        description: "Multi-step reasoning engines that process documents, classify records, and execute background tasks reliably.",
      },
      {
        title: "Edge & Server Inference",
        description: "Optimized model quantization and caching pipelines to deliver fast predictions with controlled cloud spending.",
      },
      {
        title: "Evaluation & Guardrails",
        description: "Hallucination prevention, input validation shields, and measurable benchmark rubrics.",
      },
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "Hugging Face", "LangChain", "OpenAI / Gemini"],
    deliverables: [
      "Trained / Fine-Tuned Model Pipeline",
      "Production Inference API Endpoints",
      "Model Evaluation & Precision Reports",
      "Monitoring & Drift Alerting Setup",
    ],
    idealFor: "Startups and enterprises ready to automate cognitive workflows or integrate generative capabilities.",
  },
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android with intuitive fluid interfaces.",
    heroTagline: "Refined native performance and elegant touch experiences on every device.",
    overview: "We craft seamless mobile applications that combine native operating system responsiveness with modern design tokens. From offline caching to smooth 60fps animations and biometric authentication, your users receive a first-class mobile experience.",
    iconName: "Smartphone",
    subCategories: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform React Native Apps",
      "Mobile Architecture & APIs",
    ],
    features: [
      {
        title: "Native Fluidity",
        description: "Silky 60fps animations, native gesture recognition, and responsive UI components built for modern screens.",
      },
      {
        title: "Offline-First Synchronization",
        description: "Local database persistence (SQLite/WatermelonDB) with background synchronization when connectivity restores.",
      },
      {
        title: "Push Notifications & Deep Linking",
        description: "FCM & APNs messaging architectures paired with structured universal links for frictionless user onboarding.",
      },
      {
        title: "App Store Publishing",
        description: "End-to-end guidance through Apple App Store and Google Play Store review criteria and signing certificates.",
      },
    ],
    techStack: ["React Native", "TypeScript", "Expo", "iOS / Swift", "Android / Kotlin"],
    deliverables: [
      "Production-Ready APK / AAB & IPA Builds",
      "Store Listing Graphic Assets & Descriptions",
      "Crashlytics & Performance Telemetry Integration",
      "CI/CD Fastlane Build Automation",
    ],
    idealFor: "Brands and startups launching consumer mobile apps or enterprise workforce mobile tools.",
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science & Analytics",
    shortDescription: "Data processing pipelines, executive dashboards, predictive modeling, and strategic business intelligence.",
    heroTagline: "Transforming raw data streams into actionable operational intelligence.",
    overview: "Data without clarity is overhead. We architect end-to-end data pipelines that ingest, normalize, and analyze disparate business metrics, surfacing actionable insights through interactive dashboards and statistical forecasting models.",
    iconName: "BarChart3",
    subCategories: [
      "Data Processing Pipelines",
      "Executive Data Visualization",
      "Business Analytics Solutions",
      "Predictive & Statistical Modeling",
    ],
    features: [
      {
        title: "Scalable ETL/ELT Pipelines",
        description: "Automated batch and real-time ingestion pipelines with automated anomaly alerting and schema validation.",
      },
      {
        title: "Interactive Analytics Portals",
        description: "Responsive, high-density visualization dashboards tailored to executive and operational decision-makers.",
      },
      {
        title: "Predictive Forecasting",
        description: "Time-series forecasting, churn prediction, and customer segmentation calibrated to actual business KPIs.",
      },
      {
        title: "Data Hygiene & Compliance",
        description: "Anonymization techniques and access controls ensuring compliance with modern privacy requirements.",
      },
    ],
    techStack: ["Python", "Pandas", "NumPy", "PostgreSQL", "Apache Spark", "Chart.js"],
    deliverables: [
      "Cleaned & Normalized Data Warehouses",
      "Custom Web Dashboard Interface",
      "Scheduled Data Extraction Jobs",
      "Executive Intelligence Briefings",
    ],
    idealFor: "Organizations seeking to make data-backed operational decisions and predict growth trends.",
  },
  {
    id: "project-guidance",
    slug: "technical-project-guidance",
    title: "Technical Project Development",
    shortDescription: "Mentorship, architectural consultation, debugging support, and institution-compliant project guidance.",
    heroTagline: "Bridging theoretical knowledge and engineering excellence through guided mentorship.",
    overview: "We support ambitious students, engineering graduates, and solo innovators through disciplined technical mentorship. Rather than providing unverified shortcuts, we teach software architecture, clean code standards, git workflows, and defense preparation, ensuring students gain true mastery.",
    iconName: "GraduationCap",
    subCategories: [
      "Technical Consultation",
      "System Architecture Design",
      "Development Mentorship",
      "Debugging & Code Optimization",
    ],
    features: [
      {
        title: "Learning-First Philosophy",
        description: "Guided architectural walkthroughs where you understand every line of code, framework choice, and system trade-off.",
      },
      {
        title: "Institution-Compliant Ethics",
        description: "Focus on mentorship, skill acquisition, original implementation, and documentation rather than uncredited shortcuts.",
      },
      {
        title: "Code Review & Debugging",
        description: "Hands-on diagnosis of concurrency bugs, database bottlenecks, memory leaks, and environment misconfigurations.",
      },
      {
        title: "Comprehensive Documentation",
        description: "Guidance on authoring IEEE-format technical reports, UML diagrams, architecture blueprints, and presentation decks.",
      },
    ],
    techStack: ["Git / GitHub", "Full Stack Web", "Python / ML", "Software Design Patterns", "UML"],
    deliverables: [
      "1-on-1 Architecture & Code Review Sessions",
      "UML Sequence & Component Diagrams",
      "Comprehensive Project Documentation Template",
      "Technical Viva / Defense Preparation Guide",
    ],
    idealFor: "Students, engineering researchers, and solo builders aiming to complete capstone projects with deep comprehension.",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription: "Automated CI/CD pipelines, containerization, cloud infrastructure deployment, and monitoring.",
    heroTagline: "Rock-solid infrastructure, automated releases, and 99.9% uptime reliability.",
    overview: "We eliminate the 'it works on my machine' barrier. We construct robust deployment pipelines, Docker container networks, and cloud architectures on AWS, GCP, and modern serverless platforms like Vercel, ensuring rapid zero-downtime releases.",
    iconName: "Cloud",
    subCategories: [
      "Cloud Infrastructure Setup",
      "Automated CI/CD Pipelines",
      "Docker Containerization",
      "Application Monitoring & Uptime",
    ],
    features: [
      {
        title: "Automated Continuous Integration",
        description: "Linting, type checking, security scanning, and test suites run automatically on every git pull request.",
      },
      {
        title: "Multi-Environment Deployment",
        description: "Isolated preview, staging, and production environments with zero-downtime deployment rollbacks.",
      },
      {
        title: "Lightweight Containerization",
        description: "Multi-stage Docker builds optimized for minimal image sizes, rapid deployment, and security hardening.",
      },
      {
        title: "Telemetry & Performance Alerts",
        description: "Proactive logging, latency tracking, and error alerting before downtime impacts end-users.",
      },
    ],
    techStack: ["Docker", "GitHub Actions", "AWS", "Vercel", "Linux", "Nginx"],
    deliverables: [
      "Reproducible Dockerfile Configurations",
      "GitHub Actions Workflow Scripts",
      "Domain DNS & SSL Configuration",
      "Infrastructure Runbook & Recovery Guide",
    ],
    idealFor: "Teams aiming to automate deployment overhead, eliminate release anxiety, and ensure system uptime.",
  },
];
