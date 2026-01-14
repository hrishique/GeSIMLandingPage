import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://gesim.xyz"),
  title: "GeSIM — Private mobile data for on-chain lives",
  description:
    "Designed for DeFi users, Journalists, and anyone who values privacy",
  icons: {
    icon: "/SOlana_mobile_banner.png",
    apple: "/SOlana_mobile_banner.png",
  },
  openGraph: {
    title: "GeSIM — Private mobile data for on-chain lives",
    description:
      "Designed for DeFi users, Journalists, and anyone who values privacy",
    url: "https://gesim.xyz",
    siteName: "GeSIM",
    images: [
      {
        url: "/SOlana_mobile_banner.png",
        width: 1200,
        height: 630,
        alt: "GeSIM - Private Mobile Data",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeSIM — Private mobile data for on-chain lives",
    description:
      "Designed for DeFi users, Journalists, and anyone who values privacy",
    images: ["/SOlana_mobile_banner.png"],
    creator: "@gesim",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />

          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
