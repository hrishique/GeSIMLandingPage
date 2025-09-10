'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Smartphone, Mail, Zap, Building2, Globe, Book, Menu, X } from "lucide-react"
import Link from 'next/link'
import { useThemeContext } from '@/components/theme-provider'

function Header() {   
  const { isDark, toggleTheme } = useThemeContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <header className={`top-0 z-50 px-6 py-6 ${!isDark ? 'bg-white/80' : 'bg-slate-950'}  transition-colors`}>
      <div className="md:container md:mx-auto flex items-center justify-between">
        <Link href='/' className="flex items-center ">
        <div className={`relative w-8 h-8 p-1.5 ${isDark ? "bg-slate-800" : "bg-gradient-to-br from-slate-200 to-slate-300"} rounded-xl shadow-lg`}>
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain rounded-xl" />
        </div>
        <span className={`ms-2 text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="/#features"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <Zap className="w-4 h-4" />
            Features
          </Link>
          <Link
            href="/#partners"
            className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
          >
            <Building2 className="w-4 h-4" />
            Partners
          </Link>
         
            <Link
              href="/#app"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Smartphone className="w-4 h-4" />
              App
            </Link> 
            <Link
              href="/blog"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Globe className="w-4 h-4" />
              Blog
            </Link>
             <Link
              href="https://gesim.gitbook.io/gesim"
              target='_blank'
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Book className="w-4 h-4" />
              docs
            </Link>
        </nav>

        <div className="flex items-center space-x-3">
          {/* Dark toggle only on md+ header */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`hidden md:inline-flex ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            onClick={scrollToWaitlist}
            className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
          >
            <Mail className="w-4 h-4" />
            Join Waitlist
          </Button>
          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className={`${isDark ? "text-slate-300 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"} md:hidden rounded-xl`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-[60] ${isDark ? 'bg-black/50' : 'bg-black/40'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Panel */}
          <div
            className={`fixed right-0 top-0 z-[70] h-full w-80 max-w-[90vw] ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'} shadow-2xl border-l ${isDark ? 'border-slate-800' : 'border-slate-200'} transform transition-transform duration-200 ease-out`}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-base font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className={`${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'} rounded-xl`}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col gap-1 p-4">
              <Button
                variant="ghost"
                className="justify-start gap-2 rounded-xl"
                onClick={() => { setIsMenuOpen(false); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <Zap className="w-4 h-4" />
                Features
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 rounded-xl"
                onClick={() => { setIsMenuOpen(false); document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <Building2 className="w-4 h-4" />
                Partners
              </Button>
              <Link href="#app" onClick={() => setIsMenuOpen(false)} className="rounded-xl">
                <Button variant="ghost" className="w-full justify-start gap-2 rounded-xl">
                  <Smartphone className="w-4 h-4" />
                  App
                </Button>
              </Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="rounded-xl">
                <Button variant="ghost" className="w-full justify-start gap-2 rounded-xl">
                  <Globe className="w-4 h-4" />
                  Blog
                </Button>
              </Link>
              <Link href="https://gesim.gitbook.io/gesim" target='_blank' onClick={() => setIsMenuOpen(false)} className="rounded-xl">
                <Button variant="ghost" className="w-full justify-start gap-2 rounded-xl">
                  <Book className="w-4 h-4" />
                  docs
                </Button>
              </Link>

              <div className="my-2 border-t border-slate-200 dark:border-slate-800" />

              <Button
                variant="outline"
                className={`${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'} justify-start gap-2 rounded-xl`}
                onClick={toggleTheme}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                Toggle theme
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header