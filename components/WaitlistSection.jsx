'use client'
import { ArrowRight, Mail, Shield, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'

function WaitlistSection() {
  const [email, setEmail] = useState("")



const handleSubmit = async (e) => {
  e.preventDefault();
  let url =  process.env.NEXT_PUBLIC_API
  console.log('url',url)

  const inputValue = {
    'email': email,
    'createdAt': (new Date()).toLocaleString(),
  }
  try {

    const response = await axios.post(url, inputValue, { headers: { "Content-Type": "application/json"} });

    // if (response.data.status === "success") {
    //   // setMessage("Email saved to Google Sheet!");
    //   setEmail("");
    // } else {
    //   // setMessage("Error: " + response.data.message);
    // }
  } catch (err) {
    console.log("Request failed: " + err.message);
  }
};


  return (
    <section
      id="waitlist"
      className={`py-16 sm:py-28 px-4 sm:px-6 bg-white dark:bg-slate-950`}
    >
      <div className=" text-center">
        <div className="flex items-center justify-center gap-2 sm:flex-row sm:gap-3 mb-6 sm:mb-8">
          {/* <Mail className={`w-8 h-8 sm:w-10 sm:h-10 ${isDark ? "text-slate-400" : "text-slate-600"}`} /> */}
          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight`}
          >
            Join the Revolution
          </h2>
        </div>

        <p
          className={`text-base md:text-lg mb-8 sm:mb-12 text-slate-600 dark:text-slate-400 flex justify-center items-center md:gap-4`}
        >
          {/* <Users className="w-10 h-10 sm:w-6 sm:h-6 translate-y-0.5 items-center" /> */}
          <span className="max-w-xs sm:max-w-none">
            Join a Thriving Global Community of Digital Nomads with GeSIM
          </span>
        </p>

        <form
          className="space-y-4 sm:space-y-6 flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto items-center justify-center w-full md:max-w-2xl">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`h-12 sm:h-14 px-4 sm:px-6 rounded-lg sm:rounded-xl text-base sm:text-lg bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 
                dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 shadow-lg flex-1 min-w-0 w-full sm:w-auto`}
            />
            <Button
              type="submit"
              className={` px-4 py-2 md:py-4 text-base font-semibold rounded-xl border-2 transition-all duration-300 flex items-center gap-3 bg-slate-900 
                hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 w-full sm:w-48 min-w-[120px] md:max-w-xs `}
              disabled={!email}
            >
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm">Subscribe</span>
            </Button>
          </div>
        </form>

        <p
          className={`pt-8 text-xs md:text-sm mt-6 sm:mt-8 text-slate-600 dark:text-slate-500 flex items-center justify-center gap-2`}
        >
          <Shield className="w-4 h-4" />
          <span>No spam, ever. Be the first to know when we launch.</span>
        </p>
      </div>
    </section>
  )
}

export default WaitlistSection