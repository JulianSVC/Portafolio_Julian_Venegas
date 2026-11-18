import { ProjectsGrid } from "@/components/sections/ProjectsGrid"

export const metadata = {
  title: "Proyectos | Portafolio",
  description: "Explora mis proyectos de desarrollo web",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectsGrid />
    </main>
  )
}
