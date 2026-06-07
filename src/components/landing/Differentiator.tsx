import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { SectionHeader } from "./Problem";

export function Differentiator() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-display text-3xl font-bold leading-tight md:text-4xl">
            While others only support monthly rent —{" "}
            <span className="text-gradient">Rentzyy supports every stay type.</span>
          </p>
        </motion.div>

        <div className="mt-12">
          <SectionHeader title="Every Stay. Every Duration. One Platform." />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          <StayCard
            accent="#23A6F0"
            icon="☀️"
            label="DAILY STAY"
            calc={["₹300/day", "× 4 days", "─────────", "= ₹1,200"]}
            sub="Perfect for guest houses and short-term visitors."
          />
          <StayCard
            accent="gradient"
            icon="📅"
            label="WEEKLY STAY"
            badge="MOST FLEXIBLE"
            calc={["₹1,200/week", "× 2 weeks", "─────────────", "= ₹2,400"]}
            sub="Ideal for corporate guests and traveling professionals."
            featured
          />
          <StayCard
            accent="#7ED321"
            icon="🔁"
            label="MONTHLY STAY"
            calc={["Auto-generated", "every month", "─────────────", "🔁 Recurring"]}
            sub="Recurring rent for long-term PG residents."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-start gap-3 rounded-2xl border-l-4 border-red-500/70 glass p-5"
        >
          <AlertTriangle className="mt-0.5 shrink-0 text-red-400" size={20} />
          <p className="text-sm text-[var(--muted-foreground)]">
            <span className="font-semibold text-white">Most PG software only handles monthly rent.</span>{" "}
            Rentzyy handles all three — from the same dashboard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StayCard({
  accent,
  icon,
  label,
  badge,
  calc,
  sub,
  featured,
}: {
  accent: string;
  icon: string;
  label: string;
  badge?: string;
  calc: string[];
  sub: string;
  featured?: boolean;
}) {
  const topBorder =
    accent === "gradient"
      ? "linear-gradient(90deg, #23A6F0, #7ED321)"
      : accent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`group relative flex flex-col rounded-3xl glass p-6 transition-all hover:-translate-y-1 ${
        featured ? "shadow-glow-blue md:scale-105" : ""
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-1 rounded-t-3xl"
        style={{ background: topBorder }}
      />
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        {badge && (
          <span className="bg-gradient-primary rounded-full px-2.5 py-1 text-[10px] font-bold text-[#071827]">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 text-xs font-bold tracking-widest text-[var(--muted-foreground)]">{label}</p>
      <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-[var(--glass-border)] bg-black/30 p-4 font-mono text-sm leading-7 text-white">
        {calc.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.3 + i * 0.25 }}
          >
            {line}
            {i === calc.length - 1 && <span className="animate-blink">▌</span>}
          </motion.div>
        ))}
      </pre>
      <p className="mt-5 text-sm text-[var(--muted-foreground)]">{sub}</p>
    </motion.div>
  );
}
