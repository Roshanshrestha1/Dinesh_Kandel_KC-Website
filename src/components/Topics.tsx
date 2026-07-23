"use client";

const topics = [
  {
    title: "व्याकरण",
    subtitle: "Grammar Mastery",
    nepali: "शब्दको नियम",
    c1: "cinnabar",
    c2: "marigold",
    bullets: ["Chandra Bindu", "करण-अकरण", "सन्धि, समास", "वाक्य रूपान्तर"],
    emoji: "अ",
  },
  {
    title: "कक्षा १२ नेपाली",
    subtitle: "NEB Class 12",
    nepali: "पूरा पाठ्यक्रम",
    c1: "lapis",
    c2: "cinnabar",
    bullets: ["पूरा पाठ्यक्रम", "मोडेल प्रश्न सेट", "Board परीक्षा तयारी", "निबन्ध र रचना"],
    emoji: "१२",
  },
  {
    title: "कक्षा ८ नेपाली",
    subtitle: "SEE Class 8",
    nepali: "पाठ्यपुस्तक व्याख्या",
    c1: "marigold",
    c2: "bronze",
    bullets: ["पाठ्यपुस्तक व्याख्या", "व्याकरण अभ्यास", "परीक्षा युक्ति", "कविता विश्लेषण"],
    emoji: "८",
  },
  {
    title: "साहित्य",
    subtitle: "Literature",
    nepali: "कविता र निबन्ध",
    c1: "bronze",
    c2: "lapis",
    bullets: ["कविता संग्रह", "निबन्ध अध्ययन", "पाठ विश्लेषण", "लेखक परिचय"],
    emoji: "सा",
  },
  {
    title: "परीक्षा तयारी",
    subtitle: "Exam Prep",
    nepali: "बोर्ड रणनीति",
    c1: "cinnabar",
    c2: "lapis",
    bullets: ["मोडल प्रश्नोत्तर", "अंक योजना", "समय व्यवस्थापन", "Board Strategy"],
    emoji: "प",
  },
  {
    title: "YouTube Shorts",
    subtitle: "Quick Learning",
    nepali: "६० सेकेन्ड सिकाइ",
    c1: "marigold",
    c2: "cinnabar",
    bullets: ["60-सेकेन्ड टिप्स", "Grammar नियम", "छोटो कविता", "नेपाली भाषा मजा"],
    emoji: "शा",
  },
];

const dot: Record<string, string> = {
  cinnabar: "bg-cinnabar",
  marigold: "bg-marigold",
  lapis: "bg-lapis",
  bronze: "bg-bronze",
};
const link: Record<string, string> = {
  cinnabar: "text-cinnabar",
  marigold: "text-marigold",
  lapis: "text-lapis",
  bronze: "text-bronze",
};
const ring: Record<string, string> = {
  cinnabar: "border-cinnabar/40",
  marigold: "border-marigold/45",
  lapis: "border-lapis/40",
  bronze: "border-bronze/45",
};

export default function Topics() {
  return (
    <section id="topics" className="relative py-20 md:py-24">
      <div className="container-x">
        <div className="reveal mb-10 text-center">
          <span className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            रचना · ०५
          </span>
          <h2 className="mt-4 type-display text-3xl md:text-5xl font-bold text-parchment">
            Featured <span className="rubric">topics</span>
          </h2>
          <p className="mt-3 type-body-devanagari text-parchment/65 max-w-xl mx-auto">
            Built around the Nepali curriculum — class-by-class, chapter-by-chapter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t) => (
            <article
              key={t.title}
              className="reveal relative leaf bg-parchment-grain px-6 py-6 md:px-7 md:py-7 text-ink transition hover:border-cinnabar/45 hover:translate-y-[-2px]"
            >
              {/* Tassel tug */}
              <span
                aria-hidden
                className={`absolute -top-3 left-7 h-3 w-3 rounded-sm ${dot[t.c1]} shadow-[0_4px_8px_rgba(0,0,0,0.25)]`}
              />

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md border ${ring[t.c1]} bg-parchment-2 type-iast text-xl font-bold ${link[t.c1]}`}
                >
                  {t.emoji}
                </span>
                <span className="type-mono text-[10px] uppercase tracking-[0.26em] text-bronze">
                  {t.subtitle}
                </span>
              </div>

              <h3 className="mt-4 type-iast text-2xl font-bold text-ink leading-tight">
                {t.title}
              </h3>
              <p className={`type-display text-sm mt-1 ${link[t.c2]}`}>{t.nepali}</p>

              <p className="mt-3 type-body-devanagari text-sm text-ink-soft leading-relaxed">
                Lessons curated for SEE & NEB students — short batches with model explanations.
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 type-body-devanagari text-ink-soft">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${dot[t.c1]}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.youtube.com/@DineshKC1975/videos"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-2 type-display font-semibold text-sm ${link[t.c2]}`}
              >
                <span>Watch lessons</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
