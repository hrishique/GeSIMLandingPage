import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Moon,
    Sun,
    Smartphone,
    Mail,
    Zap,
    Building2,
    BookOpen,
  
  } from "lucide-react"
function Header({isDark, toggleTheme, scrollToWaitlist}) {   <Button
  variant="ghost"
  size="icon"
  onClick={toggleTheme}
  className={`${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
>
  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
</Button>

  return (
    <header className="sticky top-0 z-50 px-6 py-6 bg-white/80 dark:bg-[#0B1127] backdrop-blur-md transition-colors shadow-lg dark:shadow-slate-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 p-0.5 overflow-hidden">
            <Image src={isDark ? "/gesim-logo.png" : "/gesim_light.png"} alt="GeSIM" fill className={`object-cover ${isDark ? "scale-150" : "scale-125"}`} />
          </div>
          <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#features"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <Zap className="w-4 h-4" />
            Features
          </a>
          <a
            href="#partners"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <Building2 className="w-4 h-4" />
            Partners
          </a>
          <a
            href="#app"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <Smartphone className="w-4 h-4" />
            App
          </a>
          <a
            href="https://gesim.gitbook.io/gesim"
            target="_blank"
            rel="noopener noreferrer"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <BookOpen className="w-4 h-4" />
            Docs
          </a>
        </nav>

        <div className="flex items-center space-x-4 ms-4">
          <Button
            onClick={scrollToWaitlist}
            className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
          >
            <Mail className="w-4 h-4" />
            Join Waitlist
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header