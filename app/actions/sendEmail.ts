"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set in the environment variables.")
}

export async function sendEmail(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Resend API key is not configured" }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  try {
    const data = await resend.emails.send({
      from: "Whis Express <seu-email-verificado@seu-dominio.com>", // Atualize este e-mail
      to: ["whisexpress@gmail.com"],
      subject: "Nova mensagem do formulário de contacto",
      html: `
        <h1>Nova mensagem do formulário de contacto</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

