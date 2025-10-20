"use client"

import { motion } from "framer-motion"

export default function PrincipalMessage() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary/50 rounded-lg overflow-hidden aspect-square">
              <img src="/principal-portrait.png" alt="Principal" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-heading font-bold">
              Dr. Adekunle Okafor
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Principal's Message</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Welcome to Stella Maris International Academy. As Principal, I am proud to lead an institution that has
              consistently demonstrated excellence in education and character development.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our mission is to nurture young minds not just academically, but to develop them into responsible,
              compassionate global citizens. We believe that education extends beyond the classroom—it encompasses the
              development of critical thinking, creativity, and moral values.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every student at Stella Maris is encouraged to discover their unique potential and contribute meaningfully
              to society. We are committed to providing an environment where excellence is pursued, innovation is
              celebrated, and every individual is valued.
            </p>
            <p className="text-primary font-heading font-bold">Together, we are building leaders for tomorrow.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
