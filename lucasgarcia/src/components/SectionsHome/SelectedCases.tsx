"use client"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "../Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "../Containers/ContainerSections"

function SelectedCases() {
  const { selected } = useToggleBackFrontContext()
  return (
    <ContainerSections>
      <TitleLabel>Selected Cases</TitleLabel>
      {selected === ToggleButtonOptions.FRONTEND && <div>Front Selected Cases</div>}
      {selected === ToggleButtonOptions.BACKEND && <div>Back Selected Cases</div>}
    </ContainerSections>
  )
}

export default SelectedCases
