"use client";

const devanagari = ["१", "२", "३", "४"];

const milestones = [
  {
    year: "2011",
    title: "Channel Launched",
    nepali: "यात्राको शुरुवात",
    desc: "Started on YouTube with a single mission – quality Nepali education for all.",
    color: "cinnabar",
  },
  {
    year: "2015",
    title: "Syllabus Pivoted to Class 12",
    nepali: "कक्षा १२ विशेषज्ञता",
    desc: "Expanded into in-depth NEB Nepali syllabus coverage and grammar mastery.",
    color: "marigold",
  },
  {
    year: "2019",
    title: "Shorts Era Begins",
    nepali: "Shorts को सुरुवात",
    desc: "Launched mobile-friendly YouTube Shorts to help students revise anywhere.",
    color: "lapis",
  },
  {
    year: "2024",
    title: "15K+ Family",
    nepali: "१५ हजार परिवार",
    desc: "Crossed 15,800 subscribers with 300+ videos and thousands of weekly learners.",
    color: "bronze",
  },
];

const inkFor: Record<string, string> = {
  cinnabar: "text-cinnabar",
  marigold: "text-marigold",
  lapis: "text-lapis",
  bronze: "text-bronze",
};

const ringFor: Record<string, string> = {
  cinnabar: "border-cinnabar",
  marigold: "border-marigold",
  lapis: "border-lapis",
  bronze: "border-bronze",
};

export default function Achievements() {
  return (
    <section id="journey" className="relative py-20 md:py-24">
      <div className="container-x">
        <div className="reveal mb-12 text-center">
          <span className="chapter-stamp">
            <span className="chapter-stamp-dot" />
            रचना · ०४
          </span>
          <h2 className="mt-4 type-display text-3xl md:text-5xl font-bold text-parchment">
            30+ years of <span className="rubric">study experience</span>
          </h2>
          <p className="mt-3 type-body-devanagari text-parchment/65 max-w-2xl mx-auto">
            A printed timeline — milestones in the order they happened, because sequence is the story.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal safron rule connecting milestones */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-marigold/60 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={m.year} className="reveal relative">
                {/* Chapter seal */}
                <div className="flex md:justify-start items-center gap-3">
                  <span
                    className={`relative inline-flex items-center justify-center h-14 w-14 rounded-full border-2 bg-parchment shadow-stamp ${ringFor[m.color]} ${inkFor[m.color]}`}
                    style={{ background: "var(--parchment)" }}
                  >
                    <span className="type-iast text-2xl font-bold">{devanagari[i]}</span>
                  </span>
                  <span className="type-mono text-[10px] uppercase tracking-[0.28em] text-parchment/55">
                    Chapter · अध्याय
                  </span>
                </div>

                {/* Card */}
                <article className="mt-5 leaf leaf-rule bg-parchment-grain px-5 py-5 text-ink">
                  <div className="flex items-center justify-between">
                    <span
                      className={`type-mono text-xs uppercase tracking-[0.22em] ${inkFor[m.color]}`}
                    >
                      {m.year}
                    </span>
                    <span className="rule-ornament-mark text-bronze" />
                  </div>
                  <p className="mt-2 type-display font-bold text-ink text-lg">
                    {m.title}
                  </p>
                  <p className="type-iast text-ink-soft text-sm">{m.nepali}</p>
                  <p className="mt-3 type-body-devanagari text-sm text-ink-soft leading-relaxed">
                    {m.desc}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
