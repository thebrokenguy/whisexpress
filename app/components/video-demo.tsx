"use client"

import { motion } from "framer-motion"
import { Rocket, Clock, Building2, Route } from "lucide-react"
import { ContactFormModal } from "./contact-form-modal"

const services = [
  {
    icon: Rocket,
    title: "Entrega Expressa",
    description: "O mais rápido possível! Ideal para documentos e entregas urgentes.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Clock,
    title: "Entrega Programada",
    description: "Escolha o melhor horário para receber a sua entrega.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Building2,
    title: "Entrega Empresarial",
    description: "Soluções personalizadas para empresas e negócios.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Route,
    title: "Entrega Ponto a Ponto",
    description: "Do ponto A ao B sem desvios, com rota direta.",
    color: "from-orange-500 to-orange-600",
  },
]

export default function OurServices() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A62] mb-4">Os Nossos Serviços</h2>
          <p className="text-xl text-[#003A62]">Soluções de entrega à medida para todas as suas necessidades</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-full bg-gradient-to-br ${service.color}`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Precisa de um serviço personalizado?{" "}
            <ContactFormModal
              buttonText="Contacte-nos"
              buttonClassName="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </p>
        </motion.div>
      </div>
    </section>
  )
}

