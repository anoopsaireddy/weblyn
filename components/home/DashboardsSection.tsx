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
      title: "Instant Answers",
      description: "Get immediate, data-backed answers with actionable recommendations.",
      icon: "💬",
      color: "blue"
    },
    {
      title: "Contextual Understanding", 
      description: "Lyn remembers your business context and provides personalized insights.",
      icon: "📊",
      color: "gray"
    },
    {
      title: "Find Hidden Insights",
      description: "Monitors your business 24/7 and uncovers deep insights explaining the why behind your numbers.",
      icon: "🔍",
      color: "green"
    },
    {
      title: "Gives Advices",
      description: "Turns key insights into advices and clear weekly actions with step-by-step guidance for confident execution.",
      icon: "📝",
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

        {/* Features Container with Gradient Background */}
        <div className="relative bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-pink-50/30 rounded-2xl p-8 shadow-lg border border-gray-100/50">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Simple Text with Line */}
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-sm flex-shrink-0">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex items-center gap-3 flex-grow">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight tracking-tight w-64">
                      {feature.title}
                    </h3>
                    
                    {/* Separator */}
                    <span className="text-gray-300">-</span>
                    
                    {/* Description */}
                    <p className="text-gray-800 leading-relaxed text-base text-left flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Line underneath */}
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
