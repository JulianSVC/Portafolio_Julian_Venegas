export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    id: "1",
    position: "Analista de Datos",
    company: "DGC SOLUTIONS SAS",
    period: "Jul 2025 - Dic 2025",
    description: "Análisis y visualización de datos, creación de dashboards en Power BI, elaboración de reportes e indicadores para apoyar la toma de decisiones.",
  },
  {
    id: "2",
    position: "Desarrollador Full Stack – Sistema POS",
    company: "Boutique Jazz",
    period: "Nov 2025 - Abr 2026",
    description: "Desarrollo integral de un sistema POS para gestionar ventas, clientes, inventario, deudores, tickets y estadísticas, digitalizando procesos anteriormente realizados en Excel.",
  },
  {
    id: "3",
    position: "Soporte TI con enfoque en seguridad",
    company: "J&M Inversiones",
    period: "Ene 2025 - Jun 2025",
    description: "Soporte a usuarios y equipos, control de accesos, aplicación de buenas prácticas de seguridad y atención de incidentes.",
  },
  {
    id: "4",
    position: "Almacenista",
    company: "Instituto Municipal de Cultura y Turismo de Cajicá",
    period: "Feb 2024 - Dic 2024",
    description: "Control de inventarios, organización de materiales, actualización de registros y apoyo en procesos de distribución y seguimiento.",
  },
]
