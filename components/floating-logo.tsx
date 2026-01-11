"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function FloatingLogo() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative group">
                <a
                    href="https://gesim.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 transition-transform hover:scale-105"
                >
                    <div className="relative w-6 h-6">
                        <Image
                            src="/gesim-logo-icon.png"
                            alt="GeSIM"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="ml-2 text-sm font-bold text-slate-900 dark:text-white hidden group-hover:block transition-all duration-300">
                        GeSIM
                    </span>
                </a>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute -top-2 -left-2 bg-slate-100 dark:bg-slate-800 rounded-full p-0.5 border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Close"
                >
                    <X className="w-3 h-3 text-slate-500" />
                </button>
            </div>
        </div>
    )
}
