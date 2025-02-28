"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const distances = [
  { km: "0-5", value: 4.5 },
  { km: "6-9", value: 7.7 },
  { km: "10-14", value: 10.5 },
  { km: "15-19", value: 13.0 },
  { km: "20-24", value: 15.6 },
  { km: "25-29", value: 18.25 },
  { km: "30-34", value: 21.0 },
  { km: "35+", value: "A Consultar" },
]

const countryCodes = [
  { value: "351", label: "🇵🇹 +351", maxLength: 9 },
  { value: "55", label: "🇧🇷 +55", maxLength: 11 },
  { value: "1", label: "🇺🇸 +1", maxLength: 10 },
  { value: "44", label: "🇬🇧 +44", maxLength: 10 },
  { value: "34", label: "🇪🇸 +34", maxLength: 9 },
]

export default function PricingTable() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    distance: "",
    weight: "",
    hasStops: false,
    specialInstructions: "",
    countryCode: "351",
  })

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      const selectedCountry = countryCodes.find((code) => code.value === formData.countryCode)
      const maxLength = selectedCountry ? selectedCountry.maxLength : 9
      // Remove any non-digit characters and limit to the country's max length
      const digitsOnly = value.replace(/\D/g, "").slice(0, maxLength)
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }))
    } else if (name === "name") {
      // Remove any numbers from the name input
      const lettersOnly = value.replace(/[0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        [name]: lettersOnly,
      }))
    } else if (name === "distance") {
      // Limit distance to 34
      const numValue = Number.parseFloat(value)
      const limitedValue = isNaN(numValue) ? "" : Math.min(numValue, 34).toString()
      setFormData((prev) => ({
        ...prev,
        [name]: limitedValue,
      }))
    } else if (name === "weight") {
      // Limit weight to 15
      const numValue = Number.parseFloat(value)
      const limitedValue = isNaN(numValue) ? "" : Math.min(numValue, 15).toString()
      setFormData((prev) => ({
        ...prev,
        [name]: limitedValue,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      hasStops: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const distance = Number.parseFloat(formData.distance)
    const weight = Number.parseFloat(formData.weight)

    if (isNaN(distance) || isNaN(weight) || distance < 0 || weight < 0 || weight > 15) {
      alert("Por favor, insira valores válidos para distância e peso.")
      return
    }

    let price = 0
    if (distance <= 5) {
      price = 4.5
    } else if (distance <= 9) {
      price = 7.7
    } else if (distance <= 14) {
      price = 10.5
    } else if (distance <= 19) {
      price = 13.0
    } else if (distance <= 24) {
      price = 15.6
    } else if (distance <= 29) {
      price = 18.25
    } else if (distance <= 34) {
      price = 21.0
    } else {
      alert("Por favor, insira uma distância válida (máximo 34 km).")
      return
    }

    if (formData.hasStops) {
      price += 3.0
    }

    setCalculatedPrice(price)
  }

  const handleWhatsAppClick = () => {
    if (calculatedPrice === null) {
      alert("Por favor, calcule o frete antes de enviar a proposta.")
      return
    }

    const message = encodeURIComponent(`
Olá! Gostaria de solicitar uma proposta para entrega:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: +${formData.countryCode} ${formData.phone}
Distância: ${formData.distance} km
Peso: ${formData.weight} kg
Trecho com portagens: ${formData.hasStops ? "Sim" : "Não"}
Valor estimado: €${calculatedPrice.toFixed(2)}

Instruções Especiais:
${formData.specialInstructions}

Aguardo o seu contato. Obrigado!
    `)

    window.open(`https://wa.me/351923579734?text=${message}`, "_blank")
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Tabela de Preços e Cálculo de Frete Médio</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pricing Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white py-6 px-6">
              <h3 className="text-xl font-semibold text-center">Tabela de Preços</h3>
            </div>
            <div>
              <div className="grid grid-cols-2 bg-blue-600 text-white py-4 px-6">
                <div className="font-medium text-center text-sm tracking-wider">DISTÂNCIA (KM)</div>
                <div className="font-medium text-center text-sm tracking-wider">VALOR</div>
              </div>
              <div className="divide-y divide-gray-100">
                {distances.map((item, index) => (
                  <div
                    key={item.km}
                    className={`grid grid-cols-2 py-4 px-6 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } transition-colors duration-150`}
                  >
                    <div className="text-center font-medium text-gray-700">{item.km} KM</div>
                    <div className="text-center font-semibold text-gray-900">
                      {typeof item.value === "number" ? `€${item.value.toFixed(2)}` : item.value}{" "}
                      {typeof item.value === "number" && <span className="text-sm text-gray-600">+ portagens</span>}
                    </div>
                  </div>
                ))}
                <div className="p-4 text-sm text-gray-600 border-t">
                  <h4 className="font-semibold text-blue-600 mb-2">Informações Adicionais</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dimensões e peso máximo: Até 35 cm x 35 cm x 35 cm e 15 kg.</li>
                    <li>Portagens: Cobradas à parte, de acordo com o trajeto.</li>
                    <li>Formas de pagamento: MB Way, MB Multibanco, PayPal e dinheiro.</li>
                    <li>
                      Entrega para empresas: Em caso de entregas frequentes ou contratos mensais, consulte-nos para
                      condições especiais.
                    </li>
                    <li>
                      Observações: Os valores podem variar conforme a rota, volume, peso e condições específicas. Sempre
                      confirme o valor final antes do envio.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Calcular Frete Médio</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={handleInputChange}
                  pattern="[A-Za-zÀ-ÿ\s]+"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefone</Label>
                <div className="flex gap-2">
                  <Select
                    defaultValue="351"
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, countryCode: value, phone: "" }))}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Código" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((code) => (
                        <SelectItem key={code.value} value={code.value}>
                          {code.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="923579734"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="O seu endereço de e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>

              <div>
                <Label htmlFor="distance">Distância média por KM</Label>
                <Input
                  id="distance"
                  name="distance"
                  type="number"
                  min="0"
                  max="34"
                  step="0.1"
                  placeholder="Distância em KM (máx. 34)"
                  value={formData.distance}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="weight">Peso médio (kg)</Label>
                <div className="relative">
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    min="0"
                    max="15"
                    step="0.1"
                    placeholder="Peso da Encomenda (máx. 15)"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">kg</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasStops"
                  checked={formData.hasStops}
                  onCheckedChange={handleCheckboxChange}
                  className="border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                />
                <Label htmlFor="hasStops">Trecho com portagens</Label>
              </div>

              <div>
                <Label htmlFor="specialInstructions">Instruções Especiais (Opcional)</Label>
                <Textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  placeholder="Instruções Especiais (Opcional)"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                />
              </div>

              <p className="text-sm text-gray-500 text-center mb-2">Clique em "Calcular" para ver o valor final.</p>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Calcular
              </Button>
            </form>
            {calculatedPrice !== null && (
              <div className="mt-4 grid grid-cols-[1fr,auto] gap-3">
                <div className="bg-blue-50/80 px-4 py-3 rounded-lg">
                  <p className="text-lg font-medium text-gray-900">
                    Valor estimado: €{calculatedPrice.toFixed(2)}
                    {formData.hasStops && <span className="text-sm"> (inclui portagens)</span>}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 flex items-center gap-2"
                >
                  <Image
                    src="https://img.icons8.com/color/48/000000/whatsapp.png"
                    width={20}
                    height={20}
                    alt="WhatsApp"
                  />
                  Enviar proposta
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

