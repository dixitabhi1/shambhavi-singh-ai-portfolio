import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-28 md:pt-44 md:pb-40">
      {/* Aurora blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--violet-glow)] opacity-25 blur-[140px] animate-aurora" />
        <div className="absolute right-[-10%] top-[30%] h-[420px] w-[420px] rounded-full bg-[var(--blue-glow)] opacity-20 blur-[140px] animate-aurora [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_80%)]" />
      </div>

      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <a
            href="#projects"
            className="glass group inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--violet-glow)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--violet-glow)]" />
            </span>
            Available for AI / ML engineering roles
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-5xl text-center text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Building intelligent
          <br />
          systems for a <span className="text-gradient">human</span> world.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-center text-base text-muted-foreground sm:text-lg"
        >
          I'm <span className="text-foreground">Shambhavi Singh</span> — an AI engineer and data
          science enthusiast crafting ML, AR and IoT products that turn complex data into intuitive,
          real-world experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            <Sparkles size={15} />
            View selected work
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a
            href="https://www.linkedin.com/in/shambhavi-singh-080050331"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <Github size={18} />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
            Pratapgarh · India
          </span>
        </motion.div>
      </div>

      {/* Floating preview card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-20 max-w-5xl px-5"
      >
        <div className="glass relative overflow-hidden rounded-3xl p-1.5 shadow-[var(--shadow-soft)]">
          <div className="rounded-[20px] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                ~/shambhavi/now-shipping
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  k: "Model",
                  v: "Vision-OCR · v2.1",
                  c: "from-[var(--violet-glow)] to-[var(--blue-glow)]",
                },
                {
                  k: "Latency",
                  v: "128 ms · p95",
                  c: "from-[var(--blue-glow)] to-[var(--violet-glow)]",
                },
                {
                  k: "Accuracy",
                  v: "94.6 % · F1",
                  c: "from-[var(--violet-glow)] to-[var(--blue-glow)]",
                },
              ].map((m) => (
                <div key={m.k} className="hairline rounded-2xl bg-white/[0.02] p-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.k}
                  </div>
                  <div className="mt-2 text-lg font-medium">{m.v}</div>
                  <div className={`mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5`}>
                    <div className={`h-full w-2/3 rounded-full bg-gradient-to-r ${m.c}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
