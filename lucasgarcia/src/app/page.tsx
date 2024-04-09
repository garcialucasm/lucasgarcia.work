"use client"

import ContainerContent from "@/components/Containers/ContainerContent"
import HeroSection from "@/components/Hero/HeroSection"
import Stack from "@/components/SectionsHome/Stack"
import SelectedCases from "@/components/SectionsHome/SelectedCases"
import About from "@/components/SectionsHome/About"
import Contact from "@/components/SectionsHome/Contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContainerContent>
        <About />
        <Stack />
        <SelectedCases />
        <Contact />
      </ContainerContent>
    </>
  )
}
