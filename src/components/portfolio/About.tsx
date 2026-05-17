import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Curious mind. <span className="text-gradient">Engineering hands.</span>
            </>
          }
          description="I believe the best products sit at the intersection of intelligence and intuition. From training models to wiring up IoT boards to sculpting AR scenes — I love the whole stack of making machines understand the world."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-8 md:col-span-7"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--violet-glow)] opacity-20 blur-[80px]" />
            <h3 className="font-display text-2xl font-medium">Hi, I'm Shambhavi 👋</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm a final-year B.Tech student in Information Technology at Dr. APJ Abdul Kalam
              Technical University. My world revolves around{" "}
              <span className="text-foreground">machine learning</span>,
              <span className="text-foreground"> data analytics</span>,{" "}
              <span className="text-foreground">augmented reality</span>, and{" "}
              <span className="text-foreground">IoT automation</span> — and I'm endlessly fascinated
              by how these tools, woven together, can quietly improve real lives.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I've shipped AR-powered visualization platforms, AI-driven medical analyzers, and
              smart-home automation systems. Whatever I build, my north star is the same: technology
              that disappears into delight.
            </p>
          </motion.div>

          <div className="grid gap-5 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="glass rounded-3xl p-6"
            >
              <GraduationCap className="text-[var(--violet-glow)]" size={20} />
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </div>
              <div className="mt-2 font-medium">B.Tech, Information Technology</div>
              <div className="text-sm text-muted-foreground">
                Dr. APJ Abdul Kalam Technical University
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-mono text-[11px]">
                CGPA <span className="text-foreground">8.65 / 10</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass grid grid-cols-2 gap-4 rounded-3xl p-6"
            >
              <div>
                <MapPin className="text-[var(--blue-glow)]" size={18} />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Based in
                </div>
                <div className="mt-1 text-sm font-medium">Pratapgarh, UP</div>
              </div>
              <div>
                <Sparkles className="text-[var(--violet-glow)]" size={18} />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Focus
                </div>
                <div className="mt-1 text-sm font-medium">AI · AR · IoT</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
