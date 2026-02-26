import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "./components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shakhriyor Kadamboev | Engineering Reliable Systems",
  description: "Computer Science student at MLU Halle focusing on backend development, microservices, and reliable architectures. Exploring the intersection of software and hardware.",
  authors: [{ name: "Shakhriyor Kadamboev" }],
  keywords: ["Backend Developer", "Java", "Spring Boot", "Microservices", "Reliable Systems", "Halle", "Germany"],
};

import { ThemeProvider } from "./components/ThemeProvider";

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
