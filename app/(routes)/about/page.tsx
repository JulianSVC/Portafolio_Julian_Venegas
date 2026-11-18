"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Sobre Mí
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ingeniero de Sistemas con experiencia en desarrollo de software, análisis de datos y ciberseguridad
            </p>
          </div>

          <div className="bg-dark-card rounded-2xl p-8 border border-white/5 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-secondary p-1 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full rounded-full bg-dark-bg overflow-hidden">
                  <img
                    src="/images/perfil.jpg"
                    alt="Julian Santiago Venegas Castañeda"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Julian Santiago Venegas Castañeda</h2>
                <p className="text-primary font-medium mb-2">Ingeniero de Sistemas | Full Stack Developer</p>
                <p className="text-gray-400 leading-relaxed">
                  Ingeniero de Sistemas con experiencia en desarrollo de software y análisis de datos. 
                  He desarrollado soluciones como sistemas POS y trabajado con Power BI, SQL, Excel y 
                  Power Query para transformar datos en información útil para la toma de decisiones. 
                  Cuento además con formación en Business Intelligence y ciberseguridad.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "⚡ JavaScript",
              "🐍 Python",
              "🟢 Node.js",
              "🗄️ MySQL",
              "📊 Power BI",
              "📈 Excel",
              "🌐 HTML",
              "🎨 CSS",
            ].map((skill) => (
              <div key={skill} className="bg-dark-card p-4 rounded-xl text-center border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-sm text-gray-300">{skill}</span>
              </div>
            ))}
          </div>

          <div className="bg-dark-card rounded-2xl p-6 border border-white/5">
            <h3 className="text-lg font-semibold mb-4 text-center">Conéctate conmigo</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/julian-santiago-venegas-casta%C3%B1eda-95257a274/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-bg rounded-lg hover:bg-primary/10 transition-colors"
              >
                <span className="text-2xl">🔗 LinkedIn</span>
              </a>
              <a
                href="mailto:santicastaneda099@gmail.com"
                className="p-3 bg-dark-bg rounded-lg hover:bg-primary/10 transition-colors"
              >
                <span className="text-2xl">📧 Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
