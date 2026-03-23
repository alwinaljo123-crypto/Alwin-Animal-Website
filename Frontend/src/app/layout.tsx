import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import NatureBackground from "@/components/NatureBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alwin Jose Mathew | Endangered Species",
  description: "Head of Endangered Species Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-transparent text-emerald-50 antialiased selection:bg-emerald-500/30`}>
        <NatureBackground />
        
        {/* Fixed Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo/Home link */}
            <Link href="/" className="pointer-events-auto text-xl font-bold tracking-widest text-emerald-100 hover:text-white transition-colors">
              AJM.
            </Link>
            
            {/* Portfolio Button */}
            <Link 
              href="/portfolio" 
              className="pointer-events-auto group relative px-6 py-2 border border-emerald-500/30 rounded-full bg-emerald-950/40 backdrop-blur-md overflow-hidden transition-all hover:scale-105 hover:border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 font-medium text-emerald-50 tracking-wide text-sm uppercase">
                My Portfolio
              </span>
            </Link>
          </div>
        </header>

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
