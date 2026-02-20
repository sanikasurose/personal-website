"use client";

import { useRef, useState, useCallback } from "react";
import Grainient from "@/components/ui/Grainient";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  arrowColor?: string;
};

const projects: Project[] = [
  {
    title: "SeamSecure",
    description:
      "SeamSecure is a full-stack web application that analyzes email threads for potential security risks, combining rule-based heuristics with Google Gemini AI to detect phishing attempts, suspicious sender patterns, and other email-based threats.",
    tags: ["Python", "FastAPI", "Uvicorn", "Pydantic", "Google Gemini", "React", "TypeScript", "Tailwind CSS", "Vite"],
    image: withBasePath("/seamsecure.png"),
    href: "https://github.com/SeamSecure/SeamSecure",
    arrowColor: "text-pink-300",
  },
  {
    title: "Clairity",
    description:
      "CLAIRITY is a privacy-focused Swift iOS app that uses OCR and AI to transform complex medical, insurance, and institutional documents into clear, structured, and actionable next steps so patients know exactly what to do after a healthcare interaction.",
    tags: ["Swift", "Google Vision API", "Google Gemini", "Google Healthcare NLP"],
    image: withBasePath("/clairity.png"),
    href: "https://github.com/syaanmerchant/clAIrity",
  },
  {
    title: "ScholarScrape",
    description:
      "ScholarScrape is a Python-based web scraping tool that crawls university faculty pages and converts unstructured academic information into clean, structured research profiles in both human-readable and machine-readable formats for analysis and outreach.",
    tags: ["Python", "BeautifulSoup", "Schema Design", "JSON Output"],
    image: withBasePath("/scholarscrape.png"),
    href: "https://github.com/sanikasurose/outreact-research-scraper",
  },
];

function SpotlightCard({ title, description, tags, image, href, arrowColor }: Project) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const card = (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-orb-dark/25 bg-[#FFF8F0] transition-all duration-300 hover:border-orb-dark/50 hover:shadow-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(133,14,53,0.13), transparent 55%)`,
        }}
      />

      {href && (
        <svg
          className={`absolute right-4 top-4 z-30 h-5 w-5 ${arrowColor ?? "text-gray-700"} transition-opacity duration-300`}
          style={{ opacity: hovered ? 1 : 0 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      )}

      <div className="relative h-72 w-full overflow-hidden bg-[#f0e6df]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 py-7">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orb-dark/10 px-2.5 py-0.5 text-xs font-medium text-orb-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <Grainient
          color1="#FCF5EE"
          color2="#EE6983"
          color3="#FFC4C4"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
          Featured Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SpotlightCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={`${basePath}/experience`}
            className="rounded-lg bg-orb-dark px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orb-dark focus:ring-offset-2"
          >
            See all projects
          </a>
        </div>
      </div>
    </section>
  );
}
