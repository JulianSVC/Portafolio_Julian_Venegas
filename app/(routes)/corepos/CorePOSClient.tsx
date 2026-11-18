"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import {
  FaWhatsapp,
  FaShieldAlt,
  FaDatabase,
  FaMoon,
  FaPrint,
  FaChartBar,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa"

export default function CorePOSClient() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm text-primary mb-4">🇨🇴 Hecho en Colombia</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                CorePOS Pro
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
              ¿Sabes realmente cuánto ganas cada día en tu negocio?
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-2">
              Sistema de punto de venta local para tiendas pequeñas en Colombia.
              <br />
              <span className="text-primary">Deja de perder dinero por no llevar un control claro de tus ventas.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <FaDatabase className="text-3xl text-cyan-400" />, title: "Inventario Real", desc: "Agrega, edita y organiza tus productos con un par de clics." },
              { icon: <FaMoon className="text-3xl text-purple-400" />, title: "Modo Oscuro", desc: "Trabaja con comodidad en cualquier horario." },
              { icon: <FaPrint className="text-3xl text-blue-400" />, title: "Tickets profesionales", desc: "Con el nombre de tu negocio, NIT e IVA incluido." },
              { icon: <FaChartBar className="text-3xl text-green-400" />, title: "Reportes diarios", desc: "Sabes cuánto vendiste hoy, ayer o el mes pasado." },
              { icon: <FaUsers className="text-3xl text-orange-400" />, title: "Usuarios separados", desc: "Admin, vendedor y cajero con diferentes permisos." },
              { icon: <FaMoneyBillWave className="text-3xl text-yellow-400" />, title: "IVA configurable", desc: "19%, 5%, 0% o el que necesites." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-dark-card rounded-xl p-6 text-center border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 border border-white/10 mb-12">
            <div className="max-w-md mx-auto bg-dark-card rounded-2xl p-6 border border-primary/30">
              <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-semibold mb-2 mx-auto block text-center">⭐ LANZAMIENTO</div>
              <h3 className="text-2xl font-bold text-center text-primary mb-2">CorePOS Profesional</h3>
              <p className="text-4xl font-bold text-center text-white mb-2">$399.000</p>
              <p className="text-center text-gray-400 text-sm mb-4">pago único</p>
              <p className="text-center text-xs text-green-400 mb-4">⚡ Instalación sin costo - primeros 20 negocios</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>✅ Ventas ilimitadas</li>
                <li>✅ Tickets personalizados</li>
                <li>✅ Reportes + Excel</li>
                <li>✅ Usuarios: admin, vendedor, cajero</li>
                <li>✅ IVA configurable</li>
                <li>✅ Instalación remota incluida</li>
                <li>✅ Capacitación por WhatsApp</li>
              </ul>
              <Button className="w-full">
                <FaWhatsapp className="mr-2" />
                SOLICITAR INFORMACIÓN
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">¿Listo para controlar tus ventas?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[200px]">
                <FaWhatsapp className="mr-2" />
                Contáctame
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <FaShieldAlt className="mr-2" />
                Ver Demo
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">Instalación sin costo • Pago único • Soporte directo</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}