"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

function ContainerSubSections({ children }: { children: React.ReactNode }) {
  const { selected } = useToggleBackFrontContext()
  return (
    <div
      className={`group flex w-full flex-col items-center gap-8 rounded-2xl px-8 py-8 lg:px-16 transition-all duration-500 lg:hover:scale-105 hover:shadow-center-xl lg:flex-row lg:items-start ${selected === ToggleButtonOptions.BACKEND ? "bg-black bg-opacity-30" : "bg-white bg-opacity-60"}`}
    >
      {children}
    </div>
  )
}

ContainerSubSections.propTypes = {}

export default ContainerSubSections
