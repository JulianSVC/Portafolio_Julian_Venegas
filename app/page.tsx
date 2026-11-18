import { Hero } from "@/components/sections/Hero"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Education } from "@/components/sections/Education"
import { Certificates } from "@/components/sections/Certificates"
import { Contact } from "@/components/sections/Contact"
import { certificates } from "@/lib/data/certificates"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsGrid />
      <Experience />
      <Skills />
      <Education />
      <Certificates certificates={certificates} />
      <Contact />
    </main>
  )
}
