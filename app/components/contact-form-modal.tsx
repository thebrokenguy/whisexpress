"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

const countryCodes = [
  { value: "351", label: "🇵🇹 +351 (Portugal)" },
  { value: "55", label: "🇧🇷 +55 (Brasil)" },
  { value: "1", label: "🇺🇸 +1 (EUA)" },
  { value: "44", label: "🇬🇧 +44 (Reino Unido)" },
  { value: "34", label: "🇪🇸 +34 (Espanha)" },
]

// Conversion tracking function
function gtag_report_conversion(url?: string) {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url
    }
  }

  window.gtag("event", "conversion", {
    send_to: "AW-16895155038/DVw1CIPb6KIaEN62hwg-1",
    value: 1.0,
    currency: "EUR",
    event_callback: callback,
  })
  return false
}

export function ContactFormModal({ buttonText = "FAÇA SEU ORÇAMENTO", buttonClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [countryCode, setCountryCode] = useState("351")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: "Novo contacto do site Whis Express",
      message: `
Nome: ${formData.get("name")}
Email: ${formData.get("email")}
Telefone: +${countryCode} ${formData.get("phone")}

Mensagem:
${formData.get("message")}
      `,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Track successful form submission
        gtag_report_conversion()

        toast({
          title: "Mensagem enviada",
          description: "Entraremos em contacto consigo brevemente.",
        })
        setIsOpen(false)
        e.currentTarget.reset()
      } else {
        throw new Error("Falha ao enviar mensagem")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Pedido de Informação - Whis Express</DialogTitle>
            <DialogDescription>
              Deixe-nos os seus dados e entraremos em contacto consigo para lhe dar mais informações sobre a Whis
              Express.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" name="name" placeholder="João Silva" required className="bg-white" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="joao@exemplo.pt" required className="bg-white" />
            </div>
            <div>
              <Label htmlFor="phone">Telemóvel</Label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Indicativo" />
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
                  placeholder="912 345 678"
                  required
                  className="flex-1 bg-white"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Diga-nos mais sobre as suas necessidades..."
                className="min-h-[200px] resize-y bg-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "A enviar..." : "Enviar Orçamento"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

