"use client"

import { useState, useEffect } from "react"

export default function LynActiveSection() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)

  const messages = [
    { main: "Reviewing yesterday's sales performance...", secondary: "Comparing key metrics like AOV to last week's average." },
    { main: "Monitoring your live ad campaigns...", secondary: "Scanning for unusual changes in your ad metrics." },
    { main: "Reconciling your latest financial data...", secondary: "Ensuring your Shopify sales match your QuickBooks records." },
    { main: "Analyzing recent customer behavior...", secondary: "Looking for patterns in your most valuable customer segments." },
    { main: "Preparing your next intelligence briefing...", secondary: "I've found some interesting insights I'm getting ready to share." }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentMsg = messages[currentMessage]

  return (
    <section className="px-4 zavo-bg-pure py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="zavo-dm-heading-secondary mb-6">
            <span className="gradient-text">Lyn</span> <span className="text-black">is always active</span>
          </h2>
          <p className="zavo-dm-body-large">
            Your personal AI analyst works 24/7, delivering insights when you need them most
          </p>
        </div>

        {/* Lyn's Central Floating Bar - Interactive */}
        <div className="max-w-4xl mx-auto">
          {/* Extended Gradient Background - Only horizontal expansion */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl px-32 py-8 shadow-lg border border-white/50 mb-8 relative -mx-64">
            <div className={`bg-white border border-gray-200/50 rounded-2xl shadow-xl transition-all duration-500 ${isExpanded ? 'is-expanded' : ''}`}>
            {/* Minimized View */}
            <div className="flex items-center w-full px-4 py-2">
              <div className="flex-shrink-0">
                <div className="orb-refined">
                  <div className="orb-glow"></div>
                </div>
              </div>
              <div className="overflow-hidden flex-1 ml-4">
                <p className="text-sm font-semibold text-slate-800 fade-text truncate">
                  {currentMsg.main}
                </p>
                <p className="text-xs text-slate-500 fade-text truncate">
                  {currentMsg.secondary}
                </p>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <button className="p-2 rounded-full hover:bg-gray-200/50 transition">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 rounded-full hover:bg-gray-200/50 transition"
                >
                  <svg className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Expanded View: Lyn's Central */}
            {isExpanded && (
              <div className="px-5 pb-4 pt-4 border-t border-gray-200/80">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 text-center">Lyn's Central: Real-Time Analysis</h3>
                
                {/* Superhuman Analytics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/60 border border-white/80 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">Hidden Driver Analysis</h4>
                    </div>
                    <p className="text-xs text-slate-600">Correlating ad spend and sales data to find hidden growth drivers.</p>
                  </div>
                  
                  <div className="bg-white/60 border border-white/80 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">Predictive Intelligence</h4>
                    </div>
                    <p className="text-xs text-slate-600">Predicting future inventory needs for your bestsellers to prevent stockouts.</p>
                  </div>

                  <div className="bg-white/60 border border-white/80 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm">Strategic Optimization</h4>
                    </div>
                    <p className="text-xs text-slate-600">Simulating 1,000+ budget scenarios to find the optimal ad spend allocation.</p>
                          </div>
                        </div>

                {/* Intelligence Feed */}
                <div className="border-t border-gray-200/80 pt-3 mt-3">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 text-center">Intelligence Feed</h3>
                  <div className="space-y-1">
                    {/* Item 1 */}
                    <div className="flex items-start p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 text-sm">Hey Sara, I need to talk to you about something important.</p>
                        <p className="text-xs text-slate-600">Please come to chat when you have a moment, I've prepared some insights worth discussing.</p>
                        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline mt-1 inline-block">Chat with Lyn →</a>
                      </div>
                      <p className="text-xs text-slate-400 font-medium ml-4 flex-shrink-0">now</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 text-sm">Heads Up: Ad Spend Anomaly Detected</p>
                        <p className="text-xs text-slate-600">Your Meta Ads spend is up 50% in the last 24h with no sales increase.</p>
                        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline mt-1 inline-block">View Insight →</a>
                      </div>
                      <p className="text-xs text-slate-400 font-medium ml-4 flex-shrink-0">15m ago</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-800 text-sm">Insight: Bestseller May Be Unprofitable</p>
                        <p className="text-xs text-slate-600">The "Elegant Silk Scarf" is a top seller but its profit margin is low.</p>
                        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline mt-1 inline-block">Go to Insight →</a>
                      </div>
                      <p className="text-xs text-slate-400 font-medium ml-4 flex-shrink-0">2h ago</p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-700 text-sm">Results: To-Do Complete</p>
                        <p className="text-xs text-slate-600">Return rate for "New Silk Blouse" decreased by 12%.</p>
                        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline mt-1 inline-block">View Results →</a>
                      </div>
                      <p className="text-xs text-slate-400 font-medium ml-4 flex-shrink-0">1d ago</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From personal insights to operational alerts, Lyn keeps you informed with the most relevant information
            about your business, exactly when you need it.
          </p>
        </div>
      </div>
    </section>
  )
}