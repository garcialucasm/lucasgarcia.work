import ContainerMain from "@/components/Containers/ContainerMain"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Header/Navbar"
import HeroSection from "@/components/Hero/HeroSection"
import Stack from "@/components/Stack/Stack"
import Projects from "@/components/Work/Projects"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Navbar />
      <ContainerMain>
        <div className="flex flex-col items-center">
          <HeroSection />
        </div>
        <Projects />
        <Stack />
      </ContainerMain>
      <Footer />
    </main>
  )
}
