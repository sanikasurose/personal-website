"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const heroGradient =
  "radial-gradient(circle at 50% 40%, #FCF5EE 0%, #FCF5EE 42%, rgba(255,220,220,0.5) 58%, rgba(255,196,196,0.55) 75%, rgba(238,105,131,0.35) 90%, rgba(133,14,53,0.18) 100%)";

export default function ExperiencePage() {
  return (
    <div
      className="relative flex h-screen min-h-screen w-full flex-col overflow-hidden"
      style={{ background: heroGradient }}
    >
      <div className="relative z-20 shrink-0">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Under Construction
          </h1>
          <p className="text-base text-gray-600 sm:text-lg">
            This page is still being built. Check back soon!
          </p>
          <Link
            href="/"
            className="mt-4 rounded-lg border-2 border-gray-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition hover:border-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
