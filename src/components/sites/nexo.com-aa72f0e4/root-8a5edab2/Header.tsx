"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, QrCode } from "lucide-react";
import { NexoMarkIcon } from "@/components/sites/nexo.com-aa72f0e4/shared/icons";

const NAV_LINKS = ["Personal", "Business", "Markets", "Company"] as const;

type NavTheme = "dark" | "light";

const SCROLL_THRESHOLD = 80;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState<NavTheme>("dark");

  // Toggle the floating pill background AND flip nav colors based on which
  // themed section currently sits behind the fixed header band. A direct
  // scroll-position check (rather than IntersectionObserver rootMargin math,
  // which is easy to get wrong with percentage margins) keeps this reliable.
  useEffect(() => {
    const PROBE_Y = 96; // px from top of viewport, inside the fixed header band

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

      const sections = document.querySelectorAll<HTMLElement>(
        "[data-theme]"
      );
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= PROBE_Y && rect.bottom > PROBE_Y) {
          const theme = section.getAttribute("data-theme");
          if (theme === "dark" || theme === "light") {
            setNavTheme(theme);
          }
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const isDark = navTheme === "dark";
  const textColorClass = isDark ? "text-white" : "text-nexo-dark";
  const signUpClass = isDark
    ? "bg-nexo-teal text-nexo-dark"
    : "bg-nexo-dark text-white";
  const iconButtonBorderClass = isDark
    ? "border-white/20 text-white"
    : "border-nexo-dark/20 text-nexo-dark";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "pointer-events-auto transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled
            ? "mx-4 mt-4 rounded-xl border border-[hsla(0,0%,60%,0.08)] bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[4px] md:mx-6"
            : "mx-0 mt-0 rounded-none border border-transparent bg-transparent",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between px-8 transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled ? "py-3" : "py-5",
          ].join(" ")}
        >
          <Link href="/" className="flex items-center gap-2">
            <NexoMarkIcon
              className={`h-5 w-auto transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${textColorClass}`}
            />
            <span
              className={`text-xl font-bold tracking-wide transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${textColorClass}`}
            >
              NEXO
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((label) => (
              <button
                key={label}
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${textColorClass}`}
              >
                {label}
                <ChevronDown className="h-3 w-3" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className={`hidden text-sm font-medium transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:inline ${textColorClass}`}
            >
              Log in
            </Link>

            <button
              type="button"
              className={`rounded-md px-6 py-3 text-base font-medium transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${signUpClass}`}
            >
              Sign up
            </button>

            <button
              type="button"
              aria-label="Download the app"
              className={`hidden h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${iconButtonBorderClass}`}
            >
              <QrCode className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Change language"
              className={`hidden h-7 w-7 items-center justify-center rounded-lg border transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${iconButtonBorderClass}`}
            >
              <Globe className="h-4 w-4" />
            </button>

            <button
              type="button"
              aria-label="Open menu"
              className={`flex items-center justify-center transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${textColorClass}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
