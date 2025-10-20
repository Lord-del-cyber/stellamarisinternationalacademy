import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"
import Map from "@/components/contact/map"

export default function Contact() {
  return (
    <main>
      <ContactInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ContactForm />
        <Map />
      </div>
    </main>
  )
}
