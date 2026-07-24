import { ProjectInfo, SkillsSet, TestimonialsInfo } from "@/types/types";

export const skills: SkillsSet[] = [
  { name: "React Native", level: 75 },
  { name: "Flutter", level: 35 },
  { name: "TypeScript", level: 65 },
  { name: "iOS Development", level: 0 },
  { name: "Android Development", level: 65 },
  { name: "UI/UX Design", level: 45 },
];

export const testimonials: TestimonialsInfo[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Alex delivered an exceptional mobile app that exceeded our expectations. The attention to detail and user experience is outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content:
      "Working with Alex was a pleasure. The app was delivered on time and the code quality is top-notch. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead at CreativeStudio",
    content:
      "Alex has an excellent eye for design and technical implementation. The collaboration was smooth and professional.",
    rating: 5,
  },
];

export const projects: ProjectInfo[] = [
  {
    id: 1,
    title: "Space Mobile App",
    status: "Live",
    category: "React Native",
    description:
      "StellarScope is a simple app that helps you explore space events, space news, and stunning images from NASA in one place.",
    images: {
      cover: "/images/stellar_scope/cover.png",
      logo: "/images/stellar-scope-logo.png",
      gallery: [
        "/images/stellar_scope/screenshot_1.png",
        "/images/stellar_scope/screenshot_2.png",
        "/images/stellar_scope/screenshot_3.png",
        "/images/stellar_scope/screenshot_4.png",
        "/images/stellar_scope/screenshot_5.png",
        "/images/stellar_scope/screenshot_6.png",
        "/images/stellar_scope/screenshot_7.png",
        "/images/stellar_scope/screenshot_8.png",
        "/images/stellar_scope/screenshot_9.png",
        "/images/stellar_scope/screenshot_10.png",
        "/images/stellar_scope/screenshot_11.png",
        "/images/stellar_scope/screenshot_12.png",
        "/images/stellar_scope/screenshot_13.png",
        "/images/stellar_scope/screenshot_14.png",
      ],
    },
    techStack: ["React Native", "TypeScript", "TanStack", "Zustand", "MMKV"],
    link: "/projects/stellar_scope",
  },
  {
    id: 2,
    title: "Gamer Dictionary App",
    status: "In Dev",
    category: "React Native",
    description:
      "Scalable game information look up, provide fast and accurate information",
    images: {
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-N3iM8zc4z8rhHIX-dIvAPaDDJ6WbKRJn3KLtotn2rIt07Y_mf62hASoOjKEelJiZNbbnErbuOpsqA2dCFYv1NdXZyuOQmUU4IXBjYeo2qnPq3i2YK6KFchUYp7qo6iFDxATdbwb01Dn431_5Y4N4POqhsPr5L9HgvSnjvNnKxBqYtZe-1_Wg4IiXbDU_x22A8wNKyIWmD1Ozj0L0ICeA51DNK1WTSR71vwxeJING7fZNEMrNtz0BIbSNd4-mFSGs-heJHtU3P_0",
      logo: "",
      gallery: [],
    },
    techStack: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    id: 3,
    title: "Seshat Narrative Engine",
    status: "In Dev",
    category: "Web",
    description:
      "A sophisticated, local-first world-building tool and narrative engine designed for novelists, game designers, and world-builders.",
    images: {
      cover: "/images/seshat/editor.png",
      logo: "/images/seshat-logo.png", // Missing?
      gallery: [
        "/images/seshat/editor.png",
        "/images/seshat/knowledge-graph.png"
      ],
    },
    techStack: ["React 19", "TypeScript", "Vite", "Cloudflare", "Legend State"],
    link: "/projects/seshat",
  },
];
