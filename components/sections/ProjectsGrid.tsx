"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import { Project } from "@/types"
import { projects } from "@/lib/data/projects"

const categories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Móvil" },
  { id: "desktop", label: "Escritorio" },
  { id: "ai", label: "IA" },
  { id: "design", label: "Diseño" },
]

export const ProjectsGrid = () => {
  const [filter, setFilter] = useState<string>("all")
  const [search, setSearch] = useState<string>("")

  const filteredProjects = projects.filter((project: Project) => {
    const matchFilter = filter === "all" || project.category === filter
    const matchSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                       project.description.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <section id="projects" className="py-20 px-4 bg-dark-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Mis Proyectos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora mi trabajo y experiencia en desarrollo de software
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={search}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-gray-500"
          />
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12">
                <p className="text-2xl mb-2">🔍</p>
                <p>No se encontraron proyectos</p>
              </div>
            ) : (
              filteredProjects.map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
