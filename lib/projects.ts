import { cn } from "@/lib/utils";

export type ProjectCategory =
  | "All"
  | "Web"
  | "AI"
  | "Mobile"
  | "Design"
  | "SaaS";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  gallery: string[];
  problem: string;
  solution: string;
  features: string[];
  results?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "capi",
    title: "Capi",
    description:
      "Modern web platform built with clean UI and optimized performance.",
    longDescription:
      "Capi is a modern web application focused on performance, scalability, and clean user experience. The project emphasizes responsive layouts, optimized loading times, and structured architecture.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/realisations/capi-hero.png",
    gallery: ["/realisations/capi-hero.png"],
    problem: "Need for a scalable and modern web platform.",
    solution:
      "Built a clean, optimized and maintainable architecture using modern web technologies.",
    features: [
      "Responsive design",
      "Modern UI system",
      "Performance optimized",
      "Clean component architecture",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "decode-hack",
    title: "Decode Hack",
    description: "Hackathon platform and event website.",
    longDescription:
      "Decode Hack is an event-focused website designed for hackathon organization and participant management.",
    category: "Web",
    tags: ["Next.js", "Event", "Landing Page"],
    image: "/realisations/decode-hero.png",
    gallery: ["/realisations/decode-hero.png"],
    problem: "Need for an engaging and informative hackathon website.",
    solution:
      "Built a dynamic and visually engaging landing page with structured sections.",
    features: [
      "Event presentation",
      "Registration system",
      "Responsive layout",
    ],
    demoUrl: "/realisations/decode.png",
  },
  {
    id: "3",
    slug: "proxima",
    title: "Proxima",
    description: "Professional digital presentation platform.",
    longDescription:
      "Proxima is a professional digital product designed for structured presentation and brand identity.",
    category: "Design",
    tags: ["Branding", "UI/UX"],
    image: "/realisations/proxima-hero.png",
    gallery: ["/realisations/proxima-hero.png"],
    problem: "Need for strong visual identity and presentation.",
    solution: "Designed a structured and visually appealing brand system.",
    features: [
      "Visual identity system",
      "Clean layout structure",
      "Professional presentation assets",
    ],
    demoUrl: "/realisations/proxima.pdf",
    featured: true,
  },
  {
    id: "4",
    slug: "digitalcanvas",
    title: "DigitalCanvas",
    description: "Interactive digital web experience.",
    longDescription:
      "DigitalCanvas is an interactive web application designed for creativity and digital experiences.",
    category: "Web",
    tags: ["Interactive", "Creative", "Frontend"],
    image: "/realisations/digital-canvas-hero.png",
    gallery: ["/realisations/digital-canvas-hero.png"],
    problem: "Need for an engaging interactive web tool.",
    solution: "Built a responsive and interactive frontend-focused experience.",
    features: [
      "Interactive UI",
      "Responsive design",
      "Modern frontend architecture",
    ],
    demoUrl: "https://digitalcanvas.vercel.app/",
    featured: true,
  },
  {
    id: "5",
    slug: "ai-summerizer",
    title: "AI Summerizer",
    description: "AI-powered document summarization tool.",
    longDescription:
      "AI Summerizer is an AI tool designed to summarize long documents into concise insights using natural language processing.",
    category: "AI",
    tags: ["AI", "NLP", "Automation"],
    image: "/realisations/micropdf-hero.png",
    gallery: ["/realisations/micropdf-hero.png"],
    problem: "Users struggle to process long documents efficiently.",
    solution:
      "Implemented AI-based summarization to extract key insights quickly.",
    features: ["Text summarization", "AI-powered analysis", "Fast processing"],
    featured: true,
  },
  {
    id: "6",
    slug: "mohandisson",
    title: "Mohandisson",
    description: "Professional SaaS platform.",
    longDescription:
      "Mohandisson is a structured SaaS web application built for scalability and business workflows.",
    category: "SaaS",
    tags: ["SaaS", "Dashboard", "Web App"],
    image: "/realisations/mohandisson-hero.png",
    gallery: ["/realisations/mohandisson-hero.png"],
    problem: "Need for structured SaaS architecture.",
    solution: "Developed modular and scalable SaaS infrastructure.",
    features: [
      "Dashboard system",
      "User management",
      "Scalable backend structure",
    ],
    demoUrl: "https://app.mohandissoun.com/",
  },
  {
    id: "7",
    slug: "zappicon",
    title: "Zappicon",
    description: "Modern tech startup website.",
    longDescription:
      "Zappicon is a startup-oriented website focused on clarity, branding, and digital presence.",
    category: "Web",
    tags: ["Startup", "Landing Page"],
    image: "/realisations/zappicon-hero.png",
    gallery: ["/realisations/zappicon-hero.png"],
    problem: "Need for strong startup web presence.",
    solution: "Designed and built a modern, conversion-focused website.",
    features: ["Clean branding", "Conversion optimized", "Responsive layout"],
    demoUrl: "https://zappicon.com/",
    featured: true,
  },
  {
    id: "8",
    slug: "ai-defect-detection",
    title: "AI Defect Detection",
    description: "Computer vision system for defect detection.",
    longDescription:
      "AI Defect Detection is a machine learning system designed to identify product defects automatically.",
    category: "AI",
    tags: ["Computer Vision", "AI", "ML"],
    image: "/realisations/ddp-hero.png",
    gallery: ["/realisations/ddp-hero.png"],
    problem: "Manual inspection is slow and error-prone.",
    solution: "Implemented computer vision model for automated detection.",
    features: [
      "Automated defect detection",
      "Image processing pipeline",
      "ML model integration",
    ],
    featured: true,
  },
  {
    id: "9",
    slug: "thiqah",
    title: "Thiqah",
    description: "Professional corporate identity and branding project.",
    longDescription:
      "Thiqah represents a comprehensive branding and identity project designed to convey trust and professionalism.",
    category: "Design",
    tags: ["Branding", "Corporate Identity"],
    image: "/realisations/thiqah-hero.png",
    gallery: ["/realisations/thiqah-hero.png"],
    problem: "Need for a trustworthy corporate identity.",
    solution: "Created a cohesive and professional brand design language.",
    features: ["Brand guidelines", "Logo design", "Corporate assets"],
    demoUrl: "/realisations/thiqah.pdf",
    featured: true,
  },
  {
    id: "10",
    slug: "ncs-hack-website",
    title: "NCS Hack Website",
    description: "Official website for the NCS Hackathon event.",
    longDescription:
      "The NCS Hack Website serves as the central hub for the hackathon, managing registrations and information dissemination.",
    category: "Web",
    tags: ["Next.js", "Hackathon", "Event"],
    image: "/realisations/ncs-hack-hero.png",
    gallery: ["/realisations/ncs-hack-hero.png"],
    problem: "Centralized platform needed for hackathon management.",
    solution: "Developed an informative and functional event website.",
    features: [
      "Participant registration",
      "Event schedule",
      "Sponsor highlights",
    ],
    demoUrl: "https://ncs-hack.vercel.app/",
  },
  {
    id: "11",
    slug: "assurini",
    title: "Assurini",
    description: "Insurance services digital platform.",
    longDescription:
      "Assurini is a digital platform designed to streamline insurance services and customer interaction.",
    category: "SaaS",
    tags: ["Fintech", "Insurance", "Web App"],
    image: "/realisations/assurini-hero.png",
    gallery: ["/realisations/assurini-hero.png"],
    problem: "Insurance processes are often complex and offline.",
    solution: " digitized insurance workflows for better user accessibility.",
    features: ["Policy management", "Claim processing", "User dashboard"],
  },
  {
    id: "12",
    slug: "artist-calendar",
    title: "Artist Calendar",
    description: "Event scheduling tool for artists and creatives.",
    longDescription:
      "Artist Calendar helps creatives manage their bookings, events, and schedules in one place.",
    category: "Web",
    tags: ["Productivity", "Calendar", "React"],
    image: "/realisations/artist-calendar-hero.png",
    gallery: ["/realisations/artist-calendar-hero.png"],
    problem: "Artists struggle to manage scattered schedules.",
    solution: "Created a dedicated calendar tool for creative professionals.",
    features: ["Event booking", "Schedule management", "Portfolio integration"],
  },
  {
    id: "13",
    slug: "cge",
    title: "CGE",
    description: "Corporate website for General Energy Company.",
    longDescription:
      "CGE's website showcases their energy solutions, projects, and corporate values.",
    category: "Web",
    tags: ["Corporate", "Energy", "Next.js"],
    image: "/realisations/cge-hero.png",
    gallery: ["/realisations/cge-hero.png"],
    problem: "Need for a modern corporate web presence.",
    solution: "Built a professional corporate website with comprehensive info.",
    features: ["Project showcase", "Service listing", "Corporate info"],
    demoUrl: "https://general-energy-company-mxcu.vercel.app/",
  },
  {
    id: "14",
    slug: "enigma",
    title: "Enigma",
    description: "Mysterious interactive web experience.",
    longDescription:
      "Enigma offers users a unique, interactive journey through a series of web-based puzzles and challenges.",
    category: "Web",
    tags: ["Interactive", "Puzzle", "Creative"],
    image: "/realisations/enigma-hero.png",
    gallery: ["/realisations/enigma-hero.png"],
    problem: "Creating an engaging digital puzzle experience.",
    solution: "Developed an immersive interactive web application.",
    features: ["Interactive puzzles", "Immersive design", "Game logic"],
    demoUrl: "https://enigma-sand-seven.vercel.app/",
  },
  {
    id: "15",
    slug: "ai-nutrition-helper",
    title: "AI Nutrition Helper",
    description: "AI-based personalized nutrition advice.",
    longDescription:
      "AI Nutrition Helper uses artificial intelligence to analyze dietary habits and suggest personalized nutrition plans.",
    category: "AI",
    tags: ["AI", "Health", "Nutrition"],
    image: "/realisations/kalb-el-louz-hero.png",
    gallery: ["/realisations/kalb-el-louz-hero.png"],
    problem: "Personalized nutrition advice is expensive and inaccessible.",
    solution: "Used AI to democratize access to nutritional guidance.",
    features: ["Diet analysis", "Meal planning", "Health tracking"],
    demoUrl: "https://enigma-sand-seven.vercel.app/",
  },
  {
    id: "16",
    slug: "micro-hack-2",
    title: "Micro Hack 2.0 Website",
    description: "Website for the second edition of Micro Hack.",
    longDescription:
      "Dedicated event website for Micro Hack 2.0, facilitating participant interaction and information.",
    category: "Web",
    tags: ["Hackathon", "Event", "Community"],
    image: "/realisations/micro-hack-2.0-hero.png",
    gallery: ["/realisations/micro-hack-2.0-hero.png"],
    problem: "Managing a large scale hackathon event.",
    solution: "Deployed a scalable event website for registration and info.",
    features: ["Hackathon workflow", "Team registration", "Live updates"],
  },
  {
    id: "17",
    slug: "ramzy-kemmoun-portfolio",
    title: "Ramzy KEMMOUN's Portfolio",
    description: "Personal portfolio website for a developer.",
    longDescription:
      "A showcase of Ramzy KEMMOUN's skills, projects, and professional journey.",
    category: "Design",
    tags: ["Portfolio", "Personal", "Dev"],
    image: "/realisations/ramzy-kemmoun-portfolio-hero.png",
    gallery: ["/realisations/ramzy-kemmoun-portfolio-hero.png"],
    problem: "Showcasing personal work effectively.",
    solution: "Designed a clean, project-focused personal portfolio.",
    features: ["Project gallery", "About section", "Contact form"],
  },
  {
    id: "18",
    slug: "nightbyte-website",
    title: "Nightbyte Website",
    description: "Official website for the Nightbyte tech community.",
    longDescription:
      "Nightbyte's website serves as a community hub for tech enthusiasts, featuring events and resources.",
    category: "Web",
    tags: ["Community", "Tech", "Next.js"],
    image: "/realisations/nightbyte-hero.png",
    gallery: ["/realisations/nightbyte-hero.png"],
    problem: "Building a digital home for a tech community.",
    solution: "Created a vibrant community website with event features.",
    features: ["Community news", "Event calendar", "Member showcase"],
    demoUrl: "https://www.nightbyte.space/",
  },
  {
    id: "19",
    slug: "myworkflow",
    title: "MyWorkflow",
    description: "Productivity and workflow management tool.",
    longDescription:
      "MyWorkflow helps users streamline their daily tasks and optimize their productivity processes.",
    category: "SaaS",
    tags: ["Productivity", "Workflow", "SaaS"],
    image: "/realisations/myworkflow.png",
    gallery: ["/realisations/myworkflow.png"],
    problem: "Inefficient personal and team workflow management.",
    solution: "Built a customizable workflow automation tool.",
    features: ["Task management", "Process automation", "Efficiency analytics"],
  },
  {
    id: "20",
    slug: "geni-ocr",
    title: "Geni OCR",
    description: "Optical Character Recognition solution.",
    longDescription:
      "Geni OCR extracts text from images and documents with high accuracy using advanced machine learning.",
    category: "AI",
    tags: ["AI", "OCR", "Machine Learning"],
    image: "/realisations/geni-ocr.png",
    gallery: ["/realisations/geni-ocr.png"],
    problem: "Data entry from physical documents is tedious.",
    solution: "Implemented automated OCR for instant text extraction.",
    features: [
      "Text extraction",
      "Document scanning",
      "Multi-language support",
    ],
  },
];

export const getAllProjects = () => projects;

export const bestProjects = () =>
  projects.filter((project) => !!project.featured);

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: ProjectCategory) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};
