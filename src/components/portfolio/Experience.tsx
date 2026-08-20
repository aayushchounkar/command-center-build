import { CheckCircle2, Radio } from "lucide-react";
import { SectionShell, Reveal } from "./primitives";
import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      index="02"
      label="Mission Log"
      title="Where I've worked"
      intent="Three roles, each one adding a layer: quality, operations, then ownership."
    >
      <ol className="relative space-y-6 md:space-y-8">
        <span
          className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-hud/60 via-border to-transparent md:block"
          aria-hidden="true"
        />
        {experiences.map((exp, i) => (
          <li key={exp.id} className="md:pl-10">
            <span
              className="absolute left-0 hidden h-[15px] w-[15px] translate-y-6 place-items-center rounded-full border border-hud/60 bg-background md:grid"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-hud" />
            </span>
            <Reveal delay={i * 0.06}>
              <article className="hud-panel hud-corners group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-hud/50 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <span className="text-hud-label">
                    Mission {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
                      exp.status === "ACTIVE" ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {exp.status === "ACTIVE" ? <Radio size={12} /> : <CheckCircle2 size={12} />}
                    {exp.status === "ACTIVE" ? "In progress" : "Completed"}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-hud-dim">
                    {exp.period}
                  </p>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-hud">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.brief}</p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {exp.log.map((l) => (
                    <li key={l} className="flex gap-2.5 text-sm text-foreground/85">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-hud" />
                      <span className="leading-relaxed">{l}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {exp.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:border-hud/30 group-hover:text-hud"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}