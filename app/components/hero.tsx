"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { DemoModal } from "./demo-modal"
import { ContactFormModal } from "./contact-form-modal"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-gTYMlZcRc0sr7fZlVs72ofGpYOxpJ5.png",
    alt: "Estafeta da Whis Express numa mota azul com mochila de entregas",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fotografia%20em%20alta%20resolu%C3%A7%C3%A3o%20de%20um%20homem%20jovem%20pilotando%20uma%20scooter%20de%20cor%20azul%20vibrante.%20Ele%20veste%20uma%20camisa%20polo%20azul%20de%20mangas%20curtas,%20num%20tom%20levemente%20mais%20claro%20que%20a%20moto,%20e%20cal%C3%A7as%20escuras.%20Ele%20sorri%20e%20(1).jpg-wB93UhWSw81sknCCBD9DtQgmCoTEIu.jpeg",
    alt: "Estafeta profissional da Whis Express com mochila térmica azul",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/__%20Fotografia%20em%20alta%20resolu%C3%A7%C3%A3o%20de%20um%20homem%20jovem%20vestindo%20uma%20camisa%20polo%20azul%20vibrante%20e%20um%20bon%C3%A9%20azul%20combinando,%20sorrindo%20de%20forma%20descontra%C3%ADda%20enquanto%20segura%20uma%20caixa%20de%20papel%C3%A3o%20de%20tamanho%20m%C3%A9dio,%20com%20outr%20(1).jpg-obgKGwyng5aP4LPR3iaZZHkmcZMCld.jpeg",
    alt: "Estafeta da Whis Express a entregar encomendas com um sorriso no rosto",
  },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <main className="pt-10 pb-16 px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Simplifique as suas entregas com</span>
                <span className="block text-blue-600 mt-2">Whis Express</span>
              </motion.h1>
              <motion.p
                className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Na Whis Express, somos especialistas em serviço de estafeta de mota sob demanda, garantindo entregas
                rápidas, seguras e eficientes. Otimize o seu tempo e concentre-se no que é realmente importante.
              </motion.p>
              <motion.div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <ContactFormModal />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <DemoModal />
                </div>
              </motion.div>
            </div>
          </main>
          <div className="relative h-56 sm:h-72 md:h-96 lg:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src={images[currentImage].url || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  width={800}
                  height={800}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

