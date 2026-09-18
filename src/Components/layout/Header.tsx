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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="group flex flex-col"
          >
            <span className="text-lg font-semibold tracking-tight text-gray-950 transition-transform duration-300 group-hover:-translate-y-0.5">
              DAYA
            </span>

            <span className="text-xs tracking-[0.18em] text-gray-500 transition-colors duration-300 group-hover:text-gray-900">
              CONSTRUCTIONS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "text-gray-950"
                      : "text-gray-600 hover:text-gray-950"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gray-950 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className={`hidden items-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex ${
              pathname === "/contact"
                ? "bg-gray-700 text-white"
                : "bg-gray-950 text-white hover:bg-gray-800 hover:shadow-md"
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 transition-all duration-300 hover:border-gray-900 hover:bg-gray-100 lg:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
              <span
                className={`block h-px w-5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-y-[4px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />

              <span
                className={`block h-px w-5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`block h-px w-5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen
                    ? "-translate-y-[4px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-gray-200 py-5">
            <div className="flex flex-col">

              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-between border-b py-4 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "border-gray-300 pl-2 text-gray-950"
                        : "border-gray-100 text-gray-700 hover:pl-2 hover:text-gray-950"
                    }`}
                  >
                    <span>{item.name}</span>

                    <span
                      className={`transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-gray-950"
                          : "translate-x-0 text-gray-400 group-hover:translate-x-1 group-hover:text-gray-900"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`mt-5 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  pathname === "/contact"
                    ? "bg-gray-700 text-white"
                    : "bg-gray-950 text-white hover:bg-gray-800"
                }`}
              >
                Contact Us
              </Link>

            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}