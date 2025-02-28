"use client"

import { useState, useEffect } from "react"

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`
      setScrollProgress(scrollPx / winHeightPx)
    }

    window.addEventListener("scroll", updateScrollProgress)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-green-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
    </div>
  )
}

