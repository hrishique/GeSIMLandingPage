import React from 'react'

function loading() {
  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center">
    <div className={`p-6 rounded-2xl bg-slate-900 shadow-2xl flex items-center gap-4`}>
      <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-300 border-t-slate-600"></div>
      <span className={`text-white font-medium`}>Opening GeSIM App...</span>
    </div>
  </div>
  )
}

export default loading