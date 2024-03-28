"use client"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "../Others/TitleLabel"
import BackendStack from "./Stack/BackendStack"
import FrontendStack from "./Stack/FrontendStack"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "../Containers/ContainerSections"

function Stack() {
  const { selected } = useToggleBackFrontContext()
  return (
    <ContainerSections>
      <TitleLabel>Tech Stack</TitleLabel>
      {selected === ToggleButtonOptions.FRONTEND && <FrontendStack />}
      {selected === ToggleButtonOptions.BACKEND && <BackendStack />}
    </ContainerSections>
  )
}

export default Stack
