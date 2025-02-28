import Header from "../components/header"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Depuis que j'utilise NurseApp, j'ai réduit mon temps administratif de moitié. Une vraie révolution pour mon activité ! 🎉",
    author: "Sarah",
    role: "IDEL à Lyon",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote:
      "La planification des tournées et la facturation n'ont jamais été aussi simples. Je ne reviendrai pas en arrière. 👍",
    author: "Jean",
    role: "IDEL à Marseille",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote:
      "NurseApp m'a permis de mieux gérer mon temps et d'améliorer la qualité de mes soins. Mes patients sont ravis ! 😊",
    author: "Marie",
    role: "IDEL à Bordeaux",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4,
  },
  {
    quote: "L'application est intuitive et le support client est excellent. Je la recommande à tous mes collègues. 💯",
    author: "Pierre",
    role: "IDEL à Lille",
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote:
      "Grâce à NurseApp, je peux me concentrer sur l'essentiel : mes patients. C'est un outil indispensable pour tout infirmier libéral. 🏥",
    author: "Sophie",
    role: "IDEL à Nantes",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote:
      "La gestion des transmissions est devenue un jeu d'enfant. La communication avec mes collègues s'est grandement améliorée. 🤝",
    author: "Thomas",
    role: "IDEL à Strasbourg",
    avatar:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-purple-600">
              Ce que disent nos utilisateurs 💬
            </h1>
            <p className="text-xl text-center mb-12 text-muted-foreground">
              Découvrez comment NurseApp a transformé la pratique de nombreux infirmiers libéraux. 🚀
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-orange-100 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Rejoignez notre communauté satisfaite 🌟
            </h2>
            <p className="text-xl mb-8">
              Essayez NurseApp dès aujourd'hui et découvrez pourquoi tant d'infirmiers libéraux nous font confiance.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Commencer votre essai gratuit 🚀
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

