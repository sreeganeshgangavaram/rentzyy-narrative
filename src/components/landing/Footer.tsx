import { Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { PlayBadge } from "./Apps";

const OWNER_URL = "https://play.google.com/store/apps/details?id=com.jagasss.smart_pg";
const TENANT_URL = "https://play.google.com/store/apps/details?id=com.rentzyy.tenantsapp";

export function Footer() {
  return (
    <footer className="relative border-t border-transparent pt-16 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-bold text-gradient">Rentzyy</div>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Make PG Management Effortless.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-full border border-[var(--glass-border)] p-2 text-[var(--muted-foreground)] transition-colors hover:border-[var(--brand-blue)] hover:text-white"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
          <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
            {[
              ["Features", "#features"],
              ["Pricing", "#pricing"],
              ["Why Rentzyy", "#why"],
              ["Apps", "#apps"],
              ["Book Demo", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +91 81254 46283
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a
                href="mailto:developer.rentzzy@gmail.com"
                className="hover:text-white"
              >
                developer.rentzzy@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">Download</h4>
          <div className="mt-4 space-y-3">
            <div>
              <div className="text-xs text-[var(--muted-foreground)]">Owner App</div>
              <PlayBadge href={OWNER_URL} />
            </div>
            <div>
              <div className="text-xs text-[var(--muted-foreground)]">Tenant App</div>
              <PlayBadge href={TENANT_URL} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1200px] border-t border-[var(--glass-border)] px-6 pt-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[var(--muted-foreground)] md:flex-row">
          <p>© {new Date().getFullYear()} Rentzyy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
