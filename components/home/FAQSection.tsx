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
          <p className="zavo-dm-body mb-6">
            Still have questions?{" "}
            <a
              href="mailto:anoopsai@lynlytics.com"
              className="font-semibold hover:underline text-gray-900 transition-colors"
            >
              Get in touch
            </a>
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/company/lynlytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://x.com/lynlytics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm font-medium">X</span>
            </a>
            
            <a
              href="https://www.instagram.com/lynlytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
