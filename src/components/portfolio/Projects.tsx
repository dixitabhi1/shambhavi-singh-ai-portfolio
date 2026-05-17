import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  name: string;
  tag: string;
  tagline: string;
  problem: string;
  features: string[];
  stack: string[];
  accent: "violet" | "blue" | "mixed";
};

const projects: Project[] = [
  {
    name: "ARVIZIO",
    tag: "AR · Data Viz",
    tagline: "Immersive real-time data, anchored to your room.",
    problem:
      "Dashboards live behind a screen — context and scale get lost. ARVIZIO projects live datasets into physical space for richer comprehension.",
    features: [
      "Real-time 3D charts anchored via ARCore",
      "Live Firebase sync across devices",
      "Gesture-driven exploration in Flutter UI",
    ],
    stack: ["Flutter", "ARCore", "Firebase", "Dart"],
    accent: "violet",
  },
  {
    name: "Medical Imagination System",
    tag: "AI · Healthcare",
    tagline: "Reading medical reports the way a clinician would.",
    problem:
      "Patients receive dense lab reports with little context. This system extracts, interprets and summarises them into plain-language insights.",
    features: [
      "OCR pipeline for scanned reports & prescriptions",
      "ML classifier flags abnormal markers",
      "Personalised health insight generator",
    ],
    stack: ["Python", "TensorFlow", "OCR", "ML"],
    accent: "blue",
  },
  {
    name: "Home Automation System",
    tag: "IoT · Hardware",
    tagline: "A quiet, reliable smart home built from first principles.",
    problem:
      "Off-the-shelf smart homes are closed and expensive. This is a fully custom IoT stack — sensors, microcontrollers and a control app.",
    features: [
      "NodeMCU + Arduino orchestration over Wi-Fi",
      "Blynk-based mobile control surface",
      "Energy-aware appliance scheduling",
    ],
    stack: ["Arduino", "NodeMCU", "Blynk", "C++"],
    accent: "mixed",
  },
  {
    name: "Online Voting System",
    tag: "Web · Security",
    tagline: "Secure, auditable voting for the modern campus.",
    problem:
      "Manual voting is slow, opaque and error-prone. This platform delivers authenticated voting with full admin observability.",
    features: [
      "Role-based authentication & session control",
      "Tamper-resistant vote ledger",
      "Real-time results dashboard for admins",
    ],
    stack: ["Django", "PostgreSQL", "JavaScript", "Auth"],
    accent: "violet",
  },
];

function AccentBackdrop({ accent }: { accent: Project["accent"] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {accent !== "blue" && (
        <div className="absolute -left-16 -top-16 h-60 w-60 rounded-full bg-[var(--violet-glow)] opacity-20 blur-[80px]" />
      )}
      {accent !== "violet" && (
        <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-[var(--blue-glow)] opacity-20 blur-[80px]" />
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Things I've <span className="text-gradient">shipped & shaped.</span>
            </>
          }
          description="A small, varied collection — each one taught me something I couldn't have learned from a tutorial."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group relative isolate overflow-hidden rounded-3xl p-1.5 transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="relative rounded-[22px] bg-[var(--surface)] p-7">
                <AccentBackdrop accent={p.accent} />

                {/* Mockup */}
                <div className="relative mb-6 h-44 overflow-hidden rounded-2xl hairline bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
                  <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/5 bg-black/20 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.name.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 top-10 grid grid-cols-5 gap-2">
                    <div className="col-span-2 rounded-lg bg-gradient-to-br from-[var(--violet-glow)]/30 to-[var(--blue-glow)]/20" />
                    <div className="col-span-3 grid grid-rows-3 gap-2">
                      <div className="rounded-lg bg-white/[0.04]" />
                      <div className="rounded-lg bg-white/[0.06]" />
                      <div className="rounded-lg bg-gradient-to-r from-[var(--blue-glow)]/30 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="shimmer absolute inset-0" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {p.tag}
                    </div>
                    <h3 className="mt-1.5 font-display text-2xl font-medium">{p.name}</h3>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      aria-label="GitHub"
                      className="grid h-9 w-9 place-items-center rounded-full hairline bg-white/[0.03] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github size={14} />
                    </button>
                    <button
                      aria-label="Demo"
                      className="grid h-9 w-9 place-items-center rounded-full hairline bg-white/[0.03] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-sm text-foreground/90">{p.tagline}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.problem}</p>

                <ul className="mt-5 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--blue-glow)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground hairline"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
