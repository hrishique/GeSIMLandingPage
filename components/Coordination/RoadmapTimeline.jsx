import { useState } from "react"
import { FlaskConical, Zap, ShieldCheck, Rocket } from "lucide-react"

export default function RoadmapTimeline({ isDark }) {
    const [hoveredStep, setHoveredStep] = useState(null)
  
    const roadmapSteps = [
      {
        icon: FlaskConical,
        quarter: "Q2 2024",
        title: "Research & Ideation",
        description: "Conceptualizing the future of decentralized telecom.",
        details: "Deep research into blockchain telecom infrastructure and user needs analysis.",
        status: "complete",
      },
      {
        icon: Zap,
        quarter: "Q3 2024",
        title: "MVP & DevNet Testing",
        description: "Building and testing the core protocol on our DevNet.",
        details: "Smart contract development, security audits, and initial protocol testing.",
        status: "complete",
      },
      {
        icon: ShieldCheck,
        quarter: "Q4 2024",
        title: "NFT-Gated Beta Launch",
        description: "Inviting early adopters to experience GeSIM with exclusive NFTs.",
        details: "Limited beta access for community members with special NFT credentials.",
        status: "active",
      },
      {
        icon: Rocket,
        quarter: "Q2 2025",
        title: "Global Launch",
        description: "Bringing GeSIM to the world with public access and expanded coverage.",
        details: "Full public launch with 150+ countries coverage and mainstream adoption.",
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
            const isHovered = hoveredStep === index
  
            return (
              <div
                key={index}
                className="relative flex items-start group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 transform ${
                    isHovered ? "scale-110" : "scale-100"
                  }
                  ${isComplete ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : ""}
                  ${isActive ? `bg-blue-500 text-white animate-pulse shadow-lg shadow-blue-500/30` : ""}
                  ${isUpcoming ? `${isDark ? "bg-slate-700 border-2 border-slate-600 text-slate-400" : "bg-slate-200 border-2 border-slate-300 text-slate-500"}` : ""}
                `}
                >
                  <step.icon className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
                </div>
                <div className="ml-6 relative">
                  <h4
                    className={`font-bold transition-colors duration-300 ${
                      isHovered
                        ? isDark
                          ? "text-white"
                          : "text-slate-900"
                        : isDark
                          ? "text-slate-200"
                          : "text-slate-800"
                    }`}
                  >
                    {step.title} <span className="text-sm font-medium text-slate-500">{step.quarter}</span>
                  </h4>
                  <p
                    className={`text-sm mt-1 transition-colors duration-300 ${
                      isHovered
                        ? isDark
                          ? "text-slate-300"
                          : "text-slate-600"
                        : isDark
                          ? "text-slate-400"
                          : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
  
                  {/* Tooltip/Expanded details */}
                  <div
                    className={`absolute left-0 top-full mt-2 p-3 rounded-lg shadow-lg z-20 w-64 transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    } ${isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"}`}
                  >
                    <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>{step.details}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }