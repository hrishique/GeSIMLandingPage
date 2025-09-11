import {GlobeLock,Network,Rocket,SignalHighIcon,SignalMedium,TestTubeDiagonalIcon} from "lucide-react"
import { useState } from "react"
import { GrTest } from "react-icons/gr";
import { FaTowerCell } from "react-icons/fa6";
import { BsSim } from "react-icons/bs";


const RoadmapTimeline = () => {
  const [activeStep, setActiveStep] = useState(null)

  const roadmapSteps = [
    {
      icon: GlobeLock,
      quarter: "Q3 2025",
      title: "Working MVP",
      description: "Smart wallet, easy plan browsing, pay only for what you use- stay connected anywhere, anytime",
      details: "eSIM is more than telecom- it’s your connectivity, identity, and payments in one. Our app keeps your info private, lets you pay instantly in local value in stablecoin and makes global usage seamless",
      status: "active",
    },
    {
      icon: FaTowerCell,
      quarter: "Q1 2026",
      title: "MNO onboarding",
      description: "Behind the scenes, our partners get smarter, frictionless roaming- so you get seamless service",
      details: "Instant revenue growth, happier customers, and seamless global roaming, smart billing that works for you, not against you",
      status: "upcoming",
    },
    {
      icon: GrTest,
      quarter: "Q2 2026",
      title: "Beta launch for early users",
      description: "Frictionless first-money moments- instant global data, zero bill shock",
      details: "Wallet-backed KYC, clear per-minute/MB pricing, auto-stop safeguards, plus preloaded event passes to boost your spend power",
      status: "upcoming",
    },
    {
      icon: Rocket,
      quarter: "TBD",
      title: "Global Launch",
      description: "Public access with expanded coverage",
      details: "Full public launch with 150+ countries coverage and mainstream adoption",
      status: "upcoming",
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-300 dark:before:bg-slate-700">
        {roadmapSteps.map((step, index) => {
          const isComplete = step.status === "complete"
          const isActive = step.status === "active"
          const isUpcoming = step.status === "upcoming"
          const isExpanded = activeStep === index || step.status === "active"

          return (
            <div
              key={index}
              className="relative flex items-start group cursor-pointer"
              onClick={() => {setActiveStep(index)
                if(isActive){
                  setActiveStep(null)
                }
              }}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-1000 ease-in-out transform group-hover:scale-110
                ${isComplete ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : ""}
                ${isActive ? `bg-blue-500 text-white animate-pulse shadow-lg shadow-blue-500/30 ` : ""}
                ${isUpcoming && !isActive ? "bg-slate-200 border-2 border-slate-300 text-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400" : ""}
              `}
              >
                <step.icon className="w-8 h-8 p-1" />
              </div>
              <div className="ml-6">
                <h4 className={`font-bold text-base text-slate-900 dark:text-white`}>
                  {step.title} <span className="ms-1 text-sm font-medium text-slate-500">{step.quarter}</span>
                </h4>
                <p className={`text-sm text-justify mt-1 text-slate-600 dark:text-slate-400`}>{step.description}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg text-xs text-justify bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300`}
                  >
                    {step.details}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RoadmapTimeline