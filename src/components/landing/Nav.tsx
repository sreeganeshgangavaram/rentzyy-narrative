import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Rentzyy", href: "#why" },
  { label: "Apps", href: "#apps" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b border-[var(--glass-border)] bg-[#071827]/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-gradient">
            Rentzyy
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-[var(--brand-blue)]/60 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--brand-blue)]/15"
            >
              Book Demo
            </a>
            <a
              href="#apps"
              className="bg-gradient-primary rounded-full px-5 py-2 text-sm font-semibold text-[#071827] shadow-glow-blue transition-transform hover:scale-105"
            >
              Download Apps
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#071827]/95 backdrop-blur-xl md:hidden">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-semibold text-white"
              style={{ animation: `fade-in 0.4s ${i * 0.08}s both` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apps"
            onClick={() => setOpen(false)}
            className="bg-gradient-primary mt-4 rounded-full px-8 py-3 font-semibold text-[#071827]"
          >
            Download Apps
          </a>
        </div>
      )}
    </>
  );
}
