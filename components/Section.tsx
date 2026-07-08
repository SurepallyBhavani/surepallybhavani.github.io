import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default"
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-band md:py-20 ${tone === "muted" ? "section-muted" : "section-default"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-rise">
          <p className="section-kicker text-sm font-semibold uppercase">{eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-ink/70">{description}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
