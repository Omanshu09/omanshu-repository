// Omanshu Bhatt — single source of truth for the portfolio AI.
// Update this file whenever the resume changes.
// Fields not present in the resume are intentionally left null.

const resumeData = {
  name: "Omanshu Bhatt",
  location: "Almora, Uttarakhand, India",
  email: "omanshu25@gmail.com",
  phone: "+91 8755118493",

  summary:
    "Computer Engineering graduate with hands on experience building scalable backend systems, AI/ML applications and distributed software solutions. Proficient in Python, Java, SQL, FastAPI, PostgreSQL, Redis, Kafka, Docker and modern AI/ML technologies, with a strong foundation in data structures, databases, operating systems and software engineering. Certified in Agentic AI, cybersecurity fundamentals and web development, with experience developing reliable, production oriented solutions.",

  // Personal information supplied directly by Omanshu for the portfolio AI.
  age: 21,
  dateOfBirth: "10 August 2005",
  interests: [
    "Playing badminton",
    "Reading books"
  ],

  skills: {
    languages: ["Python", "C++", "C", "Java", "JavaScript", "Rust", "Go", "Swift", "SQL", "TypeScript"],
    web: ["React.js", "HTML", "CSS", "JavaScript", "FastAPI", "Next.js", "Node.js", "Hono", "Django", "Shadcn UI"],
    database: ["SQL", "MySQL", "MariaDB", "MongoDB Compass", "DBMS"],
    aiMl: ["Machine Learning fundamentals", "Vision Transformers (ViT)", "EfficientNet", "TensorBoard", "PyTorch", "LangChain", "Ollama", "Groq", "VAPI", "Whisper", "Gemini", "OpenRouter"],
    tools: ["Git", "GitHub", "CI/CD", "Jenkins", "n8n", "Trigger.dev", "Transloadit", "Prisma", "Zod", "Zustand", "Clerk", "REST APIs", "Postman", "Jira"],
    core: ["Data Structures & Algorithms", "Operating Systems", "OOP"]
  },

  projects: [
    {
      name: "Distributed Order Processing Platform",
      type: "Independent Project",
      details: [
        "Designed a distributed order processing backend handling asynchronous payment, inventory and notification workflows across services.",
        "Maintained consistency under concurrent load and service failure using PostgreSQL transactions, Redis caching, idempotency and retry logic; used Kafka for event driven service communication.",
        "Containerized with Docker and load tested to benchmark API throughput and latency."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker"]
    },
    {
      name: "AI Codebase Intelligence Platform",
      type: "Independent Project",
      details: [
        "Built an AI powered platform that ingests GitHub repositories and enables natural language querying across source code.",
        "Implemented RAG with code embeddings and vector search to retrieve relevant files/functions before generating LLM responses.",
        "Developed FastAPI services for ingestion, processing, retrieval and inference, paired with a React interface, Docker containerization and automated CI testing."
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "RAG", "LLM", "Vector Database", "Docker"]
    },
    {
      name: "Deepfake Image Integrity System",
      type: "Independent/ Academic Project",
      details: [
        "Built an end to end deepfake detection system spanning a mobile app and a browser extension, backed by a shared inference server.",
        "Applied EfficientNet-B0 for lightweight on device detection and Vision Transformer (ViT) for higher accuracy analysis of web and social media images."
      ],
      technologies: ["Python", "PyTorch/ML tooling", "Vision Transformer (ViT)", "EfficientNet-B0"]
    }
  ],

  internships: [
    {
      organization: "Indian Oil Corporation Limited (IOCL)",
      role: "Trainee Intern",
      duration: "",
      details: [
        "Supported technical and organizational tasks within a large scale public sector engineering environment, gaining exposure to professional workflows and cross team coordination."
      ]
    },
    {
      organization: "Kodacy",
      role: "Virtual Intern — AI/ML & Robotics",
      duration: "",
      details: [
        "Completed two virtual internship tracks covering AI/ML fundamentals, data analysis, and robotics/automation concepts."
      ]
    }
  ],

  certifications: [
    "Oracle — Agentic AI Certified Foundations Associate",
    "TATA — Young Professional Course Certification",
    "TATA — Cybersecurity Analyst Job Simulation",
    "Deloitte — Cyber Job Simulation",
    "NASA — Hyperspectral Data for Land and Coastal Systems",
    "Udemy — Web Development Bootcamp"
  ],

  languages: ["Python", "C++", "C", "Java", "JavaScript", "Rust", "Go", "Swift", "SQL", "TypeScript"],

  interests: [],

  education: [
    {
      degree: "B.Tech, Computer Engineering",
      institution: "G.B. Pant University, Pantnagar",
      duration: "2022 – 2026",
      cgpa: "7.20"
    },
    {
      qualification: "Class XII",
      institution: "Beersheba Senior Secondary School, Almora, Uttarakhand",
      percentage: "90.40%"
    },
    {
      qualification: "Class X",
      institution: "Beersheba Senior Secondary School, Almora, Uttarakhand",
      percentage: "95.33%"
    }
  ]
};

window.resumeData = resumeData;
