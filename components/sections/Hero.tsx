"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/Button"
import { FaLinkedin, FaEnvelope } from "react-icons/fa"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-8 shadow-2xl shadow-primary/30"
          >
            <div className="w-full h-full rounded-full bg-dark-bg p-1 overflow-hidden flex items-center justify-center">
              <img
                src="/images/perfil.jpg"
                alt="Julian Santiago Venegas Castañeda"
                className="w-full h-full object-cover scale-[1.1]"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary bg-[length:200%] animate-gradient">
              Julian Santiago Venegas Castañeda
            </span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 h-12">
            <TypeAnimation
              sequence={[
                "Ingeniero de Sistemas",
                2000,
                "Full Stack Developer",
                2000,
                "Analista de Datos",
                2000,
                "Business Intelligence",
                2000,
                "Ciberseguridad",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8 leading-relaxed">
            Ingeniero de Sistemas con experiencia en desarrollo de software y análisis de datos. 
            He desarrollado soluciones como sistemas POS y trabajado con Power BI, SQL, Excel y 
            Power Query para transformar datos en información útil para la toma de decisiones. 
            Cuento además con formación en Business Intelligence y ciberseguridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="min-w-[180px] group">
              <span>Ver Proyectos</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px]">
              Contactar
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/julian-santiago-venegas-casta%C3%B1eda-95257a274/", label: "LinkedIn" },
              { icon: FaEnvelope, url: "mailto:santicastaneda099@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50"
                aria-label={social.label}
              >
                <social.icon size={22} className="text-gray-400 hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center gap-2"
        >
          <span>Desplázate</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
