import { SectionShell, Reveal } from "./primitives";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <SectionShell
      id="skills"
      index="04"
      label="Tech Arsenal"
      title="What I work with"
      intent="Grouped by what it's for. No invented proficiency percentages — just the stack and the disciplines I've actually used."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.id} delay={i * 0.06}>
            <div className="hud-panel hud-corners h-full p-5 transition-colors duration-300 hover:border-hud/40">
              <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                <h3 className="font-display text-base font-semibold text-foreground">{g.label}</h3>
                <span className="font-mono text-[10px] text-hud-dim">
                  {String(g.skills.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {g.caption}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    title={s}
                    className="group/skill relative cursor-default rounded border border-border bg-background/40 px-2.5 py-1.5 text-xs text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-hud/60 hover:text-hud"
                  >
                    <span className="mr-1.5 font-mono text-[9px] text-hud/60">◆</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}