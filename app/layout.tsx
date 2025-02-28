import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import Header from "./components/header"
import Footer from "./components/footer"
import type React from "react"

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Whis Express - Entregas Rápidas e Eficientes",
  description: "Simplifique suas entregas com a Whis Express. Eficiência e segurança em cada entrega.",
  metadataBase: new URL("https://whisexpress.vercel.app"),
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/",
    siteName: "Whis Express",
    title: "Whis Express - Entregas Rápidas",
    description: "Simplifique suas entregas com a Whis Express.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome.jpg-e9Dznkiv8FFhez2yccNccm9lroBfb0.jpeg",
        width: 1200,
        height: 630,
        alt: "Whis Express - Serviços de Entrega",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whis Express - Entregas Rápidas",
    description: "Simplifique suas entregas com a Whis Express.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome.jpg-e9Dznkiv8FFhez2yccNccm9lroBfb0.jpeg",
    ],
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(2).jpg-b8WKD8qX7HTcolQhb2HWMxN3DYmfWT.jpeg",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(2).jpg-b8WKD8qX7HTcolQhb2HWMxN3DYmfWT.jpeg",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome%20(2).jpg-b8WKD8qX7HTcolQhb2HWMxN3DYmfWT.jpeg",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16895155038" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16895155038');
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16895155038/UVwiCIPb6KIaEN62nvg-',
              'value': 1.0,
              'currency': 'EUR'
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'