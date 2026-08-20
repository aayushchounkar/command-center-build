import { GraduationCap, Languages, MapPin } from "lucide-react";
import { SectionShell, Reveal } from "./primitives";
import { education, profile } from "@/data/profile";

export function About() {
  return (
    <SectionShell
      id="about"
      index="01"
      label="Hero Profile"
      title="Who I am"
      intent="The short version: I like being the person who takes the ambiguous thing and makes it shippable."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            I&apos;m a Computer Science Engineering student at ITM Skills University, and most of
            what I&apos;ve learned outside the classroom came from three internships that pulled me
            in three useful directions — engineering, operations and business.
          </p>
          <p>
            At <span className="text-foreground">Play Box</span> I started where every product
            person should: testing software, finding bugs, keeping CRM records honest, and sitting
            close enough to client pitches to see how a product is actually sold. At{" "}
            <span className="text-foreground">LetsUpgrade</span> I ran operations — coordination,
            community communication and the unglamorous scheduling that keeps a team moving.
          </p>
          <p>
            At <span className="text-foreground">Tag8</span> those threads came together. I work as
            a Product Owner driving execution and strategy, manage AI-driven projects and workflow
            automation, and lead a 5-member sales and marketing team spread across multiple cities
            — while still doing the testing and requirement analysis myself.
          </p>
          <p>
            The way I approach problems hasn&apos;t changed since the first console app I built:
            understand the requirement, break it into pieces someone can own, test it hard, then
            ship it. I&apos;m looking for product, project management and technology roles where
            that loop is the job.
          </p>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.1}>
            <div className="hud-panel hud-corners p-5">
              <p className="text-hud-label">Profile Card</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-hud" />
                  <div>
                    <dt className="sr-only">Location</dt>
                    <dd className="text-foreground">{profile.location}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages size={15} className="mt-0.5 shrink-0 text-hud" />
                  <div>
                    <dt className="sr-only">Languages</dt>
                    <dd className="text-foreground">{profile.languages.join(" · ")}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="hud-panel p-5">
              <p className="text-hud-label">Education</p>
              <ol className="mt-4 space-y-5">
                {education.map((e) => (
                  <li key={e.id} className="relative border-l border-border pl-5">
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-hud/80" />
                    <p className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
                      <GraduationCap size={14} className="text-hud" />
                      {e.school}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {e.program} · {e.place}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-hud-dim">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}