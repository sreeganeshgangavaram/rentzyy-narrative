import { motion } from "framer-motion";
import { SectionHeader } from "./Problem";

const NODES = [
  { label: "Properties", icon: "🏢" },
  { label: "Rooms & Beds", icon: "🛏️" },
  { label: "Tenants", icon: "👤" },
  { label: "Payments", icon: "💳" },
  { label: "Complaints", icon: "📢" },
  { label: "WhatsApp", icon: "📲" },
];

export function MeetRentzyy() {
  const cx = 250;
  const cy = 250;
  const r = 180;

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Meet Rentzyy"
          title="The Operating System for Modern PGs."
          sub="Every part of your PG, connected. Automated. In your pocket."
        />

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[520px]">
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#23A6F0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7ED321" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="hubGlow">
                <stop offset="0%" stopColor="#23A6F0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7ED321" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={cx} cy={cy} r="100" fill="url(#hubGlow)" opacity="0.5" />
            {NODES.map((_, i) => {
              const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(a) * r;
              const y = cy + Math.sin(a) * r;
              return (
                <g key={i}>
                  <motion.line
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="url(#line)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                  />
                  <motion.circle
                    r="4"
                    fill="#7ED321"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0] }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                      path={`M ${cx} ${cy} L ${x} ${y}`}
                    />
                  </motion.circle>
                </g>
              );
            })}
          </svg>

          {/* Hub */}
          <div
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 0 80px rgba(35,166,240,0.6)",
            }}
          >
            <span className="font-display text-lg font-bold text-[#071827]">Rentzyy</span>
          </div>

          {/* Nodes */}
          {NODES.map((n, i) => {
            const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(a) * 36;
            const y = 50 + Math.sin(a) * 36;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="group flex h-20 w-20 cursor-default flex-col items-center justify-center gap-1 rounded-2xl glass-strong text-center transition-all hover:scale-110 hover:shadow-glow-blue">
                  <span className="text-2xl">{n.icon}</span>
                  <span className="text-[10px] font-medium text-white">{n.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
