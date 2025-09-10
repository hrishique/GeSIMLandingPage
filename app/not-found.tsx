"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Globe, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import { useThemeContext } from "@/components/theme-provider"

export default function NotFound() {
  const { isDark } = useThemeContext()

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
      {/* Header */}
      {/* 404 Content */}
      <main className="container mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
        <div className={`text-8xl mb-8 ${isDark ? "text-slate-700" : "text-slate-300"}`}>
          <Search className="w-32 h-32 mx-auto" />
        </div>
        <h1 className={`text-4xl md:text-5xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
          Page Not Found
        </h1>
        <p className={`text-lg md:text-xl mb-10 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto`}>
          The page you’re looking for doesn’t exist or may have been moved. Let’s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-8 py-3 rounded-xl font-semibold flex items-center gap-3`}
            >
              <Globe className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className={`px-8 py-3 rounded-xl font-semibold flex items-center gap-3 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
            >
              <ArrowLeft className="w-5 h-5" />
              Explore Blog
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
} 