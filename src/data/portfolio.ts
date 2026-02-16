export const personalInfo = {
  name: "Sonali Vedaraju",
  title: "Full-stack Engineer",
  location: "Pennsylvania",
  phone: "+1 (682)-374-6951",
  email: "sonalivedaraj@gmail.com",
  linkedin: "https://www.linkedin.com/in/sonalivedaraju/",
  github: "https://github.com/sonali1103",
};

export const professionalSummary = [
  "Full-stack Engineer with nearly 6 years of experience in building scalable microservices & high-performance SPAs. Skilled in React/Next.js, Java/Spring Boot, AWS & Kubernetes, with a record of boosting performance, strengthening security & delivering reliable solutions.",
];

export const experience = [
  {
    company: "Paycom",
    role: "Software Developer",
    location: "USA",
    dates: "Jun 2024 - Present",
    points: [
      "Optimized SPA performance with virtualization, lazy loading, and code splitting, cutting memory use by 60% and improving load times by 20%.",
      "Enhanced build/runtime with Webpack (tree-shaking, dynamic imports) and Next.js/ESM, reducing cold-load by 3s and dev reloads by 25%.",
      "Centralized configuration management using a custom React hook + Context API, improving maintainability and seamless state sharing across components.",
      "Built CI/CD pipelines in GitLab for automated builds and Kubernetes deployments, containerizing feature branches for efficient testing and integrating Jira for release tracking.",
      "Delivered cross-module features in a micro-frontend architecture, ensuring consistent UX and faster releases through collaboration with product/design/QA.",
      "Improved code quality with 100% critical-path test coverage (Jest/RTL), reducing production bugs by 40%.",
      "Strengthened frontend security by applying OWASP practices (XSS sanitization, CSRF tokens, secure PII handling), reducing vulnerabilities.",
      "Delivered in Agile sprints by balancing features, bug fixes, and code reviews, ensuring timely releases and performance improvements.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Webpack", "Kubernetes", "GitLab", "Jest"],
  },
  {
    company: "University of Texas at Arlington",
    role: "Research Assistant",
    location: "USA",
    dates: "Aug 2023 - May 2024",
    points: [
      "Automated ETL workflows with Lambda, DynamoDB, Athena — improving reliability and cutting manual work.",
      "Built QuickSight dashboards with filters & role-based access — enabling faster academic decisions.",
    ],
    technologies: ["AWS Lambda", "DynamoDB", "Athena", "QuickSight", "Python"],
  },
  {
    company: "TravTech Inc",
    role: "Software Development Engineer",
    location: "Bangalore, India",
    dates: "Aug 2018 - Jul 2022",
    points: [
      "Launched booking & payment platforms with microservices + GraphQL/REST APIs, accelerating feature delivery and scalability.",
      "Boosted throughput 40%+ using Redis caching, connection pooling, and multithreading, significantly reducing DB load.",
      "Optimized queries & indexing, improving response times on high-traffic booking APIs.",
      "Hardened APIs with OAuth2, JWT & Spring Security RBAC, ensuring secure and compliant transactions.",
      "Reduced MTTR with observability stack (Prometheus, Grafana, ELK), enabling faster root-cause analysis.",
      "Migrated monolith to microservices, lowering deployment risk and enabling independent scaling of services.",
      "Designed resilient APIs with circuit breakers & retries to ensure reliable service under heavy load.",
      "Built asynchronous workflows with Kafka/SQS, scaling concurrent request handling and improving throughput 30%.",
      "Introduced database sharding & replication, improving scalability and ensuring high availability during peak loads.",
      "Led design/code reviews & mentored peers, raising code quality and knowledge sharing across the team.",
    ],
    technologies: ["Java", "Spring Boot", "GraphQL", "Redis", "Kafka", "AWS", "Prometheus", "Grafana"],
  },
];

export const projects = [
  {
    title: "AWS CDK Image Analysis Pipeline",
    shortTitle: "AWS Image Pipeline",
    description: [
      "Built a serverless image analysis pipeline using AWS CDK, with S3-triggered Lambdas analyzing images via Amazon Rekognition.",
      "Stored extracted metadata in DynamoDB, enabling scalable, event-driven processing with IaC best practices.",
    ],
    technologies: ["Java", "AWS CDK", "Lambda", "S3", "DynamoDB", "Rekognition"],
    image: "aws.png",
  },
  {
    title: "Chatbot using OpenAI API",
    shortTitle: "AI Chatbot",
    description: [
      "Built an AI-powered chatbot using Node.js and the OpenAI API to enable real-time conversational responses.",
      "Designed for easy application integration, providing a scalable and reusable intelligent assistant.",
    ],
    technologies: ["Node.js", "OpenAI API", "JavaScript"],
    image: "chatbot.jpg",
  },
];

export const skills = {
  "Languages & Frameworks": [
    "Python",
    "Java",
    "Spring Boot",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
  ],
  "Databases": [
    "MySQL",
    "MongoDB",
    "Redis",
    "PostgreSQL",
    "Cassandra",
    "DynamoDB",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda, IAM, Athena, QuickSight)",
    "Docker",
    "Kubernetes (CKAD Certified)",
    "Terraform",
    "AWS CDK",
  ],
  "CI/CD & Testing": [
    "JUnit",
    "Jest",
    "React Testing Library",
    "Git",
    "GitLab CI/CD",
    "Maven",
    "Jenkins",
    "Webpack",
  ],
  "Architecture & APIs": [
    "Microservices",
    "RESTful APIs",
    "GraphQL",
    "Event-Driven Architecture",
    "Apache Kafka",
    "Micro-Frontend",
  ],
  "AI & Data": [
    "Generative AI (Databricks Certified)",
    "OpenAI API",
    "Amazon Rekognition",
    "Databricks",
    "ETL Pipelines",
  ],
};

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    organization: "AWS",
    icon: "☁️",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    organization: "Cloud Native Linux Foundation",
    icon: "⚙️",
  },
  {
    name: "Generative AI Fundamentals",
    organization: "Databricks",
    icon: "🤖",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Texas at Arlington",
    location: "USA",
    dates: "Aug 2022 - May 2024",
  },
  {
    degree: "Bachelor of Engineering in Information Science",
    institution: "Visvesvaraya Technological University",
    location: "India",
    dates: "Aug 2014 - Jun 2018",
  },
];

export const stats = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Projects Delivered", value: 2, suffix: "+" },
  { label: "Technologies Mastered", value: 10, suffix: "+" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const typewriterWords = ["React", "Spring Boot", "AWS", "Kubernetes"];
