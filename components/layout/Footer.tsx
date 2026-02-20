import { Github } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orb-dark">
      <div className="mx-auto w-4/5 border-t border-hero-accent" />
      <Container className="py-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-center text-sm text-white/80">
            © {currentYear} Made by Sanika Surose 🌸
          </p>
          <a
            href="https://github.com/sanikasurose/personal-portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
