import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/Analytics";
import { ThemeProvider } from "./components/ThemeProvider";
import { portfolioData } from "./data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-background text-text-main transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
