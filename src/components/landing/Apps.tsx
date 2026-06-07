import { motion } from "framer-motion";
import { SectionHeader } from "./Problem";

const OWNER_URL = "https://play.google.com/store/apps/details?id=com.jagasss.smart_pg";
const TENANT_URL = "https://play.google.com/store/apps/details?id=com.rentzyy.tenantsapp";

export function Apps() {
  return (
    <section id="apps" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Apps"
          title="Two Apps. One Ecosystem."
          sub="Owner in control. Tenant in the loop. Always."
        />

        <div className="relative mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Owner */}
          <div className="flex flex-col items-center">
            <div className="animate-float">
              <PhoneMock tilt={-8}>
                <OwnerScreen />
              </PhoneMock>
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-white">
              Smart PG — Owner App
            </p>
            <PlayBadge href={OWNER_URL} />
          </div>

          {/* Tenant */}
          <div className="flex flex-col items-center">
            <div className="animate-float-reverse">
              <PhoneMock tilt={8}>
                <TenantScreen />
              </PhoneMock>
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-white">
              Rentzyy — Tenant App
            </p>
            <PlayBadge href={TENANT_URL} />
          </div>

          {/* Connecting arc */}
          <svg
            viewBox="0 0 600 200"
            className="pointer-events-none absolute left-1/2 top-1/3 hidden h-32 w-[60%] -translate-x-1/2 md:block"
          >
            <defs>
              <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#23A6F0" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7ED321" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M 50 150 Q 300 0 550 150"
              fill="none"
              stroke="url(#arcGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <circle r="4" fill="#23A6F0">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 50 150 Q 300 0 550 150" />
            </circle>
            <circle r="4" fill="#7ED321">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin="1.5s"
                path="M 550 150 Q 300 0 50 150"
              />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}

function PhoneMock({ tilt, children }: { tilt: number; children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ rotate: tilt }}
      className="relative h-[480px] w-[240px] rounded-[40px] border-[6px] border-[#1c2b3a] bg-[#0a1620] p-3 shadow-cta"
    >
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
      <div className="mt-4 h-[calc(100%-1rem)] overflow-hidden rounded-[28px] bg-[#0d1e2c] p-4">
        {children}
      </div>
    </motion.div>
  );
}

function OwnerScreen() {
  return (
    <div className="space-y-3">
      <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
        Dashboard
      </div>
      <div className="text-sm font-bold text-white">Good morning, Raj 👋</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Properties", value: "3" },
          { label: "Tenants", value: "142" },
          { label: "Collected", value: "94%" },
          { label: "Vacant", value: "6" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[var(--glass-border)] bg-black/30 p-2.5"
          >
            <div className="text-[8px] uppercase text-[var(--muted-foreground)]">
              {s.label}
            </div>
            <div className="font-mono text-lg font-bold text-gradient">{s.value}</div>
          </div>
        ))}
      </div>
      <div
        className="rounded-xl p-3 text-[#071827]"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="text-[9px] font-semibold uppercase opacity-80">This Month</div>
        <div className="font-mono text-xl font-bold">₹2,40,000</div>
      </div>
      <div className="rounded-xl border border-[var(--glass-border)] bg-black/30 p-3">
        <div className="text-[10px] font-bold text-white">Recent</div>
        <div className="mt-1 text-[9px] text-[var(--muted-foreground)]">
          Priya joined Room 4B
        </div>
        <div className="text-[9px] text-[var(--muted-foreground)]">
          ₹1,500 received from Arjun
        </div>
      </div>
    </div>
  );
}

function TenantScreen() {
  return (
    <div className="space-y-3">
      <div className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
        My Room
      </div>
      <div className="text-sm font-bold text-white">Hi Priya 👋</div>
      <div className="rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 p-3">
        <div className="text-[9px] uppercase text-[var(--brand-green)]">Rent Status</div>
        <div className="mt-1 font-mono text-lg font-bold text-white">All Clear ✓</div>
        <div className="text-[9px] text-[var(--muted-foreground)]">Next due: 5 Feb</div>
      </div>
      <button
        className="w-full rounded-xl py-2.5 text-xs font-semibold text-[#071827]"
        style={{ background: "var(--gradient-primary)" }}
      >
        Pay Rent
      </button>
      <div className="rounded-xl border border-[var(--glass-border)] bg-black/30 p-3">
        <div className="text-[10px] font-bold text-white">Raise Complaint</div>
        <div className="mt-1.5 text-[9px] text-[var(--muted-foreground)]">
          Wifi · Cleaning · Plumbing · Other
        </div>
      </div>
      <div className="rounded-xl border border-[var(--glass-border)] bg-black/30 p-3">
        <div className="text-[10px] font-bold text-white">Payment History</div>
        <div className="mt-1 text-[9px] text-[var(--muted-foreground)]">
          ₹4,000 · 5 Jan ✓
        </div>
        <div className="text-[9px] text-[var(--muted-foreground)]">
          ₹4,000 · 5 Dec ✓
        </div>
      </div>
    </div>
  );
}

export function PlayBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 text-white transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626-2.499-2.491 2.5-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
      </svg>
      <div className="text-left">
        <div className="text-[9px] leading-none opacity-70">GET IT ON</div>
        <div className="font-display text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </a>
  );
}
