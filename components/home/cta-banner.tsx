"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Ready to Join Stella Maris?</h2>
          <p className="text-lg mb-8 opacity-90">Begin your journey towards academic excellence and personal growth.</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/admission"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
