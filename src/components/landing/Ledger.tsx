import { motion } from "framer-motion";
import { SectionHeader } from "./Problem";

const LEDGER_LINES = [
  "TENANT LEDGER — ROOM 4B",
  "─────────────────────────────",
  "Arjun Mehta            Monthly",
  "",
  "Monthly Rent:          ₹4,000",
  "Paid (12 Jan):        -₹1,000",
  "Paid (18 Jan):        -₹1,500",
  "                       ───────",
  "Outstanding:           ₹1,500",
];

const CHIPS = [
  "Full Payments",
  "Partial Payments",
  "Automated Due Dates",
  "Payment History",
  "Balance Tracking",
  "Overdue Alerts",
];

export function Ledger() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Rent & Ledger"
          title="Track Every Rupee. Automatically."
          sub="No leakage. No spreadsheets. Just clarity."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Ledger */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-6"
          >
            <pre className="whitespace-pre-wrap font-mono text-sm text-white">
              {LEDGER_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.2 + i * 0.1 }}
                  className={line.includes("Outstanding") ? "text-amber-300" : ""}
                >
                  {line}
                </motion.div>
              ))}
            </pre>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="mt-4 flex items-center gap-3"
            >
              <span className="rounded-full bg-amber-500/15 px-3 py-1 font-mono text-[10px] font-bold text-amber-300">
                PARTIAL
              </span>
              <span className="font-mono text-xs text-[var(--muted-foreground)]">
                Due: 31 Jan
              </span>
            </motion.div>
          </motion.div>

          {/* Payment flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl glass p-6">
              <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                Tenant pays
              </div>
              <div className="mt-2 font-mono text-4xl font-bold text-white">₹1,500</div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-primary mt-4 w-full rounded-lg py-2.5 text-sm font-semibold text-[#071827]"
              >
                Pay Now →
              </motion.button>
            </div>

            <div className="rounded-2xl glass p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                  Collection Rate
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6 }}
                  className="font-mono text-sm font-bold text-gradient"
                >
                  100%
                </motion.span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-black/30">
                <motion.div
                  initial={{ width: "76%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-gradient-primary h-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="mt-4 flex items-center gap-2"
              >
                <span className="rounded-full bg-[var(--brand-green)]/15 px-3 py-1 font-mono text-[10px] font-bold text-[var(--brand-green)]">
                  PAID ✓
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  Outstanding: <span className="font-mono">₹0</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CHIPS.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-full border border-[var(--glass-border)] bg-[var(--bg-navy)]/60 px-4 py-2 text-xs text-white backdrop-blur-md"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
