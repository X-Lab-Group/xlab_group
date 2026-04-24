import jatoLogo from "@/assets/jato-logo.png";
import zuribillsLogo from "@/assets/zuribills-logo.png";
import karatuaiLogo from "@/assets/karatuai-logo.png";

export interface Product {
  slug: string;
  logo: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  cta: string;
  url?: string;
}

export const products: Product[] = [
  {
    slug: "jato-ai",
    logo: jatoLogo,
    name: "Jato AI",
    tagline: "AI Coding Assistant",
    description:
      "An intelligent coding companion that accelerates development workflows. Jato AI understands your codebase, suggests improvements, generates boilerplate, and helps you write better code faster.",
    longDescription:
      "Jato AI is a next-generation AI coding assistant built for modern developers. It integrates seamlessly into your workflow, providing context-aware code suggestions, automated refactoring, and intelligent bug detection. Whether you're building a startup MVP or maintaining enterprise software, Jato AI helps you ship faster with fewer errors.",
    features: [
      {
        title: "Code Generation",
        description: "Generate production-ready code from natural language descriptions. Jato understands your project context and coding patterns.",
      },
      {
        title: "Smart Autocomplete",
        description: "Context-aware suggestions that go beyond simple completions — Jato predicts entire blocks of logic based on your intent.",
      },
      {
        title: "Bug Detection",
        description: "Catch bugs before they reach production. Jato analyzes your code in real-time and flags potential issues with fix suggestions.",
      },
      {
        title: "Code Reviews",
        description: "Automated code reviews that check for best practices, security vulnerabilities, and performance optimizations.",
      },
    ],
    highlights: [
      "Supports 20+ programming languages",
      "IDE integrations for VS Code, JetBrains & more",
      "Privacy-first — your code never leaves your environment",
      "Team collaboration features built-in",
    ],
    cta: "Try Jato AI",
    url: "https://www.usejato.dev/",
  },
  {
    slug: "zuribills",
    logo: zuribillsLogo,
    name: "Zuribills",
    tagline: "Invoicing App",
    description:
      "A modern invoicing platform designed for freelancers and small businesses. Create professional invoices, track payments, manage clients, and stay on top of your finances effortlessly.",
    longDescription:
      "Zuribills simplifies financial management for freelancers, agencies, and small businesses. From creating beautiful branded invoices to tracking payments and generating financial reports, Zuribills handles the tedious parts of billing so you can focus on growing your business.",
    features: [
      {
        title: "Invoice Creation",
        description: "Create professional, branded invoices in seconds. Customize templates, add your logo, and send directly to clients.",
      },
      {
        title: "Payment Tracking",
        description: "Track every payment in real-time. Get notified when invoices are viewed, paid, or overdue.",
      },
      {
        title: "Client Management",
        description: "Organize your client database with contact details, payment history, and communication logs in one place.",
      },
      {
        title: "Financial Reports",
        description: "Generate comprehensive financial reports — revenue summaries, tax reports, and cash flow analysis at a glance.",
      },
    ],
    highlights: [
      "Multi-currency support for global businesses",
      "Recurring invoices & automatic reminders",
      "Integrations with popular payment gateways",
      "Mobile app for invoicing on the go",
    ],
    cta: "Try Zuribills",
    url: "https://zuribills.com/",
  },
  {
    slug: "karatuai",
    logo: karatuaiLogo,
    name: "KaratuAI",
    tagline: "AI Learning Platform",
    description:
      "An AI-powered learning platform for students worldwide. KaratuAI delivers personalized lessons, interactive quizzes, and adaptive learning paths across primary and secondary education.",
    longDescription:
      "KaratuAI is an AI-powered education platform that gives every student a personalized tutor. It adapts to the learner's level, language, and pace — covering primary and secondary curricula with interactive lessons, quizzes, and AI-led classrooms designed to make studying feel less like a chore and more like a conversation.",
    features: [
      {
        title: "Personalized Lessons",
        description: "AI tutors adapt explanations and pacing to each student's level, learning style, and prior progress.",
      },
      {
        title: "Interactive Quizzes",
        description: "Practice and reinforce concepts with quizzes that adjust difficulty based on performance.",
      },
      {
        title: "AI Classroom",
        description: "Conversational, AI-led classroom sessions that let students ask questions and get explanations on demand.",
      },
      {
        title: "Primary & Secondary Coverage",
        description: "Dedicated experiences for ages 6-11 and 12-18, mapped to the relevant curriculum and exam prep.",
      },
    ],
    highlights: [
      "Personalized AI tutors for every student",
      "Coverage across primary and secondary education",
      "Installable PWA — works on low-bandwidth connections",
      "Family-friendly accounts with parent and school admin views",
    ],
    cta: "Open KaratuAI",
    url: "https://karatuai.com/",
  },
  {
    slug: "karatuai-teachers",
    logo: karatuaiLogo,
    name: "KaratuAI Teacher's Companion",
    tagline: "AI Lesson Planning for African Teachers",
    description:
      "An AI-powered planning workspace built for African classrooms. Karatu helps teachers turn the curriculum into ready-to-teach lessons, schemes of work, and assessments in minutes.",
    longDescription:
      "KaratuAI Teacher's Companion is the teacher-facing arm of the KaratuAI education platform. It generates curriculum-aligned lesson plans, schemes of work, and assessments tailored to African school systems, freeing teachers from hours of manual prep so they can focus on the classroom.",
    features: [
      {
        title: "Lesson Plan Generation",
        description: "Generate structured, curriculum-aligned lesson plans from a topic or learning objective in seconds.",
      },
      {
        title: "Schemes of Work",
        description: "Build and refine term-long schemes of work that map to local syllabi and pacing requirements.",
      },
      {
        title: "Assessment Builder",
        description: "Produce quizzes, tests, and rubrics matched to lesson objectives and student level.",
      },
      {
        title: "Localized Content",
        description: "Outputs are tuned for African curricula and contexts — not generic templates ported from elsewhere.",
      },
    ],
    highlights: [
      "Curriculum-aligned outputs built for African school systems",
      "Cuts lesson prep from hours to minutes",
      "Works as an installable PWA — usable on low-bandwidth connections",
      "Part of the wider KaratuAI learning platform for students and schools",
    ],
    cta: "Open Teacher's Companion",
    url: "https://teachers.karatuai.com/",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
