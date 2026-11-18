"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ThemeToggle"

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/projects" },
  { name: "Sobre Mí", path: "/about" },
  { name: "Contacto", path: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              JV
            </span>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Menú Mobile */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-400">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
