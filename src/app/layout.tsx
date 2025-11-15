import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Sarmiento | Backend Developer & AI Specialist",
  description: "Portfolio de Juan Sarmiento - Backend Engineer & AI Specialist especializado en arquitecturas escalables y soluciones inteligentes",
  keywords: ["Backend Developer", "AI Specialist", "FastAPI", "Python", "Machine Learning", "PostgreSQL"],
  openGraph: {
    title: "Juan Sarmiento | Backend Developer & AI Specialist",
    description: "Portfolio profesional - Sistemas escalables y soluciones inteligentes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
