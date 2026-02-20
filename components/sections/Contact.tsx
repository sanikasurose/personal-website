import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:sanikasurose@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/sanikasurose",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanikasurose/",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 flex min-h-[50vh] items-center justify-center bg-orb-dark px-6 pb-16 pt-16 sm:pb-10 sm:pt-10"
    >
      <div className="flex flex-col items-center gap-10 px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Get in Touch
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-12 py-2.5 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20"
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
