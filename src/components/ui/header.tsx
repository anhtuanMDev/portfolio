import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/#home">
            <div className="font-bold text-xl text-blue-600 cursor-pointer">
              Alex Portfolio
            </div>
          </Link>
          <div className="flex space-x-8 items-center">
            <Link
              href="/#home"
              className={`font-medium ${
                pathname === "/" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`font-medium ${
                pathname === "/projects" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-600 font-medium">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 text-slate-50 text-sm font-bold tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <p>Contact</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
