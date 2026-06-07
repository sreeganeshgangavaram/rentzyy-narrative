import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./Problem";

const PLANS = [
  {
    name: "Basic",
    badge: "STARTER",
    border: "var(--brand-blue)",
    old: 39,
    price: 19,
    off: "51% OFF",
    features: [
      "Up to 1 property",
      "Basic tenant management",
      "Monthly rent tracking",
      "Payment history",
      "Vacancy monitoring",
      "Email support",
    ],
    cta: "Get Started →",
  },
  {
    name: "Luxary",
    badge: "MOST POPULAR",
    border: "gradient",
    old: 69,
    price: 35,
    off: "49% OFF",
    featured: true,
    features: [
      "Up to 3 properties",
      "WhatsApp onboarding",
      "Daily · Weekly · Monthly stays",
      "Partial payment tracking",
      "Smart ledger",
      "Complaint management",
      "Tenant app access",
      "Auto rent generation",
      "Real-time occupancy",
      "Priority chat support",
    ],
    cta: "Choose Luxary →",
  },
  {
    name: "Premium",
    badge: "FULL POWER",
    border: "var(--brand-green)",
    old: 99,
    price: 49,
    off: "51% OFF",
    features: [
      "Unlimited properties",
      "Everything in Luxary",
      "Analytics dashboard",
      "P&L overview",
      "GST reports",
      "Revenue trends",
      "Occupancy reports",
      "Custom branding",
      "API access",
      "Multi-user logins",
      "Dedicated manager",
      "24/7 phone support",
    ],
    cta: "Go Premium →",
  },
];

const FAQ = [
  {
    q: "Is there a setup fee?",
    a: "No. Setup is free. You only pay the per-bed monthly subscription.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade anytime from the owner app.",
  },
  {
    q: "Do you provide onboarding help?",
    a: "Yes — our team helps you set up properties, rooms and tenants in one call.",
  },
  {
    q: "Is GST included in the price?",
    a: "GST is applicable on top of the listed per-bed prices.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple Pricing. Built for PG Scale."
          sub="Per Bed Pricing · No Hidden Charges · GST Applicable"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-7 transition-all ${
                p.featured
                  ? "md:scale-105 shadow-cta glass-strong"
                  : "glass hover:-translate-y-1"
              }`}
              style={{
                borderImage: p.border === "gradient" ? undefined : undefined,
                ...(p.border !== "gradient"
                  ? { borderColor: p.border, borderWidth: 1 }
                  : {}),
              }}
            >
              {p.border === "gradient" && (
                <div
                  className="absolute inset-0 -z-10 rounded-3xl"
                  style={{
                    background: "var(--gradient-primary)",
                    padding: 1,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
              )}
              <span
                className={`inline-block self-start rounded-full px-3 py-1 text-[10px] font-bold ${
                  p.featured
                    ? "bg-gradient-primary text-[#071827]"
                    : "border border-[var(--glass-border)] text-[var(--muted-foreground)]"
                }`}
              >
                {p.badge}
              </span>
              <h3 className="font-display mt-5 text-2xl font-bold text-white">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-mono text-sm text-[var(--muted-foreground)] line-through">
                  ₹{p.old}
                </span>
                <span className="font-mono text-5xl font-bold text-gradient">₹{p.price}</span>
                <span className="text-xs text-[var(--muted-foreground)]">/bed</span>
              </div>
              <div className="mt-1 text-xs text-[var(--brand-green)] font-semibold">{p.off}</div>
              <div className="text-xs text-[var(--muted-foreground)]">Per bed, per month</div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--brand-green)]"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-all ${
                  p.featured
                    ? "bg-gradient-primary text-[#071827] shadow-glow-blue hover:scale-[1.02]"
                    : "border border-[var(--brand-blue)]/60 text-white hover:bg-[var(--brand-blue)]/15"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl glass px-6 py-5 text-center"
        >
          <p className="font-mono text-sm text-white">
            💡 <span className="text-[var(--muted-foreground)]">Example:</span>{" "}
            20 beds × ₹35/bed ={" "}
            <span className="font-bold text-gradient">₹700/month</span>{" "}
            <span className="text-[var(--muted-foreground)]">
              for complete PG management.
            </span>
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-2xl">
          <h3 className="font-display text-center text-xl font-semibold text-white">
            Frequently Asked Questions
          </h3>
          <div className="mt-6 space-y-3">
            {FAQ.map((f, i) => (
              <Accordion key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl glass">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--muted-foreground)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-[var(--muted-foreground)]">{a}</div>
      )}
    </div>
  );
}
