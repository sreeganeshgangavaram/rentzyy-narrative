import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { MeetRentzyy } from "@/components/landing/MeetRentzyy";
import { Differentiator } from "@/components/landing/Differentiator";
import { WhatsAppFlow } from "@/components/landing/WhatsAppFlow";
import { Occupancy } from "@/components/landing/Occupancy";
import { Ledger } from "@/components/landing/Ledger";
import { Features } from "@/components/landing/Features";
import { Why } from "@/components/landing/Why";
import { Pricing } from "@/components/landing/Pricing";
import { Apps } from "@/components/landing/Apps";
import { Vision } from "@/components/landing/Vision";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rentzyy — Manage Tenants, Rooms & Rent from One Place" },
      {
        name: "description",
        content:
          "The PG Management Operating System. Automate rent, onboard tenants via WhatsApp, and manage daily, weekly & monthly stays. Built for PGs, hostels & co-living spaces.",
      },
      { property: "og:title", content: "Rentzyy — The PG Management Operating System" },
      {
        property: "og:description",
        content:
          "Automate rent, WhatsApp onboarding, real-time occupancy. For modern PGs, hostels and co-living spaces.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-deep)] text-white">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <MeetRentzyy />
        <Differentiator />
        <WhatsAppFlow />
        <Occupancy />
        <Ledger />
        <Features />
        <Why />
        <Pricing />
        <Apps />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
