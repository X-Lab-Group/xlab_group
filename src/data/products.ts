import karatuaiLogo from "@/assets/karatuai-official.png";
import karatuaiTeachersLogo from "@/assets/karatuai-teachers-official.png";

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
    logo: karatuaiTeachersLogo,
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
