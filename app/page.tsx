"use client"

import Hero from "./components/hero"
import Features from "./components/features"
import Testimonials from "./components/testimonials"
import Cta from "./components/cta"
import Faq from "./components/faq"
import PricingTable from "./components/pricing-table"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add this wrapper div with padding-top */}
      <Hero />
      <Features />
      <PricingTable />
      <Testimonials />
      <Faq />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tem dúvidas? Contacte-nos</h2>
          <Button
            onClick={() => {
              const message = encodeURIComponent(
                `Olá! Tenho uma dúvida sobre os serviços da Whis Express. Poderia me ajudar?`,
              )
              window.open(`https://wa.me/351923579734?text=${message}`, "_blank")
            }}
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Entre em Contacto
          </Button>
        </div>
      </section>
      <Cta />
    </div>
  )
}

