import Image from "next/image"
import { useEffect, useState } from "react"

export default function PhoneMockup() {
    const [status, setStatus] = useState("inserting") // inserting -> connecting -> connected
    const [logoPlugged, setLogoPlugged] = useState(false)
    const [currentLocation, setCurrentLocation] = useState({ city: "Tokyo", flag: "🇯🇵", country: "Japan" })
    const [isVisible, setIsVisible] = useState(false)
  
    const locations = [
      { city: "Tokyo", flag: "🇯🇵", country: "Japan" },
      { city: "New York", flag: "🇺🇸", country: "USA" },
      { city: "London", flag: "🇬🇧", country: "UK" },
      { city: "Singapore", flag: "🇸🇬", country: "Singapore" },
      { city: "Dubai", flag: "🇦🇪", country: "UAE" },
      { city: "Sydney", flag: "🇦🇺", country: "Australia" },
    ]
  
    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        },
        { threshold: 0.3 },
      )
  
      const element = document.getElementById("phone-mockup")
      if (element) observer.observe(element)
  
      return () => observer.disconnect()
    }, [isVisible])
  
    // Animation sequence
    useEffect(() => {
      if (!isVisible) return
  
      const sequence = setTimeout(() => {
        setLogoPlugged(true)
        const t1 = setTimeout(() => {
          setStatus("connecting")
          const t2 = setTimeout(() => setStatus("connected"), 2000)
          return () => clearTimeout(t2)
        }, 1200)
        return () => clearTimeout(t1)
      }, 800)
      return () => clearTimeout(sequence)
    }, [isVisible])
  
    // Location cycling
    useEffect(() => {
      if (status !== "connected") return
  
      const interval = setInterval(() => {
        setCurrentLocation((prev) => {
          const currentIndex = locations.findIndex((loc) => loc.city === prev.city)
          const nextIndex = (currentIndex + 1) % locations.length
          return locations[nextIndex]
        })
      }, 4000)
  
      return () => clearInterval(interval)
    }, [status])
  
    const statusText = {
      inserting: "🔌 Inserting GeSIM...",
      connecting: "🌐 Connecting...",
      connected: `Connected to ${currentLocation.city} ${currentLocation.flag}`,
    }
  
    return (
      <div
        id="phone-mockup"
        className={`relative w-80 h-[34rem] rounded-[3.5rem] p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer dark:bg-white dark:border-slate-200 bg-slate-800 border-slate-700 shadow-slate-900/60 border`}
        onClick={() => !isVisible && setIsVisible(true)}
      >
        <div
          className={`w-full h-full rounded-[2.5rem] flex flex-col items-center justify-center p-6 transition-colors dark:bg-slate-200 bg-slate-900`}
        >
          <div className="flex-grow flex flex-col items-center justify-center gap-6">
            <div
              className={`relative w-24 h-24 transition-all duration-1000 ease-out ${
                logoPlugged ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-75 opacity-60"
              }`}
            >
              <Image src="/gesim-logo.png" alt="GeSIM Logo" fill className="object-contain rounded-full" />
              {/* Insertion effect */}
              <div
                className={`absolute inset-0 border-2 border-dashed transition-opacity duration-500 rounded-full ${
                  status === "inserting" ? "opacity-100 border-blue-400 animate-pulse" : "opacity-0"
                }`}
              />
            </div>
            <h3 className={`text-2xl font-bold dark:text-slate-900 text-white`}>GeSIM</h3>
          </div>
          <div
            className={`w-full text-center p-4 rounded-xl transition-all duration-500 bg-white dark:bg-slate-800 ${
              status === "connected" ? "ring-2 ring-green-400/50" : ""
            }`}
          >
            <p
              className={`font-medium text-xs md:text-base transition-all duration-2000 animate-pulse ${
                status === "connected"
                  ? "dark:text-green-400 text-green-600 animate-pulse"
                  : "dark:text-slate-300 text-slate-700 animate-pulse"
              }`}
            >
              {statusText[status]}
            </p>
          </div>
        </div>
      </div>
    )
  }
  