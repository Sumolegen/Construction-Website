import Link from "next/link";
import Container from "../ui/Container";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Team", href: "/team" },
  { name: "Awards", href: "/awards" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-white">
                DAYA
              </span>

              <span className="text-xs tracking-[0.18em] text-gray-500">
                CONSTRUCTIONS
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Daya Constructions & Structural Consultants provides
              construction, structural design, consultancy, restoration,
              rehabilitation and project management services.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
              <p>
                Uralpatti, Udumalpet,
                <br />
                Tiruppur, Tamil Nadu - 642204
              </p>

              <p>India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-800 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Daya Constructions & Structural
            Consultants. All rights reserved.
          </p>

          <p>Building with strength. Designing with confidence.</p>
        </div>
      </Container>
    </footer>
  );
}