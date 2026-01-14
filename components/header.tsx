"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Moon, Sun, FileText, Globe, Smartphone, Menu, X, BookOpen, Info, Briefcase } from "lucide-react"

export function Header() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                        className={`hidden md:flex ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
                    >
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <a
                        href="https://x.com/i/status/2008982783780352319"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                    >
                        <Button
                            className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap`}
                        >
                            Request Invite
                        </Button>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden ${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && mounted && typeof document !== "undefined" && createPortal(
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 z-[99] animate-in fade-in duration-200 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    {/* Side Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[380px] z-[100] ${isDark ? "bg-slate-950 border-l border-slate-800" : "bg-white border-l border-slate-200"} shadow-2xl transform transition-transform duration-300 overflow-y-auto animate-in slide-in-from-right duration-300 ease-out`}
                    >
                        <div className="flex flex-col p-6 space-y-6 h-full">
                            {/* Close Button Header */}
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400`}>Menu</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`rounded-full ${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
                                >
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            {/* Mobile Actions */}
                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setTheme(isDark ? "light" : "dark")}
                                    className={`justify-center gap-2 h-12 rounded-xl border-2 ${isDark ? "border-slate-800 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`}
                                >
                                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                                    <span className="font-medium">{isDark ? "Light" : "Dark"}</span>
                                </Button>
                                <a
                                    href="https://x.com/i/status/2008982783780352319"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button
                                        className={`w-full h-12 rounded-xl font-semibold shadow-lg shadow-blue-500/20 ${isDark ? "bg-[#0F172F] hover:bg-slate-800 text-white" : "bg-[#0F172F] hover:bg-slate-800 text-white"}`}
                                    >
                                        Request Invite
                                    </Button>
                                </a>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-8 py-2">
                                {/* Main Sections */}
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h3 className={`text-xs font-bold uppercase tracking-widest pl-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Discover</h3>
                                        <nav className="flex flex-col gap-1">
                                            {[
                                                { href: "/#hero", label: "App", icon: Smartphone },
                                                { href: "https://gesim.gitbook.io/gesim", label: "Documentation", icon: BookOpen, external: true },
                                                { href: "/blog", label: "Blog", icon: FileText },
                                            ].map((link) => (
                                                link.external ? (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isDark ? "hover:bg-slate-900 text-slate-300 hover:text-white" : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"}`}
                                                    >
                                                        <div className={`p-2 rounded-lg ${isDark ? "bg-slate-900 text-blue-400" : "bg-slate-100 text-[#0F172F]"}`}>
                                                            <link.icon className="w-5 h-5" />
                                                        </div>
                                                        <span className="font-semibold text-base">{link.label}</span>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isDark ? "hover:bg-slate-900 text-slate-300 hover:text-white" : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"}`}
                                                    >
                                                        <div className={`p-2 rounded-lg ${isDark ? "bg-slate-900 text-blue-400" : "bg-slate-100 text-[#0F172F]"}`}>
                                                            <link.icon className="w-5 h-5" />
                                                        </div>
                                                        <span className="font-semibold text-base">{link.label}</span>
                                                    </Link>
                                                )
                                            ))}
                                        </nav>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className={`text-xs font-bold uppercase tracking-widest pl-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Company</h3>
                                        <nav className="flex flex-col gap-1">
                                            {[
                                                { href: "/about", label: "About GeSIM", icon: Info },
                                                { href: "/#careers", label: "Careers", icon: Briefcase },
                                            ].map((link) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isDark ? "hover:bg-slate-900 text-slate-300 hover:text-white" : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"}`}
                                                >
                                                    <div className={`p-2 rounded-lg ${isDark ? "bg-slate-900 text-blue-400" : "bg-slate-100 text-[#0F172F]"}`}>
                                                        <link.icon className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-semibold text-base">{link.label}</span>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className={`h-px w-full ${isDark ? "bg-slate-800" : "bg-slate-200"}`}></div>

                                {/* Legal Links */}
                                <div className="space-y-3">
                                    <h3 className={`text-xs font-bold uppercase tracking-widest pl-1 ${isDark ? "text-slate-500" : "text-slate-400"}`}>Legal</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { href: "/terms", label: "Terms" },
                                            { href: "/privacy", label: "Privacy" },
                                            { href: "/license", label: "License" },
                                            { href: "/copyright", label: "Copyright" },
                                        ].map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`p-2 text-sm rounded-lg transition-colors ${isDark ? "text-slate-500 hover:text-slate-300 hover:bg-slate-900" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"}`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </header>
    )
}

export default Header
