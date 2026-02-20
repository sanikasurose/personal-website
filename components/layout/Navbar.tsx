"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const linkClass =
  "text-gray-600 transition hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orb-pink focus:ring-offset-2 rounded cursor-pointer";

const NAVBAR_OFFSET = 96;

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        requestAnimationFrame(() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: NAVBAR_OFFSET },
            ease: "power3.inOut",
          });
        });
      }
    }
  }, [pathname]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      if (pathname !== "/") {
        router.push(`/#${id}`);
        return;
      }
      const target = document.getElementById(id);
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: NAVBAR_OFFSET },
          ease: "power3.inOut",
        });
      }
    },
    [pathname, router],
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-4 sm:px-4 sm:pt-5"
      role="banner"
    >
      <div className="w-full max-w-[98%] sm:max-w-[96%] lg:max-w-7xl">
        <nav
          className="flex h-14 items-center justify-center rounded-2xl border border-white/60 bg-white/60 px-8 shadow-lg shadow-gray-200/40 backdrop-blur-md md:justify-between sm:px-10"
          aria-label="Main"
        >
          <ul className="hidden md:flex flex-1 gap-6 justify-start">
            <li>
              <a
                href="#about"
                onClick={(e) => scrollTo(e, "about")}
                className={linkClass}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, "projects")}
                className={linkClass}
              >
                Projects
              </a>
            </li>
          </ul>
          <a
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: 0 },
                  ease: "power3.inOut",
                });
              }
            }}
            className="shrink-0 px-4 text-lg font-semibold text-gray-900"
          >
            Sanika Surose
          </a>
          <ul className="hidden md:flex flex-1 gap-6 justify-end">
            <li>
              <Link href="/experience" className={linkClass}>
                Experience
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
                className={linkClass}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
