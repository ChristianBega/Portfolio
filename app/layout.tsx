import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import StarfieldRenderer from "@/components/organisms/StarfieldRenderer";
import NebulaLayer from "@/components/organisms/NebulaLayer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Bega",
  description: "Portfolio of Christian Bega.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.24.0/dist/tabler-icons.min.css" />
      </head>
      <body className="bg-base text-text-primary font-sans antialiased">
        <StarfieldRenderer />
        {/* Atmosphere — deep space gradient */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(135% 90% at 50% -12%, #1a1f4e 0%, #101a3c 26%, #0c1430 48%, #0a1026 68%, #080c1c 100%)",
          }}
        />
        {/* Nebula haze — sits above the atmosphere gradient, below the stars */}
        <NebulaLayer />
        {children}
      </body>
    </html>
  );
}
