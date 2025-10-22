"use client"

// Updated FlowSection with diagonal layout
export default function FlowSection() {
  const steps = [
    {
      number: "01",
      title: "Connect your Data",
      description: "Seamlessly integrate data from your CRM, analytics platforms, advertising accounts, and more.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Lyn finds Insights",
      description: "Lyn continuously monitors your business metrics, identifying anomalies, trends, and opportunities.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "You Get a Clear Plan",
      description: "Receive actionable recommendations tailored to your business goals with specific next steps.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="relative px-4 py-16 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            From Raw Data to <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Your Action Plan</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Three simple steps that transform scattered data into clear, actionable insights
          </p>
        </div>

        {/* Diagonal flow layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <path
              d="M 150 120 Q 400 200, 650 280 T 1150 440"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index === 1 ? "lg:ml-32" : index === 2 ? "lg:ml-64" : ""
                }`}
                style={{
                  marginTop: index > 0 ? "-2rem" : "0",
                }}
              >
                {/* Large number with gradient */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`text-[120px] lg:text-[160px] font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20 leading-none`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} opacity-10 blur-2xl`}
                  ></div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1877F2] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}