"use client"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "@/components/Others/TitleLabel"
import BackendStack from "./Stack/BackendStack"
import FrontendStack from "./Stack/FrontendStack"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"

function Stack() {
  const { selected } = useToggleBackFrontContext()
  return (
    <div id="stack-section">
      <ContainerSections>
        <TitleLabel>Tech Stack</TitleLabel>
        {selected === ToggleButtonOptions.FRONTEND && <FrontendStack />}
        {selected === ToggleButtonOptions.BACKEND && <BackendStack />}
      </ContainerSections>
    </div>
  )
}

export default Stack
