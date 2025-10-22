"use client"

import { useEffect } from "react"

export default function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      const progressBar = document.getElementById("scroll-progress")
      if (progressBar) {
        progressBar.style.width = scrolled + "%"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
