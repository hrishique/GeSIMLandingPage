import React from 'react'
import AnimatedBackground from './AnimatedBackground'
import PhoneMockup from './PhoneMockup'
import RoadmapTimeline from './RoadmapTimeline'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CreditCard, Globe, Shield, ShieldCheck, Star, Twitter, Users } from 'lucide-react'

export default function CoordinationLayer({isDark,scrollToWaitlist}) {

  return (
    <section id="app" className={`relative py-32 px-6 overflow-hidden ${isDark ? "bg-slate-900/30" : "bg-slate-50"}`}>
    <AnimatedBackground isDark={isDark} />

    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <PhoneMockup isDark={!isDark} />
        </div>

        <div className="text-center lg:text-left">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            The Coordination Layer for Global Telecom
          </h2>
          <p className={`text-xl mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} max-w-2xl mx-auto lg:mx-0`}>
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
            {/* <Dialog>
              <DialogTrigger asChild>
               
              </DialogTrigger>
              <DialogContent
                className={`${isDark ? "bg-slate-900 border-slate-800" : "bg-white"} rounded-2xl max-w-md`}
              >
                <DialogHeader>
                  <DialogTitle className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                    Join the GeSIM Beta
                  </DialogTitle>
                  <DialogDescription className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Get early access, receive an NFT pass, and join our closed Discord community.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email or wallet address"
                      className={`h-12 px-4 rounded-xl text-base ${isDark ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"} shadow-inner`}
                    />
                    <Button className="w-full h-12 text-base font-semibold">Join Waitlist</Button>

                    <div className="flex items-center gap-3 pt-2">
                      <div className={`h-px flex-1 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                      <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                        or follow us
                      </span>
                      <div className={`h-px flex-1 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
                        asChild
                      >
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 ${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
                        asChild
                      >
                        <a href="https://farcaster.xyz" target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Farcaster
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog> */}
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

