"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneCall } from "lucide-react"

export function CallbackFormModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Pedido de contacto submetido")
    setIsOpen(false)
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline" className="group">
        <PhoneCall className="mr-2 h-4 w-4" />📞 Solicitar uma chamada
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar uma chamada</DialogTitle>
            <DialogDescription>
              Deixe-nos os seus dados e entraremos em contacto consigo o mais brevemente possível.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" placeholder="João Silva" required />
            </div>
            <div>
              <Label htmlFor="phone">Número de telemóvel</Label>
              <Input id="phone" type="tel" placeholder="912 345 678" required />
            </div>
            <div>
              <Label htmlFor="best-time">Melhor horário para contacto</Label>
              <Input id="best-time" placeholder="Ex: No final da tarde" />
            </div>
            <Button type="submit" className="w-full">
              Solicitar chamada
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

