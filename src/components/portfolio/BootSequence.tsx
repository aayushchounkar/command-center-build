import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINES = [
  "INITIALIZING PORTFOLIO",
  "LOADING EXPERIENCE",
  "LOADING PROJECTS",
  "LOADING SKILLS",
  "SYSTEM ONLINE",
];

export function BootSequence() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen =
      typeof window !== "undefined" && sessionStorage.getItem("ac-boot") === "1";
    if (reduced || seen) return;
    sessionStorage.setItem("ac-boot", "1");
    setVisible(true);
    document.body.style.overflow = "hidden";
    const timers = LINES.map((_, i) =>
      window.setTimeout(() => setStep(i + 1), 180 + i * 230),
    );
    const end = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1700);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <div className="w-full max-w-sm px-8 font-mono text-xs">
            {LINES.map((line, i) => (
              <div
                key={line}
                className="flex items-center justify-between py-1.5 transition-opacity duration-300"
                style={{ opacity: i < step ? 1 : 0.12 }}
              >
                <span className="tracking-[0.18em] text-hud">{line}</span>
                <span className="text-muted-foreground">{i < step ? "OK" : "··"}</span>
              </div>
            ))}
            <div className="mt-4 h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-hud"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / LINES.length) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}