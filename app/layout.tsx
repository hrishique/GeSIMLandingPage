import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FloatingLogo } from "@/components/floating-logo"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GeSIM — Private eSIMs with Built-in VPN & Crypto Payments",
  description:
    "Private mobile data for on-chain lives. Instant eSIM provisioning with built-in VPN and wallet-first crypto payments — for DeFi users, travelers, journalists, and nomads.",
  icons: {
    icon: "/gesim-logo-icon.png",
    apple: "/gesim-logo-icon.png",
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
          <FloatingLogo />
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
