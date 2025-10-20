"use client"

import { motion } from "framer-motion"

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full min-h-96 rounded-lg overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6547897123!2d3.3469!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae5cedc15%3A0x5d6a4bd20fbf50cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Stella Maris Location"
      />
    </motion.div>
  )
}
