export interface Skill {
  name: string
  icon: string
  level: number
  category: "frontend" | "backend" | "database" | "devops" | "design"
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  github?: string
  demo?: string
  featured: boolean
  longDescription?: string
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  image?: string
  link?: string
  skills: string[]
}

export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
}

export interface Education {
  id: string
  title: string
  institution: string
  date: string
  description?: string
}
