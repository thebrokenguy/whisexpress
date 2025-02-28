import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-blue-50 py-12 sm:py-16 lg:py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contactez-nous</h2>
          <p className="mt-4 text-lg text-gray-500">
            Vous avez des questions ou besoin d'aide ? N'hésitez pas à nous contacter.
          </p>
        </div>
        <div className="mt-12">
          <form className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-500" />
              <p>07 61 98 60 81</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-green-500" />
              <p>contact@swily.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

