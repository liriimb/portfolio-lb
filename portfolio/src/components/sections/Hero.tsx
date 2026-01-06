import type { Resume } from "@/content/resume";
import { SITE } from "@/content/site";
import GlowLink from "@/components/shared/GlowLink";
import FillButton from "@/components/shared/FillButton";

export default function Hero({ data }: { data: Resume }) {
  const telHref = `tel:${data.phone.replace(/\s/g, "")}`;

  return (
    <section className="border-b py-14">
      <div className="mx-auto w-full max-w-5xl px-4">
        <p className="text-sm text-muted-foreground">{data.location}</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
          {data.name}
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          {data.title} • {SITE.heroSubtitleSuffix}
        </p>

        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          {data.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <FillButton href={`mailto:${data.email}`}>Email</FillButton>

          <FillButton href={telHref}>Call</FillButton>

          <GlowLink href={data.links.linkedin} label="LinkedIn" />
          <GlowLink href={data.links.github} label="GitHub" />
        </div>
      </div>
    </section>
  );
}
