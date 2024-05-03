"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

interface Props {
  children: React.ReactNode
}

function ContainerMain({ children }: Props) {
  const { selected } = useToggleBackFrontContext()
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-center ${selected === ToggleButtonOptions.BACKEND ? "background-mash-dark text-neutral-200" : "background-mash-light"}`}
    >
      {children}
    </main>
  )
}

export default ContainerMain
