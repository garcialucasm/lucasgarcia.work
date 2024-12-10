"use client"

import ContainerPage from "@/components/Containers/ContainerPage"
import HeroSection from "@/components/Hero/HeroSection"
import Stack from "@/components/SectionsHome/Stack"
import SelectedCases from "@/components/SectionsHome/SelectedCases"
import About from "@/components/SectionsHome/About"
import Contact from "@/components/SectionsHome/Contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContainerPage>
        <About />
        <Stack />
        <SelectedCases />
        <Contact />
      </ContainerPage>
    </>
  )
}
