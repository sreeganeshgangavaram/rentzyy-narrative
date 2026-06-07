import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeader } from "./Problem";

const ROWS: [string, boolean, boolean | "partial", boolean][] = [
  ["Daily Stay Support", false, false, true],
  ["Weekly Stay Support", false, false, true],
  ["Monthly Stay Support", true, true, true],
  ["WhatsApp Onboarding", false, false, true],
  ["Auto Rent Generation", false, "partial", true],
  ["Partial Payment Track", false, false, true],
  ["Smart Ledger", false, false, true],
  ["Tenant App", false, "partial", true],
  ["Complaint Management", false, false, true],
  ["Real-time Occupancy", false, false, true],
];

function Cell({ v }: { v: boolean | "partial" }) {
  if (v === true)
    return (
      <Check
        size={18}
        className="mx-auto text-[var(--brand-green)] drop-shadow-[0_0_8px_rgba(126,211,33,0.6)]"
      />
    );
  if (v === "partial")
    return <span className="text-xs font-medium text-amber-300">Partial</span>;
  return <X size={18} className="mx-auto text-red-400/70" />;
}

export function Why() {
  return (
    <section id="why" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Why Rentzyy"
          title="Built for PG Owners. Not Generic Business Owners."
        />

        <div className="mt-14 overflow-hidden rounded-3xl glass">
          <div className="grid grid-cols-4 border-b border-[var(--glass-border)] bg-black/20">
            <div className="p-5 text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              Feature
            </div>
            <div className="p-5 text-center text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              Manual
            </div>
            <div className="p-5 text-center text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
              Generic Software
            </div>
            <div
              className="p-5 text-center text-xs font-bold uppercase tracking-wider text-[#071827]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Rentzyy
            </div>
          </div>

          {ROWS.map(([label, a, b, c], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="grid grid-cols-4 border-b border-[var(--glass-border)]/40 last:border-0 hover:bg-white/[0.02]"
            >
              <div className="p-4 text-sm text-white">{label}</div>
              <div className="flex items-center justify-center p-4">
                <Cell v={a} />
              </div>
              <div className="flex items-center justify-center p-4">
                <Cell v={b} />
              </div>
              <div
                className="flex items-center justify-center border-l border-[var(--brand-blue)]/25 p-4"
                style={{
                  background: "linear-gradient(180deg, rgba(35,166,240,0.06), rgba(126,211,33,0.04))",
                }}
              >
                <Cell v={c} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
