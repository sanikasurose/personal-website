/* eslint-disable @next/next/no-img-element */

const technologies = [
  { name: "Python", icon: "/logos/python.svg" },
  { name: "Java", icon: "/logos/java.svg" },
  { name: "JavaScript", icon: "/logos/javascript.svg" },
  { name: "TypeScript", icon: "/logos/typescript.svg" },
  { name: "C++", icon: "/logos/c.svg" },
  { name: "HTML", icon: "/logos/html.svg" },
  { name: "CSS", icon: "/logos/css.svg" },
  { name: "Bash", icon: "/logos/bash.svg" },
  { name: "NumPy", icon: "/logos/numpy.svg" },
  { name: "PyTorch", icon: "/logos/pytorch.svg" },
  { name: "React", icon: "/logos/react.svg" },
  { name: "Tailwind CSS", icon: "/logos/tailwindcss.svg" },
  { name: "FastAPI", icon: "/logos/fastapi.svg" },
  { name: "GitHub", icon: "/logos/github.svg" },
];

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <img src={icon} alt="" className="h-8 w-8" loading="lazy" />
      <span className="whitespace-nowrap text-lg font-medium text-white/80">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const items = [...technologies, ...technologies];

  return (
    <section className="relative z-10">
      <div className="w-full bg-orb-dark py-12 shadow-2xl">
        <div
          className="mx-auto w-[75%] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-16">
            {items.map((tech, i) => (
              <TechItem key={i} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
