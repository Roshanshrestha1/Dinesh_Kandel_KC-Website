import type { AppProps } from "next/app";
import { Fraunces, Tiro_Devanagari_Hindi, Mukta, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fraunces.variable} ${tiro.variable} ${mukta.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
