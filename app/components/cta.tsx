"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Cta() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_ajustado-xeDnPbYWIupHWSiaIyDpWKaLfeCAxh.png"
              alt="Whis Express Logo"
              width={200}
              height={93}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-600 mt-4">
              Entregas rápidas, seguras e eficientes em Setúbal. Conte com a Whis Express para uma logística que supera
              expectativas e impulsiona o seu negócio.
            </p>
          </div>

          {/* Contact Information and Social Media */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <Link href="tel:+351923579734" className="text-gray-600 hover:text-blue-600">
                    +351 923 579 734
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <Link href="mailto:contato@whisexpress.vercel.app" className="text-gray-600 hover:text-blue-600">
                    whisexpress@gmail.com
                  </Link>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-600">Setúbal, Portugal</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/whisexpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600"
                >
                  <Image
                    src="https://img.icons8.com/color/48/000000/instagram-new.png"
                    width={24}
                    height={24}
                    alt="Instagram"
                  />
                </Link>
                <Link
                  href="https://wa.me/351923579734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600"
                >
                  <Image
                    src="https://img.icons8.com/color/48/000000/whatsapp.png"
                    width={24}
                    height={24}
                    alt="WhatsApp"
                  />
                </Link>
                <Link
                  href="https://t.me/whisexpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Image
                    src="https://img.icons8.com/color/48/000000/telegram-app.png"
                    width={24}
                    height={24}
                    alt="Telegram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

