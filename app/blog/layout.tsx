import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GeSIM Insights - Latest in Global Connectivity & Web3 Technology",
  description:
    "Stay updated with GeSIM's latest insights on global connectivity, eSIM technology, Web3 innovations, partnerships, and digital nomad lifestyle tips.",
  keywords:
    "GeSIM, eSIM, global connectivity, Web3, blockchain, digital nomad, travel technology, crypto payments, partnerships",
  openGraph: {
    title: "GeSIM Insights - Latest in Global Connectivity & Web3 Technology",
    description:
      "Stay updated with GeSIM's latest insights on global connectivity, eSIM technology, Web3 innovations, partnerships, and digital nomad lifestyle tips.",
    type: "website",
    url: "https://gesim.com/blog",
    siteName: "GeSIM",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeSIM Insights - Latest in Global Connectivity & Web3 Technology",
    description:
      "Stay updated with GeSIM's latest insights on global connectivity, eSIM technology, Web3 innovations, partnerships, and digital nomad lifestyle tips.",
  },
  alternates: {
    canonical: "https://gesim.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
