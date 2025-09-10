import React from 'react'
import AnimatedBackground from './AnimatedBackground'
import PhoneMockup from './PhoneMockup'
import RoadmapTimeline from './RoadmapTimeline'
import { Button } from '../ui/button'
import { ShieldCheck } from 'lucide-react'
import { useThemeContext } from '../theme-provider'

export default function CoordinationLayer() {
  const { isDark } = useThemeContext()

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="app" className={`relative py-32 px-6 overflow-hidden ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
    <AnimatedBackground isDark={isDark} />

    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <PhoneMockup isDark={!isDark} />
        </div>

        <div className="text-center lg:text-left">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            The Coordination Layer for Global Telecom
          </h2>
          <p className={`md:text-xl text-lg text-justify mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto lg:mx-0`}>
          Inspired by the Open Skies Treaty. GeSIM preloads local plans, standardizes provisioning, and guarantees auditable, fairly priced connectivity the moment you land.
          </p>

          <RoadmapTimeline isDark={isDark} />

          <div className="mt-16">
          <Button
          onClick={()=>scrollToWaitlist()}
                  size="lg"
                  className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  Join Beta Access
                </Button>
           
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

