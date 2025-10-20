"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Excellence in Education",
    description: "Nurturing young minds with world-class education and values",
    image: "/students-in-classroom.jpg",
    buttons: [
      { label: "Learn More", href: "/about", variant: "secondary" },
      { label: "Apply Now", href: "/admission", variant: "primary" },
    ],
  },
  {
    id: 2,
    title: "Modern Learning Environment",
    description: "State-of-the-art facilities designed for 21st-century learning",
    image: "/modern-school-building.jpg",
    buttons: [
      { label: "Learn More", href: "/about", variant: "secondary" },
      { label: "Apply Now", href: "/admission", variant: "primary" },
    ],
  },
  {
    id: 3,
    title: "Holistic Development",
    description: "Developing leaders through academics, sports, and character building",
    image: "/students-playing-sports.jpg",
    buttons: [
      { label: "Learn More", href: "/about", variant: "secondary" },
      { label: "Apply Now", href: "/admission", variant: "primary" },
    ],
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white max-w-3xl px-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-5xl md:text-6xl font-heading font-bold mb-4 text-balance"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-lg md:text-xl mb-8 text-gray-100"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="flex gap-4 justify-center flex-wrap"
                    >
                      {slide.buttons.map((button) => (
                        <Link
                          key={button.label}
                          href={button.href}
                          className={`px-8 py-3 rounded-lg font-medium transition-all ${
                            button.variant === "primary"
                              ? "bg-primary text-primary-foreground hover:opacity-90"
                              : "bg-secondary text-secondary-foreground hover:opacity-90"
                          }`}
                        >
                          {button.label}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            className={`h-2 rounded-full transition-all ${index === current ? "bg-secondary w-8" : "bg-white/50 w-2"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
