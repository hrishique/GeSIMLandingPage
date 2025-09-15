'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Smartphone, Mail, Zap, Building2, Globe, Book, Menu, X } from "lucide-react"
import Link from 'next/link'
import { useThemeContext } from '@/components/theme-provider'

function Header() {   
  const { toggleTheme } = useThemeContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }


  const navLinks = [
    {
      href: "/#features",
      label: "Features",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      href: "/#partners",
      label: "Partners",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      href: "/#app",
      label: "App",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      href: "/blog",
      label: "Blog",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      href: "https://gesim.gitbook.io/gesim",
      label: "docs",
      icon: <Book className="w-4 h-4" />,
      target: "_blank",
    },
  ]
  return (
    <header className={`top-0 z-50 px-6 py-6 bg-white/80 dark:bg-slate-950 transition-colors`}>
      <div className="md:container md:mx-auto flex items-center gap-4 justify-between">
     
        <Link href='/' className="flex items-center ">
        <div className={`relative w-8 h-8 p-1.5 bg-gradient-to-br from-slate-200 to-slate-300 dark:bg-slate-800 rounded-xl shadow-lg`}>
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain rounded-lg" />
        </div>
        <span className={`ms-2 text-xl font-bold text-slate-900 dark:text-white`}>GeSIM</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">

        {navLinks.map(({ href, label, icon, target }, idx) => (
          <Link
            key={label}
            href={href}
            target={target}
            className={`text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2`}
          >
            {icon}
            {label}
          </Link>
        ))}
        </nav>
        
      

        <div className="flex items-center space-x-3">
          {/* Dark toggle only on md+ header */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`hidden md:inline-flex text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 rounded-xl`}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 hidden dark:inline" />
            <Moon className="h-5 w-5 inline dark:hidden" />
          </Button>
          <Button
            onClick={scrollToWaitlist}
            className={`px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700`}
          >
            <Mail className="w-4 h-4" />
            Join Waitlist
          </Button>
          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className={`md:hidden rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[60] bg-black/40 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden={!isMenuOpen}
        />
        {/* Panel */}
        <div
          className={`fixed left-0 top-0 z-[70] h-full w-80 max-w-[90vw] bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 shadow-2xl border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-base font-semibold">Menu</span>
              <div className='flex items-center gap-2'>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`inline-flex text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 rounded-xl`}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 hidden dark:inline" />
                <Moon className="h-5 w-5 inline dark:hidden" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800`}
                aria-label="Close menu"
                >
                <X className="h-5 w-5" />
              </Button>
                </div>
            </div>
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map(({ href, label, icon, target }, idx) => (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  key={label}
                  href={href}
                  target={target}
                  className={`ms-3 mb-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-2`}
                >
                  {icon}
                  {label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200 dark:border-slate-800" />

              
            </div>
          </div>
        </>
       
    </header>
  )
}

export default Header