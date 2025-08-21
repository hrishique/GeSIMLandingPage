import { ArrowRight, Mail, Shield, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios'

function WaitlistSection({ isDark }) {
  const [email, setEmail] = useState("")



const handleSubmit = async (e) => {
  e.preventDefault();
  let url =  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
  console.log('url',url)
  const inputValue = {
    'email': email,
    'created At': (new Date()).toLocaleString(),
  }
  try {
    const formData = new FormData()
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key])
    })
    const response = await axios.post(url, formData, { headers: { "Content-Type": "application/json"} });

    if (response.data.status === "success") {
      // setMessage("Email saved to Google Sheet!");
      setEmail("");
    } else {
      // setMessage("Error: " + response.data.message);
    }
  } catch (err) {
    console.log("Request failed: " + err.message);
  }
};


  return (
    <section
      id="waitlist"
      className={`py-16 sm:py-28 px-4 sm:px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 sm:flex-row sm:gap-3 mb-6 sm:mb-8">
          <Mail className={`w-8 h-8 sm:w-10 sm:h-10 ${isDark ? "text-slate-400" : "text-slate-600"}`} />
          <h2
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"} leading-tight`}
          >
            Join the Revolution
          </h2>
        </div>

        <p
          className={`text-base xs:text-lg sm:text-xl mb-8 sm:mb-12 ${isDark ? "text-slate-400" : "text-slate-600"} flex justify-center items-center md:gap-4`}
        >
          <Users className="w-10 h-10 sm:w-6 sm:h-6 translate-y-0.5 items-center" />
          <span className="max-w-xs sm:max-w-none">
            Join a Thriving Global Community of Digital Nomads with GeSIM
          </span>
        </p>

        <form
          className="space-y-4 sm:space-y-6 flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto items-center justify-center">
            <Input
              type="email"
              name='email'
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-80 sm:w-80 h-12 sm:h-14 px-4 sm:px-6 rounded-lg sm:rounded-xl text-base sm:text-lg ${isDark ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"} shadow-lg`}
            />
            <Button
              // size='lg'
              type="submit"
              className={`w-48 sm:w-48 h-12 sm:h-14 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 px-6 ${isDark ? "bg-slate-800 hover:bg-slate-700 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
              disabled={!email}
            >
              <ArrowRight className="w-5 h-5" />
              <span>Join the Revolution</span>
            </Button>
          </div>
        </form>

        <p
          className={`pt-8 text-xs sm:text-sm mt-6 sm:mt-8 ${isDark ? "text-slate-500" : "text-slate-600"} flex items-baseline justify-center gap-2`}
        >
          <Shield className="w-4 h-4 translate-y-0.5" />
          <span>No spam, ever. Be the first to know when we launch.</span>
        </p>
      </div>
    </section>
  )
}

export default WaitlistSection