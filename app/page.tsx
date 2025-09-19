import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CourseGallery } from "@/components/course-gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CourseGallery />
      </main>
      <Footer />
    </div>
  )
}
