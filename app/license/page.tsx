"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LicensePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl px-6 py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">
                        GeSIM App License Agreement
                    </h1>

                    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Last updated: January 2026
                        </p>

                        <p className="font-semibold text-slate-900 dark:text-white">
                            Copyright © 2026 GeSIM. All rights reserved.
                        </p>

                        <p>
                            This License Agreement ("Agreement") governs your use of the GeSIM mobile application ("App") developed and owned by GeSIM.
                        </p>

                        <p>
                            By downloading, installing, or using the App, you agree to be bound by this Agreement.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. License Grant</h2>
                            <p>
                                GeSIM grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App for personal, non-commercial purposes only, in accordance with this Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Restrictions</h2>
                            <p>You may not:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Copy, modify, distribute, sell, lease, or sublicense the App</li>
                                <li>Reverse engineer, decompile, or attempt to extract the source code</li>
                                <li>Use the App for unlawful purposes or in violation of applicable laws</li>
                                <li>Exploit the App or its services for commercial use without permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Ownership</h2>
                            <p>
                                The App, including all content, features, software, and intellectual property, is owned exclusively by GeSIM. No ownership rights are transferred to you under this Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Updates and Changes</h2>
                            <p>
                                GeSIM reserves the right to modify, suspend, or discontinue the App or this License at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Termination</h2>
                            <p>
                                This license is effective until terminated. It will terminate automatically if you fail to comply with any terms of this Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">6. Disclaimer</h2>
                            <p>
                                The App is provided "as is" without warranties of any kind, either express or implied.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">7. Contact</h2>
                            <p>
                                For questions regarding this License, contact: <a href="mailto:contact@gesim.io" className="text-blue-500 hover:text-blue-600 underline">contact@gesim.io</a>
                            </p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}
