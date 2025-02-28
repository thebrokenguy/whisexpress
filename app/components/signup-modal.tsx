"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription à implémenter
    console.log("Inscription soumise")
    setIsOpen(false)
  }

  return (
    <>
      <div className="flex space-x-4">
        <Button
          onClick={() => window.open("https://wa.me/351912345678", "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white flex items-center"
        >
          <Image
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            alt="WhatsApp Icon"
            width={20}
            height={20}
            className="mr-2"
          />
          WhatsApp
        </Button>
        <Button
          onClick={() => window.open("https://t.me/whisexpress", "_blank")}
          className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
        >
          <Image
            src="https://img.icons8.com/?size=100&id=25n4hOEoY7ss&format=png&color=000000"
            alt="Telegram Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Telegram
        </Button>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>S'inscrire à Swily</DialogTitle>
            <DialogDescription>
              Créez votre compte gratuit et commencez à simplifier votre pratique dès aujourd'hui.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Jean Dupont" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jean@exemple.com" required />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              S'inscrire
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

