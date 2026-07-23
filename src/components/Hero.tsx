"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Chapter stamp (रचना-१) */}
          <div className="reveal is-visible flex items-center gap-3">
            <span className="chapter-stamp">
              <span className="chapter-stamp-dot" />
              रचना · ०१
            </span>
            <span className="type-mono text-[10px] uppercase tracking-[0.28em] text-parchment/55">
              № MMXI · Since 2011
            </span>
          </div>

          {/* Medallion + portrait */}
          <div className="reveal is-visible mt-10 relative">
            <div className="medallion-ring">
              <div className="medallion h-[228px] w-[228px] md:h-[280px] md:w-[280px] grid place-items-center medallion-spin">
                <div className="h-[210px] w-[210px] md:h-[260px] md:w-[260px] rounded-full bg-parchment border border-cinnabar/40 grid place-items-center">
                  <div className="relative h-[186px] w-[186px] md:h-[232px] md:w-[232px] rounded-full overflow-hidden border-2 border-basalt shadow-[0_18px_30px_rgba(20,12,8,0.45)]">
                    <Image
                      src="/profile.jpg"
                      alt="दिनेश के.सी. — Dinesh Kandel KC"
                      fill
                      priority
                      sizes="(max-width: 768px) 186px, 232px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny seal stamps flanking */}
            <div className="hidden md:flex absolute -left-24 top-6 items-center gap-3 flex-col">
              <span className="chapter-stamp">अभ्यास</span>
              <span className="type-mono text-[10px] uppercase tracking-[0.22em] text-parchment/45 rotate-90 origin-left translate-x-3">
                Daily · दैनिक
              </span>
            </div>
            <div className="hidden md:flex absolute -right-24 top-6 items-center gap-3 flex-col">
              <span className="chapter-stamp">साहित्य</span>
              <span className="type-mono text-[10px] uppercase tracking-[0.22em] text-parchment/45 -rotate-90 origin-right -translate-x-3">
                Literature · कविता
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="reveal mt-12 md:mt-14 type-iast text-5xl md:text-7xl lg:text-[88px] leading-[0.95] font-bold text-parchment">
            दिनेश के.सी.
          </h1>
          <p className="reveal mt-3 type-display text-base md:text-xl text-parchment/80">
            Dinesh Kandel <span className="rubric">·</span> KC
          </p>
          <p className="reveal is-visible mt-2 type-mono text-[10px] md:text-xs uppercase tracking-[0.32em] text-marigold">
            Nepali Language Educator — Est. 2011
          </p>

          <p className="reveal mt-7 max-w-2xl type-body-devanagari text-base md:text-lg text-parchment/80 leading-relaxed">
            नेपाली भाषा सिकाइ — माध्यमिक तह (Class 8 &amp; 12) का लागि{" "}
            <span className="rubric font-semibold">व्याकरण</span>,{" "}
            <span className="rubric font-semibold">साहित्य</span>, र{" "}
            <span className="rubric font-semibold">परीक्षा तयारी</span> सामग्री।
            अध्ययन सहयोगी भिडियो, मोडेल प्रश्न, र YouTube Shorts।
          </p>

          {/* CTAs */}
          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href="https://www.youtube.com/@DineshKC1975/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-marigold group"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
              Watch lessons
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@DineshKC1975?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-parchment"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-cinnabar">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
              </svg>
              Subscribe — निःशुल्क
            </a>
          </div>

          {/* Trust row — three marginal marks */}
          <div className="reveal mt-12 grid sm:grid-cols-3 gap-y-4 gap-x-6 max-w-3xl w-full">
            {[
              { k: "व्याकरण", en: "Grammar" },
              { k: "साहित्य", en: "Literature" },
              { k: "मोडेल प्रश्न", en: "Model Qs" },
            ].map((t, i) => (
              <div key={t.k} className="flex items-baseline gap-3 justify-self-center sm:justify-self-start">
                <span className="type-mono text-[10px] uppercase tracking-[0.28em] text-marigold">
                  [0{i + 1}]
                </span>
                <span className="type-iast text-parchment/85 font-medium">
                  {t.k}
                  <span className="type-display text-parchment/50 text-sm ml-1">
                    / {t.en}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Woodblock-style divider at section base */}
      <div className="container-x mt-20">
        <div className="divider-woodblock">
          <span className="stem" />
          <span className="knot">
            <span className="rule-ornament-mark" />
            <span className="type-iast text-marigold text-sm">॥</span>
            <span className="rule-ornament-mark" />
          </span>
          <span className="stem" />
        </div>
      </div>
    </section>
  );
}
