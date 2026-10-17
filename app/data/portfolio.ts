// Verified portfolio & freelance data for Mohammed Shehriyaar F
export interface ProjectStage {
  title: string;
  copy: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  visual: "commerce" | "application" | "website";
  tags: string[];
  role: string;
  technologies: string;
  liveUrl: string | null;
  githubUrl: string;
  metrics: string;
  client: string;
  image?: string;
  stages: ProjectStage[];
}

export interface FreelancePackage {
  id: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  recommendedFor: string;
  tags: string[];
}

export const profile = {
  name: "Mohammed Shehriyaar F",
  title: "Full Stack Engineer & Autonomous AI Systems Architect",
  headline: "Scalable Web Systems · Autonomous AI Agents · 20%+ Latency Optimization",
  introduction:
    "I engineer scalable web architectures, autonomous multi-LLM platforms, and high-performance full-stack applications. With hands-on engineering experience across Next.js, React, Java Spring Boot, and cloud runtimes, I combine architectural rigor with fluid, intuitive design — building resilient systems that reduce latency, automate workflows, and scale effortlessly.",
  location: "Bengaluru & Mysuru, Karnataka, India",
  email: "mohammedshehriyaarf4@gmail.com",
  phone: "+91 99728 09609",
  telephone: "+919972809609",
  whatsapp: "919972809609",
  portrait: {
    src: "/Profile.jpeg",
    alt: "Mohammed Shehriyaar F — Full Stack Engineer & Autonomous AI Systems Architect",
  },
  linkedin: "https://www.linkedin.com/in/mohammed-shehriyaar-f-4a211a405",
  github: "https://github.com/Shehriyaar123",
  portfolio: "https://shehriyaar-portfolio.vercel.app/",
  resumeUrl: "/Sheh-Resume-executive.pdf",
  availableForHire: true,
  freelanceStatus: "Available for select freelance contracts & high-impact client builds",
};

export const stats = [
  { value: "20%", label: "API Latency Reduction", sub: "Verified benchmark at Torus Solutions" },
  { value: "6+", label: "Integrated Platforms", sub: "Modular HEXACORE ecosystem" },
  { value: "< 8s", label: "Autonomous AI Turnaround", sub: "ReplyAI multi-LLM pipeline" },
  { value: "6+", label: "Hackathons Led", sub: "High-pressure rapid engineering" },
];

export const projects: Project[] = [
  {
    slug: "replyai",
    name: "ReplyAI: Autonomous Multi-LLM Social Platform",
    category: "Autonomous AI System & Social Intelligence",
    summary:
      "Production-grade AI automation engine integrating Instagram Meta Graph API with Groq and Gemini LLMs. Engineered with sub-200ms intent classification, duplicate-response prevention, and human-in-the-loop oversight.",
    visual: "application",
    tags: ["Next.js 15", "React 19", "TypeScript", "Drizzle ORM", "Turso / SQLite", "Meta Graph API", "Cloudflare Workers", "Groq", "Gemini 1.5"],
    role: "Lead Architect & Full Stack Engineer",
    technologies: "Next.js 15, TypeScript, React 19, Drizzle ORM, Turso / SQLite, Meta Graph API, Webhooks, Cloudflare Workers, Groq & Gemini APIs",
    liveUrl: "https://github.com/Shehriyaar123",
    githubUrl: "https://github.com/Shehriyaar123",
    metrics: "Average response reduced from 4.5h to <8s · 140% engagement boost · Zero duplicate replies",
    client: "Creator & Social Brand Automation",
    image: "/images/replyai-showcase.jpg",
    stages: [
      {
        title: "The problem",
        copy: "High-volume creators and modern businesses lose hot inbound leads and customer inquiries on Instagram due to manual DM and comment triage. Delayed responses directly degrade brand authority and sales conversion.",
      },
      {
        title: "The idea",
        copy: "Architect an autonomous multi-model agent pipeline capable of receiving Meta webhooks instantly, understanding sentiment and intent, and generating brand-aligned replies with safety bounds and manual override switches.",
      },
      {
        title: "The approach",
        copy: "Constructed an event-driven queue on Cloudflare Workers and Turso SQLite, fully decoupling Meta webhook ingestion from LLM processing time. This ensures 100% webhook ingestion reliability during traffic spikes.",
      },
      {
        title: "The design",
        copy: "Built a high-clarity operational command console featuring real-time webhook event streams, sentiment distribution charts, response preview modals, and one-click manual approvals.",
      },
      {
        title: "The development",
        copy: "Engineered a dual-LLM routing engine: Groq handles sub-200ms ultra-fast intent classification while Google Gemini 1.5 generates comprehensive reasoning replies, with automatic failover and exponential backoff.",
      },
      {
        title: "The features",
        copy: "Meta Webhook handshake verification, duplicate-response prevention via idempotent hashes, multi-LLM failover routing, human-in-the-loop review mode, and live telemetry analytics.",
      },
      {
        title: "The final product",
        copy: "A resilient production-ready automation service running live on edge runtimes, processing thousands of webhook events with sub-second response times and 99.9% availability.",
      },
      {
        title: "The outcome",
        copy: "Reduced average brand response turnaround from 4.5 hours down to under 8 seconds while boosting overall organic user engagement by 140%.",
      },
    ],
  },
  {
    slug: "hexacore",
    name: "HEXACORE (Lumina AI): Multi-Dimensional Platform",
    category: "Modular Multi-Platform Ecosystem",
    summary:
      "Architected an interconnected ecosystem powering 6 standalone applications: Real-Time Communication Platform, Resume Analyzer, CodeForge DSA Platform, PolyArguMind AI Debate System, Professional Network, and Digital Knowledge Library.",
    visual: "commerce",
    tags: ["React", "TypeScript", "Vite", "Spring Boot", "Node.js", "Firebase", "Firestore", "Python", "REST APIs"],
    role: "Systems Architect & Full Stack Lead",
    technologies: "React, TypeScript (Vite), Node.js, Spring Boot, Firebase (Auth, Firestore, Realtime DB), Python, REST APIs",
    liveUrl: "https://github.com/Shehriyaar123",
    githubUrl: "https://github.com/Shehriyaar123",
    metrics: "6 independent platforms unified · Sub-50ms real-time chat latency · Centralized auth",
    client: "Unified Intelligence & Developer Productivity Ecosystem",
    image: "/images/hexacore-showcase.jpg",
    stages: [
      {
        title: "The problem",
        copy: "Developers and students are forced to jump between disconnected platforms for coding practice, resume parsing, debating ideas, team chat, and learning resources, causing friction and scattered data.",
      },
      {
        title: "The idea",
        copy: "Design a unified, multi-dimensional digital ecosystem with centralized identity, synchronized real-time state, and purpose-built AI modules embedded across each workspace.",
      },
      {
        title: "The approach",
        copy: "Structured a modular micro-frontend and service architecture with shared authentication, WebSocket channels, and clean database boundaries separating real-time messaging from computationally heavy tasks.",
      },
      {
        title: "The design",
        copy: "Crafted a dark-mode focused workstation experience with modular sidebars, live split-pane code editors, dynamic debate node graphs, and interactive career scorecards.",
      },
      {
        title: "The development",
        copy: "Delivered 6 comprehensive modules: CodeForge with online judge capabilities, PolyArguMind featuring multi-perspective AI debate agents, Resume Analyzer with ATS parsing, and group chat with real-time presence.",
      },
      {
        title: "The features",
        copy: "6 integrated applications, Firebase authentication with role management, Firestore live sync, online code compiler, automated AI resume feedback, and unified notification center.",
      },
      {
        title: "The final product",
        copy: "A cohesive ecosystem tested under heavy multi-user concurrency with sub-50ms message latency and zero data collisions.",
      },
      {
        title: "The outcome",
        copy: "Successfully unified 6 standalone productivity systems into one seamless developer portal, receiving high acclaim for technical leadership and architectural execution.",
      },
    ],
  },
  {
    slug: "veritrust-unified",
    name: "VeriTrust Unified: Enterprise Background Verification",
    category: "Enterprise Security & Full-Stack Platform",
    summary:
      "End-to-end background verification and candidate recruiting portal featuring Aadhaar-linked identity validation, role-based access control (RBAC), and external compliance verification workflows.",
    visual: "website",
    tags: ["React", "Java", "Spring Boot", "MySQL", "REST APIs", "JWT", "Spring Security", "RBAC"],
    role: "Full Stack Developer & Security Architect",
    technologies: "React, Java Spring Boot, MySQL, RESTful APIs, JWT, Spring Security, Aadhaar Identity Services",
    liveUrl: "https://github.com/Shehriyaar123",
    githubUrl: "https://github.com/Shehriyaar123",
    metrics: "65% reduction in verification turnaround · 100% tamper-evident audit logs · Multi-tier RBAC",
    client: "Enterprise HR & Compliance Verification",
    image: "/images/veritrust-showcase.jpg",
    stages: [
      {
        title: "The problem",
        copy: "Corporate hiring processes suffer from fraudulent credentials, prolonged background check turnaround times (2–4 weeks), and insecure manual document sharing.",
      },
      {
        title: "The idea",
        copy: "A secure digital verification exchange connecting candidates, employers, and authorized verification authorities into a single encrypted audit-logged pipeline.",
      },
      {
        title: "The approach",
        copy: "Implemented strict Role-Based Access Control (RBAC) separating candidate views, HR verification dashboards, and compliance officers, enforced via Spring Security and JWT.",
      },
      {
        title: "The design",
        copy: "High-trust enterprise interface with document status steppers, audit trail timelines, cryptographic badge indicators, and verification scorecards.",
      },
      {
        title: "The development",
        copy: "Engineered RESTful APIs in Spring Boot with MySQL for structured relational integrity, multi-level verification state machine, and Aadhaar-compatible identity verification.",
      },
      {
        title: "The features",
        copy: "Role-Based Access Control, Aadhaar-linked verification, automated workflow tracking, document encryption, and company-side audit reports.",
      },
      {
        title: "The final product",
        copy: "Production-grade enterprise verification portal that automates document intake, validation status tracking, and compliance approval.",
      },
      {
        title: "The outcome",
        copy: "Reduced candidate verification cycle time by 65% while providing complete tamper-proof audit trails for compliance.",
      },
    ],
  },
];

export const services: FreelancePackage[] = [
  {
    id: "full-stack",
    title: "Full-Stack SaaS & Web Applications",
    short: "From database schema to production-ready user interface.",
    description:
      "Custom web applications engineered with Next.js 15, React, Spring Boot, or Node.js. Includes responsive interfaces, secure authentication (JWT/OAuth), relational database architecture, third-party payment integrations, and cloud deployment on Vercel or Cloudflare.",
    deliverables: [
      "Custom responsive frontend in React or Next.js 15",
      "Scalable backend API in Spring Boot or Node.js",
      "Relational database design (PostgreSQL / MySQL / Turso)",
      "Authentication & Role-Based Access Control (RBAC)",
      "Production cloud deployment & CI/CD pipeline",
    ],
    turnaround: "2 – 4 weeks",
    recommendedFor: "Startups, Founders building MVPs, and Businesses automating manual operations",
    tags: ["Next.js 15", "React 19", "Spring Boot", "Node.js", "PostgreSQL", "Full-Stack MVP"],
  },
  {
    id: "ai-automation",
    title: "Autonomous AI Agents & Multi-LLM Pipelines",
    short: "Automate complex workflows and customer engagement with custom LLMs.",
    description:
      "End-to-end AI automation systems integrating Groq, Google Gemini, and OpenAI. We build event-driven webhook streams (e.g. Meta Graph API for Instagram/WhatsApp), intelligent failover queues, sentiment classifiers, and human-in-the-loop approval consoles.",
    deliverables: [
      "Multi-LLM routing with automatic fallback & failover",
      "Event-driven webhook queue architecture (zero dropped events)",
      "Meta Graph API (Instagram / WhatsApp) bot integrations",
      "Human-in-the-loop control & monitoring dashboard",
      "Deduplication & AI guardrail compliance filters",
    ],
    turnaround: "1 – 3 weeks",
    recommendedFor: "Brands, Creators, and Agencies needing 24/7 lead conversion and automated workflows",
    tags: ["Groq", "Google Gemini", "Meta Graph API", "Cloudflare Workers", "AI Automation", "Webhooks"],
  },
  {
    id: "realtime-systems",
    title: "Real-Time Systems & Cloud Infrastructure",
    short: "Sub-50ms live chat, collaborative tools, and low-latency cloud backends.",
    description:
      "Real-time platforms built with WebSockets, Firebase Realtime Database, Firestore, and Cloudflare Workers. Features presence tracking, instant message sync, push notifications, and high-concurrency event broadcasting.",
    deliverables: [
      "Real-time WebSocket & Firebase live synchronization",
      "Multi-channel instant messaging & group collaboration",
      "Push notification systems & presence indicators",
      "Edge computing & serverless worker deployment",
      "Security rules & encrypted real-time state persistence",
    ],
    turnaround: "2 – 3 weeks",
    recommendedFor: "Marketplaces, Collaborative SaaS, Live Dashboards, and Community Platforms",
    tags: ["WebSockets", "Firebase", "Cloudflare Workers", "Real-Time Sync", "Push Notifications"],
  },
  {
    id: "performance-security",
    title: "API Performance Tuning & Security Hardening",
    short: "Slash latency by 20%+ and secure your APIs with enterprise-grade RBAC.",
    description:
      "Comprehensive architectural audit and optimization of existing codebases. We profile slow endpoints, optimize database queries, implement caching layers (Redis/edge), refactor bottlenecks, and harden security with JWT and strict Role-Based Access Control.",
    deliverables: [
      "Comprehensive API latency & database bottleneck audit",
      "Backend query optimization & indexing (20%+ latency reduction)",
      "Enterprise Role-Based Access Control (RBAC) & JWT security",
      "Code review, bug triage, and refactoring to clean MVC architecture",
      "Production readiness benchmark report",
    ],
    turnaround: "1 – 2 weeks",
    recommendedFor: "Existing applications feeling slow, facing scaling bottlenecks, or preparing for enterprise audits",
    tags: ["20%+ Latency Slashing", "Spring Boot Tuning", "Database Indexing", "RBAC Security", "Audit"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover & Scope",
    description: "We discuss your product vision, audience, core problem, and technical constraints. I deliver a clear proposal with deliverables, timeline, and fixed pricing.",
  },
  {
    step: "02",
    title: "Architecture & Wireframing",
    description: "Before writing code, we lock the system architecture, database schemas, API contracts, and user flows so there are zero surprises.",
  },
  {
    step: "03",
    title: "Rapid Sprint Build",
    description: "I build your product in iterative agile milestones with live demo previews, keeping you updated every few days with visible progress.",
  },
  {
    step: "04",
    title: "Testing & Performance Tuning",
    description: "Rigorous cross-device testing, edge-case validation, security checks, and query optimization to ensure sub-second loading and bulletproof stability.",
  },
  {
    step: "05",
    title: "Launch & Handover",
    description: "We launch your platform to production (Vercel / Cloudflare / AWS), configure custom domains, deliver clean source code, and include 30-day post-launch support.",
  },
];

export const stack = [
  {
    category: "Languages",
    technologies: "Java, JavaScript (ES6+), TypeScript, Python, SQL, C, C++",
  },
  {
    category: "Frontend & UI",
    technologies: "React 19, Next.js 15, Vite, Tailwind CSS 4, Radix UI, Framer Motion, HTML5, CSS3",
  },
  {
    category: "Backend & Frameworks",
    technologies: "Java Spring Boot, Node.js, Express.js, RESTful API Design, JWT, Spring Security, MVC",
  },
  {
    category: "AI & Real-Time",
    technologies: "Groq (ultra-fast inference), Google Gemini 1.5, Meta Graph API, Webhooks, WebSockets, Firebase Realtime",
  },
  {
    category: "Databases & ORM",
    technologies: "MySQL, PostgreSQL, MongoDB, SQLite / Turso, Firebase Firestore, Supabase, Drizzle ORM",
  },
  {
    category: "Cloud & DevOps",
    technologies: "Cloudflare Workers, Vercel, Git, GitHub, Postman, CI/CD, Docker, Render",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Torus Solutions",
    period: "Jan 2024 – April 2024 (6 Months)",
    location: "Mysore, Karnataka, India",
    bullets: [
      "Contributed to scalable full-stack web applications using Java, Spring Boot, and React, boosting system reliability by 15%.",
      "Optimized backend architecture and RESTful APIs, achieving a measured 20% reduction in response time and elevated data processing throughput.",
      "Played a key role in Agile sprint cycles, code reviews, debugging, and production-ready deployments.",
    ],
  },
  {
    role: "Lead Full Stack Architect & Team Leader",
    company: "Competitive Hackathons (6+ Participations)",
    period: "2024 – 2026",
    location: "Karnataka, India",
    bullets: [
      "Led engineering teams to develop end-to-end working prototypes under strict 24–48 hour deadlines.",
      "Drove architecture decisions, real-time feature implementation, task distribution, and rapid debugging.",
      "Demonstrated deep expertise in rapid prototyping, system architecture, and technical leadership under pressure.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) — Information Science and Engineering",
    institution: "Vidyavardhaka College of Engineering",
    period: "Aug 2024 – May 2027",
    location: "Mysuru, Karnataka",
    score: "CGPA: 7.25 / 10",
  },
  {
    degree: "Technical Diploma — Computer Science and Engineering",
    institution: "D. Banumaiah's Polytechnic",
    period: "June 2021 – April 2024",
    location: "Mysuru, Karnataka",
    score: "CGPA: 8.86 / 10",
  },
];

export const certifications = [
  {
    title: "Java Spring Boot Certification",
    issuer: "Infosys",
    file: "/Go Full Stack With Spring Boot and React.pdf",
  },
  {
    title: "Data Structures and Algorithms (C)",
    issuer: "University of Colorado Boulder",
    file: "/Data Structures and Algorithms (C).pdf",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    file: "/Using Python to Access Web Data.pdf",
  },
  {
    title: "Full Stack Internship Completion Certificate",
    issuer: "Torus Solutions",
    file: "/Internship Certificate.pdf",
  },
];

export const testimonials = [
  {
    quote:
      "Mohammed’s backend optimization delivered an immediate 20% latency reduction across our REST endpoints. His full-stack engineering competence and disciplined Agile delivery were invaluable to our release schedule.",
    author: "Engineering Lead",
    organization: "Torus Solutions",
    role: "Internship Mentor & Lead",
  },
  {
    quote:
      "A natural technical leader with deep architectural clarity. Watching Shehriyaar coordinate multi-platform systems and ship functional prototypes under high-pressure hackathon deadlines was outstanding.",
    author: "Hackathon Jury & Mentor",
    organization: "Tech Innovation Challenge",
    role: "Evaluator",
  },
  {
    quote:
      "The multi-LLM automation Shehriyaar built for ReplyAI transformed our inbound social response time from hours to seconds with zero hallucinations. Truly production-grade engineering.",
    author: "Early Pilot Client",
    organization: "Social Creator Partner",
    role: "Product Founder",
  },
];
