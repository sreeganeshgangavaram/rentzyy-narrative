import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40" style={{ background: "#0b2033" }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(35,166,240,0.18), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--muted-foreground)]">
          Rentzyy Vision
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display mt-8 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl"
        >
          We're building the{" "}
          <span className="relative inline-block text-gradient">
            operating system
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute inset-x-0 -bottom-1 h-[3px] origin-left"
              style={{ background: "var(--gradient-primary)" }}
            />
          </span>{" "}
          for every PG, hostel, and co-living space in India.
        </motion.h2>
        <p className="mx-auto mt-8 max-w-2xl text-base text-[var(--muted-foreground)] md:text-lg">
          From vacancy tracking to accounting automation — every tool a PG owner needs,
          in one place.
        </p>
      </div>
    </section>
  );
}
