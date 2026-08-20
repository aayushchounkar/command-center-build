import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { SectionShell, Reveal } from "./primitives";
import { projects, type Project } from "@/data/profile";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <SectionShell
      id="projects"
      index="03"
      label="Project Archive"
      title="What I've built"
      intent="Open any file to see the problem, the approach, the solution and what it taught me."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <button
              type="button"
              onClick={() => setOpen(p)}
              className="hud-panel hud-corners group flex h-full w-full flex-col p-5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-hud/50 hover:shadow-[0_0_40px_-14px_oklch(0.78_0.15_210/50%)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-hud-label">{p.code}</span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-hud"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-hud-dim"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-hud opacity-70 transition-opacity group-hover:opacity-100">
                Access Project →
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-background/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={open.name}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hud-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-hud-label">{open.code} · Project File</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {open.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label="Close project file"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded border border-border text-muted-foreground transition-colors hover:border-hud/50 hover:text-hud"
                >
                  <X size={16} />
                </button>
              </div>

              <dl className="mt-6 space-y-5">
                {[
                  ["The Problem", open.problem],
                  ["The Approach", open.approach],
                  ["The Solution", open.solution],
                  ["The Result", open.result],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-hud-label">{k}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-hud-label">Technology</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {open.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-hud/30 bg-hud/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-hud"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              {open.links.length ? (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                  {open.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground hover:border-hud/50 hover:text-hud"
                    >
                      <ExternalLink size={13} /> {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}