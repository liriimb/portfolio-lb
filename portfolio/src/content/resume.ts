export const resume = {
  name: "Lirim Bajrami",
  title: "Full Stack Developer (Backend-Focused)",
  location: "Skopje, North Macedonia",
  email: "lirim.bajram@outlook.com",
  phone: "+389 070 633 398",
  links: {
    github: "https://github.com/liriimb",
    linkedin: "https://www.linkedin.com/in/lirimbajrami/",
  },
  summary:
    "Full Stack Developer with 1+ year full-time on-site experience at Waves Digital, delivering ASP.NET Core Web APIs using Clean Architecture and SQL-backed systems, and shipping production UI with Next.js/React + TypeScript.",
  highlights: [
    { label: "Full-time experience", value: "1+ year (Waves Digital)" },
    { label: "Screens shipped", value: "20+ production screens" },
    { label: "Backend features", value: "10–12 API endpoints" },
  ],
  projects: [
    {
      name: "SafeTrail — Car Insurance Web App",
      status: "Finished (not deployed)",
      links: { github: "PUT_REPO_LINK_HERE", live: "" },
      stack: [
        "ASP.NET Core MVC",
        "ASP.NET Identity",
        "EF Core",
        "SQL Server",
        "Clean Architecture",
        "Repository Pattern",
      ],
      bullets: [
        "Role-based auth (User + Agent/Admin).",
        "Claims tied to user-owned vehicles; Agents review and manage outcomes.",
        "Single-Car vs Multi-Car restrictions with UI + backend validation.",
      ],
    },
    {
      name: "MediLink (API + UI)",
      status: "In progress",
      links: { github: "PUT_REPO_LINK_HERE", live: "" },
      stack: [
        "ASP.NET Core Web API",
        "Clean Architecture",
        "SQL Server",
        "Next.js/React",
        "TypeScript",
      ],
      bullets: [
        "Healthcare platform for clinics/doctors by specialty, hours, and profiles.",
        "Appointment booking workflows (online/in-person) consuming REST APIs end-to-end.",
        "Designed for growth (~15–20+ planned endpoints across schedules/bookings/profiles).",
      ],
    },
    {
      name: "Learning Management System (Waves Digital)",
      status: "Commercial (private)",
      links: { github: "", live: "" },
      stack: ["Next.js", "React", "TypeScript", "ASP.NET Core Web API", "EF Core", "SQL Server"],
      bullets: [
        "Delivered 20+ screens across admin + user areas with API-driven workflows.",
        "Built multiple admin areas to manage organizations, groups, and student records.",
        "Implemented cookie + JWT auth flow with guarded access patterns.",
      ],
    },
  ],
  experience: [
    {
      company: "Waves Digital",
      role: "Full Stack Developer (Backend Focused)",
      period: "Nov 2024 – Present",
      bullets: [
        "Built features across BLL/Domain/Infrastructure/API layers (Clean Architecture).",
        "Contributed 10–12 backend API features/endpoints and supported admin workflows.",
        "Integrated data-heavy UIs with Axios + secure auth using cookies and JWT.",
      ],
    },
  ],
  skills: {
    backend: [
      "C#",
      "ASP.NET Core Web API",
      "REST",
      "Clean Architecture",
      "Entity Framework Core",
      "JWT + Cookies Auth",
      "SMTP/Email",
    ],
    frontend: ["Next.js", "React", "TypeScript", "Axios"],
    tools: ["Git", "Azure (team environment)"],
  },
  certifications: [
    "Full-Stack Development — InfoTech Macedonia",
    "C# .NET API — InfoTech Macedonia",
    "C# .NET Core MVC — InfoTech Macedonia",
    "ReactJS — InfoTech (Macedonia)",
    "JavaScript Essentials 1 (JSE) — InfoTech Macedonia",
    "Cyber Security Awareness Rising Training — Cyber Security Group (SEEU)",
  ],
  education: {
    school: "Mother Teresa University",
    program: "BSc Computer Science & Engineering",
    period: "2024 – 2028",
  },
  languages: ["Albanian (Native)", "Macedonian (Conversational)", "English (Fluent)"],
} as const;
