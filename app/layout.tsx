import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import { FooterNew } from '@/components/FooterNew'

export const metadata: Metadata = {
  title: 'GeSIM ',
  description: 'AI-Driven blockchain eSIM: Connect globally, Pay locally.',
  icons: {
    icon: [
      { url: '/gesim-logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/gesim-logo-icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/gesim-logo-icon.png',
    apple: '/gesim-logo-icon.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body cz-shortcut-listen="true">
        <ThemeProvider>
         <Header />
          {children}
          <Analytics />
          <FooterNew />
        </ThemeProvider>
      </body>
    </html>
  )
}
