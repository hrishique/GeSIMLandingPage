import { Dot } from "lucide-react"
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
    // useEffect(() => {
    //   if (!isVisible) return
  
     
    //   return () => clearTimeout(sequence)
    // }, [isVisible])
  
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

    // Clear animation timeouts once completed
    let animationTimeouts = []

    // Animation: runs from inserting to connected
    const startAnimation = () => {
      // Clear any previous timeouts
      animationTimeouts.forEach(clearTimeout)
      animationTimeouts = []

      setStatus("inserting")
      setLogoPlugged(false)

      const t0 = setTimeout(() => {
        setLogoPlugged(true)
        const t1 = setTimeout(() => {
          setStatus("connecting")
          const t2 = setTimeout(() => {
            setStatus("connected")
            // Clear all animation timeouts after animation completes
            animationTimeouts.forEach(clearTimeout)
            animationTimeouts = []
          }, 2000)
          animationTimeouts.push(t2)
        }, 1200)
        animationTimeouts.push(t1)
      }, 800)
      animationTimeouts.push(t0)
    }

    // New: On click, if already connected, cycle to next city
    const nextCity = () => {
        setCurrentLocation((prev) => {
          const currentIndex = locations.findIndex((loc) => loc.city === prev.city)
          const nextIndex = (currentIndex + 1) % locations.length
          return locations[nextIndex]
        })
    }
  
    return (
      <div
        id="phone-mockup"
        className={`relative w-80 h-[34rem] rounded-[3.5rem] p-4 shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer dark:bg-white dark:border-slate-200 bg-slate-800 border-slate-700 shadow-slate-900/60 border`}
        onClick={()=>{
          if (status === "connected") {
            nextCity()
          }
          else{
            startAnimation()
          }
        }}
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
              <Image src="/gesim-logo-icon.png" alt="GeSIM Logo" fill className="object-contain rounded-full" />
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
            className={`w-full text-center p-4 rounded-xl transition-all duration-500 dark:bg-white bg-slate-800 ${
              status === "connected" ? "ring-2 ring-green-400/50" : ""
            }`}
          >
            <p
              className={`font-medium text-xs md:text-base transition-all duration-2000  ${
                status === "connected"
                  ? "text-green-400 dark:text-green-600"
                  : "text-slate-300 dark:text-slate-700"
              }`}
            >
              {statusText[status]}
            </p>
          </div>
        </div>
        <p className="pt-8 text-xs text-center text-slate-500 dark:text-slate-400 flex items-center justify-center"><Dot className="w-6 h-6" /> Click to connect</p>
      </div>
    )
  }
  