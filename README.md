# Lirim Bajrami — Portfolio

A clean, recruiter-first portfolio website showcasing my featured projects (**SafeTrail**, **MediLink**, **LMS**), experience, skills, certifications, and contact info.

Built to be **fast**, **responsive** (mobile + desktop), and **easy to expand** as I add more projects and experience.

##  Highlights

* Minimal UI with strong readability (recruiter-friendly)
* Clear sections: Projects, Experience, Skills, Certifications, Contact
* Centralized content (`src/content/*`) for quick updates
* Clean codebase with shared components and consistent styling

##  Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui** (Radix UI primitives)
* **ESLint + Prettier**

---

##  Prerequisites

* **Node.js** 18+ (recommended)
* **npm** (or pnpm/yarn)

---

##  Getting Started (Run Locally)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open:

* [http://localhost:3000](http://localhost:3000)

##  Scripts

* Development:

```bash
npm run dev
```

* Production build:

```bash
npm run build
```

* Start production server:

```bash
npm run start
```

* Lint:

```bash
npm run lint
```

* Format:

```bash
npm run format
```

---

##  Project Structure

* `src/app` — Next.js routes, layout, global styles
* `src/components` — section components + UI components
* `src/components/shared` — reusable shared components (cards, links, badges, etc.)
* `src/content` — portfolio content (resume data, nav links, site constants)

##  Updating Content

Most portfolio content lives in:

* `src/content/resume.ts`

Update projects, experience, skills, certifications, links, and contact info there and the UI updates automatically.

---

##  Deployment

This project is deployment-ready for **Vercel** (recommended for Next.js) and also works with other platforms that support Next.js.

---

##  License / Usage

© 2026 **Lirim Bajrami**. **All rights reserved.**

Viewing is allowed for evaluation (portfolio review). Copying, modifying, redistributing, or using the code/content requires prior written permission.

##  Tags

`nextjs` `typescript` `tailwindcss` `shadcn-ui` `portfolio` `fullstack` `developer-portfolio` `vercel`
