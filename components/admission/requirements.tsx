"use client"

import { motion } from "framer-motion"

const requirements = [
  {
    category: "Academic Requirements",
    items: [
      "Previous school report cards and transcripts",
      "Birth certificate or national ID",
      "Medical examination report",
      "Immunization records",
    ],
  },
  {
    category: "Documentation",
    items: [
      "Completed application form",
      "Parent/Guardian identification",
      "Proof of residence",
      "Passport-sized photographs (4)",
    ],
  },
  {
    category: "Assessment",
    items: ["English Language test", "Mathematics test", "General Knowledge assessment", "Personal interview"],
  },
]

export default function Requirements() {
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Admission Requirements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensure you have all necessary documents and meet the requirements for a smooth admission process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-6">{req.category}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
