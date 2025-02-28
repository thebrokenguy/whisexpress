"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={scrollToTop} className="flex-shrink-0">
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_ajustado-xeDnPbYWIupHWSiaIyDpWKaLfeCAxh.png"
                alt="Logótipo Whis Express"
                width={150}
                height={70}
                className="object-contain"
              />
            </motion.div>
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/351923579734"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              <Image src="https://img.icons8.com/color/48/000000/whatsapp.png" width={32} height={32} alt="WhatsApp" />
            </a>
            <a
              href="https://t.me/whisexpress"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <Image
                src="https://img.icons8.com/color/48/000000/telegram-app.png"
                width={32}
                height={32}
                alt="Telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

