import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Award, Lightbulb, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; copy: string; meta: string }[] = [
  {
    icon: Award,
    title: "Data Science Internship — HCL",
    copy: "Recognised for shipping automation that cut reporting time across multiple teams.",
    meta: "Industry",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant & Finalist",
    copy: "Multiple inter-college hackathons across AI/ML and IoT themes.",
    meta: "Competitions",
  },
  {
    icon: Lightbulb,
    title: "Technical Workshops",
    copy: "Hands-on sessions in Machine Learning, AR development, and IoT prototyping.",
    meta: "Learning",
  },
  {
    icon: Users,
    title: "Mentoring & Leadership",
    copy: "Peer mentor for juniors entering AI and data science — focused on first projects.",
    meta: "Community",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Honors"
          title={
            <>
              Moments that <span className="text-gradient">moved the needle.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-medium">{it.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {it.meta}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{it.copy}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
