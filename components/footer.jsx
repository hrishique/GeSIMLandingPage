'use client'
import Image from "next/image"
import Link from "next/link"
import { useThemeContext } from './theme-provider'
import { BsTwitterX, BsInstagram, BsTelegram } from "react-icons/bs";

export default function Footer() {
  const { isDark } = useThemeContext()

  const socialLinks = [
    {
      icon: BsTwitterX,
      href: 'https://x.com/gesimxyz',
      target: '_blank',
      ariaLabel: 'Follow us on X (Twitter)'
    },
    {
      icon: BsInstagram,
      href: 'https://www.instagram.com/gesimxyz/',
      target: '_blank',
      ariaLabel: 'Follow us on Instagram'
    },
    {
      icon: BsTelegram,
      href: 'https://t.me/gesimxyz',
      target: '_blank',
      ariaLabel: 'Join our Telegram'
    }
  ]


  const renderIcon = (link) => {
    return(
      <Link
      key={link.href}
      href={link.href}
      target={link.target}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        isDark
          ? "border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
          : "border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
      }`}
      aria-label={link.ariaLabel}
    >
      <link.icon className="w-5 h-5" />
    </Link>
    )
  }
  return (
    <footer
      className={`py-10 px-6 ${isDark ? "bg-slate-950 border-t border-slate-900" : "bg-white border-t border-slate-200"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className={`relative w-8 h-8 p-1.5 ${isDark ? "bg-slate-800" : "bg-gradient-to-br from-slate-200 to-slate-300"} rounded-xl`}>
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain rounded-xl" />
            </div>
            <span className={`text-lg font-semibold tracking-tight ${isDark ? "text-slate-200" : "text-slate-900"}`}>GeSIM</span>
          </Link>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => renderIcon(link))}
          </div>

          <p className={`${isDark ? "text-slate-500" : "text-slate-500"} text-sm text-center`}>
            © {new Date().getFullYear()} GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
      </div>
    </footer>
  )
} 