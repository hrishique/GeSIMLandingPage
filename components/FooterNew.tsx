import Image from "next/image";

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
              Global connectivity reimagined
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                  fill="currentColor"
                />
              </svg>
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
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
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