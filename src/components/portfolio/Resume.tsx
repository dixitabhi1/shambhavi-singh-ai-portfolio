import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass relative isolate overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--violet-glow)] opacity-20 blur-[120px]" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[var(--blue-glow)] opacity-15 blur-[120px]" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                — Résumé
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                The whole story, <span className="text-gradient">on one page.</span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                A concise, recruiter-ready summary of education, internship, projects, skills and
                achievements. Updated regularly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                >
                  <Download size={15} />
                  Download résumé
                </a>
                <a
                  href="#"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-white/[0.06]"
                >
                  <FileText size={15} />
                  View online
                </a>
              </div>
            </div>

            {/* Resume preview card */}
            <motion.div
              initial={{ rotate: -3, opacity: 0 }}
              whileInView={{ rotate: -3, opacity: 1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hairline aspect-[3/4] w-full rounded-2xl bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-lg font-medium">Shambhavi Singh</div>
                  <div className="text-xs text-muted-foreground">AI Engineer · Data Scientist</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-brand" />
              </div>
              <div className="mt-6 space-y-3">
                {[80, 60, 70, 45, 55].map((w, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="h-1.5 w-12 rounded-full bg-white/10" />
                    <div className="h-1 rounded-full bg-white/5" style={{ width: `${w}%` }} />
                    <div className="h-1 rounded-full bg-white/5" style={{ width: `${w - 10}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-1.5">
                {["Py", "ML", "BI", "AR", "IoT", "SQL"].map((t) => (
                  <div
                    key={t}
                    className="grid h-8 place-items-center rounded-md bg-white/[0.04] text-[10px] hairline"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
