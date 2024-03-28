import ContainerMain from "@/components/Containers/ContainerMain"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Header/Navbar"
import HeroSection from "@/components/Hero/HeroSection"
import Stack from "@/components/SectionsHome/Stack"
import SelectedCases from "@/components/SectionsHome/SelectedCases"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <Navbar />
      <ContainerMain>
        <div className="flex flex-col items-center">
          <HeroSection />
        </div>
        <Stack />
        <SelectedCases />
      </ContainerMain>
      <Footer />
    </main>
  )
}
