export const resume = {
  name: "Lirim Bajrami",
  title: "Full Stack Developer",
  location: "Skopje, North Macedonia",
  email: "lirim.bajram@outlook.com",
  phone: "+389 070 633 398",
  links: {
    github: "https://github.com/liriimb",
    linkedin: "https://www.linkedin.com/in/lirimbajrami/",
  },
  summary:
    "Full-Stack Developer with 1+ year full-time on-site experience at Waves Digital, building ASP.NET Core Web APIs with Clean Architecture and shipping production UIs in Next.js/React + TypeScript.",
  highlights: [
    { label: "Experience", value: "1+ year (Waves Digital)" },
    { label: "Production UI", value: "20+ screens shipped" },
    { label: "Backend", value: "10–12 API endpoints delivered" },
  ],
  projects: [
    {
      name: "SafeTrail — Car Insurance Web App",
      tagline:
        "Full-stack car insurance claims app with role-based review workflows, vehicle ownership rules, and evidence handling.",
      status: "Finished (not deployed)",
      links: {
        github: "https://github.com/liriimb/SafeTrail-CarInsurance",
        live: "",
      },
      stack: [
        "ASP.NET Core MVC",
        "ASP.NET Identity",
        "EF Core",
        "SQL Server",
        "Clean Architecture",
        "Repository Pattern",
      ],
      bullets: [
        "Built role-based authentication/authorization (User vs Agent) to manage claim review and outcomes.",
        "Implemented claims tied to user-owned vehicles with clean relational modeling (User ↔ Cars ↔ Claims).",
        "Added single-car vs multi-car rules with backend validation and conditional UI behavior.",
        "Implemented evidence file uploads with unique naming, size limits, and stored metadata.",
      ],
    },
    {
      name: "MediLink (API + UI)",
      tagline:
        "Healthcare appointment platform API designed for clinics, doctors, schedules, and booking workflows.",
      status: "In progress",
      links: {
        github: "https://github.com/liriimb/mediLink-API",
        live: "",
      },
      stack: [
        "ASP.NET Core Web API",
        "Clean Architecture",
        "SQL Server",
        "Next.js/React",
        "TypeScript",
      ],
      bullets: [
        "Designed a scalable REST API structure for clinics/doctors by specialty, profiles, and availability.",
        "Implemented appointment booking foundations for online/in-person flows (API-first approach).",
        "Organized the backend using Clean Architecture principles for maintainability and future expansion.",
        "Set up SQL Server persistence with models ready for scheduling and booking relationships.",
      ],
    },
    {
      name: "Learning Management System (Waves Digital)",
      tagline:
        "Production LMS features delivered at Waves Digital: admin dashboards, secured APIs, and data-heavy workflows.",
      status: "Private",
      links: { github: "", live: "" },
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "ASP.NET Core Web API",
        "EF Core",
        "SQL Server",
      ],
      bullets: [
        "Shipped 20+ production screens across admin + user areas with API-driven workflows.",
        "Built admin modules for organizations, groups, and student records with secure actions.",
        "Integrated secure API consumption using cookies + JWT patterns across the app.",
        "Delivered features in a team environment using EF Core + SQL Server and structured backend layers.",
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
  languages: [
    "Albanian (Native)",
    "Macedonian (Conversational)",
    "English (Fluent)",
  ],
} as const;

export type Resume = typeof resume;
export type Project = Resume["projects"][number];
export type ExperienceItem = Resume["experience"][number];
