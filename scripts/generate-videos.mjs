console.error("DEBUG: script started");
import fs from "fs";
import path from "path";
console.error("DEBUG: imports loaded");

const HAND_CRAFTED = [
  { cls: 7, videoId: "WA_7EtI6HPo", title: "First Term Exam — Model Set", nepali: "कक्षा ७ — प्रथम त्रैमासिक सेट", desc: "Specimen question set for Class 7 Nepali first-term exam — topic-wise and fully worked.", topicLabel: "परीक्षा", duration: "26 min", color: "marigold", emoji: "७" },
  { cls: 8, videoId: "Fp-OWKtaLd0", title: "काल — Examples & Practice", nepali: "कालको उदाहरण र अभ्यास", desc: "Present, past, future tenses — clean rule explanations and lots of worked examples.", topicLabel: "व्याकरण", duration: "14 min", color: "marigold", emoji: "का" },
  { cls: 9, videoId: "Iqd925vCOeA", title: "Voice & Practice (वाच्य)", nepali: "वाच्य र अभ्यास", desc: "कर्तृवाच्य, कर्मवाच्य र भाववाच्य — clear rule breakdown with practice sentences.", topicLabel: "व्याकरण", duration: "15 min", color: "cinnabar", emoji: "वा" },
  { cls: 10, videoId: "EzL2GJcFqcI", title: "Lesson Sutras — One-liners", nepali: "कक्षा १० — पाठका सूत्रहरू", desc: "One-line summaries and key formulas from every chapter of the SEE Nepali book.", topicLabel: "सूत्र", duration: "20 min", color: "marigold", emoji: "सू" },
  { cls: 10, videoId: "QEMIvI80DQo", title: "Lesson Short Notes", nepali: "कक्षा १० — हरेक पाठको छोटो सार", desc: "Quick revision notes — every chapter condensed into a crisp, exam-ready summary.", topicLabel: "संक्षेप", duration: "24 min", color: "bronze", emoji: "सं" },
  { cls: 11, videoId: "8lkIpsBiWMs", title: "Chandrabindu Rule", nepali: "चन्द्रबिन्दुको नियम", desc: "When and where to use चन्द्रबिन्दु (ँ) — clear examples for Class 11 students.", topicLabel: "व्याकरण", duration: "11 min", color: "cinnabar", emoji: "च" },
  { cls: 12, videoId: "QaZnTVYDRdU", title: "Class 12 Nepali — Set 4", nepali: "कक्षा १२ — नेपाली सेट ४", desc: "Full NEB-style model set 4 with worked answers — ideal for last-day revision.", topicLabel: "परीक्षा", duration: "28 min", color: "marigold", emoji: "से" },
  { cls: 12, videoId: "SkNmW-WKvPc", title: "Class 12 Nepali — Set 2", nepali: "१२ नेपाली सेट २", desc: "Detailed walk-through of model Set 2 — grammar, literature and writing tips.", topicLabel: "परीक्षा", duration: "26 min", color: "cinnabar", emoji: "मो" },
  { cls: 12, videoId: "txwGtGvkZIM", title: "Class 12 Nepali — Set 3", nepali: "१२ नेपाली सेट ३", desc: "Set 3 paper discussion exactly in NEB board style — practice before the real one.", topicLabel: "परीक्षा", duration: "25 min", color: "lapis", emoji: "३" },
  { cls: 12, videoId: "rbZ5GivF9SE", title: "Hamilai Bolaunchhan Himchuli", nepali: "हामीलाई बोलाउँछन् हिमचुली", desc: "Class 12 Nepali, Lesson 7 — lyrical poem with rhythm and meaning explained.", topicLabel: "साहित्य", duration: "25 min", color: "cinnabar", emoji: "हि" },
  { cls: 12, videoId: "WtVu8B1B4As", title: "Stephen Hawking Sutra", nepali: "स्टिफन हकिङ सूत्र", desc: "Class 12 Nepali, Lesson 6 — Stephen Hawking biography and key takeaways.", topicLabel: "पाठ", duration: "20 min", color: "marigold", emoji: "ह" },
  { cls: 10, videoId: "hsN6kWW0euc", title: "Lesson Sutras Part 1", nepali: "पाठ १–६ सूत्रहरू", desc: "Memory formulas for Class 10 Nepali — lessons 1 through 6 made easy.", topicLabel: "सूत्र", duration: "22 min", color: "lapis", emoji: "सु" },
  { cls: 10, videoId: "_i3qp6fd0Xs", title: "First Term Exam Set", nepali: "कक्षा १० — प्रथम त्रैमासिक सेट", desc: "NEB-style model question set for Grade 10 first-term Nepali exam.", topicLabel: "परीक्षा", duration: "28 min", color: "cinnabar", emoji: "१०" },
  { cls: 9, videoId: "0FTSR6-U3L4", title: "First Term Exam Set", nepali: "कक्षा ९ — प्रथम त्रैमासिक सेट", desc: "Model question set for Class 9 Nepali first-term exam with solutions.", topicLabel: "परीक्षा", duration: "26 min", color: "marigold", emoji: "९" },
  { cls: 9, videoId: "8wlaXFS6s9E", title: "Model Set 2", nepali: "कक्षा ९ — नेपाली सेट २", desc: "Grade 9 Nepali model question paper set 2 — exam-ready practice.", topicLabel: "परीक्षा", duration: "24 min", color: "lapis", emoji: "से" },
  { cls: 9, videoId: "MhreC_5GAaQ", title: "Swad Katha Review", nepali: "'स्वाद' कथाको समीक्षा", desc: "Class 9 Nepali Lesson 2 — complete review of Swad story by Dhruvacandra Gautam.", topicLabel: "साहित्य", duration: "18 min", color: "bronze", emoji: "स्व" },
  { cls: 9, videoId: "H1IcVMYOBA8", title: "Satyamohan Joshi Biography", nepali: "सत्यमोहन जोशी जीवनी", desc: "Class 9 Nepali Lesson 5 — Satyamohan Joshi's autobiography in easy sutra form.", topicLabel: "जीवनी", duration: "16 min", color: "cinnabar", emoji: "जो" },
  { cls: 8, videoId: "APFLkFyaJAc", title: "First Term Exam Set", nepali: "कक्षा ८ — प्रथम त्रैमासिक सेट", desc: "Model question set for Class 8 Nepali first-term exam — full walk-through.", topicLabel: "परीक्षा", duration: "27 min", color: "marigold", emoji: "८" },
  { cls: 7, videoId: "MJEGt_7gKw4", title: "Antonyms Word Game", nepali: "विपरीतार्थी शब्दको कोठेपद खेल", desc: "Fun classroom game — learn opposite words through interactive play. For classes 6–10.", topicLabel: "खेल", duration: "20 min", color: "cinnabar", emoji: "वि" },
  { cls: 8, videoId: "PEbYLZvnguM", title: "Upasarga Ra Pratyaya Set", nepali: "उपसर्ग र प्रत्यय सेट", desc: "Prefix and suffix practice set — paragraph-based grammar exercise for all secondary levels.", topicLabel: "व्याकरण", duration: "14 min", color: "bronze", emoji: "उ" },
  { cls: 6, videoId: "ZADwt1MnYeI", title: "First Term Exam — Model Set", nepali: "कक्षा ६ — प्रथम त्रैमासिक सेट", desc: "Specimen question set for Class 6 Nepali first-term exam — topic-wise and fully worked.", topicLabel: "परीक्षा", duration: "24 min", color: "lapis", emoji: "६" },
  { cls: 5, videoId: "NS1JaUxi0XM", title: "Annual Exam — Model Set", nepali: "कक्षा ५ — वार्षिक परीक्षा नमुना", desc: "Complete model question set for Class 5 Nepali final-term exam preparation.", topicLabel: "परीक्षा", duration: "22 min", color: "marigold", emoji: "५" },
  { cls: 4, videoId: "JF2lme8lTvs", title: "Annual Exam — Model Set", nepali: "कक्षा ४ — वार्षिक परीक्षा नमुना", desc: "Complete model question set for Class 4 Nepali annual exam preparation.", topicLabel: "परीक्षा", duration: "20 min", color: "cinnabar", emoji: "४" },
];

function extractClasses(desc) {
  const r = [];
  const pat = [
    [4, /कक्षा\s*[:\s]*४/], [5, /कक्षा\s*[:\s]*५/], [6, /कक्षा\s*[:\s]*६/],
    [7, /कक्षा\s*[:\s]*७/], [8, /कक्षा\s*[:\s]*८/], [9, /कक्षा\s*[:\s]*९/],
    [10, /कक्षा\s*[:\s]*१०/], [11, /कक्षा\s*[:\s]*११/], [12, /कक्षा\s*[:\s]*१२/],
    [4, /कक्षा\s*[:\s]*4/], [5, /कक्षा\s*[:\s]*5/], [6, /कक्षा\s*[:\s]*6/],
    [7, /कक्षा\s*[:\s]*7/], [8, /कक्षा\s*[:\s]*8/], [9, /कक्षा\s*[:\s]*9/],
    [10, /कक्षा\s*[:\s]*10/], [11, /कक्षा\s*[:\s]*11/], [12, /कक्षा\s*[:\s]*12/],
  ];
  for (const [c, re] of pat) { if (re.test(desc)) r.push(c); }
  return [...new Set(r)].sort();
}

function inferClass(desc) {
  if (desc.includes("SEE_Nepali") || desc.includes("एसइई") || desc.includes(" SEE ")) return 10;
  if (desc.includes("NEB") || desc.includes("Grade 12")) return 12;
  if (desc.includes("BLE")) return 8;
  if (desc.includes("माध्यमिक तह") || desc.includes("माध्यमिक")) return 9;
  return 9;
}

function detectTopic(desc) {
  const e = ["नमुना प्रश्नपत्र","प्रश्नपत्र सेट","परीक्षा","प्रथम त्रैमासिक","वार्षिक परीक्षा","दोस्रो त्रैमासिक"];
  for (const k of e) if (desc.includes(k)) return "परीक्षा";
  const g = ["व्याकरण","कारक","विभक्ति","समास","सन्धि","उपसर्ग","प्रत्यय","वाच्य","चन्द्रबिन्दु","अक्षर","शब्दवर्ग","भाव","काल","वाक्य","क्रिया","नाम","सर्वनाम"];
  for (const k of g) if (desc.includes(k)) return "व्याकरण";
  const l = ["कथा","कविता","निबन्ध","नियात्रा","साहित्य","समीक्षा","कथाकार"];
  for (const k of l) if (desc.includes(k)) return "साहित्य";
  const w = ["समाचार","लेखन","भाषण","विज्ञापन","बधाई","प्रतिवेदन","सम्झौता","जीवनी"];
  for (const k of w) if (desc.includes(k)) return "लेखन";
  if (desc.includes("वादविवाद")) return "वादविवाद";
  if (desc.includes("खेल")) return "खेल";
  if (desc.includes("सूत्र")) return "सूत्र";
  return "पाठ";
}

const csvPath = path.join(process.cwd(), "youtube_data.csv");
const outPath = path.join(process.cwd(), "src", "data", "videos.ts");

const allById = new Map();
for (const v of HAND_CRAFTED) allById.set(v.videoId, v);

console.error("DEBUG: about to read csv");
if (fs.existsSync(csvPath)) {
  console.error("DEBUG: csv exists");
  const raw = fs.readFileSync(csvPath, "utf-8");
  console.error("DEBUG: csv read, length=" + raw.length);
  const lines = raw.split("\n").filter((l) => l.trim());
  console.error("DEBUG: lines=" + lines.length);

  const chars = "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
  const colors = ["cinnabar","marigold","lapis","bronze"];
  const usedEmojis = new Set();
  let genCount = 0;

  function nextEmoji(vid) {
    let h = vid.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
    for (let attempt = 0; attempt < 500; attempt++) {
      const emoji = chars[h % chars.length];
      h++;
      if (!usedEmojis.has(emoji)) {
        usedEmojis.add(emoji);
        return emoji;
      }
    }
    const fallback = String.fromCharCode(0x0900 + (h % 128));
    usedEmojis.add(fallback);
    return fallback;
  }

  for (let i = 1; i < lines.length; i++) {
    if (i === 1 || i === 100 || i === 200 || i === 300) console.error("DEBUG: loop i=" + i + " line len=" + lines[i].length);
    const fields = [];
    let field = "";
    let inQ = false;
    for (const ch of lines[i]) {
      if (ch === '"') inQ = !inQ;
      else if (ch === "," && !inQ) { fields.push(field); field = ""; }
      else field += ch;
    }
    fields.push(field);

    const m = (fields[1] || "").match(/v=([a-zA-Z0-9_-]+)/);
    if (!m) continue;
    const vid = m[1];
    if (allById.has(vid)) continue;

    const desc = fields[2] || "";
    const clsList = extractClasses(desc);
    const cls = clsList.length > 0 ? clsList[0] : inferClass(desc);
    const topic = detectTopic(desc);

    let clean = desc.replace(/"/g, " ").replace(/\n/g, " ").replace(/#\S+/g, "").trim();
    const parts = clean.split("।");
    let first = (parts[0] || "").trim();
    if (first.length > 50) first = first.slice(0, 47) + "…";
    let short = clean.slice(0, 80).trim();
    if (clean.length > 80) short = short.slice(0, 77) + "…";

    const emoji = nextEmoji(vid);

    const color = colors[genCount % colors.length];
    const dur = fields[0] ? (fields[0].includes("min") ? fields[0] : fields[0] + " min") : "5 min";

    allById.set(vid, { cls, videoId: vid, title: topic, nepali: first || "नेपाली सिकाइ", desc: short, topicLabel: topic, duration: dur, color, emoji });
    genCount++;
    if (genCount % 100 === 0) console.error("DEBUG: processed " + genCount);
  }
  console.error("DEBUG: csv done, genCount=" + genCount);
}

console.error("DEBUG: sorting " + allById.size + " entries");
const allVideos = [...allById.values()].sort((a, b) => a.cls - b.cls || a.videoId.localeCompare(b.videoId));
console.error("DEBUG: sorted");

console.error("DEBUG: JSON stringify starting");
let code = `// Auto-generated — do not edit

export type VideoEntry = {
  cls: number;
  videoId: string;
  title: string;
  nepali: string;
  desc: string;
  topicLabel: string;
  duration: string;
  color: "cinnabar" | "marigold" | "lapis" | "bronze";
  emoji: string;
};

export const allVideos: VideoEntry[] = ${JSON.stringify(allVideos, null, 2)};
`;
console.error("DEBUG: json done, len=" + code.length);

console.error("DEBUG: writing file");
fs.writeFileSync(outPath, code, "utf-8");
console.log(`Wrote ${allVideos.length} videos to ${outPath}`);
