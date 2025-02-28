import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Image
              src="https://i.postimg.cc/W3t2YpXk/2-ajustado.png"
              alt="Whis Express Logo"
              width={200}
              height={93}
              className="mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-600 mt-4">Sua melhor escolha para entregas rápidas e seguras em Santos e região.</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <Link href="tel:+5513996574760" className="text-gray-600 hover:text-blue-600">
                  +55 13 99657-4760
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <Link href="mailto:contato@whisexpress.com.br" className="text-gray-600 hover:text-blue-600">
                  contato@whisexpress.com.br
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-gray-600">
                  Av. Marechal Floriano Peixoto, 303
                  <br />
                  Pompeia, Santos - SP, 11060-303
                  <br />
                  Brasil
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/whisexpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://facebook.com/whisexpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.4975714916637!2d-46.32998772374781!3d-23.969595378968246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a44c497d91%3A0x8e4a8a46a22b9646!2sAv.%20Mal.%20Floriano%20Peixoto%2C%20303%20-%20Pomp%C3%A9ia%2C%20Santos%20-%20SP%2C%2011060-303!5e0!3m2!1spt-BR!2sbr!4v1708538106043!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

