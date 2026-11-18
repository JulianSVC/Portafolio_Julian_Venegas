import { Contact } from "@/components/sections/Contact"

export const metadata = {
  title: "Contacto | Portafolio",
  description: "Ponte en contacto conmigo",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  )
}
