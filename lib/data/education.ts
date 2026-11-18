export interface Education {
  id: string
  title: string
  institution: string
  date: string
  description?: string
}

export const education: Education[] = [
  {
    id: "1",
    title: "Ingeniería de Sistemas",
    institution: "Corporación Universitaria Minuto de Dios – UNIMINUTO",
    date: "2026-04",
    description: "Formación integral en desarrollo de software, análisis de datos y tecnologías de la información.",
  },
]
