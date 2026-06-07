import { useMemo } from "react";

export function AmbientGlows() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(35,166,240,0.25), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(126,211,33,0.18), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(35,166,240,0.20), transparent 70%)", animationDelay: "2s" }}
      />
    </div>
  );
}

export function Particles({ count = 80 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        color: Math.random() > 0.5 ? "var(--brand-blue)" : "var(--brand-green)",
        opacity: 0.3 + Math.random() * 0.3,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            opacity: p.opacity,
            animation: `particle-drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
