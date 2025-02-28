import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "Whis Express <onboarding@resend.dev>",
      to: ["whisexpress@gmail.com"], // Substitua pelo seu e-mail
      subject: "Teste de E-mail",
      html: "<p>Este é um e-mail de teste do Whis Express.</p>",
    })

    return NextResponse.json({ message: "E-mail de teste enviado", data })
  } catch (error) {
    console.error("Erro ao enviar e-mail de teste:", error)
    return NextResponse.json({ error: "Erro ao enviar e-mail de teste" }, { status: 500 })
  }
}

