"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Globe, Smartphone, CreditCard, Shield, Wallet, Mail, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function GeSIMLanding() {
  const [isDark, setIsDark] = useState(false)
  const [email, setEmail] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)
  const connectWallet = () => setWalletConnected(!walletConnected)

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-violet-50 via-white to-cyan-50"}`}
    >
      {/* Header */}
      <header className="relative z-50 px-6 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 p-1 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent`}
            >
              GeSIM
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-violet-600"} transition-colors`}
            >
              Features
            </a>
            <a
              href="#"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-violet-600"} transition-colors`}
            >
              Pricing
            </a>
            <a
              href="#"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-violet-600"} transition-colors`}
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-violet-600"} rounded-full`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Innovative Hero Section */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-violet-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/25 to-rose-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${isDark ? "bg-white" : "bg-violet-500"} animate-ping`}
                  style={{ animationDelay: `${i * 0.1}s`, animationDuration: "3s" }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          {/* Revolutionary Hero Animation */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            {/* Central Earth with Pulsing Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-blue-500 to-violet-600 rounded-full shadow-2xl animate-pulse">
                  <Globe className="w-12 h-12 text-white m-6" />
                </div>
                {/* Pulsing Rings */}
                <div className="absolute inset-0 w-24 h-24 border-2 border-violet-400/50 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-24 h-24 border-2 border-cyan-400/50 rounded-full animate-ping delay-500"></div>
              </div>
            </div>

            {/* Multiple Orbiting Elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-2 shadow-xl">
                    <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin-reverse">
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-spin-orbit">
              <div className="relative w-full h-full">
                <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Orbit Trails */}
            <div className="absolute inset-0 border-2 border-dashed border-violet-300/30 rounded-full"></div>
            <div className="absolute inset-4 border border-dashed border-cyan-300/30 rounded-full"></div>
          </div>

          {/* Dynamic Typography */}
          <div className="max-w-5xl mx-auto mb-12">
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none ${isDark ? "text-white" : "text-slate-900"}`}
            >
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                ONE
              </span>
              <br />
              <span className={`${isDark ? "text-white" : "text-slate-900"} relative`}>
                eSIM
                <div className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white transform rotate-12 animate-bounce">
                  WORLD
                </div>
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl lg:text-3xl font-medium mb-8 ${isDark ? "text-slate-300" : "text-slate-700"} max-w-4xl mx-auto leading-relaxed`}
            >
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Revolutionizing global connectivity
              </span>{" "}
              with crypto-powered eSIM technology.
              <br />
              Pay once, roam everywhere, own your data.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 hover:from-violet-600 hover:via-purple-600 hover:to-cyan-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`px-12 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 ${
                isDark
                  ? "border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white"
                  : "border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
              }`}
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`p-6 rounded-2xl backdrop-blur-sm ${isDark ? "bg-white/5" : "bg-white/70"} border ${isDark ? "border-white/10" : "border-violet-200"}`}
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className={`${isDark ? "text-slate-300" : "text-slate-700"} font-medium`}>Countries</div>
            </div>
            <div
              className={`p-6 rounded-2xl backdrop-blur-sm ${isDark ? "bg-white/5" : "bg-white/70"} border ${isDark ? "border-white/10" : "border-cyan-200"}`}
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                $90B+
              </div>
              <div className={`${isDark ? "text-slate-300" : "text-slate-700"} font-medium`}>Valuation</div>
            </div>
            <div
              className={`p-6 rounded-2xl backdrop-blur-sm ${isDark ? "bg-white/5" : "bg-white/70"} border ${isDark ? "border-white/10" : "border-pink-200"}`}
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <div className={`${isDark ? "text-slate-300" : "text-slate-700"} font-medium`}>Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-slate-900/50" : "bg-gradient-to-b from-white to-violet-50"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Revolutionary
              </span>{" "}
              Features
            </h2>
            <p className={`text-xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The future of global connectivity is here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-3xl backdrop-blur-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-violet-200"} border hover:scale-105 transition-all duration-300 group`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Global Network</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Seamless connectivity across 150+ countries with enterprise-grade infrastructure
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl backdrop-blur-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-cyan-200"} border hover:scale-105 transition-all duration-300 group`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>Crypto Native</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Pay with USDC, Bitcoin, Ethereum and other major cryptocurrencies instantly
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl backdrop-blur-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-pink-200"} border hover:scale-105 transition-all duration-300 group`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>DID Security</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Your identity and travel data secured by blockchain technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-violet-50 to-cyan-50"}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative w-72 h-96 mx-auto mb-16">
            <div
              className={`w-full h-full rounded-3xl p-4 shadow-2xl ${isDark ? "bg-gradient-to-b from-slate-800 to-slate-900" : "bg-gradient-to-b from-white to-violet-50"} border ${isDark ? "border-slate-700" : "border-violet-200"}`}
            >
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center ${isDark ? "bg-gradient-to-b from-slate-700/50 to-slate-800/50" : "bg-gradient-to-b from-violet-100/50 to-cyan-100/50"}`}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</h3>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} mb-4`}>Coming Q2 2025</p>
                  <div className="inline-flex items-center bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-semibold">
                    Beta Access
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Digital Passport
            </span>
            <br />
            to the World
          </h2>

          <p
            className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}
          >
            Manage global connectivity, track usage in real-time, and pay with crypto. All from one beautiful, intuitive
            mobile application.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        className={`py-32 px-6 ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-gradient-to-br from-violet-100 to-cyan-100"}`}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
            Ready to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            Your Connectivity?
          </h2>

          <p className={`text-xl mb-12 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Join thousands of digital nomads already using GeSIM
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 h-14 px-6 rounded-full text-lg ${isDark ? "bg-white/10 border-white/20 text-white placeholder:text-slate-400" : "bg-white border-violet-200 text-slate-900 placeholder:text-slate-500"}`}
              />
              <Button
                onClick={connectWallet}
                className={`h-14 px-8 rounded-full font-semibold transition-all ${
                  walletConnected
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : isDark
                      ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                      : "bg-violet-100 border border-violet-200 text-violet-700 hover:bg-violet-200"
                }`}
              >
                <Wallet className="mr-2 h-5 w-5" />
                {walletConnected ? "Connected" : "Connect Wallet"}
              </Button>
            </div>

            <Button
              className="w-full max-w-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 hover:from-violet-600 hover:via-purple-600 hover:to-cyan-600 text-white h-14 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              disabled={!email}
            >
              <Mail className="mr-3 h-5 w-5" />
              Join the Revolution
            </Button>
          </div>

          <p className={`text-sm mt-8 ${isDark ? "text-slate-500" : "text-slate-600"}`}>
            No spam, ever. Be the first to know when we launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 px-6 ${isDark ? "bg-slate-950 border-t border-slate-800" : "bg-white border-t border-violet-200"}`}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-8 h-8 p-1 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              GeSIM
            </span>
          </div>
          <p className={`${isDark ? "text-slate-500" : "text-slate-600"} text-sm`}>
            © 2025 GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
