"use client"

import { motion } from "framer-motion"

export default function History() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About Stella Maris</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stella Maris International Academy stands as a beacon of educational excellence in Nigeria. Founded with a
            vision to provide world-class education that combines academic rigor with character development, our
            institution has consistently delivered outstanding results and produced leaders in various fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our History</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              With over two decades of educational excellence, Stella Maris has established itself as a premier
              institution. Our commitment to innovation, quality teaching, and holistic development has earned us
              recognition both nationally and internationally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We continue to evolve, embracing modern pedagogical approaches while maintaining our core values of
              integrity, excellence, and compassion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">Core Values</h3>
            <ul className="space-y-4">
              {[
                { title: "Integrity", desc: "Honesty and moral principles in all we do" },
                { title: "Excellence", desc: "Pursuit of the highest standards in education" },
                { title: "Compassion", desc: "Empathy and care for one another" },
                { title: "Innovation", desc: "Embracing new ideas and methodologies" },
                { title: "Community", desc: "Building strong relationships and teamwork" },
              ].map((value, index) => (
                <li key={index} className="border-l-4 border-secondary pl-4">
                  <p className="font-heading font-bold text-primary">{value.title}</p>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
