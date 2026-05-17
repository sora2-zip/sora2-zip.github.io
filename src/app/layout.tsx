import type { Metadata } from "next";
import {
  Inter,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import { cn } from "../lib/utils";
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "이소라 - 포트폴리오",
  description: "퍼블리셔 이소라의 포트폴리오 웹사이트입니다. 다양한 프로젝트 경험과 기술 스택을 소개합니다.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        notoSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}