export const personalInfo = {
  name: "Sonali Vedaraju",
  title: "AI Application Engineer | Full-Stack Engineer",
  location: "Pennsylvania / New York",
  phone: "+1 (682)-374-6951",
  email: "sonalivedaraj@gmail.com",
  linkedin: "https://www.linkedin.com/in/sonalivedaraju/",
  github: "https://github.com/sonali1103",
};

export const professionalSummary = [
  "AI-focused Full-Stack Engineer with nearly 6 years of experience building scalable microservices and high-performance SPAs. Proven expertise in designing and deploying LLM-powered agentic AI systems for reliable, enterprise-grade outputs. Strong React/Next.js foundation with a track record of performance optimization and bundle efficiency. Skilled in cloud-native development, AWS integrations, and streamlining workflows through automated CI/CD pipelines."
];

export const experience = [
  {
    company: "Paycom",
    role: "Software Developer",
    location: "USA",
    dates: "Jun 2024 - Present",
    points: [
      "Conducted structured model behavior evaluations across real HR scenarios to identify hallucination patterns, ambiguity risks, and edge-case failures prior to production rollout.",
      "Integrated an LLM-powered conversational agent into HR and Payroll systems, enabling natural language employee self-service within production workflows.",
      "Designed structured prompt templates and implemented deterministic JSON schema validation using Pydantic to ensure reliable, business-rule–compliant LLM outputs for downstream payroll API integration.",
      "Built an AI-to-UI orchestration layer dynamically mapping structured LLM responses to reusable React components, bridging generative AI with enterprise-grade frontend systems.",
      "Implemented LLM observability and experiment tracking using MLflow to monitor prompts, structured outputs, latency, and validation failures for continuous quality improvement.",
      "Resolved rendering bottlenecks in the Employee Directory data grid using row virtualization and memoization, reducing memory usage by 60% and improving render time by 20%.",
      "Reduced UI Library bundle size by ~25% through dependency optimization and tree-shakeable ES module exports, validating improvements via bundle analysis tooling.",
      "Implemented cross-repository GitLab CI/CD workflows to automate builds, versioning, and containerized deployments without manual intervention.",
      "Collaborated with clients, product, and design teams to deliver customizable advanced filtering capabilities across HR modules."
    ],
    technologies: [
      "React",
      "TypeScript",
      "LLMs",
      "Prompt Engineering",
      "Pydantic Schema",
      "MLflow",
      "GitLab CI/CD",
      "Docker",
      "Performance Optimization"
    ]
  },
  {
    company: "University of Texas at Arlington",
    role: "Research Assistant",
    location: "USA",
    dates: "Aug 2023 - May 2024",
    points: [
      "Evaluated multiple pre-trained transformer and foundation models from Hugging Face to determine the best trade-off between response quality, latency, and compute cost for applied university use cases.", 
      "Built reproducible Python-based evaluation pipelines to benchmark inference performance using metrics such as accuracy, latency, throughput, and output consistency under varying prompt and input conditions.",
      "Analyzed prompt sensitivity and output variability through batch inference experiments to improve response stability in real-world deployment scenarios.",
      "Profiled runtime performance (CPU/GPU utilization and memory footprint) to identify optimal model configurations suitable for constrained or cost-sensitive environments.", 
      "Applied lightweight prompt optimization strategies to improve reliability and reduce hallucination risk without modifying model weights.",  
      "Documented model size vs performance vs latency trade-offs and provided actionable recommendations to guide model selection decisions for downstream application integration.", 
      "Collaborated closely with faculty stakeholders to translate experimental findings into practical AI recommendations aligned with real-world operational requirements."
    ],
    technologies: [
      "Python",
      "Hugging Face Transformers",
      "PyTorch",
      "LLM Inference",
      "Prompt Engineering",
      "Model Benchmarking",
      "Performance Profiling"
    ]
  },
  {
    company: "TravTech Inc",
    role: "Software Development Engineer",
    location: "Bangalore, India",
    dates: "Aug 2018 - Jul 2022",
    points: [
      "Implemented microservices-based ETL workflows to process heterogeneous cruise pricing and itinerary feeds from multiple vendors, performing schema validation and normalization prior to database persistence, significantly improving booking data integrity and pricing accuracy.",    
      "Built resilient ingestion pipelines with structured error handling and retry mechanisms to prevent malformed vendor feeds from impacting booking availability and downstream systems.",      
      "Implemented event-driven booking workflows using Apache Kafka to publish booking lifecycle events (create/update/cancel) for email notifications, loyalty point updates, and analytics processing, decoupling microservices and improving reliability during peak booking traffic.",     
      "Designed idempotent event consumers and optimized partition strategies to ensure consistent state management and high-throughput message processing across distributed services.",     
      "Migrated booking invoice storage from on-prem file systems to Amazon S3, enabling secure customer access via pre-signed URLs, eliminating storage constraints, and improving document durability and compliance.",    
      "Developed secure, versioned RESTful APIs for booking management and pricing services with input validation, pagination, and role-based authorization, supporting scalable frontend and partner integrations."
    ],
    technologies: [
      "Java",
      "REST APIs",
      "Apache Kafka",
      "AWS S3",
      "MySQL",
      "Redis",
      "Microservices"
    ]
  },
];

export const projects = [
  {
    title: "Travel Advisory Agent",
    shortTitle: "Travel Advisory Agent",
    description: [
      "Built an agentic AI travel assistant on Databricks using LangGraph with dynamic tool routing between Spark SQL (flight data) and RAG-based policy retrieval.",
      "Implemented structured prompting, schema validation, and MLflow tracking to deliver grounded, production-ready responses with observability and scalability."
    ],
    technologies: ["Databricks", "LangGraph", "Spark SQL", "MLflow", "RAG"],
    image: "chatbot.jpg",
    githubUrl: "https://github.com/sonali1103/travel-advisory-agent",
  },
  {
    title: "LangGraph Concepts & Agentic AI Workflows",
    shortTitle: "LangGraph Concepts",
    description: [
      "Built modular agentic AI workflows using LangGraph to orchestrate multi-step reasoning, tool-calling, and structured LLM interactions with deterministic output validation.",
      "Implemented RAG pipelines with vector search integration, prompt templating, and schema enforcement to improve grounding, reliability, and response consistency in real-world AI applications.",
      "Designed graph-based execution flows supporting dynamic routing, state management, and observability for scalable, production-oriented LLM systems."
    ],
    technologies: [
      "LangGraph",
      "LLMs",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "Pydantic",
      "Vector Databases (FAISS/OpenSearch/Pinecone)"
    ],
    image: "langgraph.png",
    githubUrl: "https://github.com/sonali1103/LangGraph-concepts",
  },
  {
    title: "Image Analysis Pipeline",
    shortTitle: "AWS Image Pipeline",
    description: [
      "A serverless image analysis application built using AWS CDK. Users upload images to an S3 bucket, which triggers a Lambda function that analyzes the image using Amazon Rekognition and stores the results in DynamoDB.",
    ],
    technologies: ["Python", "AWS CDK", "Lambda", "S3", "DynamoDB", "Rekognition"],
    image: "aws.png",
    githubUrl: "https://github.com/sonali1103/aws-cdk-image-analysis",
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
    githubUrl: "https://github.com/sonali1103/chatbot-openai",
  },
  {
    title: "Secure Media Encoding Platform",
    shortTitle: "Media Encoder",
    description: [
      "Developed a Flask web application to securely embed and extract hidden messages in audio, video, and text files using steganographic encoding techniques.",
      "Designed the upload + processing pipeline with configurable embedding parameters and a clean UI for end-to-end message concealment and retrieval."
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    image: "steganography.png",
    githubUrl: "https://github.com/sonali1103/Steganography"
  },
];
export const skills = {
  "Generative AI": [
    "LLMs",
    "Agentic AI",
    "LangGraph",
    "Retrieval-Augmented Generation (RAG)",
    "Prompt Engineering",
    "HuggingFace",
    "Vector Databases (FAISS, OpenSearch, Pinecone)"
  ],

  "Languages, Frameworks & APIs": [
    "Python",
    "TypeScript",
    "Java",
    "React",
    "Next.js",
    "RESTful APIs",
    "Microservices"
  ],
  "Data, Cloud & DevOps": [
    "Databricks (Spark SQL, Model Serving)",
    "AWS (EC2, S3, Lambda, IAM, Bedrock, Rekognition)",
    "Docker",
    "Kubernetes",
    "GitLab CI/CD",
    "Apache Kafka",
    "MLflow"
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
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Technologies Mastered", value: 10, suffix: "+" },
];

export const navItems = [
  { label: "About", href: "#home" },
  // { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const typewriterWords = ["Microservices Architecture", "Agentic Workflows", "AWS Cloud", "CI/CD Automation"];
