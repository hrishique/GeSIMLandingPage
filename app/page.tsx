"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Moon,
  Sun,
  Globe,
  Smartphone,
  CreditCard,
  Mail,
  Zap,
  Users,
  Building2,
  Award,
  FlaskConical,
  ShieldCheck,
  Rocket,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { useTheme } from "next-themes"

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
      className={`relative w-80 h-[34rem] rounded-[3.5rem] p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
      onClick={() => !isVisible && setIsVisible(true)}
    >
      <div
        className={`w-full h-full rounded-[2.5rem] flex flex-col items-center justify-center p-6 transition-colors ${isDark ? "bg-slate-900" : "bg-slate-100"}`}
      >
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
          <div
            className={`relative w-24 h-24 transition-all duration-1000 ease-out ${logoPlugged ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-75 opacity-0"
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
          className={`w-full text-center p-4 rounded-xl transition-all duration-500 ${isDark ? "bg-slate-800" : "bg-white"} ${status === "connected" ? "ring-2 ring-green-400/50" : ""
            }`}
        >
          <p
            className={`font-medium transition-all duration-300 ${status === "connected"
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-40 mt-2" : "max-h-0"
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
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [walletConnected, setWalletConnected] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

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
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"} ${isNavigating ? "opacity-95 scale-[0.98]" : "opacity-100 scale-100"
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

      {/* Header removed - now in layout */}

      {/* Hero Section */}
      <section id="hero" className="relative pl-2 pr-6 md:px-12 pt-20 pb-32 overflow-hidden">
        {/* Subtle Background Elements */}


        <div className="container mx-auto relative z-10 px-6 sm:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="flex items-center gap-3 mb-8">
                <Zap className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
                <span className={`text-lg font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Private mobile data for on-chain lives
                </span>
              </div>

              <h1

                className={`text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}

              >

                Permissionless eSIMs

                <br />

                <span className={`${isDark ? "text-slate-300" : "text-slate-700"} font-light`}>Built-in VPN</span>

                <br />

                <span className="relative">Connect Anywhere</span>

              </h1>

              <p
                className={`text-xl md:text-2xl font-medium mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl leading-relaxed`}
              >
                Designed for DeFi users, Journalists, and anyone who values privacy
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
                <Image
                  src="/Solana_dApp_Store_Badge_Black.png"
                  alt="Available on Solana dApp Store"
                  width={180}
                  height={54}
                  className="h-[60px] w-auto cursor-pointer hover:opacity-80 transition-opacity"

                />
              </div>

              <p className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"} mb-16`}>
                Solana-Seeker · Coming soon [iOS · Android ] · Pay Privately with crypto
              </p>

              {/* Stats */}
            </div>

            {/* Right Animation - Telecom x Web3 Intersection */}
            <div className="flex justify-center xl:justify-center">
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

                {/* Mobile App Screenshots */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100 md:scale-110 origin-center pr-4 md:pr-0">
                    {/* Left Screenshot - Invitation */}
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[110%] sm:-translate-x-[120%] md:-translate-x-[130%] transform hover:scale-105 transition-all duration-500 z-10 group cursor-pointer">
                      <div
                        className="w-48 sm:w-64 md:w-60 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                      >
                        <Image
                          src="/images/screenshot-20251224-000031.png"
                          alt="GeSIM Invitation Screen"
                          width={280}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Right Screenshot - QR Code */}
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[10%] sm:translate-x-[20%] md:translate-x-[30%] transform hover:scale-105 transition-all duration-500 z-10 group cursor-pointer">
                      <div
                        className="w-48 sm:w-64 md:w-60 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                      >
                        <Image
                          src="/images/screenshot-20251227-125625.png"
                          alt="GeSIM Ready for Departure"
                          width={280}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Center Screenshot - Dashboard (Featured) */}
                    {/* <div className="relative z-20 transform hover:scale-110 transition-all duration-500 group cursor-pointer">
                      <div
                        className={`w-40 sm:w-48 md:w-56 rounded-[2.2rem] md:rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border-4 sm:border-[6px] ${isDark ? "bg-slate-900 border-slate-700 ring-2 ring-white/20" : "bg-white border-slate-200 ring-2 ring-black/10"}`}
                      >
                        <Image
                          src="/images/screenshot-20251227-125437.png"
                          alt="GeSIM Control Center"
                          width={320}
                          height={680}
                          className="w-full h-auto"
                        />
                      </div>
                    </div> */}
                    <div className="relative z-20 transform hover:scale-110 transition-all duration-500 group cursor-pointer">
                      <div
                        className="w-56 sm:w-72 md:w-72 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                      >
                        <Image
                          src="/images/screenshot-20251227-125437.png"
                          alt="GeSIM Control Center"
                          width={320}
                          height={680}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              Who it's for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
            >
              <div
                className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>DeFi users</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Your trades are on-chain. Your network stays private
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
            >
              <div
                className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                Privacy travelers
              </h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Built to reduce tracking, not your freedom to roam
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
            >
              <div
                className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>Journalists</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Private communication from anywhere
              </p>
            </div>

            <div
              className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center`}
            >
              <div
                className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>Nomads</h3>
              <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Private high-speed connection across borders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}

      {/* Privacy Orchestration Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center lg:items-start">
            {/* Left Column: Mobile Screenshot */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-md">
                <img
                  src="/images/screenshot-20251227-125625.png"
                  alt="GeSIM Control Center - Ready for Departure screen"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-4xl md:text-5xl font-semibold mb-6 whitespace-nowrap ${isDark ? "text-white" : "text-slate-900"}`}>
                Privacy Orchestration
              </h2>
              <p className={`text-xl mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Designed for adversarial environments. Technical but transparent
              </p>
              <p className={`text-base mb-12 ${isDark ? "text-slate-500" : "text-slate-500"} italic`}>
                Most mobile privacy failures happen before apps even load
              </p>

              {/* Threat-Mitigation Pairs */}
              <div className="space-y-10">
                {/* Threat 1 */}
                <div className="space-y-3">
                  <h3 className={`text-lg font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Threat: Location & Movement Correlation
                  </h3>
                  <p className={`text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Permissionless eSIM and VPN identities reduce IP and movement linkage
                  </p>
                </div>

                {/* Divider */}
                <div className={`border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}></div>

                {/* Threat 2 */}
                <div className="space-y-3">
                  <h3 className={`text-lg font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Threat: RPC Tracking & Metadata
                  </h3>
                  <p className={`text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Your IP stays hidden, even when interacting with on-chain apps
                  </p>
                </div>

                {/* Divider */}
                <div className={`border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}></div>

                {/* Threat 3 */}
                <div className="space-y-3">
                  <h3 className={`text-lg font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Threat: Cross-App Metadata Leakage
                  </h3>
                  <p className={`text-base leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Isolated connectivity minimizes metadata exposure across applications
                  </p>
                </div>
              </div>

              {/* Closing Statement */}
              <p className={`text-sm mt-12 ${isDark ? "text-slate-500" : "text-slate-500"} italic`}>
                Privacy is enforced before traffic reaches the internet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 px-4">
            <h2
              className={`text-4xl md:text-5xl font-semibold mb-6 text-justify hyphens-auto ${isDark ? "text-white" : "text-slate-900"}`}
            >
              How it works — instant, private, wallet-native
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div
                className={`w-20 h-20 ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-800"} border-4 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
              >
                <span className="text-3xl font-bold text-white">01</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                Wallet-native onboarding
              </h3>
              <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Connect your wallet. Keys stay on-device. KYC optional for lifestyle eSIM plans
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-20 h-20 ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-800"} border-4 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
              >
                <span className="text-3xl font-bold text-white">02</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                Buy & provision eSIM
              </h3>
              <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                Pay with crypto. Instant eSIM provisioning directly to your device
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-20 h-20 ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-800"} border-4 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
              >
                <span className="text-3xl font-bold text-white">03</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                Automatic VPN & routing
              </h3>
              <p className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
                RPC access and network metadata are masked
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Beyond Phones Section - Immersive World Map Experience */}
      <section
        className={`relative min-h-screen py-32 px-6 overflow-hidden ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
      >
        {/* Grid background */}
        <div
          className={`absolute inset-0 ${isDark ? "bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(71,85,105,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.04)_1px,transparent_1px)]"} bg-[size:64px_64px]`}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Title */}
          <div className="text-center mb-24">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 whitespace-nowrap ${isDark ? "text-white" : "text-slate-900"}`}>
              Beyond Phones
            </h2>
            <p className={`text-xl font-light max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              The Coordination Layer for Global Telecom
            </p>
            <p
              className={`text-base font-light max-w-2xl mx-auto mt-4 ${isDark ? "text-slate-500" : "text-slate-500"}`}
            >
              An on-chain MVNO coordinating provisioning, identity, and settlement across the planet
            </p>
          </div>

          {/* World Map Canvas */}
          <div
            className={`relative w-full aspect-video rounded-2xl overflow-hidden border mb-20 ${isDark ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white/80"} backdrop-blur-sm`}
          >
            {/* Network topology image as background */}
            <div className={`absolute inset-0 ${isDark ? "opacity-20" : "opacity-40"}`}>
              <img
                src="/images/internet-cables-oceans-1552081048106-superjumbo-v3.png"
                alt="Network topology"
                className={`w-full h-full object-cover ${isDark ? "mix-blend-screen" : "filter invert mix-blend-multiply"}`}
              />
            </div>

            {/* World map with submarine cables */}
            <div className="absolute inset-0">
              {/* <img
                // src="/images/image.png"
                alt="Global telecom infrastructure"
                className={`w-full h-full object-cover ${isDark ? "opacity-70" : "opacity-40"}`}
              /> */}
            </div>

            {/* Animated overlay elements */}
            <div
              className={`absolute inset-0 bg-transparent text-background ${isDark ? "bg-gradient-to-b from-transparent via-transparent to-slate-950/50" : "bg-gradient-to-b from-transparent via-transparent to-slate-50/30"}`}
            />

            {/* Pulsing nodes - representing network activity */}
            <div
              className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping ${isDark ? "bg-cyan-400 opacity-75" : "bg-cyan-600 opacity-60"}`}
            />
            <div
              className={`absolute top-1/3 right-1/3 w-2 h-2 rounded-full animate-ping animation-delay-1000 ${isDark ? "bg-emerald-400 opacity-75" : "bg-emerald-600 opacity-60"}`}
            />
            <div
              className={`absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full animate-ping animation-delay-2000 ${isDark ? "bg-sky-400 opacity-75" : "bg-sky-600 opacity-60"}`}
            />
            <div
              className={`absolute top-1/2 right-1/4 w-2 h-2 rounded-full animate-ping animation-delay-3000 ${isDark ? "bg-teal-400 opacity-75" : "bg-teal-600 opacity-60"}`}
            />

            {/* Annotation overlays - appear contextually */}
            <div
              className={`absolute top-1/4 left-1/4 ml-6 text-xs font-mono ${isDark ? "text-cyan-300 opacity-80" : "text-cyan-700 opacity-70"}`}
            >
              profile prepared
            </div>
            <div
              className={`absolute top-1/3 right-1/3 mr-6 text-xs font-mono ${isDark ? "text-emerald-300 opacity-80" : "text-emerald-700 opacity-70"}`}
            >
              entitlement verified
            </div>
            <div
              className={`absolute bottom-1/3 left-1/2 mt-6 text-xs font-mono ${isDark ? "text-sky-300 opacity-80" : "text-sky-700 opacity-70"}`}
            >
              usage settled
            </div>
          </div>

          {/* Act I - Phones */}
          <div className="mb-32 max-w-4xl mx-auto px-4">
            <div className="text-center mb-16 transition-all duration-500">
              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                Control global infrastructure from one mobile app
              </h2>
            </div>
          </div>

          {/* Act II - The System */}
          {/* <div className="mb-32 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-3xl font-medium leading-relaxed mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>
                Connectivity is not an app. It is coordination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div
                  className={`p-6 rounded-xl border backdrop-blur-sm ${isDark ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-slate-200"}`}
                >
                  <div className={`text-sm font-mono mb-2 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>Layer 1</div>
                  <div className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Provisioning</div>
                </div>
                <div
                  className={`p-6 rounded-xl border backdrop-blur-sm ${isDark ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-slate-200"}`}
                >
                  <div className={`text-sm font-mono mb-2 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                    Layer 2
                  </div>
                  <div className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Identity</div>
                </div>
                <div
                  className={`p-6 rounded-xl border backdrop-blur-sm ${isDark ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-slate-200"}`}
                >
                  <div className={`text-sm font-mono mb-2 ${isDark ? "text-sky-400" : "text-sky-600"}`}>Layer 3</div>
                  <div className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Settlement</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Act III - Beyond Phones (Devices emerge organically) */}
          <div className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Wearables */}
              <div className="group relative">
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 ${isDark ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20" : "bg-gradient-to-r from-cyan-500/10 to-emerald-500/10"}`}
                />
                <div
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm h-full ${isDark ? "bg-slate-900/80 border-slate-700/50" : "bg-white/90 border-slate-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 animate-pulse ${isDark ? "bg-cyan-400" : "bg-cyan-600"}`}
                    />
                    <div>
                      <h3 className={`text-2xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                        Wearables
                      </h3>
                      <p className={`leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Private connectivity for personal devices
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                        Your watch or headset verifies access locally and connects securely no constant data-leaks, no unnecessary data leaving the device
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automobiles */}
              <div className="group relative">
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 ${isDark ? "bg-gradient-to-r from-emerald-500/20 to-sky-500/20" : "bg-gradient-to-r from-emerald-500/10 to-sky-500/10"}`}
                />
                <div
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm h-full ${isDark ? "bg-slate-900/80 border-slate-700/50" : "bg-white/90 border-slate-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 animate-pulse ${isDark ? "bg-emerald-400" : "bg-emerald-600"}`}
                    />
                    <div>
                      <h3 className={`text-2xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                        Automobiles
                      </h3>
                      <p className={`leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Connectivity that travels with the vehicle
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                        The car stays connected across borders without resetting identity, while usage is settled automatically in the background
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machines & IoT */}
              <div className="group relative">
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 ${isDark ? "bg-gradient-to-r from-sky-500/20 to-teal-500/20" : "bg-gradient-to-r from-sky-500/10 to-teal-500/10"}`}
                />
                <div
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm h-full ${isDark ? "bg-slate-900/80 border-slate-700/50" : "bg-white/90 border-slate-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 animate-pulse ${isDark ? "bg-sky-400" : "bg-sky-600"}`}
                    />
                    <div>
                      <h3 className={`text-2xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                        Machines & IoT
                      </h3>
                      <p className={`leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Automation at scale, without complexity
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                        Devices connect as groups, not individuals usage is tracked regionally and billed automatically, no manual contracts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Cities */}
              <div className="group relative">
                <div
                  className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 ${isDark ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20" : "bg-gradient-to-r from-teal-500/10 to-cyan-500/10"}`}
                />
                <div
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm h-full ${isDark ? "bg-slate-900/80 border-slate-700/50" : "bg-white/90 border-slate-200"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 animate-pulse ${isDark ? "bg-teal-400" : "bg-teal-600"}`}
                    />
                    <div>
                      <h3 className={`text-2xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                        Smart Cities
                      </h3>
                      <p className={`leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        Connected infrastructure, not mass surveillance
                      </p>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                        Sensors process data locally, while networks coordinate efficiently without a single central controller
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Act IV - Convergence */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-12 flex flex-wrap justify-center gap-8">
              <div
                className={`flex items-center gap-3 font-mono text-sm ${isDark ? "text-cyan-300" : "text-cyan-700"}`}
              >
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-cyan-400" : "bg-cyan-600"}`} />
                Provisioning
              </div>
              <div
                className={`flex items-center gap-3 font-mono text-sm ${isDark ? "text-emerald-300" : "text-emerald-700"}`}
              >
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-emerald-400" : "bg-emerald-600"}`} />
                Identity
              </div>
              <div className={`flex items-center gap-3 font-mono text-sm ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-sky-400" : "bg-sky-600"}`} />
                Settlement
              </div>
            </div>

            <h3
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
            >
              The Coordination Layer for Global Telecom
            </h3>
            <p className={`text-xl font-light leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              One programmable system for every networked thing on Earth
            </p>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}

      {/* Footer is now in layout */}
    </div>
  )
}
