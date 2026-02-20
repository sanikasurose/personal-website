import Image from "next/image";
import { Container } from "@/components/ui/Container";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src={`${basePath}/about_me.png`}
              alt="About me"
              width={256}
              height={256}
              className="mb-6 h-64 w-64 rounded-lg object-cover ring-4 ring-white/80"
            />
            <h2 className="text-4xl font-semibold">About Me</h2>
          </div>
          <div className="space-y-4 text-center text-gray-600 md:text-left">
            <p>
              I&apos;m a Software Engineering student passionate about applied
              AI, data-driven systems, and building thoughtful technology that
              solves real-world problems.
            </p>
            <p>
              I&apos;ve worked on projects ranging from AI-powered document
              analysis tools, LLM-based chat systems, to data pipelines that
              transform messy, unstructured information into meaningful insights.
              In the future, I hope to contribute to responsible AI solutions in
              high-impact industries where technology can genuinely improve
              people&apos;s lives.
            </p>
            <p>
              See my tech stack and a selection of featured projects below.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
