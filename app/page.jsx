"use client"
import { useState, useEffect } from "react"
import CoordinationLayer from '@/components/Coordination/CoordinationLayer'
import Header from '@/components/header'
import HeroSection from '@/components/HeroSection'
import ProductStats from '@/components/ProductStats'
import PartnersSection from '@/components/PartnersSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/footer'
import WaitlistSection from '@/components/WaitlistSection'
export default function GeSIMLanding() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])


  const toggleTheme = () => setIsDark(!isDark)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >

      {/* Header */}
      <Header isDark={isDark} toggleTheme={toggleTheme} scrollToWaitlist={scrollToWaitlist} />

      <HeroSection isDark={isDark} />

      {/* Product number stats */}
      <ProductStats isDark={isDark} />

      {/* Partners Section */}
      <PartnersSection isDark={isDark}/>

      {/* Features Section */}
      <FeaturesSection isDark={isDark} />

      {/* Product Preview Section */}
    <CoordinationLayer isDark={isDark} />


      <WaitlistSection isDark={isDark}/>
      {/* Footer */}
      <Footer isDark={isDark} />
      
    </div>
  )
}
