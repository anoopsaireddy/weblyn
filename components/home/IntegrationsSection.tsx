"use client"

import Image from "next/image"

export default function IntegrationsSection() {
  const integrations = [
    {
      name: "Shopify",
      gradient: "linear-gradient(135deg, #95BF47, #7AB55C)",
      icon: "https://cdn.simpleicons.org/shopify/white",
      fallback: "S",
    },
    {
      name: "QuickBooks",
      gradient: "linear-gradient(135deg, #2CA01C, #228B16)",
      icon: "https://cdn.simpleicons.org/quickbooks/white",
      fallback: "QB",
    },
    {
      name: "Facebook Ads",
      gradient: "linear-gradient(135deg, #0081FB, #0064C8)",
      icon: "https://cdn.simpleicons.org/facebook/white",
      fallback: "F",
    },
    {
      name: "Google Ads",
      gradient: "linear-gradient(135deg, #4285F4, #3367D6)",
      icon: "/weblyn/assets/google-ads.png",
      fallback: "Ads",
    },
    {
      name: "Square",
      gradient: "linear-gradient(135deg, #000000, #1a1a1a)",
      icon: "https://cdn.simpleicons.org/square/white",
      fallback: "□",
    },
    {
      name: "Google Analytics 4",
      gradient: "linear-gradient(135deg, #F9AB00, #E37400)",
      icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg",
      fallback: "GA4",
    },
    {
      name: "TikTok Ads",
      gradient: "linear-gradient(135deg, #000000, #1a1a1a)",
      icon: "https://cdn.simpleicons.org/tiktok/white",
      fallback: "TT",
    },
    {
      name: "Amazon Seller Central",
      gradient: "linear-gradient(135deg, #FF9900, #E68A00)",
      icon: "https://cdn.simpleicons.org/amazon/white",
      fallback: "A",
    },
    {
      name: "WooCommerce",
      gradient: "linear-gradient(135deg, #96588A, #7F4675)",
      icon: "https://cdn.simpleicons.org/woocommerce/white",
      fallback: "W",
    },
    {
      name: "Stripe",
      gradient: "linear-gradient(135deg, #635BFF, #5348E8)",
      icon: "https://cdn.simpleicons.org/stripe/white",
      fallback: "S",
    },
    {
      name: "PostgreSQL",
      gradient: "linear-gradient(135deg, #336791, #2A5578)",
      icon: "https://cdn.simpleicons.org/postgresql/white",
      fallback: "PG",
    },
    {
      name: "More Coming Soon",
      gradient: "linear-gradient(135deg, #9CA3AF, #6B7280)",
      icon: null,
      fallback: "+",
      isPlaceholder: true,
    },
  ]

  return (
    <section id="integrations" className="px-4 zavo-bg-pure py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="zavo-dm-heading-secondary">
            A Unified View of Your <span className="gradient-text">Entire Business</span>
          </h2>
          <p className="mt-5 zavo-dm-body-large">
            Seamlessly integrate your sales, marketing, and finance data in minutes. Lynlytics connects to the tools you
            already rely on to create a single source of truth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-card" style={{ opacity: integration.isPlaceholder ? 0.6 : 1 }}>
              <div
                className="w-16 h-16 mb-4 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: integration.gradient }}
              >
                {integration.icon ? (
                  <Image
                    src={integration.icon || "/placeholder.svg"}
                    alt={integration.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    style={integration.name === "Google Analytics 4" ? { filter: "brightness(0) invert(1)" } : {}}
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      e.currentTarget.parentElement!.innerHTML =
                        `<span style="color:white;font-size:${integration.fallback.length > 2 ? "20px" : "24px"};font-weight:bold">${integration.fallback}</span>`
                    }}
                  />
                ) : (
                  <span style={{ color: "white", fontSize: "32px", fontWeight: "300" }}>{integration.fallback}</span>
                )}
              </div>
              <span className="text-sm font-semibold text-gray-900 leading-tight">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
