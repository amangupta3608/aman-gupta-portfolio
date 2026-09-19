export const socialLinks = {
  github: "https://github.com/amangupta3608",
  linkedin: "https://linkedin.com/in/amangupta0213",
  email: "mailto:amangupta0213@gmail.com",
};

export const heroWords = [
  "DevOps Engineer",
  "Cloud Automation",
  "Infrastructure as Code",
  "CI/CD Pipelines",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const summary =
  "Software Engineer with hands-on experience in CI/CD, infrastructure automation, secrets management, cloud environments, and production support. Experienced with Terraform, Ansible, HashiCorp Vault, AWS, and Git-based workflows, with a focus on DevOps, cloud infrastructure, and deployment automation.";

export const skillCategories = [
  {
    title: "DevOps & IaC",
    items: ["CI/CD", "Terraform", "Ansible", "Infrastructure as Code"],
  },
  {
    title: "Cloud & Security",
    items: ["AWS (EC2, S3, IAM, RDS)", "HashiCorp Vault"],
  },
  {
    title: "Languages & Scripting",
    items: ["Python", "Java", "Shell Scripting"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Operations & Tools",
    items: ["Linux", "Git", "Maven", "Monitoring", "Logging", "Production Debugging"],
  },
];

export const highlightCards = [
  {
    title: "CI/CD",
    description: "Automated release workflows across application environments.",
  },
  {
    title: "Infrastructure as Code",
    description: "Repeatable provisioning and consistent environment setup.",
  },
  {
    title: "Secrets Management",
    description: "Secure secret delivery with Vault-driven supply chains.",
  },
  {
    title: "Production Support",
    description: "Rapid troubleshooting for incidents and deployment issues.",
  },
];

export const experience = [
  {
    company: "Pratiti Technologies",
    client: "Siemens Digital Solutions",
    location: "Pune, India",
    role: "Software Engineer – DevOps & Cloud Engineering",
    period: "06/2025 – Present",
    tags: ["CI/CD", "Terraform", "Ansible", "Vault", "AWS", "Git"],
    points: [
      "Worked on CI/CD workflows to automate build, deployment, and release processes across application environments, improving deployment consistency.",
      "Implemented infrastructure automation using Terraform and Ansible for repeatable infrastructure provisioning and configuration management.",
      "Integrated HashiCorp Vault with application and deployment workflows for secure secrets and credential management.",
      "Supported deployments and production environments by troubleshooting configuration issues, deployment failures, and service-level incidents.",
      "Participated in root cause analysis using logs, application behavior, and deployment configurations to identify and resolve system issues.",
      "Collaborated with development teams on backend services, deployment workflows, environment configuration, and operational reliability.",
      "Automated repetitive operational and deployment tasks using scripting and configuration management.",
      "Worked with Git-based workflows and environment-specific configurations to support controlled releases and deployment changes.",
    ],
  },
];

export const pipelineStages = [
  {
    name: "Commit",
    description: "Source changes are managed with Git-based workflows and version-controlled releases.",
  },
  {
    name: "Build",
    description: "Maven builds compile and package services for consistent artifact delivery.",
  },
  {
    name: "Test",
    description: "Validation checks ensure code quality before production deployment paths are opened.",
  },
  {
    name: "Secrets",
    description: "HashiCorp Vault secures credentials and sensitive values used across deployments.",
  },
  {
    name: "Provision",
    description: "Terraform defines the infrastructure footprint for stable and repeatable environments.",
  },
  {
    name: "Configure",
    description: "Ansible applies service configuration and runtime consistency across the stack.",
  },
  {
    name: "Deploy",
    description: "Application delivery is coordinated for AWS-hosted environments with controlled rollouts.",
  },
  {
    name: "Monitor",
    description: "Production health is reviewed with logs and operational signals to support reliability.",
  },
];

export const projects = [
  {
    title: "Task Forge",
    subtitle: "Microservices Application",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    description: [
      "Microservices-based project management platform with modular backend services communicating through REST APIs.",
      "JWT authentication and role-based access control (RBAC) for secure access across services.",
      "Service separation, API-based communication, and scalable database design for maintainability.",
      "Structured for independent service deployment and environment-based configuration, following cloud-native delivery concepts.",
    ],
    repoUrl: "https://github.com/amangupta3608",
    demoUrl: undefined,
  },
  {
    title: "Local RAG Chatbot System",
    subtitle: "Python, FastAPI, Ollama, FAISS",
    stack: ["Python", "FastAPI", "Ollama", "FAISS"],
    description: [
      "Locally hosted RAG system using Ollama and FAISS for contextual document retrieval and LLM-based response generation.",
      "FastAPI services connecting document retrieval, embeddings, and local LLM inference, with a documentation frontend.",
    ],
    repoUrl: "https://github.com/amangupta3608",
    demoUrl: undefined,
  },
];

export const education = {
  school: "Maharaja Agrasen Institute of Technology, New Delhi, India",
  degree: "Bachelor of Technology",
  period: "11/2020 – 06/2024",
  cgpa: "CGPA: 8.215",
};

export const profile = {
  name: "Aman Gupta",
  title: "DevOps & Cloud Engineer (Software Engineer – DevOps & Cloud Engineering)",
  location: "Delhi, India (currently working in Pune, India)",
  email: "amangupta0213@gmail.com",
  githubUrl: socialLinks.github,
  linkedinUrl: socialLinks.linkedin,
  contactEmail: "amangupta0213@gmail.com",
};

export const site = {
  url: "https://aman-gupta-portfolio.vercel.app",
  description:
    "Portfolio website for Aman Gupta, a DevOps & Cloud Engineer specializing in CI/CD, cloud automation, infrastructure as code, and production support.",
};
