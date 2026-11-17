export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Multi-Agent AI" | "Backend Systems" | "Web3 / Security";
  badge?: string;
  image: string;
  overview: string;
  summary: {
    problem: string;
    solution: string;
    result: string;
  };
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  compliance?: string[];
  githubUrl: string;
  liveDemoUrl: string;
  demoAvailable: boolean;
  architectureDetails: {
    architecture: string;
    keyInnovations: string[];
    securityPrivacy: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  statusOrGpa: string;
  details?: string[];
  coursework?: string[];
}

export interface HonorItem {
  title: string;
  event: string;
  issuer: string;
  dateOrBatch: string;
  description: string;
  badge?: string;
  certId?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhinav Tripathi",
    role: "Python & Java Developer",
    secondaryRole: "Backend & AI Systems Developer",
    email: "at84004630@gmail.com",
    location: "Lucknow, India",
    github: "https://github.com/at84004630-del",
    githubHandle: "at84004630-del",
    linkedin: "https://www.linkedin.com/in/abhinav-tripathi-22236a2a6/",
    linkedinHandle: "abhinav-tripathi-22236a2a6",
    resumePdf: "/Abhinav_Tripathi_Resume.pdf",
    availability: "Available for Software Engineering Roles & Internships",
    summary:
      "Software Engineer and MCA scholar at Amity University Online (BCA Graduate, Amity University Lucknow) specializing in application development, robust backend architectures, and intelligent software systems.",
  },

  about: {
    bio: [
      "I am a Software Engineer and MCA scholar with a strong engineering mindset focused on building high-performance backend systems, asynchronous APIs, and intelligent applications.",
      "My work includes engineering innovative platforms recognized at hackathons such as SBI Hackathon @ Global Fintech Fest and IBM Bob 2.0 Hackathon, alongside developing on-device edge AI and machine learning solutions.",
      "I value writing clean, readable, and maintainable code with robust testing, structured error handling, and solid computer science principles.",
    ],
    pillars: [
      {
        title: "Robust Backend Architecture",
        desc: "Engineering high-throughput, asynchronous backends with FastAPI, RESTful APIs, and relational database schemas with SQLAlchemy ORM.",
      },
      {
        title: "Multi-Agent AI Orchestration",
        desc: "Designing collaborative multi-agent workflows using LangGraph and structured validations.",
      },
      {
        title: "Web3 Protocols & Smart Contracts",
        desc: "Engineering parametric smart contracts on Solana with Anchor, automated non-custodial escrow, and real-time oracle feeds.",
      },
      {
        title: "Clean & Maintainable Code",
        desc: "Writing modular, thoroughly tested code adhering to industry best practices, data security, and performance standards.",
      },
    ],
    spokenLanguages: [
      { language: "English", level: "Fluent" },
      { language: "Hindi", level: "Native" },
      { language: "French", level: "Beginner" },
    ],
  },

  skills: {
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Python", details: "Core, OOP, Scripting, AsyncIO", level: "Advanced" },
          { name: "Java", details: "Core Java, OOP, Collections Framework, Exception Handling", level: "Proficient" },
          { name: "SQL", details: "Relational Queries, Schema Design, Joins, Indexes", level: "Proficient" },
          { name: "HTML5 & CSS3", details: "Semantic Markup, Modern Responsive Layouts", level: "Proficient" },
        ],
      },
      {
        name: "Web & Backend Architecture",
        skills: [
          { name: "FastAPI", details: "Asynchronous APIs, Pydantic, OpenAPI, SSE Streaming", level: "Advanced" },
          { name: "RESTful APIs", details: "Resource Modeling, Status Codes, Versioning", level: "Advanced" },
          { name: "Asynchronous Programming", details: "Python AsyncIO, Event Loops, Concurrency", level: "Advanced" },
          { name: "JSON Schema", details: "Structured Validation & Agent Tool Contracts", level: "Advanced" },
          { name: "SQLAlchemy ORM", details: "Object Relational Mapping, Migrations, Sessions", level: "Proficient" },
          { name: "Web Architecture", details: "Stateless Backends, Microservices, Security", level: "Proficient" },
        ],
      },
      {
        name: "AI & Multi-Agent Systems",
        skills: [
          { name: "Multi-Agent Systems", details: "Agentic Workflows, State Management, Human-in-the-Loop", level: "Advanced" },
          { name: "LangGraph", details: "State Graphs, Cyclic Orchestration, Node Vetoing", level: "Advanced" },
          { name: "Solana & Smart Contracts", details: "Anchor Framework, Rust, Non-Custodial PDA Escrow", level: "Proficient" },
          { name: "Oracle Integrations", details: "Switchboard Oracle, Real-World Data Feeds, Web3.js", level: "Proficient" },
          { name: "Model Inference (ONNX)", details: "Edge Inference, Optimization, REST Integration", level: "Proficient" },
        ],
      },
      {
        name: "Databases & Systems",
        skills: [
          { name: "MySQL", details: "Relational Schemas, Constraints, Query Optimization", level: "Proficient" },
          { name: "SQLite", details: "Embedded Databases, Lightweight Storage, ACID", level: "Proficient" },
          { name: "Linux / Unix", details: "Shell Scripting, Process Management, CLI Tools", level: "Proficient" },
          { name: "Client-Side Cryptography", details: "RC4 Cipher, SHA-256 Session Hashing, Zero-Server Sovereignty", level: "Proficient" },
        ],
      },
      {
        name: "Developer Tools",
        skills: [
          { name: "Git", details: "Version Control, Branching, Rebasing", level: "Advanced" },
          { name: "GitHub", details: "CI/CD Workflows, Releases, Code Reviews", level: "Advanced" },
          { name: "VS Code", details: "IDE Configurations, Debugging, Extensions", level: "Advanced" },
          { name: "Postman / Curl", details: "API Testing & Endpoint Verification", level: "Proficient" },
        ],
      },
      {
        name: "Core CS & Algorithms (Ongoing Learning)",
        skills: [
          { name: "Data Structures", details: "Arrays, Strings, Linked Lists, Stacks, Queues", level: "Practicing" },
          { name: "Algorithmic Techniques", details: "Two Pointers, Binary Search, Recursion, Time & Space Complexity", level: "Practicing" },
          { name: "Object-Oriented Programming (OOP)", details: "Encapsulation, Inheritance, Polymorphism, Abstraction", level: "Advanced" },
          { name: "Database Management (DBMS)", details: "ACID Properties, Normalization, ER Diagrams", level: "Proficient" },
          { name: "Operating Systems", details: "Concurrency, Threads, Memory Management", level: "Proficient" },
          { name: "Software Engineering", details: "Design Patterns, Testing, SDLC, Clean Code", level: "Proficient" },
        ],
      },
    ],
  },

  projects: [
    {
      id: "saathi",
      title: "SAATHI — Autonomous Relationship Intelligence Banking Agent",
      tagline: "Shortlisted in SBI Hackathon at Global Fintech Fest 2026",
      category: "Multi-Agent AI",
      badge: "GFF 2026 National Shortlist",
      image: "/projects/saathi.jpg",
      overview:
        "Automated banking platform that quickly resolves failed UPI payment disputes without manual intervention.",
      summary: {
        problem:
          "UPI grievance resolution traditionally suffered from 30-day turnaround delays due to manual log inspection and non-standardized dispute processing across fragmented banking interfaces.",
        solution:
          "Engineered an autonomous proactive banking agent platform with a 'One Face, 12 Brains' multi-agent orchestrator in Python using LangGraph (SENTINEL, KARMA, SHIELD) and a GUARDIAN deterministic veto engine.",
        result:
          "Shortlisted by NPCI, FCC & HackCulture in the SBI Hackathon at Global Fintech Fest 2026; cut UPI grievance turnaround from 30 days to 4.2 minutes with 100% compliance with DPDPA 2023 & RBI FREE-AI guidelines.",
      },
      highlights: [
        "Architected a proactive banking agent platform shortlisted in the SBI Hackathon at Global Fintech Fest 2026 (organized by NPCI & FCC).",
        "Engineered a 'One Face, 12 Brains' multi-agent orchestrator in Python using LangGraph (`SENTINEL`, `KARMA`, `SHIELD`), cutting UPI grievance turnaround from 30 days to 4.2 minutes via automated transaction log parsing.",
        "Designed the `GUARDIAN` deterministic veto engine ensuring 100% compliance with DPDPA 2023 & RBI FREE-AI guidelines, backed by an asynchronous FastAPI SSE streaming backend.",
      ],
      techStack: ["Python", "FastAPI", "LangGraph", "SSE Streaming", "DPDPA 2023", "RBI FREE-AI", "Multi-Agent Systems"],
      metrics: [
        { label: "Grievance Turnaround", value: "30 Days → 4.2 Mins" },
        { label: "Orchestration", value: "1 Face, 12 Brains" },
        { label: "Compliance Rate", value: "100% Verified" },
        { label: "Hackathon Standing", value: "National Shortlist" },
      ],
      compliance: ["DPDPA 2023", "RBI FREE-AI Guidelines", "NPCI UPI Dispute Framework"],
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://github.com/at84004630-del",
      demoAvailable: false,
      architectureDetails: {
        architecture:
          "Hierarchical LangGraph state machine where SENTINEL detects transaction anomalies, KARMA maps the lifecycle state across core banking logs, and SHIELD verifies regulatory safety. Before any action is executed, the GUARDIAN veto engine deterministically enforces RBI guidelines.",
        keyInnovations: [
          "Cyclic state graph allowing automated self-correction before human escalation",
          "Asynchronous FastAPI Server-Sent Events (SSE) streaming for real-time customer transparency",
          "Automated UPI transaction log parsing eliminating manual banking officer intervention",
        ],
        securityPrivacy:
          "Zero sensitive banking credentials cached in agent state memory; deterministic rules prevent LLM hallucination in financial transactions.",
      },
    },

    {
      id: "medtrace",
      title: "MedTrace — Autonomous Clinical Software Remediation Platform",
      tagline: "Awarded Certificate of Completion at IBM Bob 2.0 Hackathon",
      category: "Multi-Agent AI",
      badge: "IBM Bob 2.0 Awardee",
      image: "/projects/medtrace.jpg",
      overview:
        "Healthcare diagnostics platform that quickly detects software bugs and generates safe automated fixes.",
      summary: {
        problem:
          "Healthcare software outages risk patient outcomes, but manual remediation often takes hours and introduces severe regulatory liabilities if sensitive patient records (PHI) leak into error logs or LLMs.",
        solution:
          "Architected an autonomous healthcare incident remediation platform running a 5-stage concurrent multi-agent pipeline to isolate root causes and synthesize Abstract Syntax Tree (AST) code patches within 90 seconds.",
        result:
          "Achieved 16/16 passed integration tests with zero Protected Health Information (PHI) logging, meeting strict HIPAA §164.312 and EU AI Act Article 50 standards. Awarded Certificate of Completion at IBM Bob 2.0.",
      },
      highlights: [
        "Architected an autonomous healthcare incident remediation platform for the IBM Bob 2.0 Hackathon, running a 5-stage concurrent multi-agent pipeline to isolate root causes and synthesize AST code patches within 90 seconds.",
        "Implemented automated test synthesis and regression suite (16/16 passed integration tests) with zero Protected Health Information (PHI) logging, meeting strict HIPAA §164.312 and EU AI Act Article 50 standards.",
        "Awarded Certificate of Completion for outstanding performance and submitting MedTrace (Cert ID: CMULAQ6XC00H7S601WX38KT9U).",
      ],
      techStack: ["Python", "Multi-Agent Orchestration", "REST APIs", "AST Synthesis", "HIPAA §164.312", "EU AI Act Art. 50"],
      metrics: [
        { label: "Synthesis Time", value: "90 Seconds" },
        { label: "Pipeline Stages", value: "5 Concurrent Agents" },
        { label: "Integration Tests", value: "16 / 16 Passed" },
        { label: "PHI Logging", value: "0 KB (Guaranteed)" },
      ],
      compliance: ["HIPAA §164.312", "EU AI Act Article 50", "PHI Redaction Standards"],
      githubUrl: "https://github.com/at84004630-del/MedTrace",
      liveDemoUrl: "https://medtrace-ai.vercel.app/",
      demoAvailable: true,
      architectureDetails: {
        architecture:
          "5-stage concurrent agent pipeline: Error Ingestion & Masking -> Root Cause Localization -> AST Code Patch Generation -> Automated Unit/Regression Test Synthesis -> Remediation Verification and Audit Log Generation.",
        keyInnovations: [
          "AST-level code patching rather than raw regex or unstructured generation, ensuring syntax-guaranteed diffs",
          "Dynamic test generation that validates the fix against regression bugs before developer pull request creation",
          "Automated redaction filters preventing healthcare PHI from entering prompt contexts",
        ],
        securityPrivacy:
          "Fully compliant with HIPAA §164.312 data integrity and audit controls, with provable zero PHI logging across all agent runtimes.",
      },
    },

    {
      id: "microshield",
      title: "MicroShield — Decentralized Parametric Flight Insurance Protocol",
      tagline: "Automated Flight Delay Insurance Smart Contracts on Solana",
      category: "Web3 / Security",
      badge: "Solana Hackathon Submission",
      image: "/projects/microshield.jpg",
      overview:
        "Decentralized Solana app that pays instant flight delay insurance claims directly to wallets.",
      summary: {
        problem:
          "Flight delay compensation is notoriously slow, complex, and requires tedious paperwork and manual claims.",
        solution:
          "Engineered Anchor smart contracts on Solana locking USDC premiums in escrow and auto-triggering payouts.",
        result:
          "Integrated Switchboard Oracle for real-time flight data, executing trustless claim payouts in seconds.",
      },
      highlights: [
        "Architected a decentralized parametric flight delay micro-insurance protocol submitted to the Colosseum Solana Hackathon.",
        "Engineered Anchor smart contracts on Solana to manage non-custodial Program Derived Address (PDA) escrow vaults for premium staking and automatic payouts.",
        "Integrated Switchboard Oracle with real-time flight status APIs (AviationStack) to trigger instant claim disbursements in USDC without human claims processing.",
      ],
      techStack: ["Solana", "Rust", "Anchor", "Switchboard Oracle", "USDC", "Next.js", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "Blockchain", value: "Solana Devnet" },
        { label: "Payout Trigger", value: "Instant via Oracle" },
        { label: "Smart Contracts", value: "Anchor / Rust" },
        { label: "Settlement Token", value: "USDC" },
      ],
      compliance: ["Non-Custodial Escrow", "Program Derived Addresses (PDA)", "Cryptographic Verification"],
      githubUrl: "https://github.com/at84004630-del/MicroShield",
      liveDemoUrl: "https://micro-sheild-test.vercel.app/",
      demoAvailable: true,
      architectureDetails: {
        architecture:
          "Solana Anchor framework architecture with non-custodial PDA escrow vaults. Flight status feeds are monitored via Switchboard Oracles linked to AviationStack APIs, executing instant contract payouts directly into travelers' Phantom wallets upon threshold breach.",
        keyInnovations: [
          "Parametric micro-insurance model removing traditional paperwork and claims adjusters",
          "Switchboard Oracle feed verification ensuring tamper-proof flight delay data feeds",
          "Instant on-chain USDC settlement with sub-second finality on Solana",
        ],
        securityPrivacy:
          "Non-custodial smart contracts ensure users retain custody of funds; escrow balances are locked in deterministic program-derived addresses.",
      },
    },

    {
      id: "staffpulse",
      title: "StaffPulse — Workforce & Attendance Management System",
      tagline: "Enterprise Shift Management with Biometric Verification & Client Cryptography",
      category: "Backend Systems",
      badge: "Enterprise Platform",
      image: "/projects/staffpulse.jpg",
      overview:
        "Smart attendance and payroll backend managing complex work shifts and automated salary slips.",
      summary: {
        problem:
          "Organizations with complex split-shift rosters faced time fraud, burnout tracking gaps, and employee privacy resistance regarding centralized biometric cloud storage.",
        solution:
          "Architected an enterprise attendance platform featuring split-shift tracking (Day 8AM–8PM / Night 8PM–8AM), biometric face-capture verification, and real-time burnout pulse analytics, engineered with client-side cryptographic storage.",
        result:
          "Achieved zero-server biometric data sovereignty using RC4 cipher and SHA-256 session hashing, automated payroll tier computation, and instant payslip PDF generation.",
      },
      highlights: [
        "Architected an enterprise attendance platform featuring split-shift tracking (Day 8AM–8PM / Night 8PM–8AM), biometric face-capture verification, and real-time burnout pulse analytics.",
        "Engineered client-side cryptographic storage (RC4 cipher, SHA-256 session hashing) with zero-server data sovereignty, automated payroll tier computation, and instant payslip PDF generation.",
        "Implemented robust SQLite transactional backend with web architecture standards.",
      ],
      techStack: ["Python", "Java", "SQL", "Relational Schema", "SHA-256", "Automated Payroll", "REST APIs"],
      metrics: [
        { label: "Shift Coverage", value: "24/7 Split Roster" },
        { label: "Data Sovereignty", value: "Zero-Server Retention" },
        { label: "Biometric Verification", value: "Sub-Second Live Match" },
        { label: "Payroll Computation", value: "Automated Instant Tiers" },
      ],
      compliance: ["Zero-Server Biometric Storage", "Cryptographic Session Hashing"],
      githubUrl: "https://github.com/at84004630-del/staffpulse",
      liveDemoUrl: "https://staffpulse-hr-2024.web.app/",
      demoAvailable: true,
      architectureDetails: {
        architecture:
          "Hybrid privacy-preserving web architecture where biometric template vectors and sensitive credentials are encrypted client-side using RC4 and hashed with SHA-256 before session tokens reach the server. SQLite handles shift audit logging and automated payroll tier matrices.",
        keyInnovations: [
          "Split-shift algorithm handling overnight hour overflows and penalty rate brackets automatically",
          "Real-time burnout pulse analytics correlating overtime hours with scheduled rest periods",
          "Automated dynamic PDF generator creating compliant employee payslips instantly",
        ],
        securityPrivacy:
          "Raw facial imagery is never transmitted or stored on the server; cryptographic hashing prevents credential replay attacks.",
      },
    },

    {
      id: "aora",
      title: "AORA AI — Your Emotional Companion",
      tagline: "AI-Powered Conversational Companion for Emotional Support & Wellness",
      category: "Multi-Agent AI",
      badge: "Conversational AI",
      image: "/projects/aora.jpg",
      overview:
        "Friendly conversational AI assistant that offers empathetic emotional support and daily mental wellness.",
      summary: {
        problem:
          "People experiencing daily stress often lack accessible, judgment-free conversational spaces for immediate emotional expression.",
        solution:
          "Built an empathetic AI companion delivering responsive, mindful dialogue with secure authentication and privacy safeguards.",
        result:
          "Enabled continuous, supportive real-time conversations with sub-second response times and zero conversational data leakage.",
      },
      highlights: [
        "Designed and deployed an intelligent conversational companion focused on empathetic dialogue and mental wellness.",
        "Engineered a responsive Next.js frontend with secure user authentication and streaming conversation states.",
        "Integrated contextual conversational AI models to deliver supportive, context-aware responses with sub-second latency.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "AI Conversational Models", "Authentication"],
      metrics: [
        { label: "Response Latency", value: "Sub-Second" },
        { label: "User Privacy", value: "Encrypted & Safe" },
        { label: "Interface", value: "Conversational UI" },
        { label: "Availability", value: "24/7 Live" },
      ],
      compliance: ["End-to-End Session Privacy", "Zero Data Retention", "Safe Dialogue Safeguards"],
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://aora-ai-two.vercel.app/",
      demoAvailable: true,
      architectureDetails: {
        architecture:
          "Next.js architecture integrated with conversational AI inference endpoints, secure session authentication, and lightweight state management for real-time streaming dialogue.",
        keyInnovations: [
          "Empathetic conversational tone modeling designed for emotional reassurance",
          "Low-latency streaming response generation for natural dialogue pacing",
          "Privacy-centric session storage protecting sensitive personal conversations",
        ],
        securityPrivacy:
          "User interactions and conversational logs are kept strictly private with secure session authentication.",
      },
    },
  ] as Project[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Amity University Online",
      location: "Noida, UP",
      period: "2026 – 2028",
      statusOrGpa: "In Progress (2026 – 2028 Batch)",
      details: [
        "Specializing in advanced software engineering, distributed computing, and backend architectures.",
        "Active scholar translating academic computer science principles into high-scale production systems.",
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University",
      location: "Lucknow, UP",
      period: "2023 – 2026",
      statusOrGpa: "GPA: 7.50 / 10.0",
      details: [
        "Graduated with distinction in core software development and computational theory.",
      ],
      coursework: [
        "Data Structures & Algorithms (Ongoing Learning)",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Software Engineering",
      ],
    },
    {
      degree: "CBSE Class XII (Senior Secondary)",
      institution: "Central Academy",
      location: "Lucknow, UP",
      period: "Completed 01/2022",
      statusOrGpa: "Score: 69.0%",
      details: ["Senior secondary curriculum with focus on science and computational foundations."],
    },
    {
      degree: "CBSE Class X (Secondary)",
      institution: "Central Academy",
      location: "Lucknow, UP",
      period: "Completed 01/2020",
      statusOrGpa: "Score: 79.0%",
      details: ["Secondary school board education with academic distinction."],
    },
  ] as EducationItem[],

  honorsAndCertifications: [
    {
      title: "Rank 78 / 1,400 Teams (Top 5.5%) — Catalyst AI Hackathon",
      event: "Catalyst AI Hackathon",
      issuer: "Catalyst AI",
      dateOrBatch: "2026",
      badge: "Rank 78 (Top 5.5%)",
      description:
        "Ranked 78th nationwide out of 1,400 competing teams, recognized for high-throughput AI agent architecture and low-latency response engineering.",
    },
    {
      title: "National Shortlist — SBI Hackathon @ Global Fintech Fest 2026",
      event: "Global Fintech Fest 2026 (Organized by NPCI, FCC & HackCulture)",
      issuer: "NPCI / FCC / HackCulture",
      dateOrBatch: "2026",
      badge: "National Shortlist",
      description:
        "Shortlisted into the Idea Submission phase from thousands of nationwide participants for SAATHI AI banking platform.",
    },
    {
      title: "Runner Up — Amiphoria Event 2026",
      event: "Amiphoria 2026",
      issuer: "Amity University",
      dateOrBatch: "2026",
      badge: "Runner Up",
      description:
        "Runner Up in Amiphoria event in 2026 at Amity University.",
    },
    {
      title: "Certificate of Completion — IBM Bob 2.0 Hackathon",
      event: "IBM Bob 2.0 Hackathon",
      issuer: "Lablab.ai / NativelyAI",
      dateOrBatch: "2025",
      badge: "Awarded Certificate",
      certId: "CMULAQ6XC00H7S601WX38KT9U",
      description:
        "Awarded for outstanding performance, attendance, and submitting MedTrace autonomous clinical software remediation platform.",
    },
    {
      title: "NPTEL Certification in Design Thinking",
      event: "National Programme on Technology Enhanced Learning",
      issuer: "Ministry of Education & IIT",
      dateOrBatch: "May 2024",
      badge: "Scored 69.0%",
      description:
        "Certified in user-centric design heuristics, system requirement decomposition, and creative problem solving.",
    },
    {
      title: "AI for Business Professionals",
      event: "HP LIFE Professional Learning",
      issuer: "HP LIFE",
      dateOrBatch: "Oct 2025",
      badge: "Professional Certification",
      description:
        "Comprehensive certification in enterprise artificial intelligence adoption, ethical AI governance, and strategic value modeling.",
    },
    {
      title: "Volunteer — Climate Conservation",
      event: "Vartaleap Initiative",
      issuer: "Praveera Socio Cultural Foundation, Lucknow",
      dateOrBatch: "Jan 2024",
      badge: "Community Leadership",
      description:
        "Conducted interactive community sessions to promote climate action, environmental sustainability, and conservation awareness.",
    },
    {
      title: "Problem Solving (Ongoing Learning)",
      event: "Algorithmic Practice",
      issuer: "Self-Directed Mastery",
      dateOrBatch: "Active & Ongoing",
      badge: "DSA Practice",
      description:
        "Actively practicing foundational Data Structures & Algorithms (Arrays, Two Pointers, Binary Search, Recursion) in Java & Python.",
    },
  ] as HonorItem[],
};


