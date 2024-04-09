"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

function ContainerSelectedCases({ children }: { children: React.ReactNode }) {
  const { selected } = useToggleBackFrontContext()
  return (
    <div className={`group flex w-full flex-col items-center gap-8 rounded-2xl py-8 p-8 transition-all lg:flex-row lg:items-start ${selected === ToggleButtonOptions.BACKEND ? "bg-neutral-950 bg-opacity-50" : "bg-white"}`}>
      {children}
    </div>
  )
}

ContainerSelectedCases.propTypes = {}

export default ContainerSelectedCases
