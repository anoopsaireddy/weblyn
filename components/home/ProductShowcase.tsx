"use client"

import { useState, useEffect } from 'react'

// Chat Component (adapted from lynlyticsdemo)
const ChatComponent = () => {
  const [messages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi Sara, I'm Lyn, your personal AI business analyst. I've analyzed all your connected data. What's on your mind today?",
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'user',
      content: "How was my revenue last week, and what was the main driver?",
      timestamp: new Date()
    },
    {
      id: 3,
      type: 'ai',
      content: `Your total revenue last week was <strong class="font-semibold">$28,540</strong>, which is an <strong class="font-semibold" style="color: #16a34a;">8% increase</strong> from the previous week. The main driver was your Google Ads campaign for the "Classic Leather Tote", which accounted for nearly 40% of all sales.`,
      timestamp: new Date()
    },
    {
      id: 4,
      type: 'user',
      content: "That's helpful. What are some techniques to improve customer service?",
      timestamp: new Date()
    },
    {
      id: 5,
      type: 'ai',
      content: "Here are proven techniques: 1) Personalize post-purchase experiences with segmented follow-ups, 2) Proactively address sizing issues with detailed charts, 3) Turn negative reviews into positives with professional responses.",
      timestamp: new Date()
    }
  ])

  const renderMessage = (message: any) => {
    return <p className="text-sm" style={{ color: '#000000' }} dangerouslySetInnerHTML={{ __html: message.content }} />
  }

  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-2xl shadow-slate-300/50 max-w-md mx-auto h-96 flex flex-col">
      {/* Header */}
      <div className="h-12 flex items-center justify-between mb-4 flex-shrink-0">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Chat with Lyn</h2>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="p-3 rounded-2xl max-w-xs shadow-sm bg-white">
              {renderMessage(message)}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="mt-4 flex-shrink-0">
        <input
          type="text"
          placeholder="Ask Lyn anything..."
          className="w-full pl-4 pr-4 py-2 bg-white border border-gray-300 rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          style={{ color: '#000000' }}
        />
      </div>
    </div>
  )
}

// Floating Bar Component (exact copy from lynlyticsdemo)
const FloatingBarComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeOpacity, setFadeOpacity] = useState(1)
  const [viewState, setViewState] = useState<"minimized" | "collapsed" | "expanded">("collapsed")
  const [isAnimating, setIsAnimating] = useState(false)

  const messages = [
    {
      main: "Reviewing yesterday's sales performance...",
      secondary: "Comparing key metrics like AOV to last week's average.",
      tag: { text: "ANALYZING", bg: "bg-purple-100", text_color: "text-purple-800" },
    },
    {
      main: "Monitoring your live ad campaigns...",
      secondary: "Scanning for unusual changes in your ad metrics.",
      tag: { text: "MONITORING", bg: "bg-blue-100", text_color: "text-blue-800" },
    },
    {
      main: "Reconciling your latest financial data...",
      secondary: "Reconciling your Shopify sales with your QuickBooks data.",
      tag: { text: "VERIFYING", bg: "bg-green-100", text_color: "text-green-800" },
    },
    {
      main: "Analyzing recent customer behavior...",
      secondary: "Analyzing the buying patterns of your best customers.",
      tag: { text: "DISCOVERING", bg: "bg-purple-100", text_color: "text-purple-800" },
    },
    {
      main: "Preparing your next intelligence briefing...",
      secondary: "Found some interesting insights I'm preparing for you now.",
      tag: { text: "PREPARING", bg: "bg-gray-200", text_color: "text-gray-700" },
    },
  ]

  useEffect(() => {
    const updateStatus = () => {
      setFadeOpacity(0)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setFadeOpacity(1)
      }, 500)
    }

    const interval = setInterval(updateStatus, 10000)
    const initialTimeout = setTimeout(updateStatus, 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
    }
  }, [messages.length])

  const currentMessage = messages[currentIndex]

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setViewState("minimized")
      setIsAnimating(false)
    }, 800)
  }

  if (viewState === "minimized") {
    return (
      <div
        onClick={() => setViewState("collapsed")}
        className="absolute top-4 right-4 z-50 cursor-pointer transition-all duration-500 ease-in-out"
        role="button"
        aria-label="Expand indicator"
      >
        <div className="orb-refined">
          <div className="orb-glow"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`absolute top-4 left-4 right-4 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        viewState === "collapsed" ? "rounded-full" : "rounded-2xl"
      } ${isAnimating ? "orb-travel-animation" : ""}`}
      style={{
        backgroundColor: isAnimating ? "transparent" : "rgba(255, 255, 255, 0.8)",
        backdropFilter: isAnimating ? "none" : "blur(20px) saturate(150%)",
        border: isAnimating ? "none" : "1px solid rgba(59, 130, 246, 0.2)",
        boxShadow: isAnimating ? "none" : "0 8px 32px 0 rgba(59, 130, 246, 0.15)",
        maxHeight: viewState === "expanded" ? "calc(100vh - 32px)" : "auto",
      }}
    >
      <div className={`flex items-center px-4 py-2 space-x-3 ${isAnimating ? "justify-center" : ""}`}>
        <div className={`orb-refined ${isAnimating ? "orb-traveling" : ""}`}>
          <div className="orb-glow"></div>
        </div>

        {!isAnimating && (
          <>
            <div className="flex-1 min-w-0">
              <p
                className="text-xs font-semibold text-slate-800 fade-text m-0"
                style={{
                  opacity: fadeOpacity,
                  transition: "opacity 0.4s ease-in-out",
                }}
              >
                {currentMessage.main}
              </p>
              <p
                className="text-[10px] text-slate-500 fade-text m-0"
                style={{
                  opacity: fadeOpacity,
                  transition: "opacity 0.4s ease-in-out",
                }}
              >
                {currentMessage.secondary}
              </p>
            </div>

            <span
              className={`text-[8px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${currentMessage.tag.bg} ${currentMessage.tag.text_color}`}
              style={{
                opacity: fadeOpacity,
                transition: "opacity 0.4s ease-in-out",
              }}
            >
              {currentMessage.tag.text}
            </span>

            <div className="flex items-center gap-1">
              <button disabled className="p-1.5 rounded-full opacity-50 cursor-not-allowed">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button
                disabled
                className="p-1.5 rounded-full opacity-50 cursor-not-allowed"
                aria-label="Expand panel disabled"
              >
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button
                disabled
                className="p-1.5 rounded-full opacity-50 cursor-not-allowed"
                aria-label="Close panel disabled"
              >
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Logo Component (exact copy from lynlyticsdemo)
const Logo = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <rect className="px-0 py-0 my-0 mx-0 leading-7" width="200" height="60" rx="8" fill="url(#logoGradient)" />
        <text
          x="100"
          y="38"
          textAnchor="middle"
          className="fill-white font-semibold"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Lynlytics
        </text>
      </svg>
    </div>
  )
}

// Sidebar Component (exact copy from lynlyticsdemo)
const Sidebar = () => {
  const navigationItems = [
    {
      name: "Lyn's Central",
      href: "/lyn-central",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Chat",
      href: "/chat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      name: "Business Report",
      href: "/business-report",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "Business Pulse",
      href: "/business-pulse",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      name: "Quick Insights",
      href: "/quick-insights",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      name: "Connectors",
      href: "/connectors",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
          />
        </svg>
      ),
    },
    {
      name: "Advisor",
      href: "/advisor",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Health",
      href: "/health",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
                <div className="h-16 flex items-center justify-center px-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <h1 className="text-xl font-bold text-slate-900">Lynlytics</h1>
                  </div>
                </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const isActive = item.name === "Quick Insights"
          return (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className={`mr-3 ${isActive ? "text-blue-600" : "text-gray-400"}`}>{item.icon}</span>
              {item.name}
            </a>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </a>
      </div>
    </aside>
  )
}

// Full Dashboard UI Component (exact copy from lynlyticsdemo)
const FullDashboardComponent = () => {
  const insights = [
    {
      id: 1,
      title: 'Your Bestseller May Be a "Vanity Metric."',
      content: {
        what: 'Your "Elegant Silk Scarf" is your #2 product by revenue, but after accounting for its high Meta Ad spend ($2,500 last month), its final profit was only $50.',
        why: "You are spending a huge amount of effort and money to promote a product that is barely profitable. This budget could be reallocated to a product with a higher margin.",
        care: "This low-profit product is draining your advertising budget and preventing you from scaling more profitable items. Every dollar spent here could generate 5x more profit elsewhere.",
        try: 'Consider reducing the Meta Ads budget for the "Elegant Silk Scarf" by 25% and reallocating that budget to your "Classic Leather Tote," which has a much higher profit margin.',
      },
      confidence: "High",
      confidenceColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: 'High Returns on the "New Silk Blouse"?',
      content: {
        what: 'The "New Silk Blouse" has a 30% return rate on Shopify, which is significantly higher than your store average of 8%.',
        why: 'We scanned your product reviews from Google and found multiple comments mentioning that the "sizing runs small" or it "didn\'t fit as expected". The issue seems to be a mismatch in customer expectations.',
        care: "High return rates damage your brand reputation, increase operational costs, and reduce customer lifetime value. This could lead to negative reviews and decreased trust.",
        try: 'Update the product description on your Shopify page with a detailed sizing chart and a note that says, "This item has a slim fit; consider sizing up."',
      },
      confidence: "High",
      confidenceColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      title: 'Wasted Ad Spend Alert: "Leather Handbag" is Low in Stock.',
      content: {
        what: 'You are actively spending money on a Google Ads campaign for your "Classic Leather Handbag," but your Shopify inventory shows you only have 3 units left.',
        why: "This is likely an operational oversight where the ad campaign was left running while inventory has dwindled.",
        care: "You are paying to send interested customers to a product page that will soon be sold out. This creates a poor customer experience and wastes your advertising budget.",
        try: 'Pause the Google Ads campaign for the "Classic Leather Handbag" immediately. Reactivate it once you\'ve restocked your inventory.',
      },
      confidence: "High",
      confidenceColor: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      title: "Are You Paying to Send Customers to Amazon?",
      content: {
        what: 'When you increased your Google Ads budget for "SpenceCart Shoes" last week, sales for that product on Amazon increased by 25%, while sales on your own Shopify store were flat.',
        why: "Customers are searching for your brand on Google and clicking your ad, but then searching for the same product on Amazon to get Prime shipping or compare prices before buying.",
        care: "You are paying Google to acquire customers, but Amazon is getting the sale and the higher-margin profit that should be yours. This creates a leak in your customer acquisition funnel.",
        try: "Add unique value propositions to your product page like 'Exclusive colors only available here' or 'Free express shipping' to differentiate from Amazon.",
      },
      confidence: "Medium",
      confidenceColor: "bg-amber-100 text-amber-800",
    },
    {
      id: 5,
      title: "First-Time vs. Returning Customer Profitability",
      content: {
        what: "The average profit margin for a returning customer ($45) is more than double that of a first-time customer ($20). However, 80% of your Meta Ad spend is focused on acquiring new customers.",
        care: "While new customer acquisition is essential, you have a significant opportunity to increase overall profitability by encouraging repeat purchases from your existing customer base at a much lower cost.",
        try: 'Launch a retargeting email or Meta Ads campaign specifically for customers who have not purchased in the last 90 days. Offer a small "Welcome Back" discount.',
      },
      confidence: "High",
      confidenceColor: "bg-green-100 text-green-800",
    },
    {
      id: 6,
      title: "Cart Abandonment Spiking from Mobile Traffic",
      content: {
        what: "Your Shopify cart abandonment rate for users on mobile devices is 85%, compared to just 60% for desktop users. This gap has widened over the last 30 days.",
        why: "This often points to friction in the mobile checkout process. It could be a slow-loading page, a confusing form, or limited payment options for mobile users.",
        care: "You are losing the vast majority of your mobile customers at the final step. Fixing this could lead to a significant and immediate increase in total sales.",
        try: "Test the checkout process on your own mobile phone. Consider simplifying the checkout form or adding an express payment option like Apple Pay or Shop Pay.",
      },
      confidence: "Medium",
      confidenceColor: "bg-amber-100 text-amber-800",
    },
  ]

  return (
    <div className="flex h-full bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-gray-50 relative">
        <FloatingBarComponent />
        <div className="pt-16 flex-1 flex items-center justify-center">
          <div className="px-6 py-4 w-full">
            {/* Apple-style Header - Left Aligned */}
            <div className="mb-4">
              <h1 className="text-xl font-bold text-slate-900 mb-1">Quick Insights</h1>
              <p className="text-slate-600 text-xs">AI-powered business intelligence at your fingertips</p>
            </div>

            {/* Apple-style Grid - Show only first 3 cards, no scroll */}
            <div className="grid grid-cols-3 gap-4">
              {insights.slice(0, 3).map((insight) => (
                <div
                  key={insight.id}
                  className="group bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-lg p-3 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Apple-style Card Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 text-xs leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {insight.title}
                      </h3>
                      <div className={`inline-flex items-center px-1 py-0.5 rounded-full text-xs font-medium ${insight.confidenceColor}`}>
                        <div className="w-1 h-1 rounded-full bg-current mr-1"></div>
                        {insight.confidence} Confidence
                      </div>
                    </div>
                    
                    {/* Action Button - Top Right - Disabled */}
                    <button disabled className="bg-slate-400 text-white font-medium py-1 px-2 rounded-md text-xs cursor-not-allowed opacity-50">
                      <span className="flex items-center">
                        Add
                        <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Apple-style Content Sections - Compact */}
                  <div className="space-y-1.5">
                    <div className="bg-slate-50/80 rounded-md p-1.5 border border-slate-100/60">
                      <div className="flex items-center mb-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-1"></div>
                        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">What we saw</span>
                      </div>
                      <p className="text-slate-700 text-xs leading-tight">{insight.content.what}</p>
                    </div>

                    {/* Why you should care - Moved to second position */}
                    <div className="bg-red-50/80 rounded-md p-1.5 border border-red-100/60">
                      <div className="flex items-center mb-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-1"></div>
                        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Why you should care</span>
                      </div>
                      <p className="text-slate-700 text-xs leading-tight">
                        {insight.content.care || "This insight directly impacts your business performance and requires immediate attention to maintain growth and efficiency."}
                      </p>
                    </div>

                    {insight.content.why && (
                      <div className="bg-amber-50/80 rounded-md p-1.5 border border-amber-100/60">
                        <div className="flex items-center mb-1">
                          <div className="w-1 h-1 bg-amber-500 rounded-full mr-1"></div>
                          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Why this might be happening</span>
                        </div>
                        <p className="text-slate-700 text-xs leading-tight">{insight.content.why}</p>
                      </div>
                    )}

                    {insight.content.try && (
                      <div className="bg-green-50/80 rounded-md p-1.5 border border-green-100/60">
                        <div className="flex items-center mb-1">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-1"></div>
                          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Try this</span>
                        </div>
                        <p className="text-slate-700 text-xs leading-tight">{insight.content.try}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Action Plan Component (adapted from lynlyticsdemo)
const ActionPlanComponent = () => {
  const [todoStatuses, setTodoStatuses] = useState<Record<number, 'pending' | 'in-progress' | 'completed'>>({
    1: 'pending',
    2: 'pending'
  })

  const todos = [
    {
      id: 1,
      title: 'Optimize Meta Ads for "Elegant Silk Scarf"',
      description: 'The "Elegant Silk Scarf" is your second highest-selling product by revenue, but our analysis shows that after accounting for high Meta Ad spend, its profit margin is extremely low.',
      simulation: 'May increase total profit by $150 - $300 this week, assuming a proportional decrease in ad-driven sales.',
      timeEstimate: '~5 mins',
      steps: [
        'Navigate to your Meta Ads Manager.',
        'Select the campaign named "Scarf Promo - Summer Collection".',
        'Find the Ad Set named "Broad Interests - US/CAN" and reduce its daily budget by 25%.'
      ]
    },
    {
      id: 2,
      title: 'Update Product Page for "New Silk Blouse"',
      description: 'This new product has an unusually high return rate (30%), which hurts profits and customer satisfaction. Reviews suggest the cause is a sizing mismatch.',
      simulation: 'May decrease product returns by 10% - 15% over the next month, saving on shipping and restocking fees.',
      timeEstimate: '~15 mins',
      steps: [
        'Go to your Shopify Admin Dashboard.',
        'Navigate to Products → "New Silk Blouse".',
        'Add a detailed sizing chart and a highlighted note about the slim fit.'
      ]
    }
  ]

  const handleTodoAction = (todoId: number) => {
    setTodoStatuses(prev => ({
      ...prev,
      [todoId]: prev[todoId] === 'pending' ? 'in-progress' : 'completed'
    }))
  }

  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-2xl shadow-slate-300/50 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Action Plan</h1>
        <p className="text-slate-600 text-sm">Your personalized roadmap to business growth</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
          <h2 className="text-xl font-bold text-slate-900">Top Priorities</h2>
        </div>
        
        {todos.map((todo) => {
          const status = todoStatuses[todo.id]
          return (
            <div 
              key={todo.id} 
              className="group bg-white border border-slate-300 rounded-xl p-4 hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {todo.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="bg-slate-100 rounded-lg p-3 border border-slate-200">
                      <div className="flex items-center mb-1.5">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Why this helps</span>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{todo.description}</p>
                    </div>
                    
                    <div className="bg-green-100 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center mb-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Expected Impact</span>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{todo.simulation}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end ml-4">
                  <button
                    onClick={() => handleTodoAction(todo.id)}
                    className={`font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                      status === 'completed'
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-md'
                    }`}
                    disabled={status === 'completed'}
                  >
                    {status === 'completed' ? '✓ Completed' : status === 'in-progress' ? 'In Progress' : 'Start Task'}
                  </button>
                  <p className="text-xs text-slate-500 mt-1 font-medium">Est. {todo.timeEstimate}</p>
                </div>
              </div>
              
              <div className="border-t border-slate-200/60 pt-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Step-by-Step Guide
                </h4>
                <div className="space-y-2">
                  {todo.steps.map((step, index) => (
                    <div key={index} className="flex items-start group/step">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold mr-3 group-hover/step:bg-blue-100 group-hover/step:text-blue-600 transition-colors duration-200">
                        {index + 1}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Health Component (adapted from lynlyticsdemo)
const HealthComponent = () => {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-2xl shadow-slate-300/50 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Business Health</h1>
        <p className="text-slate-600 text-sm">Comprehensive analysis of your business performance</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Health Score Visualization */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center">
          <div className="relative mb-6">
            <div 
              className="w-48 h-48 rounded-full flex items-center justify-center text-center relative z-10"
              style={{
                background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.1) 50%, rgba(34,197,94,0.05) 100%)',
                boxShadow: 'inset 0 0 20px rgba(34,197,94,0.4), inset 0 0 40px rgba(34,197,94,0.2)',
                border: '2px solid rgba(34,197,94,0.3)'
              }}
            >
              <div 
                className="w-[85%] h-[85%] rounded-full flex flex-col items-center justify-center bg-white relative"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(34,197,94,0.2), inset 0 0 40px rgba(34,197,94,0.1)'
                }}
              >
                <p className="text-xs font-medium text-slate-500 relative z-10">Overall Health</p>
                <p 
                  className="text-3xl font-bold text-green-600 mt-1 relative z-10"
                  style={{
                    textShadow: '0 0 10px rgba(34,197,94,0.3)'
                  }}
                >
                  Good
                </p>
                <p className="text-lg font-bold text-slate-900 mt-1 relative z-10">
                  85<span className="text-sm text-slate-400">/100</span>
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-slate-600 max-w-xs leading-relaxed text-sm">
            Your overall score is healthy, with strong sales. The main area for improvement is your marketing efficiency.
          </p>
        </div>

        {/* Health Metrics Grid */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Financial Health</p>
              <p className="font-bold text-slate-900 text-base">Good</p>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3">
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Sales Health</p>
              <p className="font-bold text-slate-900 text-base">Excellent</p>
            </div>
            <div className="bg-amber-100 border border-amber-300 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Marketing Health</p>
              <p className="font-bold text-amber-900 text-base">Needs Attention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductShowcase = () => {

  const sections = [
    {
      id: 'insights',
      title: 'Quick Insights',
      subtitle: 'AI-powered business intelligence at your fingertips',
      description: 'Get instant, actionable insights about your business performance with AI analysis.',
      component: <FullDashboardComponent />
    },
    {
      id: 'chat',
      title: 'Chat with Lyn',
      subtitle: 'Your personal AI analyst is available 24/7',
      description: 'Ask complex questions about your business in plain English like "Which ad campaign was most profitable last week?" and get immediate, data-backed answers and suggestions, without ever waiting for a report to be built.',
      component: <ChatComponent />
    },
    {
      id: 'advisor',
      title: 'Advisor',
      subtitle: 'We automatically transform the most important "Try this" suggestions into a prioritized weekly to-do list',
      description: 'Each task is a step-by-step recipe for action, complete with a simulated impact, giving you the confidence to focus your energy where it matters most.',
      component: <ActionPlanComponent />
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            See <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Lynlytics</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crystal-clear insights, prioritized actions, and beautiful clarity across your numbers
          </p>
        </div>

        {/* Quick Insights Full UI Showcase */}
        <div className="space-y-4">
          {/* Section 1: Quick Insights Full Page UI */}
          <div className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Curved Shapes - Extended Beyond Section */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-16 w-64 h-64 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 -right-16 w-72 h-72 bg-gradient-to-l from-purple-400/15 to-violet-400/15 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-tl from-violet-300/10 to-purple-300/10 rounded-full blur-xl"></div>
            
            <div className="w-full max-w-7xl mx-auto relative z-10">
              {/* Quick Insights UI with Curved Gradient Background */}
              <div className="relative p-6">
                {/* Curved Gradient Background - Extends Beyond Widget */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 rounded-2xl"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-violet-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-lg"></div>
                <div className="absolute top-1/3 -right-8 w-20 h-20 bg-gradient-to-l from-purple-400/15 to-violet-400/15 rounded-full blur-lg"></div>
                
                {/* UI Widget Content */}
                <div className="relative z-10">
                  {/* Full UI Window Box - Wider and Centered */}
                  <div className="relative flex justify-center mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden" style={{ height: '70vh', minHeight: '500px', width: '95vw', maxWidth: '1400px' }}>
                      {/* Full Quick Insights UI */}
                      <div className="h-full overflow-hidden">
                        <FullDashboardComponent />
                      </div>
                    </div>
                  </div>

                  {/* Quick Insights Description */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Quick Insights</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-2">AI-powered business intelligence at your fingertips</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Every day, our engine proactively finds the hidden opportunities and risks in your data. We then deliver these as simple, plain-English "Insight Cards" that explain what's happening, why it matters, and what you can do about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat & Advisor Side by Side Section */}
          <div className="flex items-center justify-center py-8">
            <div className="w-full max-w-7xl mx-auto">
              {/* Side by Side Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Chat Widget */}
                <div className="relative p-6">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                  
                  {/* Widget Content */}
                  <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-6" style={{ height: '300px' }}>
                    <div className="h-full overflow-hidden">
                      <div className="h-full bg-white">
                        {/* Chat Header */}
                        <div className="h-8 flex items-center justify-between px-3 bg-white border-b border-gray-100">
                          <h2 className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Chat with Lyn</h2>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-2 space-y-2 bg-white" style={{ height: 'calc(100% - 80px)' }}>
                          <div className="flex justify-start">
                            <div className="p-2 rounded-lg max-w-xs shadow-sm bg-white border border-gray-100">
                              <p className="text-xs text-gray-800">Hi Sara, I'm Lyn, your personal AI business analyst. What's on your mind today?</p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="p-2 rounded-lg max-w-xs shadow-sm bg-blue-500 text-white">
                              <p className="text-xs">How was my revenue last week?</p>
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className="p-2 rounded-lg max-w-xs shadow-sm bg-white border border-gray-100">
                              <p className="text-xs text-gray-800">Your revenue was <strong>$28,540</strong>, which is an <strong style={{color: '#16a34a'}}>8% increase</strong> from last week.</p>
                            </div>
                          </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-2 bg-white border-t border-gray-100">
                          <input
                            type="text"
                            placeholder="Ask Lyn anything..."
                            className="w-full pl-3 pr-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Description - Inside Gradient Card */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Chat with Lyn</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-2">Your personal AI analyst is available 24/7</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Ask complex questions about your business in plain English like "Which ad campaign was most profitable last week?" and get immediate, data-backed answers and suggestions, without ever waiting for a report to be built.
                    </p>
                  </div>
                </div>

                {/* Advisor Widget */}
                <div className="relative p-6">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 rounded-xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-fuchsia-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-pink-400/20 to-rose-400/20 rounded-full blur-2xl"></div>
                  
                  {/* Widget Content */}
                  <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-6" style={{ height: '300px' }}>
                    <div className="h-full overflow-hidden">
                      <div className="h-full bg-white">
                        {/* Advisor Header */}
                        <div className="h-8 flex items-center justify-between px-3 bg-white border-b border-gray-100">
                          <h2 className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Advisor</h2>
                        </div>

                        {/* Advice Items - Grid Layout */}
                        <div className="flex-1 p-2 bg-white" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="grid grid-cols-2 gap-5">
                            {/* Advice 1 */}
                            <div className="p-1.5 rounded-lg shadow-sm bg-white border border-gray-100 hover:shadow-md transition-shadow">
                              <div className="flex items-center mb-1">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></div>
                                <span className="text-xs font-semibold text-blue-600">Advice 1</span>
                              </div>
                              <p className="text-xs text-gray-800 font-semibold mb-1">Optimize Meta Ads</p>
                              <p className="text-xs text-gray-600 mb-1">Reduce ad spend by 25%. Impact: +$150-300/week.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">~5 mins</span>
                                <button disabled className="bg-slate-400 text-white text-xs px-1.5 py-0.5 rounded cursor-not-allowed">
                                  Start
                                </button>
                              </div>
                            </div>

                            {/* Advice 2 */}
                            <div className="p-1.5 rounded-lg shadow-sm bg-green-50 border border-green-200 hover:shadow-md transition-shadow">
                              <div className="flex items-center mb-1">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></div>
                                <span className="text-xs font-semibold text-green-600">Advice 2</span>
                              </div>
                              <p className="text-xs text-gray-800 font-semibold mb-1">Update Product Page</p>
                              <p className="text-xs text-gray-600 mb-1">Add sizing chart. Impact: -10-15% returns.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">~15 mins</span>
                                <button disabled className="bg-slate-400 text-white text-xs px-1.5 py-0.5 rounded cursor-not-allowed">
                                  Start
                                </button>
                              </div>
                            </div>

                            {/* Advice 3 */}
                            <div className="p-1.5 rounded-lg shadow-sm bg-purple-50 border border-purple-200 hover:shadow-md transition-shadow">
                              <div className="flex items-center mb-1">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1.5"></div>
                                <span className="text-xs font-semibold text-purple-600">Advice 3</span>
                              </div>
                              <p className="text-xs text-gray-800 font-semibold mb-1">Launch Campaign</p>
                              <p className="text-xs text-gray-600 mb-1">Re-engage customers. Impact: +$500-1200/month.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">~30 mins</span>
                                <button disabled className="bg-slate-400 text-white text-xs px-1.5 py-0.5 rounded cursor-not-allowed">
                                  Start
                                </button>
                              </div>
                            </div>

                            {/* Advice 4 */}
                            <div className="p-1.5 rounded-lg shadow-sm bg-orange-50 border border-orange-200 hover:shadow-md transition-shadow">
                              <div className="flex items-center mb-1">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1.5"></div>
                                <span className="text-xs font-semibold text-orange-600">Advice 4</span>
                              </div>
                              <p className="text-xs text-gray-800 font-semibold mb-1">Optimize Email</p>
                              <p className="text-xs text-gray-600 mb-1">Better subject lines. Impact: +$800-1500/month.</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">~45 mins</span>
                                <button disabled className="bg-slate-400 text-white text-xs px-1.5 py-0.5 rounded cursor-not-allowed">
                                  Start
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advisor Description - Inside Gradient Card */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Advisor</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-2">We automatically transform the most important "Try this" suggestions into a prioritized weekly to-do list</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Each task is a step-by-step recipe for action, complete with a simulated impact, giving you the confidence to focus your energy where it matters most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Weekly Business Report & Business Health Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Weekly Business Report Widget */}
                <div className="relative p-6">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                  
                  {/* Widget Content */}
                  <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-6" style={{ height: '300px' }}>
                    <div className="h-full overflow-hidden">
                      <div className="h-full bg-white">
                        {/* Report Header */}
                        <div className="h-8 flex items-center justify-between px-3 bg-white border-b border-gray-100">
                          <h2 className="text-xs font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Weekly Business Report</h2>
                        </div>

                        {/* Report Content */}
                        <div className="flex-1 p-3 bg-white" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="space-y-2">
                            {/* Revenue */}
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-xs text-gray-600">Revenue</span>
                              <div className="text-right">
                                <span className="text-sm font-bold text-gray-800">$28,540</span>
                                <span className="text-xs text-green-600 ml-2">+8.2%</span>
                              </div>
                            </div>

                            {/* Orders */}
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-xs text-gray-600">Orders</span>
                              <div className="text-right">
                                <span className="text-sm font-bold text-gray-800">762</span>
                                <span className="text-xs text-green-600 ml-2">+12.5%</span>
                              </div>
                            </div>

                            {/* Profit Margin */}
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-xs text-gray-600">Profit Margin</span>
                              <div className="text-right">
                                <span className="text-sm font-bold text-gray-800">17.5%</span>
                                <span className="text-xs text-green-600 ml-2">+2.1%</span>
                              </div>
                            </div>

                            {/* AOV */}
                            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-xs text-gray-600">AOV</span>
                              <div className="text-right">
                                <span className="text-sm font-bold text-gray-800">$129.20</span>
                                <span className="text-xs text-green-600 ml-2">+3.2%</span>
                              </div>
                            </div>

                            {/* Summary */}
                            <div className="mt-3 p-2 bg-blue-50 rounded">
                              <p className="text-xs text-gray-700 text-center">
                                <strong>This Week:</strong> Strong performance across all metrics with consistent growth trends.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Report Description - Inside Gradient Card */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Weekly Business Report</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-2">Every Monday, receive a concise executive summary of your business performance</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We highlight your biggest wins and the most critical areas needing your attention, so you always know where to focus.
                    </p>
                  </div>
                </div>

                {/* Business Health Widget */}
                <div className="relative p-6">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                  
                  {/* Widget Content */}
                  <div className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-6" style={{ height: '300px' }}>
                    <div className="h-full overflow-hidden">
                      <div className="h-full bg-white">
                        {/* Health Header */}
                        <div className="h-8 flex items-center justify-between px-3 bg-white border-b border-gray-100">
                          <h2 className="text-xs font-semibold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Business Health</h2>
                        </div>

                        {/* Health Content */}
                        <div className="flex-1 p-3 bg-white" style={{ height: 'calc(100% - 40px)' }}>
                          <div className="space-y-3">
                            {/* Risk Level Circles */}
                            <div className="flex justify-center space-x-4">
                              {/* High Risk - Red */}
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-white text-xs font-bold">H</span>
                                </div>
                                <span className="text-xs text-red-600">High</span>
                              </div>

                              {/* Medium Risk - Orange */}
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-white text-xs font-bold">M</span>
                                </div>
                                <span className="text-xs text-orange-600">Medium</span>
                              </div>

                              {/* Low Risk - Green */}
                              <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-1">
                                  <span className="text-white text-xs font-bold">L</span>
                                </div>
                                <span className="text-xs text-green-600">Low</span>
                              </div>
                            </div>

                            {/* Health Metrics */}
                            <div className="space-y-1">
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-xs text-gray-600">Financial Health</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-xs text-gray-600">Sales Performance</span>
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-xs text-gray-600">Marketing ROI</span>
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <span className="text-xs text-gray-600">Customer Satisfaction</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>

                            {/* Overall Status */}
                            <div className="mt-2 p-2 bg-green-50 rounded">
                              <p className="text-xs text-gray-700 text-center">
                                <strong>Overall:</strong> Good health with some areas needing attention.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Health Description - Inside Gradient Card */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Business Health</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-2">Get a clean, minimalist view of your core metrics all in one place</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      With a reliable forecast, you'll have the situational awareness you need to never fly blind again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductShowcase
