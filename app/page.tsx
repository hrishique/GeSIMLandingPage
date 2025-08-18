"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Moon,
  Sun,
  Globe,
  Smartphone,
  CreditCard,
  Shield,
  Mail,
  Zap,
  ArrowRight,
  Users,
  Building2,
  Award,
  Star,
  Wifi,
  Radio,
  Network,
  FlaskConical,
  ShieldCheck,
  Rocket,
  Twitter,
  Settings,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const PhoneMockup = ({ isDark }: { isDark: boolean }) => {
  const [status, setStatus] = useState("inserting") // inserting -> connecting -> connected
  const [logoPlugged, setLogoPlugged] = useState(false)
  const [currentLocation, setCurrentLocation] = useState({ city: "Delhi", flag: "🇮🇳" })
  const [isVisible, setIsVisible] = useState(false)
  const phoneRef = useRef<HTMLDivElement>(null)

  const locations = [
    { city: "Delhi", flag: "🇮🇳" },
    { city: "New York", flag: "🇺🇸" },
    { city: "Paris", flag: "🇫🇷" },
    { city: "Tokyo", flag: "🇯🇵" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (phoneRef.current) {
      observer.observe(phoneRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const sequence = setTimeout(() => {
      setLogoPlugged(true)
      const t1 = setTimeout(() => {
        setStatus("connecting")
        const t2 = setTimeout(() => setStatus("connected"), 2000)
        return () => clearTimeout(t2)
      }, 800)
      return () => clearTimeout(t1)
    }, 300)
    return () => clearTimeout(sequence)
  }, [isVisible])

  useEffect(() => {
    if (status !== "connected") return

    const interval = setInterval(() => {
      setCurrentLocation((prev) => {
        const currentIndex = locations.findIndex((loc) => loc.city === prev.city)
        const nextIndex = (currentIndex + 1) % locations.length
        return locations[nextIndex]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [status])

  const statusText = {
    inserting: "🔌 Inserting GeSIM...",
    connecting: "🌐 Connecting...",
    connected: `✅ Connected to ${currentLocation.city} ${currentLocation.flag}`,
  }

  return (
    <div
      ref={phoneRef}
      className={`relative w-80 h-[34rem] rounded-[3.5rem] p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} border`}
      onClick={() => !isVisible && setIsVisible(true)}
    >
      <div
        className={`w-full h-full rounded-[2.5rem] flex flex-col items-center justify-center p-6 transition-colors ${isDark ? "bg-slate-900" : "bg-slate-100"}`}
      >
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
          <div
            className={`relative w-24 h-24 transition-all duration-1000 ease-out ${
              logoPlugged ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-75 opacity-0"
            }`}
          >
            <Image
              src="/gesim-logo.png"
              alt="GeSIM Logo"
              fill
              className="object-contain transition-all duration-300 dark:invert dark:brightness-125 dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.4)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
            />
          </div>
          <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</h3>
        </div>
        <div
          className={`w-full text-center p-4 rounded-xl transition-all duration-500 ${isDark ? "bg-slate-800" : "bg-white"} ${
            status === "connected" ? "ring-2 ring-green-400/50" : ""
          }`}
        >
          <p
            className={`font-medium transition-all duration-300 ${
              status === "connected"
                ? isDark
                  ? "text-green-400"
                  : "text-green-600"
                : isDark
                  ? "text-slate-300"
                  : "text-slate-700"
            }`}
          >
            {statusText[status as keyof typeof statusText]}
          </p>
        </div>
      </div>
    </div>
  )
}

const RoadmapTimeline = ({ isDark }: { isDark: boolean }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const roadmapSteps = [
    {
      icon: FlaskConical,
      quarter: "Q2 2024",
      title: "Research & Ideation",
      description: "Conceptualizing decentralized telecom.",
      details: "Deep research into blockchain telecom infrastructure and user needs analysis.",
      status: "complete",
    },
    {
      icon: Zap,
      quarter: "Q3 2024",
      title: "MVP & DevNet Testing",
      description: "Building the core protocol on our DevNet.",
      details: "Smart contract development, security audits, and initial protocol testing.",
      status: "complete",
    },
    {
      icon: ShieldCheck,
      quarter: "Q4 2024",
      title: "NFT-Gated Beta Launch",
      description: "Inviting early adopters via exclusive NFTs.",
      details: "Limited beta access for community members with special NFT credentials.",
      status: "active",
    },
    {
      icon: Rocket,
      quarter: "Q2 2025",
      title: "Global Launch",
      description: "Public access with expanded coverage.",
      details: "Full public launch with 150+ countries coverage and mainstream adoption.",
      status: "upcoming",
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-300 dark:before:bg-slate-700">
        {roadmapSteps.map((step, index) => {
          const isComplete = step.status === "complete"
          const isActive = step.status === "active"
          const isUpcoming = step.status === "upcoming"
          const isExpanded = activeStep === index

          return (
            <div
              key={index}
              className="relative flex items-start group cursor-pointer"
              onClick={() => setActiveStep(isExpanded ? null : index)}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 transform group-hover:scale-110
                ${isComplete ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : ""}
                ${isActive ? `bg-blue-500 text-white animate-pulse shadow-lg shadow-blue-500/30` : ""}
                ${isUpcoming ? `${isDark ? "bg-slate-700 border-2 border-slate-600 text-slate-400" : "bg-slate-200 border-2 border-slate-300 text-slate-500"}` : ""}
              `}
              >
                <step.icon className="w-5 h-5" />
              </div>
              <div className="ml-6">
                <h4 className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {step.title} <span className="text-sm font-medium text-slate-500">{step.quarter}</span>
                </h4>
                <p className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{step.description}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg text-xs ${isDark ? "bg-slate-800" : "bg-slate-100"} ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {step.details}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const AnimatedBackground = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-10" : "opacity-5"}`}
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px), radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px, 50px 50px",
          backgroundPosition: "0 0, 25px 25px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
        }}
      ></div>
    </div>
  )
}

export default function GeSIMLanding() {
  const [isDark, setIsDark] = useState(false)
  const [email, setEmail] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  // Handle browser navigation events
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Handle back/forward navigation
      if (event.state?.from === "app") {
        // Coming back from app, no special handling needed
        setIsNavigating(false)
      }
    }

    const handleBeforeUnload = () => {
      setIsNavigating(false)
    }

    window.addEventListener("popstate", handlePopState)
    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  const toggleTheme = () => setIsDark(!isDark)
  const connectWallet = () => setWalletConnected(!walletConnected)

  const handleStartJourney = (section?: string) => {
    setIsNavigating(true)

    // Add state to history for back navigation handling
    window.history.replaceState({ from: "landing" }, "", "/")

    // Navigate to app with optional section parameter
    setTimeout(() => {
      const url = section ? `/app?section=${section}` : "/app"
      router.push(url)
    }, 150) // Small delay for visual feedback
  }

  const partners = [
    {
      name: "Airalo",
      logo: "A",
      color: "from-blue-500 to-blue-600",
      description: "Global eSIM marketplace leader",
    },
    {
      name: "eSIM Access",
      logo: "eA",
      color: "from-green-500 to-green-600",
      description: "Enterprise eSIM solutions",
    },
    {
      name: "Telnyx",
      logo: "T",
      color: "from-purple-500 to-purple-600",
      description: "Telecom infrastructure platform",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"} ${
        isNavigating ? "opacity-95 scale-[0.98]" : "opacity-100 scale-100"
      }`}
    >
      {/* Navigation Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className={`p-6 rounded-2xl ${isDark ? "bg-slate-900" : "bg-white"} shadow-2xl flex items-center gap-4`}>
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-300 border-t-slate-600"></div>
            <span className={`${isDark ? "text-white" : "text-slate-900"} font-medium`}>Opening GeSIM App...</span>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-50 px-6 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#features"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Zap className="w-4 h-4" />
              Features
            </a>
            <a
              href="#partners"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Building2 className="w-4 h-4" />
              Partners
            </a>
            <Link
              href="/blog"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Globe className="w-4 h-4" />
              Blog
            </Link>
            <a
              href="#app"
              className={`${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors flex items-center gap-2`}
            >
              <Smartphone className="w-4 h-4" />
              App
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${isDark ? "text-slate-400 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-xl`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
            >
              <Mail className="w-4 h-4" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-20 left-10 w-72 h-72 ${isDark ? "bg-slate-800/20" : "bg-slate-200/30"} rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 ${isDark ? "bg-slate-700/20" : "bg-slate-300/30"} rounded-full blur-3xl`}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Tag Line */}
              <div className="flex items-center gap-3 mb-8">
                <Zap className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
                <span className={`text-lg font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  One eSIM for the world
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Global
                <br />
                <span className={`${isDark ? "text-slate-300" : "text-slate-700"} font-light italic`}>
                  Connectivity
                </span>
                <br />
                <span className="relative">
                  Reimagined
                  <div
                    className={`absolute -top-4 -right-8 w-8 h-8 ${isDark ? "bg-slate-800" : "bg-slate-900"} rounded-full flex items-center justify-center text-xs font-bold text-white transform rotate-12 shadow-lg`}
                  >
                    <Globe className="w-4 h-4" />
                  </div>
                </span>
              </h1>

              {/* Subheading */}
              <p
                className={`text-xl md:text-2xl font-medium mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl leading-relaxed`}
              >
                Revolutionizing global connectivity with crypto-powered eSIM technology. Pay once, roam everywhere, own
                your data.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button
                  size="lg"
                  className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 ${
                    isNavigating ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleStartJourney()}
                  disabled={isNavigating}
                >
                  <ArrowRight className={`w-5 h-5 ${isNavigating ? "animate-pulse" : ""}`} />
                  {isNavigating ? "Opening App..." : "Start Your Journey"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`px-12 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Smartphone className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
            </div>

            {/* Right Animation - Telecom x Web3 Intersection */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                {/* Central Intersection Hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Core Hub */}
                    <div
                      className={`w-24 h-24 ${isDark ? "bg-gradient-to-br from-slate-700 to-slate-800" : "bg-gradient-to-br from-slate-800 to-slate-900"} rounded-full shadow-2xl flex items-center justify-center border-4 ${isDark ? "border-slate-600" : "border-slate-700"}`}
                    >
                      <div className="relative w-12 h-12">
                        <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
                      </div>
                    </div>

                    {/* Pulsing Rings */}
                    <div
                      className={`absolute inset-0 w-24 h-24 border-2 ${isDark ? "border-slate-600/40" : "border-slate-400/40"} rounded-full animate-ping`}
                    ></div>
                    <div
                      className={`absolute -inset-2 w-28 h-28 border-2 ${isDark ? "border-slate-600/30" : "border-slate-400/30"} rounded-full animate-ping`}
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
                        className={`w-16 h-16 ${isDark ? "bg-blue-600" : "bg-blue-700"} rounded-2xl p-3 shadow-xl border-2 ${isDark ? "border-blue-500" : "border-blue-600"}`}
                      >
                        <Radio className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Telecom Node 2 */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6">
                      <div
                        className={`w-16 h-16 ${isDark ? "bg-green-600" : "bg-green-700"} rounded-2xl p-3 shadow-xl border-2 ${isDark ? "border-green-500" : "border-green-600"}`}
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
                    <div className="absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 ${isDark ? "bg-purple-600" : "bg-purple-700"} rounded-xl p-2.5 shadow-xl border-2 ${isDark ? "border-purple-500" : "border-purple-600"}`}
                      >
                        <CreditCard className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Web3 Node 2 */}
                    <div className="absolute right-0 top-1/2 transform translate-x-6 -translate-y-1/2">
                      <div
                        className={`w-14 h-14 ${isDark ? "bg-cyan-600" : "bg-cyan-700"} rounded-xl p-2.5 shadow-xl border-2 ${isDark ? "border-cyan-500" : "border-cyan-600"}`}
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
                    className={`absolute inset-8 border-2 border-dashed ${isDark ? "border-blue-500/30" : "border-blue-600/30"} rounded-full`}
                  ></div>

                  {/* Web3 Orbit Ring */}
                  <div
                    className={`absolute inset-12 border-2 border-dashed ${isDark ? "border-purple-500/30" : "border-purple-600/30"} rounded-full`}
                  ></div>
                </div>

                {/* Floating Network Nodes */}
                <div className="absolute top-16 right-16 animate-bounce">
                  <div
                    className={`w-8 h-8 ${isDark ? "bg-orange-600" : "bg-orange-700"} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Network className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-16 left-16 animate-bounce" style={{ animationDelay: "1s" }}>
                  <div
                    className={`w-6 h-6 ${isDark ? "bg-pink-600" : "bg-pink-700"} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product number stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div
          className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
            <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>150+</div>
          </div>
          <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Countries</div>
        </div>
        <div
          className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
            <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>$90B+</div>
          </div>
          <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Valuation</div>
        </div>
        <div
          className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
            <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>10M+</div>
          </div>
          <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Users</div>
        </div>
      </div>

      {/* Partners Section */}
      <section id="partners" className={`py-24 px-6 ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Building2 className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Strategic Partners
              </h2>
            </div>
            <p
              className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} flex items-center justify-center gap-2`}
            >
              <Star className="w-5 h-5" />
              Leading the telecom revolution together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`group p-8 rounded-3xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50" : "bg-white/70 border-slate-200 hover:bg-white"} border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center`}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform`}
                >
                  <span className="text-white font-bold text-xl">{partner.logo}</span>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"} group-hover:${isDark ? "text-white" : "text-slate-900"} transition-colors`}
                >
                  {partner.name}
                </h3>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto ${
                isDark
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
              <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Revolutionary Features
              </h2>
            </div>
            <p className={`text-xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The future of global connectivity is here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Global Network</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Seamless connectivity across 150+ countries with enterprise-grade infrastructure and real-time
                optimization.
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Crypto Native</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Pay with USDC, Bitcoin, Ethereum and other major cryptocurrencies with instant, secure transactions.
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>DID Security</h3>
              </div>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Your identity and travel data secured by advanced blockchain technology and decentralized protocols.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleStartJourney("data")}
                className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Buy Data Plans
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleStartJourney("developer")}
                className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
              >
                <Settings className="w-4 h-4 mr-2" />
                Developer Docs
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleStartJourney("invoices")}
                className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Invoices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section id="app" className={`relative py-32 px-6 overflow-hidden ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
        <AnimatedBackground isDark={isDark} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <PhoneMockup isDark={isDark} />
            </div>

            <div className="text-center lg:text-left">
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
                The Coordination Layer for Global Telecom
              </h2>
              <p className={`text-xl mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto lg:mx-0`}>
                Bringing standardization, transparency, and trust to the world's most fragmented industry.
              </p>

              <RoadmapTimeline isDark={isDark} />

              <div className="mt-16">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}
                    >
                      <ShieldCheck className="w-5 h-5" />
                      Join Beta Access
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className={`${isDark ? "bg-slate-900 border-slate-800" : "bg-white"} rounded-2xl max-w-md`}
                  >
                    <DialogHeader>
                      <DialogTitle className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        Join the GeSIM Beta
                      </DialogTitle>
                      <DialogDescription className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Get early access, receive an NFT pass, and join our closed Discord community.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Enter your email or wallet address"
                          className={`h-12 px-4 rounded-xl text-base ${isDark ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"} shadow-inner`}
                        />
                        <Button className="w-full h-12 text-base font-semibold">Join Waitlist</Button>

                        <div className="flex items-center gap-3 pt-2">
                          <div className={`h-px flex-1 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                          <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                            or follow us
                          </span>
                          <div className={`h-px flex-1 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className={`flex-1 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
                            asChild
                          >
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                              <Twitter className="w-4 h-4 mr-2" />
                              Twitter
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={`flex-1 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
                            asChild
                          >
                            <a href="https://farcaster.xyz" target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" />
                              Farcaster
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 px-6 ${isDark ? "bg-slate-900 border-t border-slate-800" : "bg-slate-50 border-t border-slate-200"}`}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-8 h-8 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </div>
          <p
            className={`${isDark ? "text-slate-500" : "text-slate-600"} text-sm flex items-center justify-center gap-2`}
          >
            <Globe className="w-4 h-4" />© 2025 GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
