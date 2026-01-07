import Section from "./Section";
import { CardContent } from "@/components/ui/card";
import type { Resume } from "@/content/resume";
import HoverCard from "@/components/shared/HoverCard";
import TechBadge from "@/components/shared/TechBadge";
import LinkButton from "@/components/shared/LinkButton";

export default function Projects({ data }: { data: Resume }) {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-4">
        {data.projects.map((p) => {
          const github = p.links.github?.trim();
          const live = p.links.live?.trim();

          return (
            <HoverCard key={p.name} variant="aura" interactive>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.tagline}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.status}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {live ? (
                      <LinkButton
                        href={live}
                        variant="radial"
                        className="h-9 px-3 py-1.5"
                      >
                        Live
                      </LinkButton>
                    ) : null}

                    {github ? (
                      <LinkButton
                        href={github}
                        variant="radial"
                        className="h-9 px-3 py-1.5"
                      >
                        GitHub
                      </LinkButton>
                    ) : null}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <TechBadge key={s}>{s}</TechBadge>
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </HoverCard>
          );
        })}
      </div>
    </Section>
  );
}
