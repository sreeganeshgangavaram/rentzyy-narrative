import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AmbientGlows, Particles } from "./Background";

const CHAOS = [
  { label: "Rent Register", icon: "📒", x: -240, y: -120 },
  { label: "Missed Call", icon: "📞", x: 220, y: -140 },
  { label: "Unpaid ₹4000", icon: "💸", x: -280, y: 60 },
  { label: "Excel Sheet", icon: "📋", x: 260, y: 80 },
  { label: "Vacant Bed 3B", icon: "🔑", x: -120, y: 180 },
  { label: "Wifi broken", icon: "📝", x: 140, y: 180 },
  { label: "Due 15 days", icon: "⏰", x: 0, y: -200 },
];

const ORDER = [
  { label: "3 Properties", icon: "🏢" },
  { label: "142 Tenants", icon: "👤" },
  { label: "₹2,40,000 Collected", icon: "✅" },
  { label: "WhatsApp Onboarded", icon: "📲" },
  { label: "Occupancy 94%", icon: "🛏️" },
  { label: "Zero Pending", icon: "📊" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <AmbientGlows />
      <Particles count={90} />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] glass px-4 py-1.5 text-xs font-medium"
            >
              <span className="text-gradient font-semibold">✦ The PG Management Operating System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Manage Tenants, Rooms <br className="hidden md:block" />
              & Rent — From <span className="text-gradient">One</span> Place.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-[var(--muted-foreground)] md:text-xl"
            >
              Built for PGs, Hostels & Co-Living Spaces. Automate rent, onboard tenants
              via WhatsApp, and manage daily, weekly or monthly stays — effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start sm:justify-center"
            >
              <a
                href="#apps"
                className="bg-gradient-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-[#071827] shadow-cta transition-transform hover:scale-105"
              >
                Download Apps
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-base font-medium text-white"
              >
                Book a Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--muted-foreground)] lg:justify-start"
            >
              <span>📲 WhatsApp Onboarding</span>
              <span className="opacity-30">·</span>
              <span>🛏️ Daily · Weekly · Monthly</span>
              <span className="opacity-30">·</span>
              <span>📊 Automated Ledger</span>
              <span className="opacity-30">·</span>
              <span>🏢 Multi-Property</span>
            </motion.div>
          </div>

          {/* Right: orchestrated animation */}
          <div className="relative mx-auto h-[460px] w-full max-w-[520px]">
            <ChaosToOrder />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChaosToOrder() {
  // 12-second loop split: chaos 0-3s, transform 3-4.5s, order 4.5-12s
  return (
    <div className="relative h-full w-full">
      {/* Center orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--gradient-primary)" }}
        animate={{
          scale: [0.4, 0.4, 1.4, 1, 1, 0.4],
          opacity: [0, 0, 1, 0.9, 0.9, 0],
          boxShadow: [
            "0 0 0px rgba(35,166,240,0)",
            "0 0 0px rgba(35,166,240,0)",
            "0 0 120px rgba(35,166,240,0.8)",
            "0 0 80px rgba(35,166,240,0.5)",
            "0 0 80px rgba(35,166,240,0.5)",
            "0 0 0px rgba(35,166,240,0)",
          ],
        }}
        transition={{ duration: 12, times: [0, 0.25, 0.38, 0.5, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Chaos cards */}
      {CHAOS.map((c, i) => (
        <motion.div
          key={`chaos-${i}`}
          className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-md"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            x: [c.x, c.x, 0, 0, 0, c.x],
            y: [c.y, c.y, 0, 0, 0, c.y],
            opacity: [0, 0.9, 0, 0, 0, 0],
            rotate: [0, 8, 0, 0, 0, -6],
            scale: [0.9, 1, 0.2, 0.2, 0.2, 0.9],
          }}
          transition={{
            duration: 12,
            times: [0, 0.2, 0.33, 0.5, 0.9, 1],
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        >
          <span>{c.icon}</span>
          <span>{c.label}</span>
        </motion.div>
      ))}

      {/* Order cards — radial */}
      {ORDER.map((o, i) => {
        const angle = (i / ORDER.length) * Math.PI * 2 - Math.PI / 2;
        const r = 170;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <motion.div
            key={`order-${i}`}
            className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-xl border border-[var(--brand-blue)]/30 bg-[var(--bg-navy)]/80 px-3 py-2 text-xs font-medium text-white shadow-glow-blue backdrop-blur-md"
            style={{ x: "-50%", y: "-50%" }}
            animate={{
              x: [0, 0, 0, x, x, 0],
              y: [0, 0, 0, y, y, 0],
              opacity: [0, 0, 0, 1, 1, 0],
              scale: [0.3, 0.3, 0.3, 1, 1, 0.3],
            }}
            transition={{
              duration: 12,
              times: [0, 0.3, 0.42, 0.55, 0.9, 1],
              repeat: Infinity,
              delay: 0.05 * i,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span>{o.icon}</span>
            <span>{o.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
