"use client"

import TitleLabel from "@/components/Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"

function About() {
  const { selected } = useToggleBackFrontContext()
  return (
    <div id="stack-section">
      <ContainerSections>
        <TitleLabel>About me</TitleLabel>
      </ContainerSections>
    </div>
  )
}

export default About
