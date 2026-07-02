import type { Metadata } from "next";
import { Space_Grotesk, Courier_Prime } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/Analytics";
import { portfolioData } from "./data/portfolio";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { personalInfo, hero, skills } = portfolioData;
  const title = `${personalInfo.name} | ${personalInfo.title}`;
  const keywords = [
    "Backend Developer",
    "Reliable Systems",
    personalInfo.location,
    ...skills.all,
  ];

  return {
    metadataBase: new URL("https://shakha.online"),
    title,
    description: hero.subheadline,
    authors: [{ name: personalInfo.name }],
    keywords,
    openGraph: {
      title,
      description: hero.subheadline,
      type: "website",
      url: "https://shakha.online",
      siteName: personalInfo.name,
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${courierPrime.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
