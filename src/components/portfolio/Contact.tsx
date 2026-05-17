import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's build <span className="text-gradient">something good.</span>
            </>
          }
          description="Open to internships, full-time AI/ML roles, research collaborations, and interesting side projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2"
        >
          <a
            href="mailto:shambhavi.singh@example.com"
            className="glass group flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] hairline">
                <Mail size={16} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </div>
                <div className="text-sm font-medium">Send a message</div>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shambhavi-singh-080050331"
            target="_blank"
            rel="noreferrer"
            className="glass group flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] hairline">
                <Linkedin size={16} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  LinkedIn
                </div>
                <div className="text-sm font-medium">/shambhavi-singh</div>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] hairline">
                <MapPin size={16} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Based in
                </div>
                <div className="text-sm font-medium">Pratapgarh, India</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Availability
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Currently open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
