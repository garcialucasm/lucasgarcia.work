import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Header/Navbar"
import HeroSection from "@/components/Hero/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <HeroSection />
      </div>
      <Footer />
    </main>
  )
}
