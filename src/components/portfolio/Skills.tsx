import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Brain, Code2, Database, Layers, Sparkles, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Group = { icon: LucideIcon; title: string; tag: string; items: string[] };

const groups: Group[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    tag: "Core",
    items: ["Python", "TensorFlow", "Machine Learning", "Predictive Analytics"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    tag: "Daily",
    items: ["SQL", "Power BI", "MySQL", "PostgreSQL", "Data Visualization"],
  },
  {
    icon: Layers,
    title: "AR & Immersive",
    tag: "Lab",
    items: ["ARCore", "Flutter", "Firebase", "Real-time 3D"],
  },
  {
    icon: Wrench,
    title: "IoT & Systems",
    tag: "Hardware",
    items: ["Arduino", "NodeMCU", "Blynk", "Automation"],
  },
  {
    icon: Code2,
    title: "Web & App",
    tag: "Stack",
    items: ["JavaScript", "Django", "Flutter", "Firebase"],
  },
  {
    icon: Sparkles,
    title: "Toolbelt",
    tag: "Workflow",
    items: ["Git", "Jupyter", "VS Code", "Notion"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Toolkit"
          title={
            <>
              The stack I <span className="text-gradient">build with.</span>
            </>
          }
          description="A focused, deliberately chosen toolkit — picked for shipping speed and longevity. I learn the next tool the moment a project demands it."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[var(--shadow-glow)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--violet-glow)] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-25" />
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] hairline">
                    <Icon size={18} className="text-foreground" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {g.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-white/[0.04] px-2.5 py-1 text-xs text-muted-foreground hairline"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
