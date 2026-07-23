"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container-x">
        {/* Section heading */}
        <div className="reveal mb-10 text-center">
          <span className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            रचना · ०२
          </span>
          <h2 className="mt-4 type-display text-3xl md:text-5xl font-bold text-parchment">
            सरको बारेमा{" "}
            <span className="rubric">झलक</span>
          </h2>
          <p className="mt-3 type-body-devanagari text-parchment/65 max-w-2xl mx-auto">
            A trusted Nepali language learning hub — grammar, literature and
            exam-prep videos crafted for students across Nepal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Portrait card — parchment leaf */}
          <div className="reveal lg:col-span-2">
            <article className="leaf leaf-rule bg-parchment-grain px-6 py-7 md:px-8 md:py-9 h-full">
              {/* Monogram tile */}
              <div className="flex items-center gap-4">
                <span className="relative inline-flex items-center justify-center h-16 w-16 rounded-md border border-cinnabar/40 bg-parchment-2 overflow-hidden shadow-stamp">
                  <Image src="/profile.jpg" alt="Dinesh KC" fill className="object-cover" />
                </span>
                <div>
                  <p className="type-mono text-[10px] uppercase tracking-[0.26em] text-bronze">
                    YouTube · Educator
                  </p>
                  <p className="type-iast text-2xl font-bold text-ink mt-0.5">
                    दिनेश के.सी.
                  </p>
                  <p className="type-display text-sm text-ink-soft">
                    @DineshKC1975 · Lumbini
                  </p>
                </div>
              </div>

              {/* Pull-quote */}
              <div className="relative mt-7 pl-5 pr-2">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-cinnabar"
                />
                <p className="type-iast text-lg md:text-xl text-ink leading-relaxed">
                  “भाषा सिकाउनु भनेको सँस्कृति सँग जोडिनु हो। मेरो उद्देश्य —
                  हरेक विद्यार्थीलाई{" "}
                  <span className="rubric">रोचक</span> र{" "}
                  <span className="rubric">सरल</span> तरिकाले नेपाली भाषाको गहिरो ज्ञान दिनु हो।”
                </p>
                <p className="mt-3 type-display text-sm text-bronze">
                  — Dinesh Kandel KC, Nepali Language Teacher
                </p>
              </div>

              {/* Portrait photo (small) */}
              <div className="mt-7 flex items-center gap-4">
                <Image
                  src="/profile.jpg"
                  alt="Dinesh Kandel KC portrait"
                  width={72}
                  height={72}
                  className="rounded-md border border-cinnabar/30 object-cover"
                />
                <div className="type-body-devanagari text-sm text-ink-soft">
                  <p>हप्तामा ३–४ पाठ, साथै Shorts।</p>
                  <p className="mt-1">पाठ्यक्रम-केन्द्रित, सरल, र दैनिक।</p>
                </div>
              </div>
            </article>
          </div>

          {/* Four-quadrant leaf */}
          <div className="reveal lg:col-span-3">
            <article className="leaf leaf-rule bg-parchment-grain px-6 py-7 md:px-8 md:py-9 h-full">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="type-display text-xl md:text-2xl font-bold text-ink">
                  Why students love <span className="rubric">सर&apos;s</span> channel
                </h3>
                <span className="type-mono text-[10px] uppercase tracking-[0.26em] text-bronze">
                  Annotated · ४ पंक्ति
                </span>
              </div>

              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Class 8 & 12 Mastery",
                    desc: "Complete syllabus-aligned lessons crafted for SEE & NEB students.",
                    tag: "पाठ्यक्रम",
                    color: "cinnabar",
                  },
                  {
                    title: "Grammar Deep-Dives",
                    desc: "Chandra Bindu, करण-अकरण, सन्धि, समास — explained simply.",
                    tag: "व्याकरण",
                    color: "marigold",
                  },
                  {
                    title: "Literature Insights",
                    desc: "Poetry analysis, essays and curriculum texts breakdown.",
                    tag: "साहित्य",
                    color: "lapis",
                  },
                  {
                    title: "Exam Ready",
                    desc: "Model question sets, board-prep strategy & quick revision Shorts.",
                    tag: "परीक्षा",
                    color: "bronze",
                  },
                ].map((b, i) => (
                  <li
                    key={b.title}
                    className="relative rounded-xl border border-bronze/20 bg-parchment-2/60 px-4 py-4 transition hover:border-cinnabar/45 hover:bg-parchment"
                  >
                    {/* Marginalia number */}
                    <span className="absolute -top-3 left-3 type-mono text-[10px] uppercase tracking-[0.22em] bg-parchment px-2 text-bronze">
                      ०{i + 1}
                    </span>
                    <span
                      className={`inline-block w-2 h-2 rounded-full mb-2 bg-${b.color}`}
                      aria-hidden
                    />
                    <p className="type-display font-bold text-ink text-base">
                      {b.title}
                    </p>
                    <p className="mt-1.5 type-body-devanagari text-sm text-ink-soft leading-relaxed">
                      {b.desc}
                    </p>
                    <p className="mt-3 type-iast text-xs text-bronze">
                      #{b.tag}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {[
                  "#नेपालीभाषा",
                  "#Class12",
                  "#Class8",
                  "#Grammar",
                  "#साहित्य",
                  "#ModelQuestions",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-bronze/30 bg-parchment-2/60 px-3 py-1 type-iast text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        {/* Woodblock divider */}
        <div className="divider-woodblock mt-14 max-w-3xl">
          <span className="stem" />
          <span className="knot">
            <span className="rule-ornament-mark" />
            <span className="type-iast text-cinnabar text-sm">॥</span>
            <span className="rule-ornament-mark" />
          </span>
          <span className="stem" />
        </div>
      </div>
    </section>
  );
}
