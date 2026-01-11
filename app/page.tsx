"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Home() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-700">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/gesim-logo.png"
            alt="GeSIM Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className={`text-3xl md:text-5xl font-bold tracking-tight text-center ${isDark ? "text-white" : "text-slate-900"}`}>
          Revamping... GeSIM
        </h1>

        <div className="flex gap-2">
          <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-slate-500" : "bg-slate-400"}`} style={{ animationDelay: '0ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-slate-500" : "bg-slate-400"}`} style={{ animationDelay: '150ms' }}></div>
          <div className={`w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-slate-500" : "bg-slate-400"}`} style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
