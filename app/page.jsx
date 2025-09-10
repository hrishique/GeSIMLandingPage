"use client"
import CoordinationLayer from '@/components/Coordination/CoordinationLayer'
import HeroSection from '@/components/HeroSection'
import ProductStats from '@/components/ProductStats'
import PartnersSection from '@/components/PartnersSection'
import FeaturesSection from '@/components/FeaturesSection'
import WaitlistSection from '@/components/WaitlistSection'
import { useThemeContext } from '@/components/theme-provider'

export default function GeSIMLanding() {
  const { isDark } = useThemeContext()
  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >

      <HeroSection />

      {/* Product number stats */}
      <ProductStats />

      {/* Partners Section */}
      <PartnersSection/>

      {/* Features Section */}
      <FeaturesSection />

      {/* Product Preview Section */}
    <CoordinationLayer />
      <WaitlistSection/>

      
    </div>
  )
}
