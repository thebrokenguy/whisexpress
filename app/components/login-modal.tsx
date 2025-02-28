"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implement contact form submission logic here
    console.log("Contact form submitted")
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline" className="bg-[#003A62] hover:bg-[#002A47] text-white">
        Entre em Contato
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-blue-50 to-green-50">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-blue-700">Fale Conosco</DialogTitle>
            <DialogDescription className="text-green-600">
              Preencha o formulário abaixo e entraremos em contato em breve.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-blue-600">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                required
                className="border-blue-300 focus:border-green-500"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-blue-600">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="border-blue-300 focus:border-green-500"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-blue-600">
                Celular
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+351 123 456 789"
                required
                className="border-blue-300 focus:border-green-500"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-blue-600">
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Descreva seu problema ou dúvida aqui"
                required
                className="border-blue-300 focus:border-green-500 min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Enviar Mensagem
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

