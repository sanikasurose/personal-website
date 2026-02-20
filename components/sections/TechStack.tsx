/* eslint-disable @next/next/no-img-element */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

const technologies = [
  { name: "Python", icon: withBasePath("/logos/python.svg") },
  { name: "Java", icon: withBasePath("/logos/java.svg") },
  { name: "JavaScript", icon: withBasePath("/logos/javascript.svg") },
  { name: "TypeScript", icon: withBasePath("/logos/typescript.svg") },
  { name: "C++", icon: withBasePath("/logos/c.svg") },
  { name: "HTML", icon: withBasePath("/logos/html.svg") },
  { name: "CSS", icon: withBasePath("/logos/css.svg") },
  { name: "Bash", icon: withBasePath("/logos/bash.svg") },
  { name: "NumPy", icon: withBasePath("/logos/numpy.svg") },
  { name: "PyTorch", icon: withBasePath("/logos/pytorch.svg") },
  { name: "React", icon: withBasePath("/logos/react.svg") },
  { name: "Tailwind CSS", icon: withBasePath("/logos/tailwindcss.svg") },
  { name: "FastAPI", icon: withBasePath("/logos/fastapi.svg") },
  { name: "GitHub", icon: withBasePath("/logos/github.svg") },
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
