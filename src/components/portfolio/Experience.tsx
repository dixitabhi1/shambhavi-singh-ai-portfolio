import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase } from "lucide-react";

const milestones = [
  {
    period: "2024 — Present",
    role: "Data Science Intern",
    company: "HCL Technologies",
    location: "Remote",
    points: [
      "Built Power BI dashboards consolidating multi-source business KPIs into a single executive view.",
      "Authored SQL workflows and Python scripts for data cleaning and reporting automation.",
      "Designed reusable analytics pipelines that reduced manual reporting effort across teams.",
      "Translated raw operational data into actionable insights for stakeholders.",
    ],
    tags: ["Power BI", "SQL", "Python", "Automation"],
  },
  {
    period: "2022 — Present",
    role: "B.Tech, Information Technology",
    company: "Dr. APJ Abdul Kalam Technical University",
    location: "India",
    points: [
      "Maintaining 8.65 CGPA across core CS, AI/ML, and systems coursework.",
      "Independent research and side projects across AI, AR, and IoT domains.",
      "Active in hackathons, technical workshops, and peer mentoring.",
    ],
    tags: ["AI/ML", "Systems", "Research"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              A short, <span className="text-gradient">deliberate</span> trajectory.
            </>
          }
          description="Each step has sharpened a different muscle — analytical, engineering, and product."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-2.5 top-4 grid h-3 w-3 place-items-center rounded-full bg-gradient-brand shadow-[0_0_0_4px_var(--background),0_0_20px_var(--violet-glow)] md:left-1/2 md:-translate-x-1/2" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      <Briefcase size={12} />
                      {m.period}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-medium">{m.role}</h3>
                    <div className="text-sm text-muted-foreground">
                      {m.company} · {m.location}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {m.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--violet-glow)]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] hairline"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
