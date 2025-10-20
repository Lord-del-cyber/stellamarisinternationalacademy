"use client"

import { motion } from "framer-motion"
import { BookOpen, Microscope, Music, Trophy } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Rigorous curriculum covering sciences, humanities, and languages with emphasis on critical thinking.",
  },
  {
    icon: Microscope,
    title: "STEM Programs",
    description: "Advanced science, technology, engineering, and mathematics programs with hands-on learning.",
  },
  {
    icon: Music,
    title: "Arts & Culture",
    description: "Music, visual arts, drama, and cultural programs fostering creativity and self-expression.",
  },
  {
    icon: Trophy,
    title: "Sports & Wellness",
    description: "Comprehensive sports programs and wellness initiatives promoting physical health and teamwork.",
  },
]

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to develop well-rounded students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 hover:shadow-lg hover:border-secondary border-2 border-transparent transition-all group cursor-pointer"
              >
                <div className="bg-secondary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
