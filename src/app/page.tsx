"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Videos from "@/components/Videos";
import Topics from "@/components/Topics";
import Achievements from "@/components/Achievements";
import SubscribeCTA from "@/components/SubscribeCTA";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Page wash: warm basalt with a faint temple-stone grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-stone">
        {/* One ambient Devanagari character sets the page mood */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 top-[18%] type-iast text-cinnabar/[0.06] select-none animate-ink-breathe"
          style={{ fontSize: "clamp(380px, 48vw, 720px)", lineHeight: 0.8 }}
        >
          ज्ञ
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 bottom-[8%] type-iast text-marigold/[0.05] select-none animate-ink-breathe"
          style={{ animationDelay: "2s", fontSize: "clamp(280px, 36vw, 520px)", lineHeight: 0.8 }}
        >
          अ
        </div>
        <div className="absolute inset-0 bg-grid-stone" />
      </div>

      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Achievements />
      <Topics />
      <Videos />
      <SubscribeCTA />
      <Footer />
    </main>
  );
}
