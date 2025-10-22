"use client"

import { useState } from "react"

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Lynlytics different from traditional BI tools?",
      answer:
        "Traditional BI tools are powerful reporting systems built for data analysts. They excel at visualizing what happened, but leave you to figure out why it happened and what to do next. Lynlytics is fundamentally different. We are an Actionable Intelligence Engine built for business owners. Our AI doesn't just give you charts; it analyzes your data, finds the critical insights, and delivers a simple, prioritized to-do list for the week. We close the gap between data and decision.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        'You can be set up and see your first insights in under 10 minutes. The process is simple: you securely connect your data sources (like Shopify or Meta Ads) through our embedded portal, and our AI gets to work. There are no complex configurations or data models to build. In fact, your "Initial Business Report" is often ready within minutes of connecting your data, providing immediate value.',
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, absolutely. Your data security and privacy are built into the core of our architecture. Our system is designed with two fundamental principles:\n\nPrivacy by Design: Our AI agents reason using only anonymized metadata and business rules. Your raw, sensitive customer and financial data is never sent to a third-party LLM.\n\nVerifiable Accuracy: All mathematical calculations are performed exclusively by our proprietary, VRAE-verified analytics core. We double-check the numbers so you can trust every insight.",
    },
    {
      question: "What size business is Lynlytics built for?",
      answer:
        "Lynlytics is designed from the ground up for Small and Medium-sized Businesses (SMBs). Our ideal customer is the busy founder or operator who doesn't have a dedicated team of data analysts. If you are an expert in your business but lack the time or tools to perform deep data analysis, Lynlytics is built for you. We automate the work of an analyst and deliver the simple, actionable plan you need to grow.",
    },
    {
      question: "Do I need technical expertise to use Lynlytics?",
      answer:
        "No, absolutely not. That is the core problem we solve. You don't need any technical expertise, knowledge of SQL, BI tool or experience with data analysis to use Lynlytics. Our platform is designed to handle all the complexity for you. All insights and to-do lists are delivered in plain English, so you can focus on running your business, not on becoming a Business Analyst.",
    },
  ]

  return (
    <section id="faq" className="py-12 px-4 zavo-bg-pure">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="zavo-dm-heading-primary mb-4">
            FAQs
          </h2>
          <p className="zavo-dm-body-large">Everything you need to know about Lynlytics</p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="group border-t border-gray-200">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-start justify-between text-left transition-colors hover:border-gray-300"
              >
                <h3 className="zavo-dm-heading-tertiary pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-7 h-7 text-gray-900 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path d="M16.139 13V0h-2.167v13h-13v2.167h13v13h2.167v-13h13V13h-13Z" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[800px]" : "max-h-0"}`}
              >
                <p className="zavo-dm-body pb-8 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-b border-gray-200"></div>
        </div>

        <div className="mt-16 text-center">
          <p className="zavo-dm-body">
            Still have questions?{" "}
            <a
              href="mailto:anoopsai@lynlytics.com"
              className="font-semibold hover:underline text-gray-900 transition-colors"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
