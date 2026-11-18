"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { FaWhatsapp, FaShieldAlt, FaCode, FaLaptop, FaStore, FaCogs } from "react-icons/fa"
import KodigmaClient from "./KodigmaClient"

export const metadata = {
  title: "Kodigma | Software para negocios reales",
  description:
    "Desarrollo de software colombiano para negocios reales. Soluciones que realmente funcionan. Landing pages, sitios web, e-commerce y software a medida.",
}

export default function KodigmaPage() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                &lt;KODIGMA/&gt;
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
              Software colombiano para negocios reales
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-2">
              Desarrollamos soluciones que realmente funcionan para tu negocio.
              <br />
              <span className="text-primary">Sin promesas falsas. Con resultados reales.</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "50+", label: "Negocios confían", icon: "🏢" },
              { value: "4.8", label: "Calificación ★", icon: "⭐" },
              { value: "24/7", label: "Soporte real", icon: "🎯" },
              { value: "100%", label: "Garantía", icon: "✅" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card rounded-2xl p-6 text-center border border-white/5"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.icon} {stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Servicios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                LO QUE REALMENTE HACEMOS
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Soluciones a medida, sin sobrepromesas. Tecnología que realmente funciona.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <FaCode className="text-3xl text-primary" />, title: "Landing Pages", desc: "Sitios profesionales que convierten visitantes en clientes.", features: ["Diseño responsivo", "Optimización SEO", "Formularios de contacto"] },
                { icon: <FaLaptop className="text-3xl text-blue-400" />, title: "Sitios Web", desc: "Páginas corporativas y portafolios profesionales.", features: ["Panel administrativo", "Actualización fácil", "Hosting incluido"] },
                { icon: <FaStore className="text-3xl text-green-400" />, title: "E-commerce", desc: "Tiendas virtuales funcionales con pasarelas de pago.", features: ["Carrito de compras", "MercadoPago/EPayco", "Gestión de productos"] },
                { icon: <FaCogs className="text-3xl text-purple-400" />, title: "Software a Medida", desc: "Soluciones específicas para problemas reales de tu negocio.", features: ["Análisis previo", "Desarrollo a tu medida", "Soporte continuo"] },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-dark-card rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{service.desc}</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {service.features.map((feature, i) => (
                      <li key={i}>✅ {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Productos destacados */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                SISTEMAS DE PUNTO DE VENTA
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ManagerPro */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-dark-card rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">ManagerPro</h3>
                <p className="text-gray-400 mb-4">Sistema de Punto de Venta</p>
                <p className="text-sm text-gray-400 mb-4">Licencia de por vida para 1 PC</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>✅ Sin mensualidades ni cobros ocultos</li>
                  <li>✅ Gestión de ventas, clientes y productos</li>
                  <li>✅ Tickets profesionales básicos</li>
                  <li>✅ Dashboard con gráficas simples</li>
                  <li>✅ Historial completo de ventas</li>
                  <li>✅ Soporte por WhatsApp en horario comercial</li>
                </ul>
                <p className="text-3xl font-bold text-primary mb-2">$199.900</p>
                <p className="text-sm text-gray-400 mb-4">pago único · licencia de por vida</p>
                <Button className="w-full">COMPRAR AHORA</Button>
              </motion.div>

              {/* CorePOS */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-dark-card rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all"
              >
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-semibold mb-2">⭐ MÁS VENDIDO</div>
                <h3 className="text-2xl font-bold text-primary mb-2">CorePOS Profesional</h3>
                <p className="text-gray-400 mb-4">Sistema avanzado para empresas</p>
                <p className="text-sm text-gray-400 mb-4">Licencia de por vida para 1 PC (ampliable)</p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>✅ Ventas ilimitadas</li>
                  <li>✅ Tickets personalizables con logo</li>
                  <li>✅ Reportes avanzados + exportación a Excel</li>
                  <li>✅ 3 niveles de usuario: admin, vendedor, cajero</li>
                  <li>✅ IVA configurable por producto</li>
                  <li>✅ Instalación remota incluida</li>
                  <li>✅ Capacitación básica por WhatsApp</li>
                  <li>✅ Base de datos local (SQLite)</li>
                  <li>✅ Soporte prioritario 7 días</li>
                </ul>
                <p className="text-3xl font-bold text-primary mb-2">$399.000</p>
                <p className="text-sm text-gray-400 mb-4">pago único · licencia de por vida</p>
                <p className="text-xs text-green-400 mb-4">⚡ Instalación sin costo por tiempo limitado</p>
                <Button className="w-full">SOLICITAR INFORMACIÓN</Button>
              </motion.div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 text-center border border-white/10">
            <h2 className="text-2xl font-bold mb-4">¿HABLAMOS SIN COMPROMISO?</h2>
            <p className="text-gray-400 mb-6">
              Cuéntanos qué necesitas y te aconsejamos la mejor opción. Sin presión, sin letra pequeña.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[200px]">
                <FaWhatsapp className="mr-2" />
                INICIAR CONVERSACIÓN
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <FaShieldAlt className="mr-2" />
                Ver más
              </Button>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>📱 Respondemos en máximo 15 minutos · WhatsApp directo con desarrolladores</p>
              <p>🕐 Lunes a Vie 8:00 AM - 6:00 PM · Sábados 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
