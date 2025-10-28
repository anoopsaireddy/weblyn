"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [currentIndustry, setCurrentIndustry] = useState("Creative Agencies")
  const [currentMessage, setCurrentMessage] = useState(0)

  const industries = [
    "DTC Brands",
    "SaaS Startups",
    "Independent Retailers",
    "Restaurant Brands",
    "Creative Agencies",
    "Media Brands",
    "Wellness Studios",
    "Real Estate Agencies",
    "Professional Services",
    "Subscription Businesses",
    "Hospitality Groups",
    "Home Service Pros",
  ]

  const floaterMessages = [
    { l1: "Monitoring your live ad campaigns...", l2: "Scanning for unusual changes in your ad metrics." },
    { l1: "Preparing your next steps...", l2: "I've found some interesting insights I'm getting ready to share." },
    { l1: "Analyzing your sales data...", l2: "Identifying hidden patterns in your customer behavior." },
    { l1: "Running performance diagnostics...", l2: "Evaluating conversion rates and engagement drops." }
  ]

  useEffect(() => {
    let currentIndex = industries.indexOf(currentIndustry)
    const interval = setInterval(() => {
      const element = document.getElementById("smb-animation")
      if (element) {
        element.classList.add("fade-out")

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % industries.length
          setCurrentIndustry(industries[currentIndex])
          element.classList.remove("fade-out")
        }, 300)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentIndustry])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % floaterMessages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col px-4 overflow-hidden zavo-bg-clean">
      <div className="hero-glow"></div>
      <div className="hero-bg"></div>

      <nav className="hidden md:flex items-center justify-between max-w-7xl w-full mx-auto pt-8 pb-4 relative z-20 leading-7">
        <Link href="/" className="zavo-heading-tertiary hover:opacity-80 transition-opacity">
          <span className="text-blue-600">Lynlytics</span>
        </Link>

        <div className="flex items-center gap-8">
          
          
          
          
          
          <a
            href="mailto:anoopsai@lynlytics.com"
            className="px-6 py-3 rounded-full bg-[#1877F2] text-white text-base font-semibold hover:bg-[#0d66d0] transition-colors shadow-sm"
          >
            Contact Us 
          </a>
        </div>
      </nav>

      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-5xl mx-auto text-center relative z-10 py-12">
          <h1 className="zavo-heading-primary font-light mb-6">
            Meet <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-light">Lyn,</span> your personal
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-light">AI-Powered Business Analyst.</span>
          </h1>
          
          {/* Lyn's Central Floating Bar - Refined Design */}
          <div className="mt-8 mb-8">
            <div className="bg-white/80 backdrop-blur-[20px] border border-blue-200/50 rounded-full shadow-lg shadow-blue-500/15 w-[720px] max-w-[90vw] h-[65px] mx-auto flex items-center justify-between px-5">
              <div className="orb-refined">
                <div className="orb-glow"></div>
              </div>
              <div className="status-text text-left flex-1 ml-4">
                <p className="text-sm font-semibold text-slate-800 fade-text m-0">
                  {floaterMessages[currentMessage].l1}
                </p>
                <p className="text-xs text-slate-500 fade-text m-0">
                  {floaterMessages[currentMessage].l2}
                </p>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-blue-100 transition">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-100 transition">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <p className="mt-6 max-w-3xl mx-auto text-black text-lg md:text-xl leading-relaxed font-normal font-[var(--font-geist-sans)]">
            Learns unique context of your business, finds micro-analytic insights that dashboards simply cannot provide and advises on how to improve your business.
          </p>
          <div className="mt-10">
            <form
              action="https://formspree.io/f/mnngbzbv"
              method="POST"
              className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:border-transparent text-gray-900 placeholder-gray-400 mx-2.5 border shadow-none text-base"
              />
              <button
                type="submit"
                className="magnetic-btn rounded-full bg-[#1877F2] text-white font-semibold text-base hover:bg-[#0d66d0] transition-all inline-block whitespace-nowrap shadow-lg shadow-blue-500/25 bg-foreground mx-2.5 px-8 py-4"
              >
                Join Waitlist
              </button>
            </form>
          </div>
          <div className="mt-12 zavo-body-large">
            <span className="opacity-100 text-black">The intelligence engine for modern SMB&apos;s like </span>
            <span
              id="smb-animation"
              className="gradient-violet font-medium inline-block transition-opacity duration-300 min-w-[240px] text-center opacity-100"
            >
              {currentIndustry}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
