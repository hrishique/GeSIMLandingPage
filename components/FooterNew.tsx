import Image from "next/image";
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export function FooterNew() {


  return (
    <footer
      className={`py-16 px-6 transition-all duration-300 dark:bg-slate-900 dark:border-t dark:border-slate-800 dark:text-slate-100 bg-slate-50 border-t border-slate-200 text-slate-900 `}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto max-w-[980px]">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 items-center text-center sm:flex-row sm:justify-between sm:items-start sm:text-left sm:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start gap-3 flex-1">
            <div className="flex items-center gap-3">
              <Image src="/gesim-logo.png" alt="GeSIM" width={32} height={32} className="rounded-lg" />
              <span className={`text-xl font-bold tracking-tight dark:text-white text-slate-900`}>
                GeSIM
              </span>
            </div>
            <p className={`text-sm font-medium dark:text-slate-400 text-slate-600`}>
            AI-Driven blockchain eSIM
            </p>

            {/* <nav className="grid grid-cols-2 gap-1" aria-label="Legal navigation">
            <a
              href="/privacy"
              className={`text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                  dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className={`text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className={`text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Cookie Policy"
            >
              Cookie Policy
            </a>
            <a
              href="/legal"
              className={`text-sm font-medium transition-colors min-h-[44px] min-w-[44px] flex items-center py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Legal and Compliance"
            >
              Legal & Compliance
            </a>
          </nav> */}
          </div>

          {/* Legal Navigation */}
      

          {/* Social Links */}
          <div className="flex gap-4 justify-center sm:justify-end flex-1" role="group" aria-label="Social media links">
            <a
              href="https://x.com/gesimxyz"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Follow GeSIM on X (Twitter)"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/gesimxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 
                  dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Follow GeSIM on Instagram"
            >
 
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://t.me/gesimxyz"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Join GeSIM on Telegram"
            >

              <FaTelegramPlane className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/gesim-xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Connect with GeSIM on LinkedIn"
            >

              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:contact@gesim.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:-translate-y-0.5
                dark:text-slate-400 dark:hover:text-white dark:focus:ring-offset-slate-900
                 text-slate-600 hover:text-slate-900 focus:ring-offset-slate-50`
              }
              aria-label="Connect with GeSIM on LinkedIn"
            >

              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-6 border-t text-center dark:border-slate-800 border-slate-200`}>
          <p className={`text-sm font-medium dark:text-slate-400 text-slate-600`}>
            &copy; {new Date().getFullYear()} GeSIM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}