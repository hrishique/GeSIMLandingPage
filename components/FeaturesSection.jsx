'use client'
import React from 'react'
import { CreditCard, Globe, Network, Zap } from 'lucide-react'

function FeaturesSection() {

  const features = [
    {
      icon: <Globe className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />,
      title: "One eSIM, anywhere, anytime",
      description: "Travel, switch, stay connected effortlessly",
      titleClass: "text-lg md:text-xl font-bold text-slate-900 dark:text-white",
    },
    {
      icon: <Network className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />,
      title: "Pay only for what you use",
      description: "No surprises, instant billing, full control",
      titleClass: "text-xl font-bold text-slate-900 dark:text-white",
    },
    {
      icon: <CreditCard className="h-8 w-8 min-w-[2rem] min-h-[2rem] text-white flex-shrink-0" />,
      title: "Smart network choice, always optimal",
      description: "Your signal, speed and cost optimized",
      titleClass: "text-xl font-bold text-slate-900 dark:text-white",
    },
  ];

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
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-slate-50 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 min-w-[4rem] min-h-[4rem] bg-slate-800 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className='text-lg md:text-2xl font-bold text-slate-900 dark:text-white'>{feature.title}</h3>
                </div>
                <p className={`text-sm md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
    </div>
  </section>
  )
}

export default FeaturesSection