"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Check, ChevronLeft, ChevronRight, Shield, Users, CircleDollarSign, ExternalLink } from "lucide-react"
import axios from "axios"

interface CommunityOption {
  id: string
  name: string
  logo?: string
  initials: string
  isPartner: boolean
}

const communityOptions: CommunityOption[] = [
  { id: "nomads", name: "Nomads United", initials: "NU", isPartner: true },
  { id: "web3travels", name: "Web3 Travels", initials: "W3", isPartner: true },
  { id: "ethindia", name: "ETH India", initials: "EI", isPartner: true },
  { id: "hostelworld", name: "HostelWorld", initials: "HW", isPartner: true },
  { id: "producthunt", name: "Product Hunt", initials: "PH", isPartner: false },
  { id: "other", name: "Other", initials: "OT", isPartner: false },
]

const initialFormData = {
  community: "",
  email: "",
  countryTimezone: "",
  device: "",
  travelProfile: "",
  availability: "",
  interviewWilling: "",
  xHandle: "",
  referral: "",
  consent: false,
}

export function BetaSignup() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState({
    message: "",
    isSuccess: false,
  })

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.community) {
      //newErrors.community = "Community required"
    }
    if (!formData.email) {
      newErrors.email = "Email required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.travelProfile) {
      newErrors.travelProfile = "Travel profile required"
    }

    if (!formData.consent) {
      newErrors.consent = "Consent required to join beta"
    }

    setErrors(newErrors)
    console.log(newErrors)

    // Scroll to first error field
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0]
      setTimeout(() => {
        const element = document.querySelector(`[name="${firstErrorField}"]`) || 
                      document.querySelector(`#${firstErrorField}`) ||
                      document.querySelector(`[data-field="${firstErrorField}"]`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let isValid = validateForm()
    console.log(formData)
    console.log(isValid)
    if (!isValid) return

    setIsSubmitting(true)

    try {
      const url = "https://gesimbackend.onrender.com/api/user/betasignup"
      const inputValue = {
        ...formData,
      }
      let response = await axios.post(url, inputValue, { headers: { "Content-Type": "application/json"} })
      console.log(response.data.message)
      setSuccess({
        message: response.data.message,
        isSuccess: true,
      })
      setIsSubmitting(false)
      setFormData(initialFormData)
    } catch (err: any) {
      console.error("Request failed:", err?.response?.data?.error)
      setErrors({
        ...errors,
        general: err?.response?.data?.error || "Something went wrong. Please try again later."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section id='waitlist' className={`py-24 px-6 dark:bg-slate-900/50 bg-slate-50`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900`}>
              Join GeSIM closed beta — limited seats
            </h2>
            <p className={`text-xl mb-8 dark:text-slate-400 text-slate-600 leading-relaxed`}>
              Early access — wallet-first eSIM beta + partner slots. Connect & opt in: in-app device fingerprint +
              wallet signature → secure one-tap binding. Instant setup, cheaper global data, priority access,
              early-adopter discounts & VIP support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 dark:bg-slate-700 bg-slate-800 rounded-lg flex items-center justify-center`}
                >
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className={`font-medium dark:text-slate-300 text-slate-700`}>
                  Priority access to GeSIM ID allowlist
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 dark:bg-slate-700 bg-slate-800 rounded-lg flex items-center justify-center`}
                >
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className={`font-medium dark:text-slate-300 text-slate-700`}>
                  Partner slots & community cohorts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 dark:bg-slate-700 bg-slate-800 rounded-lg flex items-center justify-center`}
                >
                  <CircleDollarSign className="w-4 h-4 text-white" />
                </div>
                <span className={`font-medium dark:text-slate-300 text-slate-700`}>
                  Beta credits redeemable post-launch
                </span>
              </div>
            </div>

            <div
              className={`p-6 rounded-2xl dark:bg-slate-800/30 dark:border-slate-700/50 bg-white/70 border-slate-200 border`}
            >
              <h3 className={`font-bold mb-3 dark:text-white text-slate-900`}>Rank Assignment</h3>
              <p className={`text-sm dark:text-slate-400 text-slate-600 leading-relaxed`}>
                Rank 0–100. Higher rank → deeper discounts + early access to premium features and invite-only events.
                Criteria remain proprietary
              </p>
            </div>
          </div>

          <div className="order-last">
            <Card
              className={`dark:bg-slate-800/30 dark:border-slate-700/50 bg-white border-slate-200 shadow-2xl`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl dark:text-white text-slate-900`}>
                  Beta Access Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* <div className="space-y-3">
                      <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                        Which community are you joining from? <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.community}
                        name="community"
                        onValueChange={(value) => updateFormData("community", value)}
                      >
                        <SelectTrigger
                          className={`w-full dark:bg-slate-800 dark:text-white bg-white text-slate-900 ${
                            errors.community 
                              ? 'border-red-500 dark:border-red-500' 
                              : 'dark:border-slate-700 border-slate-300'
                          }`}
                          data-field="community"
                        >
                          <SelectValue placeholder="Select a community" />
                        </SelectTrigger>
                        <SelectContent>
                          {communityOptions.map((community) => (
                            <SelectItem key={community.id} value={community.id}>
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                                    // community.isPartner
                                    //   ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                                      // :
                                       "dark:bg-slate-600 dark:text-slate-200 bg-slate-200 text-slate-700"
                                  }`}
                                >
                                  {community.initials}
                                </div>
                                <span className="font-medium">{community.name}</span>
                                {/* {selectedCommunity === community.id && (
                                  <Check className="w-4 h-4 text-green-500 ml-auto" />
                                )} */}
                          {/*    </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.community && <p className="text-red-500 text-xs">{errors.community}</p>}
                      <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                        Select where you heard about this beta. Logos help partners recognize referrals.
                      </p>
                    </div> */}

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Email
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="your@email.com"
                      className={`dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 bg-white text-slate-900 placeholder:text-slate-500 ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'dark:border-slate-700 border-slate-300'
                      }`}
                   />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      We'll use this email for login and to send invites, rewards, etc. No spam, ever.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Country / Timezone
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional)
                      </span>
                    </label>
                    <Input
                      name="countryTimezone"
                      value={formData.countryTimezone}
                      onChange={(e) => updateFormData("countryTimezone", e.target.value)}
                      placeholder="e.g., USA / EST"
                      className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500`}
                    />
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Helps us schedule tests & build internal regional cohorts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Device model + OS
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional but recommended)
                      </span>
                    </label>
                    <Input
                      name="device"
                      value={formData.device}
                      onChange={(e) => updateFormData("device", e.target.value)}
                      placeholder="e.g., iPhone 14 / Android 13"
                      className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500`}
                    />
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Device info helps reproduce bugs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Which best describes your travel profile? <span className="text-red-500">*</span>
                    </label>
                    <Select
                      name="travelProfile"
                      value={formData.travelProfile}
                      onValueChange={(value) => updateFormData("travelProfile", value)}
                    >
                      <SelectTrigger
                        className={`dark:bg-slate-800 dark:text-white bg-white text-slate-900 ${
                          errors.travelProfile 
                            ? 'border-red-500 dark:border-red-500' 
                            : 'dark:border-slate-700 border-slate-300'
                        }`}
                        data-field="travelProfile"
                      >
                        <SelectValue placeholder="Select travel profile" />
                      </SelectTrigger>
                      <SelectContent
                        className={`dark:bg-slate-800 dark:border-slate-700 bg-white border-slate-300`}
                      >
                        <SelectItem value="business">Business traveler</SelectItem>
                        <SelectItem value="nomad">Digital nomad</SelectItem>
                        <SelectItem value="occasional">Occasional traveler</SelectItem>
                        <SelectItem value="never">Never travel</SelectItem>
                        <SelectItem value="crypto-hopper">Crypto conference hopper</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.travelProfile && <p className="text-red-500 text-xs">{errors.travelProfile}</p>}
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Pick the option that best fits — helps us assign scenarios.
                    </p>
                  </div>

                  {/* <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      How many hours/week can you test?
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional)
                      </span>
                    </label>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onValueChange={(value) => updateFormData("availability", value)}
                    >
                      <SelectTrigger
                        className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white bg-white border-slate-300 text-slate-900`}
                      >
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent
                        className={`dark:bg-slate-800 dark:border-slate-700 bg-white border-slate-300`}
                      >
                        <SelectItem value="1-2">1–2 hours</SelectItem>
                        <SelectItem value="3-5">3–5 hours</SelectItem>
                        <SelectItem value="6+">6+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      We'll prioritize high-availability testers for interviews.
                    </p>
                  </div> */}

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Willing to join a 20–30 min call?
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional)
                      </span>
                    </label>
                    <Select
                      name="interviewWilling"
                      value={formData.interviewWilling}
                      onValueChange={(value) => updateFormData("interviewWilling", value)}
                    >
                      <SelectTrigger
                        className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white bg-white border-slate-300 text-slate-900`}
                      >
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent
                        className={`dark:bg-slate-800 dark:border-slate-700 bg-white border-slate-300`}
                      >
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Priority for qualitative feedback.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Telegram
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional)
                      </span>
                    </label>
                    <Input
                      name="xHandle"
                      value={formData.xHandle}
                      onChange={(e) => updateFormData("xHandle", e.target.value)}
                      placeholder="@username"
                      className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500`}
                    />
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Used only to verify public profile or partner referrals. No posts without permission.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-sm font-medium dark:text-white text-slate-900`}>
                      Referral or partner
                      <span className={`text-xs font-normal dark:text-slate-400 text-slate-600`}>
                        (optional)
                      </span>
                    </label>
                    <Input
                      name="referral"
                      value={formData.referral}
                      onChange={(e) => updateFormData("referral", e.target.value)}
                      placeholder="Partner name or referral code"
                      className={`dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500`}
                    />
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Helps allocate partner slots.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={(e) => updateFormData("consent", e.target.checked)}
                        className={`mt-1 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 ${
                          errors.consent ? 'border-red-500' : ''
                        }`}
                      />
                      <label htmlFor="consent" className={`text-sm dark:text-white text-slate-900`}>
                        I consent to closed-beta data collection and agree to the conditions below before filling the form
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}
                    <p className={`text-xs dark:text-slate-400 text-slate-600`}>
                      Beta data retained for 12 months. Request deletion anytime.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={  isSubmitting}
                    className={`w-full h-12 text-base font-semibold dark:bg-slate-400 dark:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed                                                                                            700 dark:hover:bg-slate-600 bg-slate-900 hover:bg-slate-800 text-white`}
                    >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Joining Beta...
                      </>
                    ) : (
                      "Join Closed Beta"
                    )}
                  </Button>
                  {success.isSuccess && <p className="text-green-500 text-xs">{success.message}</p>}
                  {errors.general && <p className="text-red-500 text-xs">{errors.general}</p>}
                  {/* <div className="text-center">
                    <a
                      href="/beta-info"
                      className={`text-sm :text-slate-400 hover:text-white text-slate-600 hover:text-slate-900 underline transition-colors`}
                    >
                      Learn more about the beta program
                    </a>
                  </div> */}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
