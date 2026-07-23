"use client";

import { useEffect, useState } from "react";

type Color = "cinnabar" | "marigold" | "lapis" | "bronze";

type Stat = {
  caption: string;
  captionDevanagari: string;
  value: number;
  suffix?: string;
  isK?: boolean;
  color: Color;
};

const stats: Stat[] = [
  {
    caption: "YouTube Subscribers",
    captionDevanagari: "सदस्यहरू",
    value: 15800,
    suffix: "+",
    isK: true,
    color: "cinnabar",
  },
  {
    caption: "Videos Published",
    captionDevanagari: "भिडियो",
    value: 300,
    suffix: "+",
    color: "marigold",
  },
  {
    caption: "Years of Teaching",
    captionDevanagari: "शिक्षण वर्ष",
    value: 30,
    suffix: "+",
    color: "lapis",
  },
  {
    caption: "Students Reached",
    captionDevanagari: "विद्यार्थी",
    value: 50000,
    suffix: "+",
    isK: true,
    color: "bronze",
  },
];

const dot: Record<Color, string> = {
  cinnabar: "bg-cinnabar",
  marigold: "bg-marigold",
  lapis: "bg-lapis",
  bronze: "bg-bronze",
};

function Counter({ stat }: { stat: Stat }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      setN(Math.round(stat.value * ease));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [stat.value]);

  const display = stat.isK
    ? n >= 1000
      ? (n / 1000).toFixed(stat.value % 1000 === 0 ? 0 : 1) + "K"
      : String(n)
    : String(n);

  return (
    <div
      className="reveal relative overflow-hidden rounded-xl border border-bronze/25 bg-parchment-grain px-5 py-6 md:px-7 md:py-8 text-ink shadow-leaf transition hover:border-cinnabar/55 hover:shadow-leaf-lift"
    >
      <div className="flex items-center gap-2">
        <span className={`inline-block h-2 w-2 rounded-full ${dot[stat.color]}`} />
        <span className="type-mono text-[10px] uppercase tracking-[0.26em] text-bronze">
          {stat.caption}
        </span>
      </div>

      {/* Big numeral */}
      <p className="mt-4 numeral text-4xl md:text-5xl lg:text-6xl leading-none">
        {display}
        {stat.suffix}
      </p>

      <p className="mt-4 type-iast text-ink font-semibold border-t border-bronze/25 pt-3">
        {stat.captionDevanagari}
        <span className="type-display text-ink-soft text-sm font-normal ml-2">
          · {stat.caption}
        </span>
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mb-10 text-center">
          <span className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            रचना · ०३
          </span>
          <h2 className="mt-4 type-display text-3xl md:text-5xl font-bold text-parchment">
            Numbers that <span className="rubric">speak for themselves</span>
          </h2>
          <p className="mt-3 type-body-devanagari text-parchment/65 max-w-2xl mx-auto">
            Eight years of YouTube, four chapters of impact — straight from the channel ledger.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <Counter key={s.caption} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
