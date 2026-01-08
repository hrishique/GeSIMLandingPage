"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CopyrightPage() {
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
                        Copyright Notice
                    </h1>

                    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        <p className="font-semibold text-slate-900 dark:text-white text-xl">
                            © 2026 GeSIM. All rights reserved.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Intellectual Property</h2>
                            <p>
                                All content, software, source code, designs, logos, graphics, trademarks, and other intellectual property associated with the GeSIM mobile application and website are the exclusive property of GeSIM.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Prohibited Use</h2>
                            <p>
                                Unauthorized copying, reproduction, modification, distribution, or republication of any part of the App or its content is strictly prohibited without prior written permission from GeSIM.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Trademarks</h2>
                            <p>
                                GeSIM™ and all related names, logos, and marks are trademarks or trade dress of GeSIM.
                            </p>
                            <p className="mt-4">
                                Any third-party trademarks, service marks, or logos appearing in the App are the property of their respective owners.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Contact</h2>
                            <p>
                                For copyright-related inquiries, contact: <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:text-blue-600 underline">contact@gesim.xyz</a>
                            </p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}
