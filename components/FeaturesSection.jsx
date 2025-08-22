import React from 'react'
import { Button } from './ui/button'
import { CreditCard, FileText, Globe, Network, Settings, Shield, Zap } from 'lucide-react'

function FeaturesSection({isDark}) {

    const handleStartJourney = (section) => {
        window.open(`https://app.gesim.xyz/?section=${section}`, "_blank")
      }

  return (
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
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Globe className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Global Pay-Per-Use Connectivity</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Smart billing, Single eSIM, 150+ countries
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Network className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Operator Switch Logic</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Seamless & Effortless Travel Connectivity
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <CreditCard className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Buy Regional Data</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
          Roam Free with Stablecoin – Local Prices, Pre/Postpaid, Full Control            </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection