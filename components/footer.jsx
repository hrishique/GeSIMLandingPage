import Image from "next/image"
import { Twitter, Send } from "lucide-react"
import Link from "next/link"

export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-16 px-6 ${isDark ? "bg-slate-900 border-t border-slate-800" : "bg-slate-50 border-t border-slate-200"} relative`}
    >
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative w-8 h-8 p-0.5 overflow-hidden">
            <Image 
              src={isDark ? "/gesim-logo.png" : "/gesim-logo.png"} 
              alt="GeSIM" 
              fill 
              className="object-cover scale-150" 
              priority
            />
          </div>
          <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-3 mb-6">
          <div className="space-x-4 flex">
            <Link
              href={'https://x.com/gesimxyz'}
              target={'_blank'}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white" 
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href={'https://t.me/gesimxyz'}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white" 
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Join our Telegram"
            >
              <Send className="w-5 h-5" />
            </Link>
          </div>
          <p
            className={`${isDark ? "text-slate-500" : "text-slate-600"} text-sm flex items-baseline justify-center gap-2`}
          >
            © {new Date().getFullYear()} GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
   
      </div>
    </footer>
  )
} 