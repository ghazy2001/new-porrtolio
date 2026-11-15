export const myProjects = [
  {
    id: 15,
    title: "TAMAYOZ | ENTERPRISE ERP PLATFORM",
    description:
      "A modern, high-performance enterprise SPA client for Odoo ERP systems, replacing legacy web interfaces with dynamic multi-view rendering and real-time collaboration.",
    subDescription: [
      "Architected a modern Single Page Application (SPA) frontend that deeply integrates with Odoo ERP backend using custom REST APIs and JSON-RPC protocols.",
      "Developed a dynamic multi-view rendering engine capable of parsing backend view architectures to generate dynamic Form Views, Editable Lists, Kanban Boards, Gantt Charts, and Calendars.",
      "Engineered real-time collaboration and productivity workflows including live Chatter messaging, activity logs, multi-step wizards, and an advanced dialog orchestrator.",
      "Configured reverse proxy architecture (via Vercel & Nginx) with secure credential management to resolve cross-domain session cookies and CORS restrictions.",
      "Implemented scalable state management using Zustand and interactive analytical dashboards with Recharts and Framer Motion, fully optimized for multi-language enterprise workflows.",
    ],
    href: "https://tamayoz.crevisoft.com/",
    image: "/assets/projects/tamayoz.png",
    tags: [
      { id: 1, name: "React 19", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Zustand", path: "/assets/logos/zustand.svg" },
      { id: 4, name: "Odoo ERP", path: "/assets/logos/odoo.png" },
      { id: 5, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 6, name: "Axios", path: "/assets/logos/axios.png" },
    ],
  },
  {
    id: 14,
    title: "STORIA | E-COMMERCE ECOSYSTEM",
    description:
      "A high-performance Full-Stack e-commerce platform for a premium brand, seamlessly integrated with the Salla ecosystem for streamlined operations.",
    subDescription: [
      "Architected a custom MERN-stack infrastructure to bridge personalized brand aesthetics with Salla's e-commerce API, ensuring real-time data synchronization.",
      "Developed a sophisticated, mobile-first UI using React and Tailwind CSS, focused on high-end presentation and intuitive user flows.",
      "Engineered a robust Node.js/Express backend to handle custom business logic, secure API communication, automated webhooks, and order processing.",
      "Optimized site performance and SEO-readiness to handle high traffic volumes while maintaining smooth, 60 FPS animations.",
      "Integrated scalable database management with MongoDB to track custom user interactions and enhance marketing capabilities.",
    ],
    href: "https://storiasa.com/",
    image: "/assets/projects/project14.PNG",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/nodejs.png" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 1,
    title: "MN MARKETING AGENCY",
    description:
      "A cutting-edge Full-Stack marketing platform designed with React 19 and Express 5, featuring high-end animations and scalable data layers.",
    subDescription: [
      "Architected a modern Full-Stack system using React 19, Vite, and Express 5 for maximum performance.",
      "Implemented a secure backend with JWT authentication, Bcrypt encryption, and MongoDB for scalable data management.",
      "Enhanced user immersion with Lenis smooth scrolling and sophisticated motion graphics using GSAP and Framer Motion.",
      "Ensured zero layout shift (CLS < 0.02) during page transitions with optimized image delivery and responsive UI layouts.",
    ],
    href: "https://mnmarketingagency.com/",
    image: "/assets/projects/project13.png",
    tags: [
      { id: 1, name: "React 19", path: "/assets/logos/react.svg" },
      { id: 2, name: "Express 5", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "GSAP", path: "/assets/logos/gsap.png" },
    ],
  },
  {
    id: 16,
    title: "TREESHIFT | GIT WORKTREE ENGINE",
    description:
      "A blazing-fast Git worktree manager and CLI developer tool with interactive TUI, built with TypeScript.",
    subDescription: [
      "Engineered a high-performance developer tool that eliminates Git context-switching overhead using isolated worktrees.",
      "Implemented auto-synchronization, branch transplanting, and interactive TUI interface in TypeScript for fluid terminal workflows.",
      "Published as an open-source tool, gaining active developer adoption and community stars.",
    ],
    href: "https://github.com/ghazy2001/treeshift",
    image: "/assets/projects/treeshift.png",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.png" },
      { id: 3, name: "Git CLI", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 10,
    title: "IPHONE 15 PRO 3D EXPERIENCE",
    description:
      "A 3D product showcase recreating the Apple experience, featuring high-fidelity interactive models and smooth storytelling animations.",
    subDescription: [
      "Architected complex 3D scenes using @react-three/fiber and utilized @react-three/drei for optimized model loading.",
      "Orchestrated cinematic scroll-triggered animations and seamless transitions using GSAP and the @gsap/react hook.",
      "Integrated Sentry for real-time error tracking and performance monitoring.",
      "Delivered consistent 60 FPS 3D rendering with sub-2s load time across mobile and desktop devices.",
    ],
    href: "https://iphone-r3f.vercel.app/",
    image: "/assets/projects/project10.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Three.js", path: "/assets/logos/threejs.svg" },
      { id: 3, name: "GSAP", path: "/assets/logos/gsap.png" },
      { id: 4, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "NEXT.JS ENTERPRISE DASHBOARD",
    description:
      "A modern dashboard interface built with Next.js, featuring server-side rendering, real-time analytics, and user role management.",
    subDescription: [
      "Built with Next.js App Router for server-side rendering and maximum data retrieval performance.",
      "Engineered dynamic revenue charts, customer invoices, and financial status metrics.",
      "Integrated secure authentication and role-based access control.",
    ],
    href: "https://nextjs-dashboard-sigma-kohl-wvrahynsgr.vercel.app/dashboard",
    image: "/assets/projects/project6.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 12,
    title: "GAME SITE SHOWCASE",
    description:
      "An immersive gaming showcase site focusing on high-end motion graphics, smooth transitions, and interactive user experience.",
    subDescription: [
      "Orchestrated complex animation timelines and state-driven transitions using GSAP and @gsap/react.",
      "Developed a highly responsive and performant UI with utility-first Tailwind CSS.",
      "Focused on creative frontend engineering and micro-interactions.",
    ],
    href: "https://game-site-navy.vercel.app/",
    image: "/assets/projects/project12.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "GSAP", path: "/assets/logos/gsap.png" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 11,
    title: "AI APP SUITE & PROTOTYPES",
    description:
      "An interactive suite of AI-inspired web applications with modular components and fast modern tooling.",
    subDescription: [
      "Modern UI design with responsive layouts and accessible components.",
      "Built with Vite and React for high-speed client performance.",
      "Modular and extensible code architecture.",
    ],
    href: "https://ai-app-portfolio.vercel.app/",
    image: "/assets/projects/project11.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "COMMERCIAL ACCESSORIES E-SHOP",
    description:
      "A commercial portfolio and e-commerce shop web application featuring single-page navigation and product catalogs.",
    subDescription: [
      "Built with React and React Router for seamless single-page navigation.",
      "Integrated polished Material UI components and responsive product grids.",
      "Implemented client-side cart logic and product filtering.",
    ],
    href: "https://ghazy-accessories.vercel.app/",
    image: "/assets/projects/project3.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+201003485691",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mahmoud-ghazy-48a19924a",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ghazy2001",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Crevisoft",
    job: "Frontend Engineer (Enterprise Systems)",
    date: "2024 - Present",
    contents: [
      "Architected the high-performance TAMAYOZ enterprise web client for Odoo ERP using React 19, TypeScript, Vite, and Zustand.",
      "Engineered dynamic multi-view rendering engine parsing backend XML view architectures to render dynamic editable data grids, Kanban boards, and Gantt charts.",
      "Optimized enterprise data visualization, achieving sub-1.2s LCP and maintaining 60 FPS across 10,000+ record datasets with TanStack virtualization.",
      "Resolved cross-domain session cookie drops and eliminated 99% of CORS authentication errors using custom Vercel & Nginx reverse proxy routing.",
    ],
  },
  {
    title: "Modern Wood Manufacturing & Trading",
    job: "Operations & Financial Accounting Manager",
    date: "2020 - 2024",
    contents: [
      "Directed operations and financial accounting for a large-scale manufacturing facility, managing 600K+ EGP monthly cash flow and raw material procurement.",
      "Supervised inventory pipelines, billing reconciliation, and production scheduling for commercial clients and workshops.",
      "Developed deep expertise in double-entry bookkeeping, ledger audits, and operational workflows that now inform my software architecture for ERP and FinTech applications.",
    ],
  },
  {
    title: "Kitchen Hardware & Interior Solutions",
    job: "Founder & Business Owner",
    date: "2024",
    contents: [
      "Founded and managed a commercial retail business specializing in modern kitchen fittings and dressing room hardware.",
      "Managed vendor purchasing, inventory turnover, and direct client accounts, gaining hands-on commercial experience in B2B client relations.",
    ],
  },
];

export const reviews = [
  {
    name: "Eng. Mohamed",
    username: "@m-storia · Project Lead @ Storia",
    body: "Mahmoud shipped the entire custom React frontend integrated with Salla's API in just two days! His speed, attention to detail, and modern UI execution were incredible. Truly exceptional work.",
    img: "https://api.dicebear.com/7.x/identicon/svg?seed=MohamedStoria",
  },
  {
    name: "Mohamed Fawzy",
    username: "@mfawzy · IT & Systems Lead @ Crevisoft",
    body: "Mahmoud is a master of his craft. He architected the TAMAYOZ Odoo ERP web client, built high-performance dynamic data tables, and eliminated persistent CORS auth issues effortlessly. A top-tier engineer!",
    img: "https://api.dicebear.com/7.x/identicon/svg?seed=MohamedFawzy",
  },
  {
    name: "Twenty CRM Team",
    username: "@twentyhq · 20k+ Stars Open-Source CRM",
    body: "Great contribution addressing thinking signature drift in the AI chat browsing context. Clean, idiomatic TypeScript fix with solid test coverage. Merged into core!",
    img: "https://avatars.githubusercontent.com/u/104164344?s=48&v=4",
  },
  {
    name: "Better-Auth Team",
    username: "@better-auth · Modern Authentication Engine",
    body: "Solid PR preserving discoveryHeaders on same-origin JWKS endpoints in generic OAuth. Thorough attention to security edge cases and robust protocol handling.",
    img: "https://avatars.githubusercontent.com/u/172355466?s=48&v=4",
  },
  {
    name: "Snitch Engine",
    username: "@snitch-firewall · Network & C2 Detection",
    body: "Excellent work implementing passive TLS ClientHello fingerprinting (JA3/JA4) and threat-feed ingestion. Concurrency-safe, performant, and well-structured.",
    img: "https://avatars.githubusercontent.com/u/161476106?s=48&v=4",
  },
  {
    name: "Cap Screen Engine",
    username: "@cap-video · Open-Source Loom Alternative",
    body: "High-impact fixes for video timeline geometry, audio track isolation, and zero-latency stream synchronization. A delight to review and merge!",
    img: "https://avatars.githubusercontent.com/u/148782015?s=48&v=4",
  },
  {
    name: "Chatwoot Core",
    username: "@chatwoot · Omnichannel Support Platform",
    body: "Solid PR addressing message delivery race conditions and webhook retries. Clean TypeScript/Ruby integration with robust test coverage. Merged!",
    img: "https://avatars.githubusercontent.com/u/49704250?s=48&v=4",
  },
  {
    name: "Umami Analytics",
    username: "@umami-software · Modern Analytics Platform",
    body: "Great performance optimization on telemetry ingestion and dashboard render consistency across timezones. Excellent open-source contribution!",
    img: "https://avatars.githubusercontent.com/u/64127083?s=48&v=4",
  },
];
