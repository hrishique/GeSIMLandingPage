"use client"

import { useState, useEffect } from 'react'

export default function AnimatedBackground() {
  const [connectionLines, setConnectionLines] = useState([])
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random values only on client side
    const generateConnectionLines = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 800,
      y1: Math.random() * 600,
      x2: Math.random() * 800,
      y2: Math.random() * 600,
    }))

    const generateParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))

    setConnectionLines(generateConnectionLines)
    setParticles(generateParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated network mesh */}
      <div className={`absolute inset-0 opacity-5 dark:opacity-10`}>
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
          {connectionLines.map((line) => (
            <line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.1"
              className="animate-pulse"
              style={{
                animationDelay: `${line.id * 0.5}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600 animate-pulse`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.id * 1.2}s`,
              animationDuration: "6s",
            }}
          />
        ))}
      </div>
    </div>
  )
}