"use client"

import React, { useState } from 'react'
import { Globe, ShieldCheck, Zap } from 'lucide-react'

const CoverageMap = () => {
    const [hoveredRegion, setHoveredRegion] = useState(null)

    const regions = [
        { id: 'na', name: 'North America', count: '3', countries: 'USA, Canada, Mexico' },
        { id: 'sa', name: 'South America', count: '12', countries: 'Brazil, Argentina, Chile, +9 more' },
        { id: 'eu', name: 'Europe', count: '44', countries: 'UK, Germany, France, Italy, +40 more' },
        { id: 'as', name: 'Asia', count: '48', countries: 'Japan, Singapore, India, Thailand, +44 more' },
        { id: 'af', name: 'Africa', count: '54', countries: 'South Africa, Egypt, Kenya, +51 more' },
        { id: 'oc', name: 'Oceania', count: '14', countries: 'Australia, New Zealand, Fiji, +11 more' },
    ]

    // Simplified SVG paths for continents
    const mapData = [
        { id: 'na', d: "M100,50 L180,50 L200,100 L150,150 L80,130 Z" }, // North America
        { id: 'sa', d: "M150,155 L180,165 L170,250 L140,240 Z" }, // South America
        { id: 'eu', d: "M280,60 L350,60 L360,100 L320,110 L290,90 Z" }, // Europe
        { id: 'af', d: "M280,120 L350,115 L370,200 L320,230 L270,180 Z" }, // Africa
        { id: 'as', d: "M360,50 L500,60 L520,180 L400,190 L370,110 Z" }, // Asia
        { id: 'oc', d: "M450,200 L500,200 L510,250 L460,250 Z" }, // Oceania
    ]

    return (
        <section id="coverage" className="py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-6 border border-blue-100 dark:border-blue-800">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide">GLOBAL NETWORK</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
                        Connected in <span className="text-blue-600">190+ Countries</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Travel without boundaries. GeSIM leverages local infrastructure and decentralized verification to keep you connected globally.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Map Visualization */}
                    <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-inner relative min-h-[400px] flex items-center justify-center">
                        <svg
                            viewBox="0 0 600 300"
                            className="w-full h-auto max-w-[500px] drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.1))' }}
                        >
                            {mapData.map((item) => (
                                <path
                                    key={item.id}
                                    d={item.d}
                                    onMouseEnter={() => setHoveredRegion(item.id)}
                                    onMouseLeave={() => setHoveredRegion(null)}
                                    className={`transition-all duration-300 cursor-pointer stroke-[1]
                    ${hoveredRegion === item.id
                                            ? 'fill-blue-500 stroke-blue-400 scale-[1.02]'
                                            : 'fill-slate-300 dark:fill-slate-700 stroke-slate-200 dark:stroke-slate-600'
                                        }`}
                                    style={{ transformOrigin: 'center' }}
                                />
                            ))}

                            {/* Decorative Connection Lines */}
                            <circle cx="150" cy="100" r="2" className="fill-blue-500 animate-pulse" />
                            <circle cx="320" cy="80" r="2" className="fill-blue-500 animate-pulse" />
                            <circle cx="450" cy="120" r="2" className="fill-blue-500 animate-pulse" />
                            <circle cx="320" cy="160" r="2" className="fill-blue-500 animate-pulse" />
                        </svg>

                        {/* Floating Stats on Map */}
                        <div className="absolute top-8 right-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold dark:text-white">Live</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">Network Status</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Region List */}
                    <div className="lg:col-span-4 space-y-4">
                        {regions.map((region) => (
                            <div
                                key={region.id}
                                onMouseEnter={() => setHoveredRegion(region.id)}
                                onMouseLeave={() => setHoveredRegion(null)}
                                className={`p-6 rounded-2xl border transition-all duration-300 cursor-default
                  ${hoveredRegion === region.id
                                        ? 'bg-white dark:bg-slate-800 border-blue-200 dark:border-blue-800 shadow-xl translate-x-2'
                                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60 grayscale'
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{region.name}</h3>
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${hoveredRegion === region.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                                        {region.count} Countries
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {region.countries}
                                </p>
                                {hoveredRegion === region.id && (
                                    <div className="mt-4 flex items-center gap-2 text-blue-500 text-xs font-bold animate-in fade-in slide-in-from-left-2">
                                        <Zap className="w-3 h-3" />
                                        INSTANT PROVISIONING ENABLED
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoverageMap
