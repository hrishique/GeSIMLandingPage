"use client"

import { ReactNode, useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ArrowLeft, LucideIcon } from "lucide-react"

interface LegalLayoutProps {
    title: string
    lastUpdated?: string
    icon: LucideIcon
    children: ReactNode
}

export function LegalLayout({ title, lastUpdated, icon: Icon, children }: LegalLayoutProps) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === "dark"

    if (!mounted) return null

    return (
        <div className={`min-h-screen transition-colors duration-700 ${isDark ? "bg-slate-950 text-slate-300" : "bg-white text-slate-700"}`}>
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {/* Subtle Dot Grid */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: `radial-gradient(${isDark ? "#334155" : "#cbd5e1"} 1px, transparent 1px)`,
                        backgroundSize: "24px 24px"
                    }}
                />

                <div
                    className={`absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-blue-900" : "bg-blue-100"}`}
                />
                <div
                    className={`absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 ${isDark ? "bg-slate-800" : "bg-slate-200"}`}
                />

                {/* GeSIM Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <span className="text-[25vw] font-black tracking-tighter italic uppercase">GeSIM</span>
                </div>
            </div>

            <div className="relative z-10 container mx-auto max-w-4xl px-6 py-12 md:py-24">
                {/* Back Nav */}
                <Link
                    href="/"
                    className={`inline-flex items-center gap-2 mb-12 text-sm font-medium transition-colors hover:text-blue-500 ${isDark ? "text-slate-500" : "text-slate-400"}`}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isDark ? "bg-slate-900 border border-slate-800" : "bg-slate-100 border border-slate-200"}`}>
                        <Icon className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                    </div>
                    <h1 className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                        {title}
                    </h1>
                    {lastUpdated && (
                        <p className={`text-sm font-medium ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                            Last Updated: {lastUpdated}
                        </p>
                    )}
                </header>

                {/* Content */}
                <main className="">
                    <div className={`space-y-8 leading-relaxed text-base md:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {children}
                    </div>
                </main>

                {/* Footer simple */}
                <footer className="mt-24 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
                    <p className={`text-xs ${isDark ? "text-slate-600" : "text-slate-400"}`}>
                        &copy; {new Date().getFullYear()} GeSIM. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    )
}
