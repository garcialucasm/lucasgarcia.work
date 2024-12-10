"use client"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { ToggleButton } from "./ToggleButton"

function ToggleBackFront() {
  return (
    <>
      <ToggleButton
        optionA={ToggleButtonOptions.FRONTEND}
        optionB={ToggleButtonOptions.BACKEND}
      />
    </>
  )
}

export default ToggleBackFront
