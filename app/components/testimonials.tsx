"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Igor Silva",
    role: "Profissional Autónomo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wpyn7xMRg4D1pCE777WrHEOHab2qfl.png",
    quote:
      "Serviço excelente! Precisava de entregar documentos urgentes e a Whis Express não só entregou no prazo como manteve tudo em perfeito estado. Recomendo vivamente!",
    rating: 5,
  },
  {
    name: "Juan Filho",
    role: "Professor",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    quote:
      "Profissionalismo e pontualidade impecáveis. O estafeta foi super atencioso e manteve-me informado durante todo o processo de entrega. O melhor serviço de entregas que já utilizei!",
    rating: 5,
  },
  {
    name: "Nara Simone",
    role: "Reformada",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M3EL66uE1OmSHT4yuXkrdGSccmsl9x.png",
    quote:
      "Muito satisfeita com o atendimento da Whis Express. O estafeta foi extremamente educado e cuidadoso com a minha encomenda. Definitivamente voltarei a utilizar o serviço!",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <motion.section
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
      id="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que dizem os nossos clientes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Descubra como a Whis Express transformou a experiência de muitos clientes.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-lg bg-white p-6 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

