"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    title: "Classroom Learning",
    image: "/modern-classroom.jpg",
  },
  {
    id: 2,
    title: "Science Lab",
    image: "/science-laboratory.png",
  },
  {
    id: 3,
    title: "Sports Activities",
    image: "/students-sports.jpg",
  },
  {
    id: 4,
    title: "Library",
    image: "/school-library.png",
  },
  {
    id: 5,
    title: "Cultural Events",
    image: "/vibrant-cultural-celebration.png",
  },
  {
    id: 6,
    title: "Campus Grounds",
    image: "/vibrant-school-campus.png",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Campus Gallery</h2>
          <p className="text-lg text-muted-foreground">Explore our modern facilities and vibrant campus life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item.id)}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-video"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <p className="text-white font-heading font-bold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
