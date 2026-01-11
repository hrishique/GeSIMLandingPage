"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Moon, Sun, FileText, Globe, Smartphone } from "lucide-react"

export function Header() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Use resolvedTheme to handle system preference
    const isDark = mounted && (theme === "dark" || resolvedTheme === "dark")

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!mounted) {
        return (
            <header className="sticky top-0 z-50 px-6 py-3 bg-white/80 backdrop-blur-md transition-all duration-300">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
                            <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900">GeSIM</span>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className={`sticky top-0 z-50  py-3 backdrop-blur-md transition-all duration-300 ${isDark ? "bg-slate-950/80" : "bg-white/80"}`}>
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
                        <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
                    </div>
                    <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="https://gesim.gitbook.io/gesim" target="_blank" rel="noopener noreferrer" className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}> <FileText className="w-4 h-4" /> Docs </a>
                    <Link
                        href="/blog"
                        className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
                    >
                        <Globe className="w-4 h-4" />
                        Blog
                    </Link>
                    <Link
                        href="/#hero"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
                    >
                        <Smartphone className="w-4 h-4" />
                        App
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className={`${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
                    >
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <a
                        href="https://x.com/i/status/2008982783780352319"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap`}
                        >
                            Request Invite
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
