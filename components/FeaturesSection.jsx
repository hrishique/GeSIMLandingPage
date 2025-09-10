'use client'
import React from 'react'
import { CreditCard, Globe, Network, Zap } from 'lucide-react'

function FeaturesSection() {

    const handleStartJourney = (section) => {
        window.open(`https://app.gesim.xyz/?section=${section}`, "_blank")
      }

  return (
    <section id="features" className={`py-32 px-6 bg-white dark:bg-slate-950`}>
    <div className="md:container md:mx-auto max-w-6xl">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* <Zap className={`w-8 h-8 ${isDark ? "text-slate-400" : "text-slate-600"}`} /> */}
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white`}>
            Revolutionary Features
          </h2>
        </div>
        <p className={`md:text-xl text-lg text-slate-600 dark:text-slate-400`}>
          The future of global connectivity is here
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className={`p-8 rounded-3xl bg-slate-50 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] bg-slate-800 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Globe className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-lg md:text-xl font-bold text-slate-900 dark:text-white`}>Global Pay-Per-Use Connectivity</h3>
          </div>
          <p className={`text-slate-600 dark:text-slate-400 leading-relaxed`}>
            Smart billing, Single eSIM, 150+ countries
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl bg-slate-50 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] bg-slate-800 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Network className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-xl font-bold text-slate-900 dark:text-white`}>Operator Switch Logic</h3>
          </div>
          <p className={`text-slate-600 dark:text-slate-400 leading-relaxed`}>
            Seamless & Effortless Travel Connectivity
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl bg-slate-50 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 min-w-[4rem] min-h-[4rem] bg-slate-800 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <CreditCard className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />
            </div>
            <h3 className={`text-xl font-bold text-slate-900 dark:text-white`}>Buy Regional Data</h3>
          </div>
          <p className={`text-slate-600 dark:text-slate-400 leading-relaxed`}>
          Roam Free with Stablecoin – Local Prices, Pre/Postpaid, Full Control            </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection