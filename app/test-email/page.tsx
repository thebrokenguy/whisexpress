"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function TestEmail() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "E-mail enviado com sucesso.",
        })
        // Repor o formulário
        e.currentTarget.reset()
      } else {
        throw new Error(result.error || "Erro ao enviar e-mail")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao enviar o e-mail",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Teste de E-mail</h1>
          <p className="mt-2 text-gray-600">Utilize este formulário para testar o envio de e-mail</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" name="name" placeholder="O seu nome" required />
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" placeholder="seu@email.pt" required />
            </div>

            <div>
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" name="subject" placeholder="Assunto do e-mail" required />
            </div>

            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" placeholder="Escreva a sua mensagem aqui" rows={4} required />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "A enviar..." : "Enviar E-mail de Teste"}
            </Button>
          </form>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>O e-mail será enviado para: viniciusnovaes.pro@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

