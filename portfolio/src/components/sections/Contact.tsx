import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Resume } from "@/content/resume";
import CopyButton from "@/components/shared/CopyButton";

export default function Contact({ data }: { data: Resume }) {
  return (
    <Section id="contact" title="Contact">
      <Card className="transition-all duration-200 hover:shadow-xl hover:border-foreground/25">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Fastest way to reach me: email. You can also copy my contact details
            with one click.
          </p>

          <div className="mt-5 grid gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4">
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  className="mt-1 inline-block text-sm font-medium underline-offset-4 hover:underline"
                  href={`mailto:${data.email}`}
                >
                  {data.email}
                </a>
              </div>
              <CopyButton text={data.email} />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4">
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a
                  className="mt-1 inline-block text-sm font-medium underline-offset-4 hover:underline"
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                >
                  {data.phone}
                </a>
              </div>
              <CopyButton text={data.phone} />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:shadow-md"
            >
              <a href={`mailto:${data.email}`}>Email me</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-foreground hover:text-background hover:shadow-md"
            >
              <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="transition-all hover:-translate-y-[1px] active:translate-y-[1px] hover:bg-foreground hover:text-background hover:shadow-md"
            >
              <a href={data.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
