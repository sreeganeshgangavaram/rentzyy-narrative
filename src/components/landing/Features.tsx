import { motion } from "framer-motion";
import { SectionHeader } from "./Problem";

const CATS = [
  {
    icon: "🏢",
    title: "Property Management",
    items: ["Multiple PGs", "Room Configuration", "Floor Management", "Vacancy Monitoring"],
  },
  {
    icon: "👤",
    title: "Tenant Management",
    items: ["Digital Profiles", "Document Storage", "Emergency Contacts", "WhatsApp Onboarding"],
  },
  {
    icon: "💳",
    title: "Payment Management",
    items: ["Automated Rent Generation", "Partial Payments", "Outstanding Tracking", "Payment History"],
  },
  {
    icon: "📢",
    title: "Operations",
    items: ["Complaint Tracking", "WhatsApp Automation", "Notifications", "Self Onboarding"],
  },
  {
    icon: "📊",
    title: "Analytics (Premium)",
    items: ["Occupancy Reports", "P&L Overview", "GST Reports", "Revenue Trends"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="Features"
          title="Everything You Need. Nothing You Don't."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CATS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow-blue"
            >
              <span className="text-3xl">{c.icon}</span>
              <h3 className="font-display mt-4 text-base font-bold text-white">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
