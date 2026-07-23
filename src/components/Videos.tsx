"use client";

import { allVideos } from "@/data/videos";
import { useEffect, useMemo, useRef, useState } from "react";

type ClassLevel = 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type FilterValue = "all" | ClassLevel;

type Video = {
  cls: ClassLevel;
  videoId: string;
  title: string;
  nepali: string;
  desc: string;
  topicLabel: string;
  duration: string;
  color: "cinnabar" | "marigold" | "lapis" | "bronze";
  emoji: string;
};

const dot: Record<string, string> = {
  cinnabar: "bg-cinnabar",
  marigold: "bg-marigold",
  lapis: "bg-lapis",
  bronze: "bg-bronze",
};

const filters: { value: FilterValue; nepali: string; english: string }[] = [
  { value: "all", nepali: "सबै", english: "All" },
  { value: 4, nepali: "कक्षा ४", english: "Class 4" },
  { value: 5, nepali: "कक्षा ५", english: "Class 5" },
  { value: 6, nepali: "कक्षा ६", english: "Class 6" },
  { value: 7, nepali: "कक्षा ७", english: "Class 7" },
  { value: 8, nepali: "कक्षा ८", english: "Class 8" },
  { value: 9, nepali: "कक्षा ९", english: "Class 9" },
  { value: 10, nepali: "कक्षा १०", english: "Class 10" },
  { value: 11, nepali: "कक्षा ११", english: "Class 11" },
  { value: 12, nepali: "कक्षा १२", english: "Class 12" },
];

export default function Videos() {
  const [active, setActive] = useState<FilterValue>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  function countFor(value: FilterValue) {
    return value === "all" ? allVideos.length : allVideos.filter((v) => v.cls === value).length;
  }

  const filtered = useMemo(
    () => (active === "all" ? allVideos : allVideos.filter((v) => v.cls === active)),
    [active]
  );

  const displayed = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  // Fade the grid when filter changes for a smooth swap
  useEffect(() => {
    setFading(true);
    setVisibleCount(12);
    const t = setTimeout(() => setFading(false), 180);
    return () => clearTimeout(t);
  }, [active]);

  // Re-observe reveal elements when displayed list changes
  const revealRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!revealRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const cards = revealRef.current.querySelectorAll<HTMLElement>(".reveal");
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [displayed]);

  // Lock body scroll + Esc to close when modal is open
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openId]);

  const activeVideo = allVideos.find((v) => v.videoId === openId) ?? null;

  return (
    <section id="videos" className="relative py-20 md:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="reveal mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
          <div>
            <span className="chapter-stamp">
              <span className="chapter-stamp-dot" />
              रचना · ०६
            </span>
            <h2 className="mt-4 type-display text-3xl md:text-5xl font-bold text-parchment">
              Hand-picked for{" "}
              <span className="rubric">सर&apos;s students</span>
            </h2>
            <p className="mt-3 type-body-devanagari text-parchment/65 max-w-xl md:max-w-2xl">
              छान्नुहोस् कक्षा, हेर्नुहोस् भिडियो। हरेक कार्ड सिधा सर&apos;s
              YouTube च्यानलबाट — खोल्नुहोस् र हेर्नुहोस्।
            </p>
          </div>
          <a
            href="https://www.youtube.com/@DineshKC1975/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-parchment shrink-0 self-center md:self-auto"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-cinnabar">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
            </svg>
            All videos on YouTube
          </a>
        </div>

        {/* Class filter chips */}
        <div
          className="reveal mb-8 flex flex-wrap items-center justify-center md:justify-start gap-2"
          role="toolbar"
          aria-label="Filter videos by class"
        >
          {filters.map((f) => {
            const isActive = active === f.value;
            const count = countFor(f.value);
            return (
              <button
                key={String(f.value)}
                type="button"
                onClick={() => setActive(f.value)}
                aria-pressed={isActive}
                className={[
                  "group relative inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300",
                  isActive
                    ? "bg-cinnabar text-parchment shadow-stamp border border-cinnabar-deep"
                    : "border border-parchment/25 text-parchment/75 hover:border-marigold hover:text-marigold hover:bg-marigold/10 bg-basalt/40",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-block w-1.5 h-1.5 rounded-full transition-all duration-300",
                    isActive
                      ? "bg-parchment scale-125"
                      : "bg-cinnabar group-hover:bg-marigold",
                  ].join(" ")}
                  aria-hidden
                />
                <span className="type-iast text-base font-bold leading-none">
                  {f.nepali}
                </span>
                <span className="type-display text-[11px] font-semibold uppercase tracking-[0.16em] opacity-80">
                  {f.english}
                </span>
                <span
                  className={[
                    "type-mono text-[10px] tracking-widest px-1.5 py-0.5 rounded-sm",
                    isActive
                      ? "bg-parchment/15 text-parchment/85"
                      : "bg-bronze/20 text-bronze",
                  ].join(" ")}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video grid */}
        <div
          ref={revealRef}
          className={[
            "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[260px] transition-opacity duration-200",
            fading ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          {displayed.map((v) => (
            <button
              key={v.videoId}
              type="button"
              onClick={() => setOpenId(v.videoId)}
              className="reveal group relative block w-full text-left overflow-hidden rounded-xl border border-bronze/25 bg-parchment-grain transition hover:border-cinnabar/55 hover:translate-y-[-2px] shadow-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-marigold/60"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-basalt">
                <img
                  src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={v.nepali}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-basalt/90 via-basalt/40 to-transparent pointer-events-none" />
                <div
                  className={`absolute inset-0 ${dot[v.color]} opacity-10 mix-blend-multiply pointer-events-none`}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-2 border-parchment bg-basalt/75 text-parchment shadow-leaf transition-all duration-300 group-hover:scale-110 group-hover:bg-cinnabar/90 group-hover:border-marigold">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7 fill-parchment ml-1"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-3 left-3 chapter-stamp !bg-parchment !text-cinnabar !border-cinnabar/45">
                  <span className="chapter-stamp-dot" />
                  कक्षा {v.cls}
                </span>
                <span className="absolute top-3 right-3 chapter-stamp !bg-cinnabar/90 !text-parchment !border-cinnabar/40">
                  <span className="chapter-stamp-dot" />
                  {v.topicLabel}
                </span>
                <span className="absolute bottom-3 right-3 chapter-stamp !bg-basalt !text-parchment !border-parchment/30">
                  {v.duration}
                </span>
              </div>

              <div className="px-5 py-5 text-ink">
                <div className="flex items-center justify-between">
                  <span className="type-display text-sm font-semibold text-cinnabar truncate max-w-[70%]">
                    {v.title}
                  </span>
                  <span className="type-mono text-[10px] uppercase tracking-[0.22em] text-bronze shrink-0">
                    {v.duration}
                  </span>
                </div>
                <h3 className="mt-2 type-iast text-lg font-bold text-ink leading-snug">
                  {v.nepali}
                </h3>
                <p className="mt-1.5 type-body-devanagari text-sm text-ink-soft leading-relaxed">
                  {v.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 type-display font-semibold text-sm text-cinnabar">
                  हेर्नुहोस् · Watch
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden
                  >
                    <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* More videos button */}
        {hasMore && !fading && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 12)}
              className="btn-ghost-parchment group inline-flex items-center gap-2"
            >
              <span className="type-iast text-base font-bold">
                थप भिडियो हेर्नुहोस्
              </span>
              <span className="type-display text-sm opacity-70">
                · Show more
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 5v13M6 12l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="reveal flex flex-col items-center justify-center text-center py-20 type-iast text-parchment/55">
            <span className="chapter-stamp !bg-transparent !border-parchment/30 !text-parchment/55">
              <span className="chapter-stamp-dot" />
              शून्य
            </span>
            <p className="type-body-devanagari mt-4 text-xl">
              यस कक्षाका लागि अहिले कुनै भिडियो छैन।
            </p>
            <p className="type-display text-sm text-parchment/40 mt-1">
              No videos published yet for this class.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-5 btn-ghost-parchment"
            >
              सबै भिडियो हेर्नुहोस्
            </button>
          </div>
        )}
      </div>

      {/* Video modal — autoplays the real YouTube embed */}
      {openId && activeVideo && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8 bg-basalt/90 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Play ${activeVideo.nepali}`}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-marigold/40 shadow-leaf-lift bg-basalt"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              key={openId}
              src={`https://www.youtube.com/embed/${openId}?autoplay=1&rel=0&modestbranding=1`}
              title={activeVideo.nepali}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="absolute -top-3 -right-3 md:top-3 md:right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-basalt text-parchment border border-parchment/40 hover:bg-cinnabar hover:border-cinnabar transition shadow-leaf"
              aria-label="Close video"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
