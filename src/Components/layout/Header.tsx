"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../ui/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Team", href: "/team" },
  { name: "Awards", href: "/awards" },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-[100] w-full border-b border-gray-200 bg-white">
      <Container>
        {/* =====================================================
            DESKTOP / MAIN HEADER
        ====================================================== */}

        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            {/* Logo mark */}

            <span
              aria-hidden="true"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-gray-950"
            >
              <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-gray-950 transition-all duration-300 group-hover:h-4 group-hover:w-4" />

              <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-gray-950 transition-all duration-300 group-hover:h-4 group-hover:w-4" />

              <span className="h-px w-4 bg-gray-950 transition-all duration-300 group-hover:w-5" />
            </span>

            {/* Logo text */}

            <span className="flex flex-col">
              <span className="font-[var(--font-primary)] text-h4 font-semibold leading-none tracking-[-0.04em] text-gray-950">
                DAYA
              </span>

              <span className="text-label mt-1 text-gray-500">
                CONSTRUCTIONS
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center lg:flex"
          >
            <div className="flex items-center">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-3 py-3 font-[var(--font-primary)] text-button transition-colors duration-300 ${
                      active
                        ? "text-gray-950"
                        : "text-gray-500 hover:text-gray-950"
                    }`}
                  >
                    {item.name}

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-3 right-3 h-px bg-gray-950 transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* CONTACT */}

          <Link
            href="/contact"
            className="group hidden min-h-11 items-center gap-3 rounded-full bg-gray-950 px-5 py-3 font-[var(--font-primary)] text-button text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 sm:inline-flex"
          >
            <span>Contact Us</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white transition-all duration-300 hover:border-gray-950 hover:bg-gray-50 lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-gray-950 transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-gray-950 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-gray-950 transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </span>
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`grid transition-all duration-300 lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="border-t border-gray-200 py-5"
            >
              <div className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex min-h-14 items-center justify-between border-b py-4 font-[var(--font-primary)] text-button transition-all duration-300 ${
                        active
                          ? "border-gray-300 text-gray-950"
                          : "border-gray-100 text-gray-600 hover:pl-2 hover:text-gray-950"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-label text-gray-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item.name}</span>
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "border-gray-950 bg-gray-950 text-white"
                            : "border-gray-200 text-gray-400 group-hover:translate-x-1 group-hover:border-gray-950 group-hover:text-gray-950"
                        }`}
                      >
                        <ArrowIcon />
                      </span>
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 flex min-h-12 items-center justify-center gap-3 rounded-full bg-gray-950 px-6 py-3 font-[var(--font-primary)] text-button text-white transition-all duration-300 hover:bg-gray-800"
                >
                  <span>Contact Us</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}