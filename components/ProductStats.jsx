import React from 'react'
import { Globe, Award, Users } from 'lucide-react'

function ProductStats() {
  return (
    <section className="py-16 px-6">
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div
          className={`p-10 rounded-2xl backdrop-blur-sm bg-white/70 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className={`w-8 h-8 text-slate-700 dark:text-slate-300`} />
            <div className={`text-3xl font-black text-slate-900 dark:text-white`}>150+</div>
          </div>
          <div className={`text-center text-slate-600 dark:text-slate-400 font-medium`}>Countries</div>
        </div>
        <div
          className={`p-10 rounded-2xl backdrop-blur-sm bg-white/70 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className={`w-8 h-8 text-slate-700 dark:text-slate-300`} />
            <div className={`text-3xl font-black text-slate-900 dark:text-white`}>3+
        </div>
          </div>
          <div className={`text-center text-slate-600 dark:text-slate-400 font-medium`}>Connectivity Partners</div>
        </div>
        <div
          className={`p-10 rounded-2xl backdrop-blur-sm bg-white/70 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className={`w-8 h-8 text-slate-700 dark:text-slate-300`} />
            <div className={`text-3xl font-black text-slate-900 dark:text-white`}>2,000+
            </div>
          </div>
          <div className={`text-center text-slate-600 dark:text-slate-400 font-medium`}>Waitlist Signups</div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProductStats