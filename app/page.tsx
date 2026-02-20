import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Contact } from "@/components/sections/Contact";
import Grainient from "@/components/ui/Grainient";

export default function Home() {
  return (
    <>
      <div className="relative">
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
        <div className="relative">
          <Hero />
          <div className="mx-auto w-4/5 border-t border-orb-dark" />
          <About />
        </div>
      </div>
      <TechStack />
      <ProjectsSection />
      <Contact />
    </>
  );
}
