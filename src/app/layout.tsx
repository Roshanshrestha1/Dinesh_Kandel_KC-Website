import type { Metadata } from "next";
import { Fraunces, Tiro_Devanagari_Hindi, Mukta, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-latin",
  axes: ["SOFT", "WONK", "opsz"],
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  display: "swap",
  weight: "400",
  variable: "--font-display-iast",
});

const mukta = Mukta({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body-devanagari",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "दिनेश के.सी. | Dinesh Kandel KC – नेपाली भाषा सिकाइ",
  description:
    "Official site of Dinesh Kandel KC (दिनेश के.सी.) – Nepali language educator. नेपाली भाषा सिकाइ for class 8 & 12, grammar lessons, literature, exam prep and Shorts.",
  keywords: [
    "Dinesh KC",
    "Dinesh Kandel KC",
    "नेपाली भाषा सिकाइ",
    "Nepali language teaching",
    "DineshKC1975",
    "कक्षा १२ नेपाली",
    "Class 12 Nepali",
  ],
  openGraph: {
    title: "दिनेश के.सी. – Nepali Language Educator",
    description:
      "नेपाली भाषा सिकाइ – Grammar, literature, model questions & exam prep since 2011.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ne"
      className={`${fraunces.variable} ${tiro.variable} ${mukta.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
