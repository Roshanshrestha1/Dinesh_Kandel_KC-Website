export default function Marquee() {
  const items = [
    "व्याकरण",
    "Grammar",
    "कक्षा १२",
    "Class 12",
    "कक्षा ८",
    "Class 8",
    "साहित्य",
    "Literature",
    "कविता विश्लेषण",
    "Essay",
    "मोडेल प्रश्न",
    "Model Questions",
    "Chandra Bindu",
    "करण-अकरण",
    "परीक्षा तयारी",
    "Exam Prep",
    "YouTube Shorts",
    "नेपाली भाषा सिकाइ",
  ];

  return (
    <div className="relative overflow-hidden border-y border-parchment/10 bg-basalt/65">
      {/* Single safron thread above and below */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-marigold/45 to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap py-5 fade-mask-x">
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="mx-7 inline-flex items-center gap-3 type-iast text-[15px] md:text-base text-parchment/75"
          >
            <span className="rule-ornament-mark text-marigold" />
            {label}
          </span>
        ))}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-marigold/45 to-transparent" />
    </div>
  );
}
