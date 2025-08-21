import React from 'react'
import { Globe, Award, Users } from 'lucide-react'

function ProductStats({isDark}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    <div
      className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Globe className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
        <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>150+</div>
      </div>
      <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Countries</div>
    </div>
    <div
      className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Award className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
        <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>$90B+</div>
      </div>
      <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Valuation</div>
    </div>
    <div
      className={`p-8 rounded-2xl backdrop-blur-sm ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white/70 border-slate-200"} border shadow-lg`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Users className={`w-8 h-8 ${isDark ? "text-slate-300" : "text-slate-700"}`} />
        <div className={`text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>10M+</div>
      </div>
      <div className={`${isDark ? "text-slate-400" : "text-slate-600"} font-medium`}>Users</div>
    </div>
  </div>
  )
}

export default ProductStats