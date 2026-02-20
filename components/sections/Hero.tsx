"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";

const PHRASES = ["Hi! I'm", "Sanika Surose"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 1200;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [done, setDone] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => setFading(true), 2000);
    return () => clearTimeout(timer);
  }, [done]);

  const tick = useCallback(() => {
    const current = PHRASES[phraseIdx];
    const isLast = phraseIdx === PHRASES.length - 1;

    if (!isDeleting) {
      const next = current.slice(0, displayed.length + 1);
      setDisplayed(next);

      if (next === current) {
        if (isLast) {
          setDone(true);
          return;
        }
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      const next = current.slice(0, displayed.length - 1);
      setDisplayed(next);

      if (next === "") {
        setIsDeleting(false);
        setPhraseIdx((i) => i + 1);
        return;
      }
    }
  }, [displayed, phraseIdx, isDeleting]);

  useEffect(() => {
    if (done) return;
    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, done, isDeleting]);

  return (
    <section
      className="relative flex h-screen min-h-screen w-full flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Navbar — sits on top of hero so gradient appears behind it */}
      <div className="relative z-20 shrink-0">
        <Navbar />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <Image
            src={`${basePath}/profile.png`}
            alt="Sanika Surose"
            width={288}
            height={288}
            priority
            className="animate-slide-up h-44 w-44 shrink-0 rounded-full object-cover ring-4 ring-white/80 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72"
          />
          <h1
            className="animate-slide-up mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.12s" }}
          >
            {displayed}
            <span
              className={`inline-block w-[3px] translate-y-[2px] bg-gray-900 transition-opacity duration-1000 ${
                fading ? "opacity-0" : "animate-blink"
              }`}
              style={{ height: "1em" }}
              aria-hidden="true"
            />
          </h1>
          <p
            className="animate-slide-up mt-4 text-base text-gray-600 sm:text-lg"
            style={{ animationDelay: "0.24s" }}
          >
            Software Engineering @ McMaster University
          </p>
          <div
            className="animate-slide-up mt-8 flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap"
            style={{ animationDelay: "0.36s" }}
          >
            <a
              href={`${basePath}/experience`}
              className="w-48 rounded-lg bg-orb-dark px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orb-dark focus:ring-offset-2 md:w-auto"
            >
              Experience
            </a>
            <a
              href="https://docs.google.com/document/d/1fk_DlDDKFr3G-Uh-M5MQ8cFGBw_8UFyiVjji7mI1iQs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 rounded-lg border-2 border-gray-300 bg-white/80 px-5 py-2.5 text-center text-sm font-semibold text-gray-700 backdrop-blur-sm transition hover:border-gray-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:w-auto"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
