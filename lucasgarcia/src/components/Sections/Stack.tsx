"use client"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { ToggleButton } from "../Buttons/ToggleButton"
import TitleLabel from "../Others/TitleLabel"
import BackendStack from "../Stack/BackendStack"
import FrontendStack from "../Stack/FrontendStack"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"

function Stack() {
  const { selected } = useToggleBackFrontContext()
  return (
    <>
      <div className="flex flex-col">
        <ToggleButton
          optionA={ToggleButtonOptions.FRONTEND}
          optionB={ToggleButtonOptions.BACKEND}
        />
        <div className="h-full w-full rounded-xl bg-gray-200"></div>
        <TitleLabel>Tech Stack</TitleLabel>
        {selected === ToggleButtonOptions.FRONTEND && <FrontendStack />}
        {selected === ToggleButtonOptions.BACKEND && <BackendStack />}
      </div>
    </>
  )
}

export default Stack
