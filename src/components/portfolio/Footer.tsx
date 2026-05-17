import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-brand text-[11px] font-bold text-primary-foreground">
              S
            </span>
            Shambhavi Singh
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Designing and engineering intelligent systems — quietly, carefully, end-to-end.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shambhavi-singh-080050331"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full hairline bg-white/[0.03] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:shambhavi.singh@example.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full hairline bg-white/[0.03] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={14} />
            </a>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} · Pratapgarh, India
          </div>
        </div>
      </div>
    </footer>
  );
}
