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
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              DAYA
            </span>

            <span className="text-xs tracking-[0.18em] text-gray-500">
              CONSTRUCTIONS
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800 sm:inline-flex"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </header>
  );
}