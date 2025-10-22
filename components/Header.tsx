"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-[9998]" onClick={() => setMobileMenuOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 w-[280px] h-screen bg-white/95 backdrop-blur-2xl border-l border-gray-200 z-[9999] transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <span className="text-xl font-bold text-[#1877F2]">Lynlytics</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-2">
          <Link
            href="/"
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/#integrations"
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Integrations
          </Link>
          {/* Removed Features anchor */}
          <Link href="/#faq" className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <a
            href="mailto:anoopsai@lynlytics.com"
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Contact us
          </a>
        </div>
        {/* Removed Get started link to coming-soon */}
      </div>

      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 text-gray-600 hover:text-gray-900 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}
