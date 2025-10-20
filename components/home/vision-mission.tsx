"use client"

import { motion } from "framer-motion"
import { Eye, Target, Heart } from "lucide-react"

const items = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be a leading international academy that develops globally-minded, compassionate leaders equipped with 21st-century skills.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide world-class education that nurtures academic excellence, character development, and holistic growth.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Excellence, Compassion, Innovation, and Community - guiding every aspect of our educational journey.",
  },
]

export default function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stella Maris International Academy is committed to excellence in education and character development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Icon className="text-secondary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
