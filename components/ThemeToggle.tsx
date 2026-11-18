"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors relative group"
      aria-label="Cambiar tema"
    >
      <div className="relative w-5 h-5">
        {/* Sol - visible en modo oscuro */}
        <FaSun
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-90 scale-50"
          }`}
          size={20}
        />
        {/* Luna - visible en modo claro */}
        <FaMoon
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-50"
          }`}
          size={20}
        />
      </div>
    </button>
  )
}
