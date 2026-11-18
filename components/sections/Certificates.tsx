"use client"

import { motion } from "framer-motion"
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"
import { certificates } from "@/lib/data/certificates"
import { Certificate } from "@/types"

export const Certificates = ({ certificates: certs }: { certificates: Certificate[] }) => {
  return (
    <section className="py-20 px-4 bg-dark-surface/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
              Certificaciones
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Formación continua y certificaciones profesionales
          </p>
        </motion.div>

        <div className="space-y-6">
          {certs.map((cert: Certificate, index: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute left-[-10px] top-6 w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <FaCertificate className="w-3 h-3 text-white" />
              </div>

              <div className="bg-dark-card p-6 rounded-xl hover:shadow-xl transition-shadow border border-white/5 hover:border-primary/20">
                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                <p className="text-primary font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(cert.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {cert.credentialId && (
                  <p className="text-sm text-gray-500 mt-2">
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
                  >
                    Ver credencial
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
