"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "El asunto es requerido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type ContactForm = z.infer<typeof contactSchema>

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-dark-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Contacto
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Hablemos</h3>
            <p className="text-gray-400 leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              No dudes en contactarme.
            </p>

            <div className="space-y-4">
              {[
                { icon: FaEnvelope, text: "santicastaneda099@gmail.com", link: "mailto:santicastaneda099@gmail.com" },
                { icon: FaPhone, text: "+57 321 985 1825", link: "tel:+573219851825" },
                { icon: FaMapMarkerAlt, text: "Cajicá, Colombia", link: "#" },
                { icon: FaLinkedin, text: "LinkedIn", link: "https://www.linkedin.com/in/julian-santiago-venegas-casta%C3%B1eda-95257a274/" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target={item.icon === FaLinkedin ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-card rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
              <input
                {...register("name")}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register("subject")}
                placeholder="Asunto"
                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500"
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500 resize-none"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⟳</span>
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
              >
                ✅ ¡Mensaje enviado! Te responderé pronto.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
