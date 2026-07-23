"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-bronze/30 bg-basalt-2">
      <div className="container-x pt-14 pb-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-cinnabar/45 bg-parchment overflow-hidden shadow-stamp">
              <Image src="/profile.jpg" alt="Dinesh KC" fill className="object-cover" />
            </span>
            <div>
              <p className="type-iast text-base font-bold text-parchment">
                दिनेश के.सी.
              </p>
              <p className="type-display text-xs text-parchment/55">
                @DineshKC1975 · नेपाली भाषा सिकाइ
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm type-body-devanagari text-sm text-parchment/70 leading-relaxed">
            हरेक हप्ता सरल नेपाली भाषा शिक्षण — व्याकरण, साहित्य, मोडेल प्रश्न
            र YouTube Shorts। डिजिटल पुस्तकालय, विद्यार्थीका लागि।
          </p>
          {/* Bell-bronze ornament */}
          <div className="mt-6 flex items-center gap-3 text-bronze">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze/55 to-transparent" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M12 1l2.4 5.6L20 8l-4.5 3.7L17 17l-5-3-5 3 1.5-5.3L4 8l5.6-1.4z" />
            </svg>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze/55 to-transparent" />
          </div>
        </div>

        <div>
          <p className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            Navigation
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 type-iast text-[15px]">
            {[
              ["शुरु", "#home"],
              ["परिचय", "#about"],
              ["अंक", "#stats"],
              ["विषय", "#topics"],
              ["पाठ", "#videos"],
              ["सम्पर्क", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a
                  href={h}
                  className="text-parchment/75 hover:text-parchment transition"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            Connect
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@DineshKC1975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-cinnabar px-4 py-2 text-sm font-bold text-parchment shadow-stamp hover:bg-cinnabar-deep transition"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
              </svg>
              YouTube
            </a>
            <a
              href="https://www.youtube.com/@DineshKC1975/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-parchment/25 bg-parchment/[0.05] px-4 py-2 type-display text-sm font-semibold text-parchment hover:text-marigold transition"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2" y="6" width="14" height="12" rx="2" />
                <path d="m22 8-6 4 6 4V8Z" />
              </svg>
              Watch
            </a>
          </div>
          <p className="mt-6 type-body-devanagari text-xs text-parchment/55">
            हामी संगै नेपाली भाषा सिकौं। जय नेपाल 🇳🇵
          </p>
        </div>
      </div>

      <div className="border-t border-bronze/25">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="type-mono text-[10px] uppercase tracking-[0.24em] text-parchment/55">
            © {new Date().getFullYear()} Dinesh Kandel KC · Fan-built tribute
          </p>
          <p className="type-iast text-xs text-parchment/55">
            Developed by{" "}
            <a
              href="https://roshanshrestha1.github.io/Roshanshrestha1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-parchment/75 hover:text-cinnabar transition underline underline-offset-2"
            >
              Roshan Shrestha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
