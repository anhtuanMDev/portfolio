import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/#home" onClick={closeMobileMenu}>
            <div className="font-bold text-xl text-blue-600 cursor-pointer transition-transform hover:scale-105">
              Alex Portfolio
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/#home"
              className={`font-medium transition-colors duration-200 ${
                pathname === "/" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`font-medium transition-colors duration-200 ${
                pathname === "/projects" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-600 font-medium">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 text-slate-50 text-sm font-bold tracking-[0.015em] hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:scale-105">
                <p>Contact</p>
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-500"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {/* Animated Hamburger/Close Icon */}
              <span
                className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-1 block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu with slide-down animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/#home"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1 ${
                  pathname === "/"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1 ${
                  pathname === "/projects"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2"
              >
                <button className="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-blue-500 text-slate-50 text-sm font-bold tracking-[0.015em] hover:bg-blue-600 transition-all duration-200 hover:shadow-lg transform hover:scale-[1.02]">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}