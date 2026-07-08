export const profile = {
  name: "Bhavani Surepally",
  role: "Computer Science Engineering Student and Security Intern",
  tagline:
    "Software and application security practitioner building backend systems, AI-assisted tools, and secure web experiences.",
  phone: "+91 9848702930",
  email: "bhavanisurepally03@gmail.com",
  linkedin: "https://linkedin.com/in/bhavani-surepally",
  resumeUrl: "/Bhavani-Surepally-Resume.pdf",
  heroImage: "/profile.jpeg",
  githubPlaceholder: "https://github.com/SurepallyBhavani",
  locationPlaceholder: "Hyderabad, India"
};

export const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certifications" },
  { label: "Leadership", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const summary = [
  "Computer Science and Engineering student with practical experience across Python development, web development, machine learning, generative AI, and core computer science foundations.",
  "Currently contributing to Oracle application security work through secure code review, SAST, DAST, manual testing, and vulnerability assessment for enterprise applications.",
  "Comfortable turning complex feature behavior into security findings, backend workflows, and recruiter-friendly technical narratives."
];

export const metrics = [
  { value: "9.3", label: "Current CGPA" },
  { value: "200+", label: "Student club members led" },
  { value: "150+", label: "Workshop participants supported" },
  { value: "2026", label: "Oracle and AI security training" }
];

export const skills = [
  {
    category: "Core Programming",
    items: ["Python Development", "C", "C++", "Java Basics", "Data Structures and Algorithms", "OOP"]
  },
  {
    category: "Web and Backend",
    items: ["Flask Development", "HTML", "CSS", "JavaScript", "REST API Integration", "Software Architecture"]
  },
  {
    category: "Databases and Environments",
    items: ["MySQL", "SQLite", "Relational Database Management", "Linux/Unix", "Git", "GitHub"]
  },
  {
    category: "Computer Science",
    items: ["Operating Systems Internals", "Computer Networks", "Distributed Systems"]
  },
  {
    category: "Application Security",
    items: [
      "Secure Code Review",
      "SAST",
      "DAST",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Burp Suite"
    ]
  }
];

export const experience = [
  {
    company: "Oracle",
    role: "Project Intern, Security Team",
    period: "Jan 2026 - Present",
    location: "Enterprise application security",
    summary:
      "Assesses enterprise applications through secure code review, automated analysis, DAST, and manual testing.",
    highlights: [
      "Validated high, medium, and low severity vulnerabilities using OWASP Top 10 and secure coding practices.",
      "Tested authentication, authorization, JWT validation, session management, input validation, access control, privilege escalation, SQL injection, XSS, CSRF, and log injection scenarios.",
      "Used Burp Suite for request and response analysis, vulnerability validation, and web application security testing."
    ]
  }
];

export const projects = [
  {
    name: "CloudVault Secure File-Sharing App",
    technologies: ["Python", "Flask", "AWS S3", "AWS Lambda", "AWS RDS", "AWS EC2", "Docker"],
    outcome: "Built a secure cloud file-sharing workflow with time-limited access links.",
    description:
      "Developed a Flask-based cloud storage application focused on secure file sharing, AWS-backed storage and deployment, and controlled access through expiring links.",
    repositoryUrl: "https://github.com/SurepallyBhavani/cloudvault-app"
  },
  {
    name: "RAG-Based Student Assistant for Academic Resource Access",
    technologies: ["Python", "Flask", "LangChain", "ChromaDB", "OpenRouter API"],
    outcome: "Created a context-aware academic assistant for resource retrieval and response generation.",
    description:
      "Built a RAG workflow with PDF ingestion, semantic search, text preprocessing, TF-IDF and Naive Bayes query classification, plus a Flask API and web frontend.",
    repositoryUrl: "https://github.com/SurepallyBhavani/pg_project_rag"
  },
  {
    name: "Smart Medication Alert System using Image Processing",
    technologies: ["YOLOv8", "OpenCV", "SQLite", "Twilio API"],
    outcome: "Improved patient safety by detecting missed or incorrect doses and notifying caregivers.",
    description:
      "Designed a vision-based medication monitoring system with automated SMS and call alerts for caregiver intervention."
  },
  {
    name: "Website for JNTUH Healthcare Center",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning"],
    outcome: "Expanded campus health service access through responsive web support.",
    description:
      "Developed a healthcare website with an intelligent chatbot and Telugu voice assistant for student-facing service discovery.",
    repositoryUrl: "https://github.com/SurepallyBhavani/mini-project"
  }
];

export const education = [
  {
    school: "JNTUH University College of Engineering, Science and Technology, Hyderabad",
    program: "Integrated B.Tech-M.Tech in Computer Science and Engineering",
    period: "2021 - Present",
    result: "CGPA: 9.3"
  },
  {
    school: "Narayana Junior College, Hyderabad",
    program: "Intermediate Education - MPC",
    period: "2019 - 2021",
    result: "Percentage: 98.8%"
  },
  {
    school: "DAV Public School, Hyderabad",
    program: "Secondary Education",
    period: "2007 - 2019",
    result: "Percentage: 96.0%"
  }
];

export const certifications = [
  {
    name: "Yellow Belt and White Belt Security Expert",
    issuer: "Oracle Internal Technical Qualification",
    year: "2026"
  },
  {
    name: "AI Security Essentials Specialization",
    issuer: "Proactive Security for AI Models, Attacks and Lifecycles",
    year: "2026"
  }
];

export const achievements = [
  {
    title: "Club Lead, JNTUH Data Science Student Club",
    period: "Nov 2023 - Nov 2024",
    description:
      "Managed operations for a technical student community of 200+ members, including events, onboarding, and a competitive interactive chatbot development hackathon."
  },
  {
    title: "Workshop Coordinator, QUEST 2024",
    period: "Mar 2024 - Apr 2024",
    description:
      "Coordinated logistics for multi-disciplinary technical workshops across Cyber Security, Machine Learning, and Web Technologies for over 150 participants."
  }
];
