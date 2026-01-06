import LinkButton from "@/components/shared/LinkButton";
import { NAV_LINKS } from "@/content/nav";

export default function Header({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#"
          className="rounded-md px-2 py-1 font-semibold tracking-tight transition-colors hover:bg-muted"
        >
          LB
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 transition-colors duration-200 hover:text-foreground transition-transform hover:-translate-y-[1px]"
            >
              {l.label}
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-foreground/70 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <LinkButton href={`mailto:${email}`} variant="outline" external={false}>
          Email
        </LinkButton>
      </div>
    </header>
  );
}
