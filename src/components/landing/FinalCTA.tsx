import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse, rgba(35,166,240,0.25), rgba(126,211,33,0.12) 40%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight md:text-6xl"
        >
          Ready to Run Your PG <span className="text-gradient">Smarter?</span>
        </motion.h2>
        <p className="mt-6 text-lg text-[var(--muted-foreground)]">
          Join the next generation of PG owners who've left the register behind.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#apps"
            className="bg-gradient-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#071827] shadow-cta transition-transform hover:scale-105"
          >
            📲 Download Apps
          </a>
          <a
            href="mailto:developer.rentzzy@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/5"
          >
            📅 Book a Demo
          </a>
        </div>

        <p className="mt-8 text-xs text-[var(--muted-foreground)]">
          Free to start · No credit card · Setup in minutes
        </p>
      </div>
    </section>
  );
}
