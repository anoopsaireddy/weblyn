import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DM_Sans } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lynlytics | Your Actionable Intelligence Engine",
  description:
    "Lynlytics is the actionable intelligence engine for SMBs. We turn your complex business data into a simple, prioritized action plan to drive growth.",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/LC.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth leading-3">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/LC.png" />
      </head>
      <body className={`${inter.variable} ${interDisplay.variable} ${dmSans.variable} ${GeistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
