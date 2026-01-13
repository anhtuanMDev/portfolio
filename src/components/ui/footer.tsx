import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="mailto:anhtuan03.MDev@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/anhtuanMDev"
            className="text-gray-400 hover:text-white"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-1ab336294/"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-gray-400">© 2024 Alex Vin. All rights reserved.</p>
      </div>
    </footer>
  );
}
