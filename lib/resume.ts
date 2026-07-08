export const profile = {
  name: "Bhavani Surepally",
  role: "Computer Science Graduate and Application Security Analyst",
  tagline:
    "Building AWS-backed full-stack applications and testing web applications for OWASP Top 10 vulnerabilities.",
  phone: "+91 9848702930",
  email: "bhavanisurepally03@gmail.com",
  linkedin: "https://linkedin.com/in/bhavani-surepally",
  resumeUrl: "/Bhavani_Surepally_Resume%20%281%29.pdf",
  heroImage: "/profile.jpeg",
  githubPlaceholder: "https://github.com/SurepallyBhavani",
  locationPlaceholder: "Hyderabad, India",
  locationUrl: "https://www.google.com/maps/search/?api=1&query=Hyderabad%2C%20India"
};

export const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Training", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];

export const summary = [
  "Computer Science graduate with a 9.3 CGPA and a strong foundation in data structures, algorithms, and application security.",
  "Builds and deploys full-stack, cloud-hosted applications on AWS across backend APIs, relational databases, infrastructure, and CI/CD.",
  "Performs manual security testing and source-code review to identify and remediate OWASP Top 10 vulnerabilities using Burp Suite, SAST, and DAST."
];

export const metrics = [
  { value: "9.3", label: "CGPA" },
  { value: "24h", label: "CloudVault File Expiry" },
  { value: "200+", label: "Members Led" },
  { value: "150+", label: "Workshop Participants Served" }
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Software Engineering",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming", "System Design", "Code Review", "Git/GitHub", "REST APIs"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS S3", "AWS Lambda", "AWS EC2", "AWS RDS", "AWS VPC", "AWS IAM", "EventBridge", "ALB", "CloudWatch", "Docker", "GitHub Actions", "Boto3"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "Relational Schema Design", "Query Optimization"]
  },
  {
    category: "Application Security",
    items: [
      "OWASP Top 10",
      "Burp Suite",
      "SAST",
      "DAST",
      "JWT & Session Analysis",
      "Vulnerability Assessment",
      "Input Validation"
    ]
  },
  {
    category: "AI/ML Tooling",
    items: ["LangChain", "ChromaDB", "OpenCV", "Vector Search"]
  }
];

export const experience = [
  {
    company: "Oracle",
    role: "Project Intern - Application Security Analyst",
    period: "Jan 2026 - Jul 2026",
    location: "Application Security",
    summary: "Manual security testing, source-code review, SAST/DAST triage, and remediation guidance for enterprise applications.",
    highlights: [
      "Identified and helped remediate OWASP Top 10 vulnerabilities including SQL injection, XSS, and insecure data logging.",
      "Analyzed HTTP/HTTPS traffic in Burp Suite to detect authentication and session-management flaws, JWT validation gaps, and privilege-escalation paths.",
      "Reviewed application logic and backend data flow to surface edge-case bugs and security gaps ahead of release.",
      "Triaged SAST/DAST findings by severity and exploitability, then documented remediation guidance for development teams."
    ]
  }
];

export const projects = [
  {
    name: "CloudVault - Secure File-Sharing Platform",
    technologies: ["Python", "Flask", "AWS S3", "AWS Lambda", "AWS VPC", "AWS EC2", "AWS RDS", "Boto3", "Docker", "GitHub Actions", "CloudWatch"],
    outcome: "Deployed secure file sharing with pre-signed S3 URLs and 24-hour auto-expiry.",
    description:
      "Built a secure Flask and Boto3 backend for uploading, sharing, and expiring files through pre-signed S3 URLs. Designed the AWS architecture with a custom VPC, public and private subnets, least-privilege IAM roles, Lambda and EventBridge automation, PostgreSQL RDS behind an EC2 bastion host, automated pytest checks, Dockerized builds, GitHub Actions CI/CD, and CloudWatch monitoring.",
    repositoryUrl: "https://github.com/SurepallyBhavani/cloudvault-app"
  },
  {
    name: "RAG-Based Student Assistant for Academic Resource Access",
    technologies: ["Python", "Flask", "LangChain", "ChromaDB", "OpenRouter API"],
    outcome: "Built a RAG assistant that answers questions from ingested course PDFs.",
    description:
      "Developed an academic question-answering assistant that ingests course PDFs, indexes content in ChromaDB, retrieves relevant context with semantic search, and generates answers through OpenRouter. Added TF-IDF based query classification, a Flask REST API, and a web frontend so students can search academic resources through a single interface.",
    repositoryUrl: "https://github.com/SurepallyBhavani/pg_project_rag"
  },
  {
    name: "Smart Medication Alert System Using Image Processing",
    technologies: ["Computer Vision", "OpenCV", "SQLite", "Twilio API"],
    outcome: "Detected missed or incorrect medication doses and notified caregivers.",
    description:
      "Created a computer-vision workflow that analyzes medication image input to detect missed or incorrect doses, records detection results in SQLite, and triggers caregiver notifications through Twilio SMS and call alerts. The system is designed to reduce manual monitoring effort and support faster intervention when medication routines are missed."
  },
  {
    name: "Website for JNTUH Healthcare Center",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning"],
    outcome: "Built a student-facing healthcare support website with chatbot and voice assistance.",
    description:
      "Designed and developed a responsive healthcare center website for campus users, focused on making services, support information, and basic assistance easier to access. Added an intelligent chatbot and Telugu voice assistant to help students find healthcare-related information quickly, with a simple web interface suited for repeated student use.",
    repositoryUrl: "https://github.com/SurepallyBhavani/mini-project"
  }
];

type EducationItem = {
  school: string;
  program: string;
  period: string;
  result: string;
  logoInitials: string;
  logoUrl?: string;
};

export const education: EducationItem[] = [
  {
    school: "JNTUH University College of Engineering, Science & Technology, Hyderabad",
    program: "Integrated B.Tech-M.Tech in Computer Science and Engineering",
    period: "2021 - 2026",
    result: "CGPA: 9.3",
    logoInitials: "JNTUH",
    logoUrl: "/jntu_logo.jpeg"
  },
  {
    school: "Narayana Junior College, Hyderabad",
    program: "Intermediate Education - MPC",
    period: "2019 - 2021",
    result: "Percentage: 98.8%",
    logoInitials: "N",
    logoUrl: "/inter_logo.jpeg"
  },
  {
    school: "DAV Public School, Hyderabad",
    program: "Secondary Education",
    period: "2007 - 2019",
    result: "Percentage: 96.0%",
    logoInitials: "DAV",
    logoUrl: "/school_logo.jpeg"
  }
];

export const certifications = [
  {
    name: "Yellow Belt & White Belt Security Expert",
    issuer: "Oracle Internal Technical Qualification",
    year: "2026"
  },
  {
    name: "AI Security Essentials Specialization",
    issuer: "Proactive Security for AI Models, Attacks & Lifecycles",
    year: "2026"
  }
];

type LeadershipItem = {
  title: string;
  period: string;
  description: string;
  logoUrl?: string;
};

export const leadership: LeadershipItem[] = [
  {
    title: "Club Lead, JNTUH Data Science Student Club",
    period: "Nov 2023 - Nov 2024",
    description:
      "Led a 200+ member student community, organized technical events and a chatbot-focused hackathon, and coordinated onboarding for new members.",
    logoUrl: "/data_science.jpeg"
  },
  {
    title: "Workshop Coordinator, QUEST 2024",
    period: "Mar 2024 - Apr 2024",
    description:
      "Coordinated logistics for multi-disciplinary technical workshops in Cyber Security and Machine Learning, serving 150+ participants.",
    logoUrl: "/quest_logo.jpeg"
  }
];
