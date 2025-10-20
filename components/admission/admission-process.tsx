"use client"

import { motion } from "framer-motion"
import { CheckCircle, FileText, Users, Award } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Complete the online application form with required documents and information.",
  },
  {
    icon: Users,
    title: "Assessment & Interview",
    description: "Participate in entrance examinations and interviews to assess academic readiness.",
  },
  {
    icon: CheckCircle,
    title: "Review & Decision",
    description: "Our admissions team reviews your application and communicates the decision.",
  },
  {
    icon: Award,
    title: "Enrollment",
    description: "Complete enrollment procedures and join our Stella Maris family.",
  },
]

export default function AdmissionProcess() {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Admission Process</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to begin your journey at Stella Maris International Academy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card rounded-lg p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <Icon className="text-secondary" size={28} />
                    </div>
                    <div className="text-3xl font-heading font-bold text-secondary/30">{index + 1}</div>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary/30" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
