"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentYear, setCurrentYear] = useState(2025)
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Use resolvedTheme to handle system preference
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark")
  const onToggleTheme = () => setTheme(isDark ? "light" : "dark")

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("gesim-footer")
      if (footer) {
        const rect = footer.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight
        setScrolled(isVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <footer
      id="gesim-footer"
      className={`relative overflow-hidden py-32 px-6 transition-all duration-700 ${isDark ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-slate-50 to-slate-100"
        }`}
      role="contentinfo"
      aria-label="Site footer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 opacity-[0.015] transition-opacity duration-500 ${isHovered ? "opacity-[0.025]" : ""
          }`}
        style={{
          backgroundImage: `radial-gradient(circle at center, ${isDark ? "rgba(148, 163, 184, 0.4)" : "rgba(71, 85, 105, 0.4)"
            } 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          {/* Left cluster: Brand + Trust */}
          <div className="space-y-6 md:max-w-sm">
            <div className="space-y-3">
              <h2 className={`text-xl font-semibold tracking-tight ${isDark ? "text-slate-300" : "text-slate-800"}`}>
                GeSIM
              </h2>
              <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-600"}`}>
                Privacy-first mobile connectivity for on-chain lives.
              </p>
              {/* Social Icons */}
              <div className="flex gap-5 mt-16 md:mt-20">
                <a
                  href="https://twitter.com/gesim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all hover:opacity-60 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  aria-label="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/gesim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all hover:opacity-60 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/gesim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all hover:opacity-60 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/gesim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all hover:opacity-60 ${isDark ? "text-blue-400" : "text-blue-600"}`}
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Center/Right clusters: Minimal link groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20">
            {/* Company */}
            <div className="space-y-4">
              <h3
                className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? "text-slate-600" : "text-slate-500"
                  }`}
              >
                Company
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/about"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Blog
                </Link>
                <a
                  href="#careers"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Careers
                </a>
              </nav>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3
                className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? "text-slate-600" : "text-slate-500"
                  }`}
              >
                Product
              </h3>
              <nav className="flex flex-col gap-3">
                <a
                  href="https://gesim.gitbook.io/gesim/getting-started/quickstart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Setup Guide
                </a>
              </nav>
              <nav className="flex flex-col gap-3">
                <a
                  href="https://gesim.gitbook.io/gesim"
                  target="_blank"
                  rel="noopener noreferrer"

                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Docs
                </a>
              </nav>
            </div>

            {/* Legal */}
            <div className="col-span-2 md:col-span-1 space-y-4 pt-4 md:pt-0">
              <h3
                className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? "text-slate-600" : "text-slate-500"
                  }`}
              >
                Legal
              </h3>
              <nav className="grid grid-cols-2 md:grid-cols-1 gap-x-12 md:gap-x-0 gap-y-3">
                <Link
                  href="/terms"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Privacy
                </Link>
                <Link
                  href="/license"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  License
                </Link>
                <Link
                  href="/copyright"
                  className={`text-sm transition-opacity hover:opacity-60 ${isDark ? "text-slate-500" : "text-slate-600"
                    }`}
                >
                  Copyright
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-center gap-2">
            <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-500"}`}>&copy; GeSIM, {currentYear}</p>

            {/* Dark Mode Icon - Inline with Copyright */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`p-1 rounded-md transition-all hover:opacity-70 ${isDark ? "text-blue-400 hover:bg-slate-800/50" : "text-blue-600 hover:bg-slate-200/50"}`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          <p className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"} italic`}>Private mobile data for on-chain lives</p>
        </div>
      </div>
      {/* GeSIM watermark */}
      <div
        className="
    pointer-events-none
    order-last
    mt-12 md:mt-0
    text-center
    md:order-none
    md:mt-0
    md:absolute md:inset-0 md:flex md:items-center md:justify-center
  "
      >
        <span
          className={`
      block
      text-[25vw]
      md:text-[clamp(8rem,50vh,28rem)]
      font-bold italic leading-[0.8] select-none
      ${isDark
              ? "text-slate-100/30 md:text-slate-800/30"
              : "text-slate-900/15 md:text-slate-300/40"}
    `}
        >
          GeSIM
        </span>
      </div>
    </footer >
  )
}
export default Footer
