"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "शुरु" },
  { href: "#about", label: "परिचय" },
  { href: "#stats", label: "अंक" },
  { href: "#topics", label: "विषय" },
  { href: "#videos", label: "पाठ" },
  { href: "#contact", label: "सम्पर्क" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "w-[92%] md:w-[78%]" : "w-[94%] md:w-[86%]"
      }`}
    >
      <div className="relative rounded-2xl border border-parchment/15 bg-basalt/80 backdrop-blur-md px-4 md:px-6 py-3 flex items-center justify-between gap-3 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]">
        {/* Cinnabar left-edge ornament */}
        <span
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-[3px] rounded-r-full bg-cinnabar"
        />

        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-marigold/55 bg-parchment overflow-hidden">
            <Image src="/profile.jpg" alt="Dinesh KC" fill className="object-cover" />
          </span>
          <div className="leading-tight">
            <p className="type-mono text-[10px] uppercase tracking-[0.22em] text-parchment/55">
              Dinesh · 1975
            </p>
            <p className="type-iast text-sm font-semibold text-parchment">
              नेपाली भाषा सिकाइ
            </p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full border border-parchment/12 bg-parchment/[0.04] px-1.5 py-1.5">
          {links.map((l) => {
            const active = activeSection === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex items-center px-3.5 py-1.5 type-iast text-[15px] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold ${
                    active
                      ? "text-basalt"
                      : "text-parchment/75 hover:text-parchment"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-parchment shadow-[0_2px_0_rgba(178,58,44,0.35)]"
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://www.youtube.com/@DineshKC1975?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-cinnabar text-sm !py-2 !px-4"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6Z" />
            </svg>
            Subscribe
          </a>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-parchment/20 bg-parchment/[0.05] text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-auto w-[92%] rounded-2xl border border-parchment/15 bg-basalt/90 backdrop-blur-md p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl type-iast text-[15px] text-parchment/85 hover:text-parchment hover:bg-parchment/[0.06]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.youtube.com/@DineshKC1975?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mx-3 mb-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-cinnabar text-parchment"
          >
            Subscribe on YouTube
          </a>
        </div>
      )}
    </header>
  );
}
