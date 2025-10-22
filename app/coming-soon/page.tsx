"use client"

import { useState, useEffect } from "react"

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // Set fixed launch date - October 22, 2025 at 11:59:59 PM
    const launchDate = new Date(2025, 9, 22, 23, 59, 59)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance < 0) {
        setIsFinished(true)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => String(num).padStart(2, "0")

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .container-animated {
          animation: fadeIn 1.2s ease-out;
        }

        .countdown-number {
          transition: transform 0.3s ease;
        }

        .countdown-item:hover .countdown-number {
          transform: scale(1.05);
        }
      `}</style>

      <div className="container-animated max-w-[800px] w-full text-center bg-[#f5f5f7] rounded-[18px] p-16 md:p-20 shadow-lg">
        {isFinished ? (
          <>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] mb-6 tracking-tight">We&apos;re Here</h1>
            <p className="text-xl md:text-2xl text-[#86868b]">Welcome to Lynlytics.</p>
          </>
        ) : (
          <>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-tight">
              We&apos;re Almost Ready
            </h1>

            <p className="text-lg md:text-xl text-[#86868b] max-w-[600px] mx-auto mb-16 leading-relaxed">
              Building something thoughtful takes time. We&apos;ll be with you soon.
            </p>

            <div className="flex justify-center gap-8 md:gap-12 mb-20 flex-wrap">
              <div className="countdown-item flex flex-col items-center min-w-[100px]">
                <div className="countdown-number text-6xl md:text-8xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-sm font-medium uppercase tracking-widest text-[#86868b]">Days</div>
              </div>

              <div className="hidden md:flex items-center pb-8 text-5xl text-[#d2d2d7]">:</div>

              <div className="countdown-item flex flex-col items-center min-w-[100px]">
                <div className="countdown-number text-6xl md:text-8xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-sm font-medium uppercase tracking-widest text-[#86868b]">Hours</div>
              </div>

              <div className="hidden md:flex items-center pb-8 text-5xl text-[#d2d2d7]">:</div>

              <div className="countdown-item flex flex-col items-center min-w-[100px]">
                <div className="countdown-number text-6xl md:text-8xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-sm font-medium uppercase tracking-widest text-[#86868b]">Minutes</div>
              </div>

              <div className="hidden md:flex items-center pb-8 text-5xl text-[#d2d2d7]">:</div>

              <div className="countdown-item flex flex-col items-center min-w-[100px]">
                <div className="countdown-number text-6xl md:text-8xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-sm font-medium uppercase tracking-widest text-[#86868b]">Seconds</div>
              </div>
            </div>

            <p className="text-base text-[#86868b]">Thank you for your patience.</p>
          </>
        )}
      </div>
    </div>
  )
}
