import React from 'react'
import {
    Building2,
    Star,
  } from "lucide-react"
import { Button } from './ui/button'
import Image from 'next/image'
import { useThemeContext } from './theme-provider'

function PartnersSection() {
  const { isDark } = useThemeContext()

    const partners = [
        {
          name: "Airalo",
          logo: "Airalo.png",
          color: "from-blue-500 to-blue-600",
          description: "Global eSIM marketplace leader",
        },
        {
          name: "eSIM Access",
          logo: "eSIM.png",
          color: "from-green-500 to-green-600",
          description: "Enterprise eSIM solutions",
        },
        {
          name: "Telnyx",
          logo: "Telnyx.png",
          color: "from-purple-500 to-purple-600",
          description: "Telecom infrastructure platform",
        },
      ]

  return (
    <section id="partners" className={`py-24 px-6 ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
    <div className="md:container md:mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* <Building2 className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} /> */}
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
            Strategic Partners
          </h2>
        </div>
        <p
          className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"} flex items-baseline justify-center gap-2`}
        >
          {/* <Star className="w-5 h-5 translate-y-0.5" /> */}
          Leading the telecom revolution together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className={`group px-4 py-2 rounded-3xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50" : "bg-white/70 border-slate-200 hover:bg-white"} border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center flex items-center justify-center`}
          >
            <div className={`${partner.name === 'Airalo' ? ' w-48 h-48':' w-40 h-40'} relative group-hover:scale-110 transition-transform`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className={`object-contain  ${
                      (partner.name === "eSIM Access" && isDark) ? "invert" : ""
                    }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button
          variant="outline"
          onClick={() => window.open('https://t.me/charchit_web3', '_blank')}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 mx-auto ${
            isDark
              ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          <Building2 className="w-5 h-5" />
          Become a Partner
        </Button>
      </div>
    </div>
  </section>
  )
}

export default PartnersSection