import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "./Problem";

export function WhatsAppFlow() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="WhatsApp Onboarding"
          title="Add a New Tenant in Under 60 Seconds."
          sub="No forms. No paperwork. Just WhatsApp."
        />

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {/* Owner */}
          <PanelCard title="Owner App">
            <Row label="Name" value="Priya Sharma" />
            <Row label="Mobile" value="9876543210" />
            <Row label="Room" value="Room 4B" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-primary mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-[#071827]"
            >
              Send WhatsApp Invite →
            </motion.button>
          </PanelCard>

          <Arrow />

          {/* Phone */}
          <div className="flex justify-center">
            <PhoneFrame>
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <div className="bg-gradient-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-[#071827]">
                  R
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Rentzyy 🏠</div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">online</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-3 max-w-[85%] rounded-2xl rounded-tl-sm bg-[#1c3a4d] p-3 text-xs text-white"
              >
                Hi Priya! 👋 Your room at <b>Sunrise PG</b> is ready.
                <br />
                <br />
                Complete your profile here:
                <br />
                <span className="text-[var(--brand-blue)] underline">
                  [Complete Onboarding →]
                </span>
              </motion.div>
            </PhoneFrame>
          </div>

          <Arrow />

          {/* Tenant */}
          <PanelCard title="Tenant App">
            <Row label="Name" value="Priya Sharma ✓" done />
            <Row label="Photo" value="Uploaded ✓" done />
            <Row label="ID Proof" value="Verified ✓" done />
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-[var(--brand-green)]/40 bg-[var(--brand-green)]/10 px-3 py-2 text-xs font-medium text-[var(--brand-green)]">
              <Check size={14} /> Profile Complete · Room 4B
            </div>
          </PanelCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-3 rounded-2xl glass-strong px-5 py-4"
        >
          <span className="text-lg">🔔</span>
          <div>
            <div className="text-sm font-semibold text-white">
              Priya Sharma has joined Room 4B
            </div>
            <div className="text-xs text-[var(--muted-foreground)]">
              Occupancy: <span className="font-mono">87%</span> →{" "}
              <span className="font-mono text-gradient">94%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PanelCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl glass p-5"
    >
      <div className="mb-4 text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}

function Row({ label, value, done }: { label: string; value: string; done?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[var(--glass-border)] bg-black/20 px-3 py-2">
      <span className="text-xs text-[var(--muted-foreground)]">{label}</span>
      <span className={`font-mono text-xs ${done ? "text-[var(--brand-green)]" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex">
      <ArrowRight className="text-[var(--brand-blue)]" />
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[360px] w-[200px] rounded-[36px] border-4 border-[#1c2b3a] bg-[#0a1620] p-3 shadow-2xl">
      <div className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full bg-white/10" />
      <div className="mt-3 h-full rounded-[24px] bg-[#0d1e2c] p-3">{children}</div>
    </div>
  );
}
