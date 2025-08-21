export default function AnimatedBackground({ isDark }) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated network mesh */}
        <div className={`absolute inset-0 opacity-5 ${isDark ? "opacity-10" : "opacity-5"}`}>
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
  
            {/* Connection lines */}
            {typeof window !== 'undefined' && Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 800}
                y1={Math.random() * 600}
                x2={Math.random() * 800}
                y2={Math.random() * 600}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.1"
                className="animate-pulse"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "4s",
                }}
              />
            ))}
          </svg>
        </div>
  
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${isDark ? "bg-slate-600" : "bg-slate-400"} animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: "6s",
              }}
            />
          ))}
        </div>
      </div>
    )
  }