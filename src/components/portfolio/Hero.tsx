import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const READOUT = [
  ["SYSTEM STATUS", "ONLINE"],
  ["PROJECTS", "LOADED"],
  ["LEADERSHIP", "ACTIVE"],
  ["PRODUCT OWNERSHIP", "ENGAGED"],
  ["BUILD MODE", "ON"],
];

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        <div>
          <motion.p
            className="text-hud-label"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.location.split(",").slice(-1)[0]?.trim().replace(/\d+/g, "").trim() ||
              "Mumbai"}{" "}
            · CSE Undergraduate
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-lg leading-snug text-foreground/90 sm:text-2xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            {profile.headline}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-hud to-primary px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
            >
              Explore My Work
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={resumeAsset.url}
              download="Aayush_Chounkar_Resume.pdf"
              className="inline-flex items-center gap-2 rounded border border-accent/60 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent/10"
            >
              <Download size={14} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-hud/60 hover:text-hud"
            >
              <Mail size={14} /> Let&apos;s Connect
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {profile.positioning.map((p) => (
              <li
                key={p}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                <span className="mr-2 text-hud">/</span>
                {p}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hud-panel hud-corners scanline p-5 sm:p-7"
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-hud-label">Command Center</span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="status-dot" aria-hidden="true" /> Live
            </span>
          </div>

          <div className="flex items-center gap-5 py-6">
            <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full border border-hud/40">
              <span className="absolute inset-1.5 rounded-full border border-dashed border-hud/25" />
              <motion.span
                className="absolute inset-0 rounded-full border-t border-hud/70"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <span className="font-display text-2xl font-bold text-hud">{profile.initials}</span>
            </div>
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold text-foreground">
                Product Owner · Project Manager Intern
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Tag8 · May 2026 — Aug 2026
              </p>
            </div>
          </div>

          <dl className="space-y-2 border-t border-border pt-4">
            {READOUT.map(([k, v], i) => (
              <motion.div
                key={k}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
              >
                <dt className="text-muted-foreground">{k}</dt>
                <span className="h-px flex-1 bg-border" />
                <dd className="text-hud">{v}</dd>
              </motion.div>
            ))}
          </dl>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
            {[
              ["03", "Internships"],
              ["03", "Projects"],
              ["05", "Team Led"],
            ].map(([n, l]) => (
              <div key={l} className="rounded border border-border/70 bg-background/40 py-3">
                <p className="font-display text-xl font-bold text-foreground">{n}</p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}