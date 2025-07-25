import React from 'react'
import AnimatedBackground from './AnimatedBackground'
import PhoneMockup from './PhoneMockup'
import RoadmapTimeline from './RoadmapTimeline'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CreditCard, Globe, Shield, ShieldCheck, Star, Twitter, Users } from 'lucide-react'

export default function CoordinationLayer({isDark}) {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id="app" className={`relative py-32 px-6 overflow-hidden ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
        {/* Enhanced Animated Background */}
        <AnimatedBackground isDark={isDark} />

        <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className={`md:hidden text-center text-3xl md:text-4xl font-bold mb-10 ${isDark ? "text-white" : "text-slate-900"}`}>
                The Coordination Layer for Global Telecom
              </h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Interactive Phone Visual */}
            <div className="flex justify-center">
              <PhoneMockup isDark={isDark} />
            </div>

            {/* Right Side: Storytelling, Roadmap, CTA */}
            <div className="text-center lg:text-left px-4">
              <h2 className={`hidden lg:block text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
                The Coordination Layer for Global Telecom
              </h2>
              <p className={`text-lg mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto lg:mx-0`}>
                Bringing standardization, transparency, and trust to the world's most fragmented industry.
              </p>

              <RoadmapTimeline isDark={isDark} />
            <div className='mt-12 flex justify-center'>
              <Button
                onClick={scrollToWaitlist}
                size="xl"
                className={`${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"} px-12 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}
              >
                <ShieldCheck className="w-10 h-10" />
                Join Beta Access
              </Button>    
            </div>
            </div>
          </div>
        </div>
      </section>
)
}

