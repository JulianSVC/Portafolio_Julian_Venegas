import { Skill } from "@/types"

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: "🌐", level: 80, category: "frontend" },
  { name: "CSS", icon: "🎨", level: 75, category: "frontend" },
  { name: "JavaScript", icon: "⚡", level: 70, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "🟢", level: 60, category: "backend" },
  { name: "Python", icon: "🐍", level: 60, category: "backend" },
  
  // Database
  { name: "SQL", icon: "🗄️", level: 75, category: "database" },
  { name: "MySQL", icon: "🗄️", level: 70, category: "database" },
  { name: "Power BI", icon: "📊", level: 80, category: "database" },
  { name: "Excel", icon: "📈", level: 75, category: "database" },
  { name: "Power Query", icon: "🔄", level: 75, category: "database" },
  
  // DevOps
  { name: "Git", icon: "📝", level: 70, category: "devops" },
]
