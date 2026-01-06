export const SECTIONS = {
  projects: { id: "projects", label: "Projects" },
  experience: { id: "experience", label: "Experience" },
  skills: { id: "skills", label: "Skills" },
  certifications: { id: "certifications", label: "Certifications" },
  contact: { id: "contact", label: "Contact" },
} as const;

export type SectionKey = keyof typeof SECTIONS;
export type SectionId = (typeof SECTIONS)[SectionKey]["id"];
