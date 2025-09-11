'use client'
import React from 'react'
import { Globe, Smartphone, CreditCard, Shield, Zap, ArrowRight, Wifi, Radio, Network, } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

function HeroSection() {
  return (
      
  <section
    className="container mx-auto relative px-6 pt-20 pb-12 overflow-hidden 
              min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-160px)] lg:min-h-[calc(100vh-180px)]"> 
    
    {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-10 w-72 h-72 bg-slate-200/30 dark:bg-slate-800/20 rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 bg-slate-300/30 dark:bg-slate-700/20 rounded-full blur-3xl`}
          ></div>
        </div>

        <div className="mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Tag Line */}
              <div className="flex items-center gap-3 mb-8">
                <span className={`text-lg font-medium text-slate-600 dark:text-slate-400`}>
                  One eSIM for the world
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-slate-900 dark:text-white`}
              >
                Global
                <br />
                <span className={`text-slate-700 dark:text-slate-300 font-light italic`}>
                  Connectivity
                </span>
                <br />
                <span className="relative">
                  Reimagined
                  <div
                    className={`absolute -top-4 -right-8 w-8 h-8 bg-slate-900 dark:bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-white transform rotate-12 shadow-lg`}
                  >
                    <Globe className="w-4 h-4" />
                  </div>
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-xl md:text-2xl font-medium mb-12 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed`}
              >
                AI-Driven blockchain eSIM: Connect globally, Pay locally
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link
                  href="#app"
                  // target="_blank"
                  className={`bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 
                    px-12 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 flex items-center gap-3`}

                >
                  <ArrowRight className={`w-5 h-5`} />
                  Start Your Journey
                </Link>
                <Link
                  href={'https://www.loom.com/share/5257955a15d84419916b07ecd5ef4899?sid=7c72cfb9-c83e-490e-9c3a-934f23fd9c24'}
                  target='_blank'
                  className={`px-12 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 flex items-center gap-3 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white`}
                >
                  <Smartphone className="w-5 h-5" />
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
            </div>

            {/* Right Animation - Telecom x Web3 Intersection */}
            <div className="container mx-auto flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                {/* Central Intersection Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Core Hub */}
                    <div
                      className={`w-24 h-24 dark:bg-gradient-to-br from-slate-700 to-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl flex items-center justify-center border-4 dark:border-slate-600 border-slate-700`}
                    >
                      <div className="relative w-12 h-12">
                        <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain rounded-full scale-[1.9]" />
                      </div>
                    </div>

                    {/* Pulsing Rings */}
                    <div
                      className={`absolute inset-0 w-24 h-24 border-2 dark:border-slate-600/40 border-slate-400/40 rounded-full animate-ping`}
                    ></div>
                    <div
                      className={`absolute -inset-2 w-28 h-28 border-2 dark:border-slate-600/30 border-slate-400/30 rounded-full animate-ping`}
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                {/* Telecom Satellites (Traditional Telecom) */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="relative w-full h-full">
                    {/* Telecom Node 1 */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                      <div
                        className={`w-16 h-16 dark:bg-blue-600 bg-blue-700 rounded-2xl p-3 shadow-xl border-2 dark:border-blue-500 border-blue-600`}
                      >
                        <Radio className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Telecom Node 2 */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                      <div
                        className={`w-16 h-16 dark:bg-green-600 bg-green-700 rounded-2xl p-3 shadow-xl border-2 dark:border-green-500 border-green-600`}
                      >
                        <Wifi className="w-full h-full text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Web3 Satellites (Blockchain/Crypto) */}
                <div className="absolute inset-0 animate-spin-reverse">
                  <div className="relative w-full h-full">
                    {/* Web3 Node 1 */}
                    <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 dark:bg-purple-600 bg-purple-700 rounded-xl p-2.5 shadow-xl border-2 dark:border-purple-500 border-purple-600`}
                      >
                        <CreditCard className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Web3 Node 2 */}
                    <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 dark:bg-cyan-600 bg-cyan-700 rounded-xl p-2.5 shadow-xl border-2 dark:border-cyan-500 border-cyan-600`}
                      >
                        <Shield className="w-full h-full text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0">
                  {/* Telecom Orbit Ring */}
                  <div
                    className={`absolute inset-8 border-2 border-dashed dark:border-blue-500/30 border-blue-600/30 rounded-full`}
                  ></div>

                  {/* Web3 Orbit Ring */}
                  <div
                    className={`absolute inset-12 border-2 border-dashed dark:border-purple-500/30 border-purple-600/30 rounded-full`}
                  ></div>
                </div>

                {/* Floating Network Nodes */}
                <div className="absolute top-16 right-16 animate-bounce">
                  <div
                    className={`w-8 h-8 dark:bg-orange-600 bg-orange-700 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Network className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 left-16 animate-bounce" style={{ animationDelay: "1s" }}>
                  <div
                    className={`w-6 h-6 dark:bg-pink-600 bg-pink-700 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection