"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mrs. Adeyemi",
    role: "Parent",
    content:
      "Stella Maris has transformed my child's academic journey. The teachers are dedicated and the facilities are world-class.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chioma Okafor",
    role: "Student",
    content: "I love the supportive environment and the diverse programs. I've grown both academically and personally.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Oluwaseun",
    role: "Parent",
    content:
      "The holistic approach to education at Stella Maris is exceptional. My son has developed confidence and leadership skills.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from our students and parents about their experience at Stella Maris.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-lg p-8 md:p-12 text-center"
                  >
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={20} className="fill-secondary text-secondary" />
                      ))}
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                    <div>
                      <p className="font-heading font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-muted w-2"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
