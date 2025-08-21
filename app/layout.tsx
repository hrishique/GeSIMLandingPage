import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeSIM ',
  description: 'Revolutionizing global connectivity with crypto-powered eSIM technology. Pay once, roam everywhere, own your data.',
  icons: {
    icon: [
      { url: '/gesim-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/gesim-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/gesim-logo.png',
    apple: '/gesim-logo.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
