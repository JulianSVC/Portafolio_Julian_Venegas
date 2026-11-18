"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa"
import { Project } from "@/types"

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all group shadow-xl hover:shadow-2xl shadow-primary/5"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="w-full h-full flex items-center justify-center text-6xl">
          {project.category === "web" && "🌐"}
          {project.category === "mobile" && "📱"}
          {project.category === "desktop" && "💻"}
          {project.category === "ai" && "🤖"}
          {project.category === "design" && "🎨"}
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            <FaStar size={12} />
            Destacado
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5 hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Acciones */}
        <div className="flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              <FaExternalLinkAlt className="inline mr-2" />
              Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary/30 rounded-lg text-sm hover:bg-primary/10 transition-colors"
            >
              <FaGithub className="inline" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
