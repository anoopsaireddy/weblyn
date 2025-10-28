"use client"

import Image from "next/image"
import { useState } from 'react'

// Chat Widget Component
const ChatWidget = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="aspect-[20/9] relative flex items-center justify-center p-2">
        <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Chat Header */}
          <div className="h-12 flex items-center justify-between px-4 bg-white border-b border-gray-100">
            <h2 className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Chat with Lyn</h2>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-white" style={{ height: 'calc(100% - 120px)' }}>
            <div className="flex justify-start">
              <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-white border border-gray-100">
                <p className="text-sm text-gray-800">Hi Sara, I'm Lyn, your personal AI business analyst. I've analyzed all your connected data. What's on your mind today?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-blue-500 text-white">
                <p className="text-sm">How was my revenue last week?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-white border border-gray-100">
                <p className="text-sm text-gray-800">Your total revenue last week was <strong>$28,540</strong>, which is an <strong style={{color: '#16a34a'}}>8% increase</strong> from the previous week.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-blue-500 text-white">
                <p className="text-sm">What can I improve?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-white border border-gray-100">
                <p className="text-sm text-gray-800">I'll analyze your data to provide you with the most relevant insights...</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <input
              type="text"
              placeholder="Ask Lyn anything..."
              className="w-full pl-4 pr-4 py-3 bg-white border border-gray-300 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Chat with Lyn",
      description:
        'Your personal AI analyst is available 24/7. Ask complex questions about your business like "Which ad campaign was most profitable last week?" and get immediate, data-backed answers and suggestions, without ever waiting for a report to be built.',
      image: "/weblyn/assets/feature-chat.png",
      gradient: "from-orange-50 via-amber-50 to-yellow-50",
      accentGradient: "from-orange-400 to-amber-500",
      blobGradient: "from-orange-400/20 to-amber-400/20",
      blobGradient2: "from-yellow-400/20 to-orange-400/20",
    },
    {
      title: "Weekly Business Report",
      description:
        "Every Monday, receive a concise executive summary of your business performance. We highlight your biggest wins and the most critical areas needing your attention, so you always know where to focus.",
      image: "/weblyn/assets/feature-report.png",
      gradient: "from-blue-50 via-purple-50 to-pink-50",
      accentGradient: "from-yellow-400 to-orange-500",
      blobGradient: "from-blue-400/20 to-purple-400/20",
      blobGradient2: "from-pink-400/20 to-orange-400/20",
    },
    {
      title: "Business Pulse",
      description:
        "Get a clean, minimalist view of your core metrics like Revenue, Profit Margin, AOV all in one place. With a reliable forecast, you'll have the situational awareness you need to never fly blind again.",
      image: "/weblyn/assets/feature-finance.png",
      gradient: "from-green-50 via-emerald-50 to-teal-50",
      accentGradient: "from-green-400 to-emerald-500",
      blobGradient: "from-green-400/20 to-emerald-400/20",
      blobGradient2: "from-teal-400/20 to-cyan-400/20",
    },
    {
      title: "Quick Insights",
      description:
        'Every day, our engine proactively finds the hidden opportunities and risks in your data. We then deliver these as simple insight cards that explain what\'s happening, why it matters, and what you can do about it.',
      image: "/weblyn/assets/feature-briefing.png",
      gradient: "from-blue-50 via-indigo-50 to-violet-50",
      accentGradient: "from-blue-400 to-indigo-500",
      blobGradient: "from-blue-400/20 to-indigo-400/20",
      blobGradient2: "from-violet-400/20 to-purple-400/20",
    },
    {
      title: "Weekly Action Plan",
      description:
        'We automatically transform the most important Try this suggestions into a prioritized weekly to-do list. Each task is a step-by-step recipe for action, complete with a simulated impact, giving you the confidence to focus your energy where it matters most.',
      image: "/weblyn/assets/feature-plan.png",
      gradient: "from-purple-50 via-fuchsia-50 to-pink-50",
      accentGradient: "from-purple-400 to-fuchsia-500",
      blobGradient: "from-purple-400/20 to-fuchsia-400/20",
      blobGradient2: "from-pink-400/20 to-rose-400/20",
    },
  ]

  return (
    <section id="features" className="relative zavo-bg-clean py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center pt-24 pb-16 px-4">
          <h2 className="zavo-dm-heading-primary">
            Everything you need to <span className="gradient-text">take control</span>
          </h2>
          <p className="mt-5 zavo-dm-body-large">
            Crystal-clear insights, prioritized actions, and beautiful clarity across your numbers.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="relative px-4 py-10 mb-12">
            <div className="max-w-[1600px] mx-auto">
              <div
                className={`relative bg-gradient-to-br ${feature.gradient} rounded-[2rem] p-12 md:p-20 overflow-hidden shadow-2xl border border-white/50`}
              >
                <div
                  className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${feature.blobGradient} rounded-full blur-3xl`}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr ${feature.blobGradient2} rounded-full blur-3xl`}
                ></div>

                <div className="relative z-10 grid md:grid-cols-[30%_70%] gap-16 items-center">
                  <div>
                    <h2 className="zavo-dm-heading-secondary mb-5">
                      {feature.title}
                    </h2>
                    <p className="zavo-dm-body">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative">
                    {index === 0 ? (
                      // Chat Widget for first feature
                      <div className="transform hover:scale-[1.01] transition-transform duration-500">
                        <ChatWidget />
                      </div>
                    ) : (
                      // Regular image for other features
                      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                        <div className="aspect-[20/9] relative flex items-center justify-center p-2">
                          <div
                            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40"
                            style={{ backgroundImage: `url('${feature.image}')` }}
                          ></div>
                          <Image
                            src={feature.image || "/placeholder.svg"}
                            alt={feature.title}
                            width={1200}
                            height={540}
                            className="relative z-10 w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className={`absolute -bottom-5 -left-5 w-28 h-28 bg-gradient-to-br ${feature.accentGradient} rounded-full blur-3xl opacity-50 animate-pulse`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
