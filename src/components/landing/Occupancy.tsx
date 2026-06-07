import { motion } from "framer-motion";
import { SectionHeader } from "./Problem";
import { CountUp } from "./CountUp";

// 3 floors, 4 rooms each, 4 beds per room
const FLOORS = [3, 2, 1];

export function Occupancy() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Smart Occupancy"
          title="Know Every Vacant Bed. Right Now."
          sub="Real-time clarity across every floor, every room, every bed."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl glass p-6 md:p-8">
            <div className="space-y-6">
              {FLOORS.map((floor, fi) => (
                <div key={floor}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-white">
                      Floor {floor}
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)]">4 rooms · 16 beds</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[1, 2, 3, 4].map((rm) => (
                      <Room key={rm} number={`${floor}0${rm}`} delay={fi * 0.2 + rm * 0.05} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-4">
            <Stat label="Total Beds" value={48} accent="white" />
            <Stat label="Occupied" value={42} accent="blue" />
            <Stat label="Vacant" value={6} accent="red" />
            <Stat label="Occupancy %" value={87} suffix="%" accent="gradient" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Room({ number, delay }: { number: string; delay: number }) {
  // randomized per room — 1 vacant out of 4
  const vacantIdx = (parseInt(number) % 4);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-[var(--glass-border)] bg-black/20 p-3"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] font-bold text-white">Room {number}</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[0, 1, 2, 3].map((b) => {
          const vacant = b === vacantIdx;
          return (
            <div
              key={b}
              className={`h-7 rounded-md text-[8px] font-bold flex items-center justify-center ${
                vacant
                  ? "border border-dashed border-[var(--muted-foreground)]/40 text-[var(--muted-foreground)]"
                  : "text-[#071827]"
              }`}
              style={
                vacant
                  ? undefined
                  : { background: "var(--gradient-primary)" }
              }
            >
              {vacant ? "VACANT" : "●"}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Stat({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: number;
  suffix?: string;
  accent: "white" | "blue" | "red" | "gradient";
}) {
  const cls =
    accent === "gradient"
      ? "text-gradient"
      : accent === "blue"
        ? "text-[var(--brand-blue)]"
        : accent === "red"
          ? "text-red-400"
          : "text-white";
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl glass p-5"
    >
      <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
        {label}
      </div>
      <div className={`mt-1 font-mono text-3xl font-bold ${cls}`}>
        <CountUp end={value} />
        {suffix}
      </div>
    </motion.div>
  );
}
