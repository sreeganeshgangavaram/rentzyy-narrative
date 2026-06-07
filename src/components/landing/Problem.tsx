import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

const ITEMS = [
  { time: "9:02 AM", text: "Forgot to note Rahul's partial payment" },
  { time: "11:30 AM", text: "Can't remember which room is vacant" },
  { time: "2:15 PM", text: "Tenant calling about wifi — no record of complaint" },
  { time: "6:45 PM", text: "Manually calculating 6 different rent dues" },
  { time: "11:00 PM", text: "Still updating the Excel sheet" },
];

export function Problem() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="The Reality"
          title="Running a PG Shouldn't Feel Like This."
          sub="Yet for thousands of owners, every day looks like this."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          {/* Left timeline */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-wider text-[var(--muted-foreground)]">
              Your Day Without Rentzyy
            </p>
            <ol className="relative space-y-4 border-l border-red-500/20 pl-6">
              {ITEMS.map((it, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-xl border-l-4 border-red-500/70 glass p-4"
                >
                  <span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]" />
                  <div className="font-mono text-xs text-red-300">🔴 {it.time}</div>
                  <div className="mt-1 text-sm text-white">{it.text}</div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Right visual */}
          <div className="relative flex h-[420px] items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent blur-2xl" />
            <StressedFigure />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { value: 68, suffix: "%", label: "of PG owners still use manual registers" },
            { value: 12000, prefix: "₹", label: "average monthly rent lost to untracked dues" },
            { value: 40, suffix: " min/day", label: "wasted on manual calculations" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="font-mono text-5xl font-bold text-gradient">
                {s.prefix}<CountUp end={s.value} />{s.suffix}
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-[var(--glass-border)] glass px-3 py-1 text-xs font-medium text-gradient">
          {eyebrow}
        </span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display mt-4 text-4xl font-bold leading-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <p className="mt-4 text-base text-[var(--muted-foreground)] md:text-lg">{sub}</p>
      )}
    </div>
  );
}

function StressedFigure() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-auto max-w-full">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(239,68,68,0.18)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#bgGlow)" />
      {/* figure */}
      <g style={{ animation: "float-slow 4s ease-in-out infinite" }}>
        <circle cx="200" cy="160" r="38" fill="none" stroke="#B7C5D3" strokeWidth="2.5" />
        <path
          d="M 140 290 Q 140 220 200 220 Q 260 220 260 290 L 260 320 L 140 320 Z"
          fill="none"
          stroke="#B7C5D3"
          strokeWidth="2.5"
        />
        {/* stressed eyes */}
        <line x1="186" y1="155" x2="194" y2="163" stroke="#FF4D5E" strokeWidth="2.5" />
        <line x1="194" y1="155" x2="186" y2="163" stroke="#FF4D5E" strokeWidth="2.5" />
        <line x1="206" y1="155" x2="214" y2="163" stroke="#FF4D5E" strokeWidth="2.5" />
        <line x1="214" y1="155" x2="206" y2="163" stroke="#FF4D5E" strokeWidth="2.5" />
        <path d="M 186 178 Q 200 172 214 178" fill="none" stroke="#FF4D5E" strokeWidth="2" />
      </g>
      {/* chaos */}
      {["📒", "📞", "💸", "📋", "🔑", "📝"].map((e, i) => {
        const a = (i / 6) * Math.PI * 2;
        const x = 200 + Math.cos(a) * 150;
        const y = 200 + Math.sin(a) * 150;
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize="28"
            textAnchor="middle"
            style={{
              animation: `float-slow ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {e}
          </text>
        );
      })}
    </svg>
  );
}
