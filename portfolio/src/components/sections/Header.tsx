import LinkButton from "@/components/shared/LinkButton";
import { NAV_LINKS } from "@/content/nav";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function Header({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          aria-label="Go to top"
          className="rounded-md transition-colors hover:bg-muted cursor-pointer"
        >
          <Logo />
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

        <div className="flex items-center gap-2">
          <div className="sm:hidden">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/20 bg-background transition-all hover:-translate-y-[1px] hover:border-foreground/40 hover:bg-muted active:translate-y-[1px]"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={10}
                  className="z-50 min-w-[200px] rounded-md border bg-background p-1 shadow-lg"
                >
                  {NAV_LINKS.map((l) => (
                    <DropdownMenu.Item key={l.href} asChild>
                      <a
                        href={l.href}
                        className="block cursor-pointer rounded-sm px-3 py-2 text-sm text-foreground/90 outline-none transition-colors hover:bg-muted"
                      >
                        {l.label}
                      </a>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          <LinkButton
            href={`mailto:${email}`}
            variant="radial"
            external={false}
          >
            Contact Me
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
