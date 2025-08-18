import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "GeSIM Dashboard - Global Connectivity Management",
  description:
    "Manage your global eSIM connectivity, mint SBT credentials, track usage, and handle billing with GeSIM's Web3-powered dashboard.",
  keywords: "GeSIM, eSIM dashboard, Web3, SBT, global connectivity, usage tracking, crypto payments",
  openGraph: {
    title: "GeSIM Dashboard - Global Connectivity Management",
    description:
      "Manage your global eSIM connectivity, mint SBT credentials, track usage, and handle billing with GeSIM's Web3-powered dashboard.",
    type: "website",
    url: "https://gesim.com/app",
    siteName: "GeSIM",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeSIM Dashboard - Global Connectivity Management",
    description:
      "Manage your global eSIM connectivity, mint SBT credentials, track usage, and handle billing with GeSIM's Web3-powered dashboard.",
  },
  alternates: {
    canonical: "https://gesim.com/app",
  },
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="p-6 rounded-2xl bg-slate-900 shadow-2xl flex items-center gap-4">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-300 border-t-slate-600"></div>
            <span className="text-white font-medium">Loading GeSIM App...</span>
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  )
}
