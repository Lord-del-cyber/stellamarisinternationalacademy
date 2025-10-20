import HeroSlider from "@/components/home/hero-slider"
import VisionMission from "@/components/home/vision-mission"
import Programs from "@/components/home/programs"
import Testimonials from "@/components/home/testimonials"
import CTABanner from "@/components/home/cta-banner"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <VisionMission />
      <Programs />
      <Testimonials />
      <CTABanner />
    </main>
  )
}
