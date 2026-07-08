import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UsersRound
} from "lucide-react";
import { Section } from "@/components/Section";
import { SkillChips } from "@/components/SkillChips";
import {
  certifications,
  education,
  experience,
  leadership,
  navItems,
  profile,
  projects,
  skills,
  summary
} from "@/lib/resume";

const skillIcons = [Code2, BriefcaseBusiness, Cloud, Database, ShieldCheck, BrainCircuit];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <a
        href="#summary"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-teal focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="site-header sticky top-0 z-40 border-b bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Bhavani Surepally home">
            <span className="brand-mark grid h-10 w-10 place-items-center rounded text-sm font-bold text-white">
              BS
            </span>
            <span className="hidden text-sm font-semibold text-ink transition group-hover:text-teal sm:block">
              {profile.name}
            </span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-ink/70 transition hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            download
            className="button-primary inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>
        <nav aria-label="Mobile section navigation" className="border-t border-aqua/10 px-5 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link shrink-0 text-sm font-medium text-ink/70 transition hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="intro-shell relative overflow-hidden pt-16">
        <div className="intro-stage mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-6 md:min-h-[640px] md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-20 md:pt-16 lg:px-8">
          <div className="intro-copy animate-rise">
            <h1 className="intro-name text-balance text-5xl font-semibold sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-ink/76">{profile.role}</p>
          </div>

          <div className="portrait-stage animate-rise-delayed">
            <div className="portrait-frame">
              <Image
                src={profile.heroImage}
                alt="Portrait of Bhavani Surepally"
                width={1200}
                height={800}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="summary"
        eyebrow="Professional summary"
        title="About me"
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {summary.map((item, index) => (
            <article key={item} className="surface-panel reveal-up p-5" style={{ animationDelay: `${index * 90}ms` }}>
              <p className="text-base leading-7 text-ink/75">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="Technical skills"
      >
        <div className="surface-panel p-5 md:p-8">
          {skills.map((group, index) => {
            const Icon = skillIcons[index] ?? Code2;
            return (
              <article
                key={group.category}
                className="matrix-panel reveal-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="icon-tile grid h-10 w-10 place-items-center rounded text-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mt-1 text-lg font-semibold text-ink">{group.category}</h3>
                  </div>
                </div>
                <SkillChips items={group.items} />
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Oracle application security internship"
        tone="muted"
      >
        <div className="experience-frame relative pl-6">
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="relative pb-2 reveal-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="timeline-node absolute -left-[31px] top-1 grid h-12 w-12 place-items-center rounded">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="surface-panel p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase text-amber/80">{item.period}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-ink">{item.company}</h3>
                    <p className="mt-2 text-lg font-medium text-teal">{item.role}</p>
                    <p className="mt-3 text-sm text-ink/50">{item.location}</p>
                    <p className="mt-6 text-base leading-7 text-ink/70">{item.summary}</p>
                  </div>
                  <ul className="space-y-3">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlight}
                        className="surface-panel grid grid-cols-[auto_1fr] gap-3 px-4 py-3 text-base leading-7 text-ink/75"
                      >
                        <span className="mt-1 text-sm font-semibold text-coral">0{highlightIndex + 1}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected projects"
      >
        <div className="space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="case-study-lane group p-6 reveal-up md:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4 lg:block">
                <p className="case-number text-5xl font-semibold">0{index + 1}</p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-coral transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-aqua lg:mt-8" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-aqua/75">Project</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{project.name}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-teal">{project.outcome}</p>
                <p className="mt-4 text-base leading-7 text-ink/70">{project.description}</p>
                <div className="mt-6">
                  <SkillChips items={project.technologies} />
                </div>
                {"repositoryUrl" in project ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary mt-6 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Source Code
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        eyebrow="Education"
        title="Education"
        tone="muted"
      >
        <div className="grid gap-4">
          {education.map((item, index) => (
            <article
              key={item.school}
              className="evidence-strip reveal-up p-5 md:p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="grid gap-4 md:grid-cols-[88px_1fr_auto] md:items-center">
                <div className="institution-logo grid h-16 w-16 place-items-center rounded text-sm font-semibold text-ink">
                  {item.logoUrl ? (
                    <Image
                      src={item.logoUrl}
                      alt={`${item.school} logo`}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <span>{item.logoInitials}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.school}</h3>
                  <p className="mt-2 text-base text-ink/70">{item.program}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-semibold text-coral">{item.period}</p>
                  <p className="mt-2 text-base font-semibold text-teal">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="certifications"
        eyebrow="Training"
        title="Certifications and technical training"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((item, index) => (
            <article
              key={item.name}
              className="evidence-strip reveal-up p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="icon-tile grid h-11 w-11 shrink-0 place-items-center rounded text-coral">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 text-base leading-7 text-ink/70">{item.issuer}</p>
                  <p className="mt-2 text-sm font-semibold text-teal">{item.year}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="leadership"
        eyebrow="Leadership"
        title="Community and event leadership"
        tone="muted"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {leadership.map((item, index) => (
            <article
              key={item.title}
              className="evidence-strip reveal-up p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="institution-logo grid h-12 w-12 shrink-0 place-items-center rounded text-amber">
                    {item.logoUrl ? (
                      <Image
                        src={item.logoUrl}
                        alt={`${item.title} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain p-1.5"
                      />
                    ) : (
                      <UsersRound className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="shrink-0 text-sm font-semibold text-coral">{item.period}</p>
              </div>
              <p className="text-base leading-7 text-ink/70">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Contact"
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="contact-console p-6 md:p-8">
            <h3 className="text-3xl font-semibold text-ink">Bhavani Surepally</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="button-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="button-secondary inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-ink hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <address className="contact-console p-6 not-italic md:p-8">
            <div className="space-y-4">
              <a className="contact-row flex items-center gap-3 pb-4 text-ink/75" href={`mailto:${profile.email}`}>
                <Mail className="h-5 w-5 text-coral" aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <a className="contact-row flex items-center gap-3 pb-4 text-ink/75" href="tel:+919848702930">
                <Phone className="h-5 w-5 text-coral" aria-hidden="true" />
                <span>{profile.phone}</span>
              </a>
              <p className="contact-row flex items-center gap-3 pb-4 text-ink/50" aria-disabled="true">
                <MapPin className="h-5 w-5 text-ink/30" aria-hidden="true" />
                <span>{profile.locationPlaceholder}</span>
              </p>
              <a
                className="contact-row flex items-center gap-3 pb-4 text-ink/75"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5 text-coral" aria-hidden="true" />
                <span>linkedin.com/in/bhavani-surepally</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                className="flex items-center gap-3 text-ink/75 transition hover:text-teal"
                href={profile.githubPlaceholder}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5 text-coral" aria-hidden="true" />
                <span>github.com/SurepallyBhavani</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </address>
        </div>
      </Section>
    </main>
  );
}
