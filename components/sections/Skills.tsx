"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data/skills"
import { Skill } from "@/types"

export const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Habilidades
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo diariamente
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group"
            >
              <div className="bg-dark-card p-5 rounded-xl text-center hover:shadow-xl transition-all border border-white/5 hover:border-primary/30">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-sm mb-2">{skill.name}</h3>
                <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
