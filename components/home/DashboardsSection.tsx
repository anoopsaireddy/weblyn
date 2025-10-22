"use client"

import { useState, useEffect } from "react"

export default function DashboardsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      title: "INSTANT INSIGHTS",
      description: "Get immediate, data-backed answers with actionable recommendations.",
      icon: "⚡",
      color: "blue"
    },
    {
      title: "CONTEXTUAL UNDERSTANDING", 
      description: "Lyn remembers your business context and provides personalized insights.",
      icon: "🧠",
      color: "gray"
    },
    {
      title: "FIND HIDDEN INSIGHTS",
      description: "Proactively monitors your business 24/7 and goes beyond dashboards to find the deep, cross-source micro analytic insights and explains the why behind your numbers.",
      icon: "🔍",
      color: "green"
    },
    {
      title: "BUILD ACTION PLANS",
      description: "Transforms the most critical insights into your weekly action plan. Each advice is a clear recipe with step-by-step guidance, turning complex analysis into confident execution.",
      icon: "📋",
      color: "purple"
    }
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Dashboards Don&apos;t Run a
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Business. Actions Do.
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            You&apos;re overloaded with charts that show you what happened, but leave you guessing why. Lynlytics is
            designed to break this cycle. Your AI analyst, Lyn, doesn&apos;t just report on the past; it delivers the
            clarity and direction you need to move your business forward in four key ways:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Pure White Apple Style Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full border border-gray-100/50">
                {/* Icon */}
                <div className="mb-6 w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight tracking-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed flex-grow text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
