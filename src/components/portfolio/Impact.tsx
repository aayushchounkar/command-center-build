import { Sparkles } from "lucide-react";
import { SectionShell, Reveal } from "./primitives";
import { impact } from "@/data/profile";

export function Impact() {
  return (
    <SectionShell
      id="impact"
      index="06"
      label="Hall of Impact"
      title="Highlights worth knowing"
      intent="Pulled straight from the work — no rounded-up numbers, no invented awards."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.06}>
            <div className="hud-panel hud-corners group relative h-full overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-40" />
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                <Sparkles size={12} /> Impact Unlocked
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{a.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}