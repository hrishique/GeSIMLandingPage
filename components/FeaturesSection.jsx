import React from 'react'
import { Button } from './ui/button'
import { CreditCard, FileText, Globe, Settings, Shield, Zap } from 'lucide-react'

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
              className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Global Network</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Seamless connectivity across 150+ countries with enterprise-grade infrastructure and real-time
            optimization.
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Crypto Native</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Pay with USDC, Bitcoin, Ethereum and other major cryptocurrencies with instant, secure transactions.
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-slate-50 border-slate-200"} border hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-16 h-16 ${isDark ? "bg-slate-700" : "bg-slate-800"} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
            >
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>DID Security</h3>
          </div>
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"} leading-relaxed`}>
            Your identity and travel data secured by advanced blockchain technology and decentralized protocols.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleStartJourney("data")}
            className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Buy Data Plans
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleStartJourney("developer")}
            className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
          >
            <Settings className="w-4 h-4 mr-2" />
            Developer Docs
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleStartJourney("invoices")}
            className={`${isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"} rounded-lg`}
          >
            <FileText className="w-4 h-4 mr-2" />
            View Invoices
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection