export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Multi-Agent AI" | "Edge AI" | "Backend Systems" | "Web3 / Security";
  badge?: string;
  image: string;
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
    secondaryRole: "Backend Architect & Multi-Agent AI Systems Specialist",
    email: "at84004630@gmail.com",
    location: "Lucknow, India",
    github: "https://github.com/at84004630-del",
    githubHandle: "at84004630-del",
    linkedin: "https://linkedin.com/in/abhinav-tripathi",
    linkedinHandle: "abhinav-tripathi",
    resumePdf: "/Abhinav_Tripathi_Resume.pdf",
    availability: "Available for Software Engineering Roles & Internships",
    summary:
      "Python & Java Developer and MCA scholar at Amity University Online (BCA Graduate, Amity University Lucknow) specializing in application development, robust backend architectures, and multi-agent AI systems. Proven track record engineering award-shortlisted platforms across fintech, healthcare incident remediation, and on-device machine learning with full data privacy compliance.",
  },

  stats: [
    { value: "4.2 min", label: "UPI Turnaround", subtext: "Slashed from 30 days" },
    { value: "45 TOPS", label: "NPU Acceleration", subtext: "1.4W power envelope" },
    { value: "90 sec", label: "AST Code Synthesis", subtext: "Automated patch generation" },
    { value: "16 / 16", label: "Passed Tests", subtext: "Zero PHI data leakage" },
  ],

  about: {
    bio: [
      "I am a Python & Java Developer and MCA scholar with a rigorous engineering mindset focused on building high-performance backend systems, asynchronous architectures, and deterministic multi-agent AI workflows.",
      "My work spans high-stakes domains—from banking platforms shortlisted in the national SBI Hackathon @ Global Fintech Fest 2026 to automated healthcare software remediation recognized at IBM Bob 2.0 Hackathon, and 100% on-device clinical intelligence suites deployed onto Qualcomm Snapdragon X Elite NPUs.",
      "I prioritize architectural rigor: zero-trust data privacy, deterministic guardrails (DPDPA 2023, RBI FREE-AI, HIPAA §164.312, EU AI Act), memory-efficient execution, and clean, maintainable code.",
    ],
    pillars: [
      {
        title: "Robust Backend Architecture",
        desc: "Engineering high-throughput, asynchronous backends with FastAPI, RESTful APIs, SSE streaming, and relational database schemas with SQLAlchemy ORM.",
      },
      {
        title: "Multi-Agent AI Orchestration",
        desc: "Designing collaborative 'One Face, Many Brains' agent swarms using LangGraph, deterministic veto engines, and structured JSON schema validations.",
      },
      {
        title: "Edge AI & Hardware NPUs",
        desc: "Quantizing and executing LLMs and vision models on edge silicon using Qualcomm AI Hub and ONNX/QNN Runtime within ultra-low wattage constraints.",
      },
      {
        title: "Privacy & Compliance First",
        desc: "Ensuring air-gapped zero-egress pipelines, AST automated patching without sensitive log leaks, and adherence to DPDPA, HIPAA, and GDPR standards.",
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
          { name: "Qualcomm AI Hub", details: "Model Compilation, NPU Quantization, Target Profiling", level: "Proficient" },
          { name: "ONNX & QNN Runtime", details: "Cross-platform Hardware Execution, 45 TOPS Hexagon", level: "Proficient" },
          { name: "Model Quantization", details: "Phi-3.5 Mini, Whisper, DenseNet, BioBERT Edge Deploys", level: "Proficient" },
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
      demoAvailable: true,
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
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://github.com/at84004630-del",
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
      id: "medisense",
      title: "MediSense Edge — On-Device Clinical Decision Support Suite",
      tagline: "Submitted to Qualcomm Snapdragon AI Lab Hackathon",
      category: "Edge AI",
      badge: "Qualcomm AI Lab Submission",
      image: "/projects/medisense.jpg",
      summary: {
        problem:
          "Clinical AI tools relying on cloud APIs suffer from network latency, high continuous subscription costs, and severe risk of data egress violating patient sovereignty and hospital air-gap policies.",
        solution:
          "Engineered a 100% on-device clinical intelligence suite for Snapdragon X Elite PCs, running completely air-gapped with 0 KB cloud data egress for total HIPAA/GDPR sovereignty.",
        result:
          "Quantized and deployed 6 models (Phi-3.5 Mini @ 42ms, Whisper Base @ 18ms, DenseNet-121, BioBERT) via Qualcomm AI Hub onto the 45 TOPS Hexagon NPU, operating at an ultra-low 1.4W power envelope.",
      },
      highlights: [
        "Engineered a 100% on-device clinical intelligence suite for Snapdragon X Elite PCs submitted to the Qualcomm Snapdragon AI Lab Hackathon, running completely air-gapped with 0 KB cloud data egress for total HIPAA/GDPR sovereignty.",
        "Quantized and deployed 6 models (Phi-3.5 Mini 42ms, Whisper Base 18ms, DenseNet-121, BioBERT) via Qualcomm AI Hub onto the 45 TOPS Hexagon NPU, operating at an ultra-low 1.4W power envelope.",
        "Integrated asynchronous FastAPI local endpoints with ONNX and Qualcomm Neural Network (QNN) Runtime.",
      ],
      techStack: ["Python", "Qualcomm AI Hub", "ONNX Runtime", "QNN Runtime", "FastAPI", "Phi-3.5 Mini", "Whisper", "BioBERT"],
      metrics: [
        { label: "NPU Acceleration", value: "45 TOPS" },
        { label: "Phi-3.5 Latency", value: "42 ms" },
        { label: "Whisper Latency", value: "18 ms" },
        { label: "Cloud Data Egress", value: "0 KB (Air-Gapped)" },
        { label: "Power Envelope", value: "1.4W Ultra-Low" },
      ],
      compliance: ["Air-Gapped HIPAA Sovereignty", "GDPR Zero-Egress", "On-Device Processing"],
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://github.com/at84004630-del",
      demoAvailable: false,
      architectureDetails: {
        architecture:
          "Direct hardware execution layer using Qualcomm AI Hub compiled targets. Models are mapped directly to the Snapdragon X Elite Hexagon NPU via QNN Execution Provider, interfaced through a lightweight local Python backend.",
        keyInnovations: [
          "Sub-50ms conversational medical triage locally without internet connection",
          "18ms speech-to-text consultation transcription using quantized Whisper Base",
          "Ultra-low 1.4W power envelope enabling all-day battery life on medical workstation laptops",
        ],
        securityPrivacy:
          "Physical air-gap guarantees 100% zero data packets leave the local workstation; no external server dependencies.",
      },
    },

    {
      id: "staffpulse",
      title: "StaffPulse — Workforce & Attendance Management System",
      tagline: "Enterprise Shift Management with Biometric Verification & Client Cryptography",
      category: "Backend Systems",
      badge: "Enterprise Platform",
      image: "/projects/staffpulse.jpg",
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
      techStack: ["Python", "Web Architecture", "SQLite", "Biometric Face-Capture", "RC4 Cipher", "SHA-256", "Automated Payroll"],
      metrics: [
        { label: "Shift Coverage", value: "24/7 Split Roster" },
        { label: "Data Sovereignty", value: "Zero-Server Retention" },
        { label: "Biometric Verification", value: "Sub-Second Live Match" },
        { label: "Payroll Computation", value: "Automated Instant Tiers" },
      ],
      compliance: ["Zero-Server Biometric Storage", "Cryptographic Session Hashing"],
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://github.com/at84004630-del",
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
      title: "Aora AI — Web3 Behavioral AI Interceptor",
      tagline: "Automated Behavioral Threat Intelligence for On-Chain Wallet Interactions",
      category: "Web3 / Security",
      badge: "Security Prototype",
      image: "/projects/aora.jpg",
      summary: {
        problem:
          "Phishing drainers and obscure smart contract approvals deceive users into signing malicious transactions that instantly drain wallet balances.",
        solution:
          "Developed an automated behavioral AI interception prototype to analyze transaction intent and identify anomalous on-chain wallet interactions in real time.",
        result:
          "Successfully intercepted deceptive transaction payloads and anomalous authorization requests prior to on-chain broadcast using Python backend agent logic.",
      },
      highlights: [
        "Developed an automated behavioral AI interception prototype to analyze transaction intent and identify anomalous on-chain wallet interactions in real time.",
        "Engineered intent parsing heuristics and REST API endpoints for rapid threat classification.",
        "Designed simulation hooks to evaluate contract call behavior before user signature execution.",
      ],
      techStack: ["Python Backend", "AI Agent Logic", "REST APIs", "Transaction Simulation", "Security Heuristics"],
      metrics: [
        { label: "Interception Logic", value: "Real-Time Intent Analysis" },
        { label: "Threat Detection", value: "Drainers & Malicious Signatures" },
        { label: "Architecture", value: "Python Agent Heuristics" },
      ],
      compliance: ["Threat Simulation Guidelines", "Safe Signature Protocol"],
      githubUrl: "https://github.com/at84004630-del",
      liveDemoUrl: "https://github.com/at84004630-del",
      demoAvailable: true,
      architectureDetails: {
        architecture:
          "Heuristic and agent-driven interception proxy that inspects contract bytecode, destination reputation, and transaction payloads, flagging anomalies through RESTful status signals.",
        keyInnovations: [
          "Behavioral intent classification distinguishing legitimate DeFi swaps from malicious authorization drainers",
          "Low-latency REST verification pipeline suitable for wallet extension integration",
        ],
        securityPrivacy:
          "Operates purely on transaction payload simulation with zero private key handling.",
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
      title: "National Shortlist — SBI Hackathon @ Global Fintech Fest 2026",
      event: "Global Fintech Fest 2026 (Organized by NPCI, FCC & HackCulture)",
      issuer: "NPCI / FCC / HackCulture",
      dateOrBatch: "2026",
      badge: "National Shortlist",
      description:
        "Shortlisted into the Idea Submission phase from thousands of nationwide participants for SAATHI AI banking platform.",
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
