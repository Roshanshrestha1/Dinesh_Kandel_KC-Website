"use client";

export default function SubscribeCTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container-x">
        <article className="reveal relative leaf bg-parchment-grain overflow-hidden px-7 py-8 md:px-14 md:py-14 text-ink shadow-leaf">
          {/* Top woodblock rule across the leaf */}
          <div className="absolute inset-x-7 top-3 h-px bg-gradient-to-r from-transparent via-cinnabar/45 to-transparent" />
          <div className="absolute inset-x-7 bottom-3 h-px bg-gradient-to-r from-transparent via-marigold/45 to-transparent" />

          {/* Mandala mark (rose) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 w-72 opacity-50 medallion-spin"
            viewBox="0 0 200 200"
          >
            <defs>
              <radialGradient id="srg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b23a2c" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#b23a2c" stopOpacity="0.18" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="96" fill="none" stroke="#b23a2c" strokeOpacity="0.35" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#b23a2c" strokeOpacity="0.25" strokeWidth="0.6" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * Math.PI * 2) / 12;
              const x = 100 + Math.cos(a) * 70;
              const y = 100 + Math.sin(a) * 70;
              return (
                <g key={i}>
                  <line
                    x1={100 + Math.cos(a) * 50}
                    y1={100 + Math.sin(a) * 50}
                    x2={x + Math.cos(a) * 18}
                    y2={y + Math.sin(a) * 18}
                    stroke="#c68a1e"
                    strokeOpacity="0.55"
                    strokeWidth="0.7"
                  />
                  <circle cx={x + Math.cos(a) * 18} cy={y + Math.sin(a) * 18} r="2" fill="#b23a2c" />
                </g>
              );
            })}
            <circle cx="100" cy="100" r="6" fill="#b23a2c" />
          </svg>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <span className="chapter-stamp">
                <span className="chapter-stamp-dot" />
                रचना · ०७
              </span>
              <h2 className="mt-4 type-iast text-3xl md:text-5xl font-bold text-ink leading-[1.05]">
                हजारौं विद्यार्थीसँगै
                <br />
                <span className="rubric">सिक्न थाल्नुहोस्</span>
              </h2>
              <p className="mt-4 type-body-devanagari text-ink-soft max-w-xl leading-relaxed">
                Subscribe to <span className="font-bold text-ink">@DineshKC1975</span> on
                YouTube and unlock weekly Nepali grammar lessons, model questions and
                short-form revision — all free.
              </p>
              <p className="mt-4 type-mono text-[10px] uppercase tracking-[0.28em] text-bronze">
                निःशुल्क · कक्षा ८ र १२ · Weekly uploads
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.youtube.com/@DineshKC1975?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cinnabar w-full justify-center text-base"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
                </svg>
                Subscribe — it&apos;s free
              </a>
              <a
                href="https://www.youtube.com/@DineshKC1975/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-marigold w-full justify-center"
              >
                बिडियो हेर्नुहोस्
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="mt-2 type-display text-xs text-bronze text-center md:text-left">
                One click on YouTube — हप्ताको पाठ your inbox मा।
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
