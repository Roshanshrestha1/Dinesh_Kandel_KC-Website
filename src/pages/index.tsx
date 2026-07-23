import Head from "next/head";
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
    <>
      <Head>
        <title>दिनेश के.सी. | Dinesh Kandel KC – नेपाली भाषा सिकाइ</title>
        <meta
          name="description"
          content="Official site of Dinesh Kandel KC (दिनेश के.सी.) – Nepali language educator. नेपाली भाषा सिकाइ for class 8 & 12, grammar lessons, literature, exam prep and Shorts."
        />
        <meta
          name="keywords"
          content="Dinesh KC,Dinesh Kandel KC,नेपाली भाषा सिकाइ,Nepali language teaching,DineshKC1975,कक्षा १२ नेपाली,Class 12 Nepali"
        />
        <meta property="og:title" content="दिनेश के.सी. – Nepali Language Educator" />
        <meta
          property="og:description"
          content="नेपाली भाषा सिकाइ – Grammar, literature, model questions & exam prep since 2011."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="दिनेश के.सी. – Nepali Language Educator" />
        <meta
          name="twitter:description"
          content="नेपाली भाषा सिकाइ – Grammar, literature, model questions & exam prep since 2011."
        />
      </Head>

      <main className="relative">
        <Navbar />

        <div className="fixed inset-0 -z-10 overflow-hidden bg-stone">
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
    </>
  );
}
