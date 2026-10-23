import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "hadlet · Instant Board",
  description: "생각을 가볍게 붙여 두는 개인용 메모 보드",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`h-full ${cinzel.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
