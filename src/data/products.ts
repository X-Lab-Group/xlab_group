import jatoLogo from "@/assets/jato-logo.png";
import zuribillsLogo from "@/assets/zuribills-logo.png";

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
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
