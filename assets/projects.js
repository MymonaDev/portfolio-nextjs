import Work10 from "@/assets/works/agency.png";
import Work14 from "@/assets/works/birthday.png";
import Work6 from "@/assets/works/bugatti.png";
import Work9 from "@/assets/works/buyerscouncil.png";
import Work4 from "@/assets/works/compiler.png";
import Work22 from "@/assets/works/etcbd.png";
import Work1 from "@/assets/works/gitdown.png";
import Work7 from "@/assets/works/influencer.png";
import Work8 from "@/assets/works/kazitranslator.jpg";
import Work3 from "@/assets/works/mealpanda.png";
import Work21 from "@/assets/works/oalevel.png";
import Work20 from "@/assets/works/packetbd.png";
import Work5 from "@/assets/works/phonehunter.png";
import Work19 from "@/assets/works/portfolio.png";
import Work17 from "@/assets/works/reliance-education.png";
import Work23 from "@/assets/works/rinors.png";
import Work15 from "@/assets/works/satisfyhost-blog.png";
import Work16 from "@/assets/works/satisfyhost.jpg";
import Work18 from "@/assets/works/taskmaster.png";
import Work2 from "@/assets/works/techhelpbd-nextjs.png";
import Work13 from "@/assets/works/thbd-bn.png";
import Work12 from "@/assets/works/thbd-en.png";
export const projectsData = [
  {
    id: 23,
    image: Work23,
    title: "Rinors",
    projectType: "E-commerce Platform with Admin Panel",
    category: [
      "Fullstack",
      "Next.js",
      "NextAuth",
      "Prisma",
      "tRPC",
      "TailwindCSS",
    ],
    keyImplementations: [
      "Integrated LLM (DeepSeek AI) for automated product information and blog post generation.",
      "Implemented comprehensive testing with Jest for unit tests and Playwright for end-to-end testing.",
      "Built a secure order management system using Next.js/TypeScript, Prisma ORM, and PostgreSQL.",
      "Integrated Cloudflare R2, Meta Pixel, Google Tag Manager, and Google Analytics for user tracking and marketing analytics.",
    ],
    description:
      "E-commerce platform built with the T3 stack (Next.js, tRPC, Prisma, NextAuth). Includes secure auth, product/catalog management, and a responsive storefront styled with TailwindCSS.",
    live: "https://rinors.com",
    client: null,
  },

  {
    id: 21,
    image: Work21,
    title: "O & A Level Academy",
    projectType: "Online Learning Platform",
    category: [
      "Fullstack",
      "Next.js",
      "NextAuth",
      "Prisma",
      "Supabase",
      "Bootstrap",
    ],
    keyImplementations: [
      "Implemented user authentication and role management using NextAuth and Prisma.",
      "Built engaging UI components with Next.js, Bootstrap, Swiper, and React, ensuring seamless interactivity.",
      "Used Supabase for the database and deployed on Google Cloud, securing sensitive data.",
    ],
    description:
      "Implemented user authentication and role management using NextAuth and Prisma. Built engaging UI components with Next.js, Bootstrap, Swiper, and React, ensuring seamless interactivity. Used Supabase for database and deployed on Google Cloud securing sensitive data.",
    live: "https://o-level.com/",
    client: null,
  },

  {
    id: 20,
    image: Work20,
    title: "PacketBD",
    projectType: "Custom Packaging Platform",
    category: [
      "Fullstack",
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "TailwindCSS",
    ],
    keyImplementations: [
      "Built a secure order management system with Node.js/Express and PostgreSQL.",
      "Developed responsive UI using React and Tailwind CSS.",
      "Integrated AWS S3, Meta Pixel, Google Tag Manager, and Google Analytics for user tracking and marketing.",
    ],
    description:
      "Built a secure order management system with Node.js/Express and PostgreSQL. Developed responsive UI using React and Tailwind CSS. Integrated AWS S3, Meta Pixel, Google Tag Manager and Google Analytics for user tracking and marketing.",
    live: "https://packetbd.com/",
    client: null,
  },
  {
    id: 22,
    image: Work22,
    title: "ETC Bangladesh",
    category: [
      "Fullstack",
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "tRPC",
      "TailwindCSS",
    ],
    description:
      "Built a comprehensive e-commerce platform for electronics products including air conditioners, refrigerators, and laboratory equipment. Implemented authentication, product management, and admin dashboards with NextAuth, Prisma, and tRPC. Designed responsive, high-performance UI using Next.js, TypeScript, and Tailwind CSS. Integrated AWS S3 for media handling and Meta Pixel to monitor user behavior and drive targeted ads.",
    live: "https://etcbangladesh.com/",
    client: null,
  },
  {
    id: 1,
    image: Work1,
    title: "GitDown - Github Folder Downloader",
    category: ["React", "Tailwind CSS", "GitHub API"],
    description:
      "GitHub doesn't provide us any option to download a specific folder from a Github repo. So, I integrated the GitHub API and created this tool to solve the problem.",
    live: "https://techhelpbd.com/gitdown/",
    client: "https://github.com/KaziMahbuburRahman/gitdown",
  },
  {
    id: 4,
    image: Work4,
    title: "Code Compiler",
    category: ["React", "API Integration"],
    description:
      "Online code compiler supporting 40+ programming languages. Features real-time code execution with output details (status, time, memory) and code storage via LocalStorage.",
    live: "https://compiler.techhelpbd.com",
    client: "https://github.com/KaziMahbuburRahman/compiler",
  },
  {
    id: 18,
    image: Work18,
    title: "Task Master",
    category: [
      "Fullstack",
      "React",
      "Redux Toolkit",
      "RTK Query",
      "MongoDB",
      "Firebase",
      "TailwindCSS",
    ],
    description:
      "Built a full-stack task management application with real-time updates using Redux Toolkit Query and Firebase",
    live: "https://taskmaster-react-redux.vercel.app",
    client: "https://github.com/KaziMahbuburRahman/taskmaster-redux",
    server: "https://github.com/KaziMahbuburRahman/taskmaster-server",
  },
  {
    id: 19,
    image: Work19,
    title: "Next.js Portfolio",
    category: ["Next.js", "TailwindCSS", "Framer Motion"],
    description:
      "A portfolio website built with Next.js, TailwindCSS, and Framer Motion",
    live: "https://mahbub.techhelpbd.com",
    client: null,
  },
  {
    id: 2,
    image: Work2,
    title: "Tech Help BD",
    category: ["frontend", "Next.js", "Framer Motion", "shadcn/ui"],
    description:
      "A modern tech blog and tutorial website built with Next.js and Framer Motion animations. Features a clean UI with shadcn components.",
    live: "https://techhelpbd.vercel.app",
    client: "https://github.com/KaziMahbuburRahman/techhelpbd-nextjs",
    // client: null,
  },
  {
    id: 3,
    image: Work3,
    title: "Meal Panda",
    category: ["frontend", "React"],
    description:
      "A food delivery application interface built with React featuring a responsive design and interactive menu browsing experience.",
    live: "https://mealpanda-react.netlify.app/",
    client: "https://github.com/KaziMahbuburRahman/mealpanda",
    // client: null,
  },
  {
    id: 5,
    image: Work5,
    title: "Phone Hunter",
    category: "frontend",
    description:
      "A mobile phone catalog application with search and filtering capabilities, built using vanilla JavaScript and modern CSS.",
    live: "https://KaziMahbuburRahman.github.io/phone-hunter/",
    client: "https://github.com/KaziMahbuburRahman/phone-hunter",
    // client: null,
  },
  {
    id: 6,
    image: Work6,
    title: "Bugatti Sports Car Store",
    category: "frontend",
    description:
      "A luxury car showroom website showcasing Bugatti models with interactive galleries and detailed specifications.",
    live: "https://bugatti-sports-car-store.netlify.app",
    client: "https://github.com/KaziMahbuburRahman/bugatti-sports-car-store",
    // client: null,
  },
  {
    id: 7,
    image: Work7,
    title: "Influencer Gear",
    category: ["frontend", "React"],
    description:
      "An e-commerce platform for influencer merchandise featuring product galleries and shopping cart functionality.",
    live: "https://KaziMahbuburRahman.github.io/influencer-gear/",
    client: "https://github.com/KaziMahbuburRahman/influencer-gear",
    // client: null,
  },
  {
    id: 8,
    image: Work8,
    title: "Kazi Translator",
    category: "React Native",
    description:
      "A mobile translation app built with React Native supporting multiple languages and offline translation capabilities.",
    live: "https://play.google.com/store/apps/details?id=com.techhelpbd.kazitranslator",
    // client: "https://github.com/KaziMahbuburRahman/Kazi-Translator",
    client: null,
  },
  {
    id: 10,
    image: Work10,
    title: "Agency Portfolio",
    category: "frontend",
    description:
      "A professional agency portfolio website showcasing services, team members, and past projects with modern design.",
    live: "https://techhelpbd.netlify.app/",
    client: "https://github.com/KaziMahbuburRahman/agency-portfolio",
    // client: null,
  },
  {
    id: 11,
    image: Work13,
    title: "Tech Help BD Blog (Bangla)",
    category: "WordPress",
    description:
      "A comprehensive tech blog in Bangla language built on WordPress featuring tutorials and tech news articles.",
    live: "https://techhelpbd.com",
    client: null,
  },
  {
    id: 12,
    image: Work12,
    title: "Tech Help BD Blog (English)",
    category: "WordPress",
    description:
      "The English version of Tech Help BD blog providing tech tutorials and news for an international audience.",
    live: "https://techhelpbd.com/en",
    client: null,
  },
  {
    id: 14,
    image: Work14,
    title: "Birthday Wish Website",
    category: "frontend",
    description:
      "An interactive birthday celebration website with animations and personalized messages for special occasions.",
    live: "https://hbdisha.vercel.app",
    // client: "https://github.com/KaziMahbuburRahman/hbdshany",
    client: null,
  },
  {
    id: 15,
    image: Work15,
    title: "SatisfyHost Blog",
    category: "WordPress",
    description:
      "A hosting company blog built on WordPress providing hosting tutorials and industry news to customers.",
    live: "https://satisfyhost.com/blog",
    client: null,
  },
  {
    id: 16,
    image: Work16,
    title: "SatisfyHost",
    category: "React Native",
    description:
      "A mobile app for hosting service management allowing users to monitor and control their hosting services.",
    live: "https://play.google.com/store/apps/details?id=com.techhelpbd.satisfyhost",
    client: "https://github.com/KaziMahbuburRahman/satisfyhost",
    // client: null,
  },

  {
    id: 9,
    image: Work9,
    title: "Buyers Council",
    category: ["Laravel", "frontend", "TailwindCSS"],
    description:
      "A membership platform built with Laravel and TailwindCSS for managing buyer organizations and their activities.",
    live: "https://buyerscouncil.org",
    client: null,
  },
  {
    id: 17,
    image: Work17,
    title: "Reliance Education",
    category: ["React", "frontend", "TailwindCSS"],
    description:
      "An educational institution website built with React and TailwindCSS featuring course management and student portal.",
    live: "https://total-student-care-react.vercel.app/",
    client: "https://github.com/KaziMahbuburRahman/Reliance-Education",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "Fullstack",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  // {
  //   name: "React Native",
  // },
  // {
  //   name: "WordPress",
  // },
];

export const skillsData = {
  technologies: [
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "Framer Motion",
    "MongoDB",
    "TailwindCSS",
    "Node.js",
    "Express",
    "Git",
    "DigitalOcean",
  ],
};

export const experienceData = [
  {
    company: "Devnest",
    position: "Software Developer",
    period: "May 2025 - Present",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Leading a team of 6 members on multiple web and e-commerce projects",
      "Designing and developing cloud-native monolithic services",
      "Delivering production-ready projects with modern tech stack",
    ],
  },
  {
    company: "SatisfyHost",
    position: "Technical Support Engineer (MERN)",
    period: "May 2024 - Present",
    responsibilities: [
      "Provided deployment support for MERN stack hosting clients",
      "Resolved CORS, MongoDB, and deployment-related issues",
      "Performed code reviews for client applications",
    ],
  },
  {
    company: "AIT",
    position: "Front-End Web Developer (Intern)",
    period: "Sept 2023 - Dec 2023",
    location: "Cumilla, Bangladesh",
    achievements: [
      "Received Best Performer Award",
      "Collaborated with 15 developers on front-end solutions",
    ],
  },
];

export const educationData = [
  {
    institution: "CCN University of Science & Technology",
    degree: "BSc in CSE",
    period: "2024 - 2028 (expected)",
    location: "Bangladesh",
  },
  {
    institution: "Cumilla Polytechnic Institute",
    degree: "Diploma in Computer Science & Technology",
    period: "2019 - 2023",
    location: "Bangladesh",
    gpa: "3.70",
  },
];

export const certificationData = [
  {
    title: "Master Git and Github - Beginner to Expert",
    link: "View certificate", // Update with actual certificate link
  },
  {
    title: "Tailwind CSS From Scratch | With Multiple Projects",
    link: "View certificate", // Update with actual certificate link
  },
];
