import { SECTIONS } from "@/content/sections";

export type NavLink = {
  label: string;
  href: `#${string}`;
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: SECTIONS.projects.label, href: `#${SECTIONS.projects.id}` },
  { label: SECTIONS.experience.label, href: `#${SECTIONS.experience.id}` },
  { label: SECTIONS.skills.label, href: `#${SECTIONS.skills.id}` },
  {
    label: SECTIONS.certifications.label,
    href: `#${SECTIONS.certifications.id}`,
  },
  { label: SECTIONS.contact.label, href: `#${SECTIONS.contact.id}` },
] as const;
