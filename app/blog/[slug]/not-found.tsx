"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ArrowLeft, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >
      {/* Header */}
      <header className="relative z-50 px-6 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <div className="container mx-auto max-w-4xl px-6 py-32 text-center">
        <div className={`text-8xl mb-8 ${isDark ? "text-slate-700" : "text-slate-300"}`}>
          <Search className="w-32 h-32 mx-auto" />
        </div>
        <h1 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
          Article Not Found
        </h1>
        <p className={`text-xl mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto`}>
          The article you're looking for doesn't exist or may have been moved. Let's get you back to exploring our
          latest insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button
              size="lg"
              className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-8 py-3 rounded-xl font-semibold flex items-center gap-3`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className={`px-8 py-3 rounded-xl font-semibold flex items-center gap-3 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
            >
              <Globe className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
