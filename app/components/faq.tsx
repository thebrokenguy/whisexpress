"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Que tipos de entregas a Whis Express realiza?",
    answer:
      "A Whis Express realiza entregas rápidas de documentos, encomendas e pacotes de pequeno porte. Atendemos tanto empresas como clientes individuais, garantindo agilidade e segurança em cada serviço.",
  },
  {
    question: "Quanto tempo demora a minha entrega a ser concluída?",
    answer:
      "O tempo de entrega depende da localização e do tipo de serviço solicitado. Para entregas expressas, fazemos o possível para que sejam concluídas no menor tempo possível, geralmente no próprio dia.",
  },
  {
    question: "Como posso acompanhar o estado da minha entrega?",
    answer:
      "Pode acompanhar o estado da sua entrega em tempo real através do nosso sistema de rastreamento ou diretamente pelo WhatsApp, onde o manteremos atualizado sobre cada etapa.",
  },
  {
    question: "Quais os métodos de pagamento aceites?",
    answer:
      "Aceitamos pagamentos via MB Way, transferência bancária e dinheiro, proporcionando maior praticidade para si.",
  },
  {
    question: "A Whis Express atende apenas empresas ou também clientes individuais?",
    answer:
      "Atendemos tanto empresas como clientes individuais, oferecendo serviços personalizados para cada necessidade, seja para entregas comerciais ou pessoais.",
  },
  {
    question: "Quais os veículos utilizados?",
    answer:
      "Na Whis Express, utilizamos APENAS MOTAS para realizar as nossas entregas. Isto permite-nos oferecer um serviço rápido e eficiente, especialmente em áreas urbanas com trânsito intenso. As nossas motas estão equipadas para garantir a segurança das encomendas durante o transporte.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-gray-500">Aqui estão as respostas para as perguntas mais frequentes:</p>
        </div>
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex w-full items-center justify-between py-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {index + 1}️⃣ {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

