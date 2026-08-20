import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "./primitives";
import { profile } from "@/data/profile";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Contact() {
  const channels = [
    {
      key: "email",
      label: "Email Me",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
    },
    {
      key: "phone",
      label: "Call",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    profile.linkedin
      ? {
          key: "linkedin",
          label: "LinkedIn",
          value: "Connect",
          href: profile.linkedin,
          Icon: Linkedin,
        }
      : null,
    profile.github
      ? { key: "github", label: "GitHub", value: "Browse code", href: profile.github, Icon: Github }
      : null,
  ].filter(Boolean) as {
    key: string;
    label: string;
    value: string;
    href: string;
    Icon: typeof Mail;
  }[];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="hud-panel hud-corners scanline p-6 sm:p-10 md:p-14">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-hud-label">07 / Communication Channel</span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="status-dot" aria-hidden="true" /> Status: Open
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Have a problem worth solving?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m open to product, project management and technology roles — and to any
              conversation that starts with something that needs building.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {channels.map(({ key, label, value, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="group flex items-center gap-4 rounded border border-border bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:border-hud/60"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-hud/30 text-hud transition-colors group-hover:bg-hud/10">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-foreground">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-hud to-primary px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
              >
                <Mail size={14} /> Open a channel
              </a>
              <a
                href={resumeAsset.url}
                download="Aayush_Chounkar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded border border-accent/60 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent/10"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>

            {!profile.linkedin || !profile.github ? (
              <p className="mt-8 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Note to Aayush: your resume has no LinkedIn or GitHub URL. Add them in
                src/data/profile.ts to activate those buttons.
              </p>
            ) : null}
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built in Mumbai · System online</span>
        </footer>
      </div>
    </section>
  );
}