"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 XXX XXX XXXX", "+234 XXX XXX XXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@stellamaris.edu.ng", "admissions@stellamaris.edu.ng"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Education Avenue", "Lagos, Nigeria"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
  },
]

export default function ContactInfo() {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Contact us using any of the methods below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <Icon className="text-secondary" size={28} />
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">{detail.title}</h3>
                <div className="space-y-1">
                  {detail.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
