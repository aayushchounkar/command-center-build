import { ShieldCheck } from "lucide-react";
import { SectionShell, Reveal } from "./primitives";
import { leadership, drives } from "@/data/profile";

export function Leadership() {
  return (
    <SectionShell
      id="leadership"
      index="05"
      label="Leadership Protocol"
      title="How I lead"
      intent="I don't just participate — I take ownership. Every item below is something I was responsible for."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {leadership.map((l, i) => (
          <Reveal key={l.id} delay={i * 0.06}>
            <div className="hud-panel group flex h-full gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-hud/50">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded border border-hud/30 bg-hud/5 text-hud transition-colors group-hover:bg-hud/10">
                <ShieldCheck size={16} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                  {l.title}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-hud-dim">
                  {l.context}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <p className="text-hud-label">What drives me</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {drives.map((d) => (
              <div key={d.title} className="border-l border-hud/40 pl-4">
                <h3 className="font-display text-sm font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}