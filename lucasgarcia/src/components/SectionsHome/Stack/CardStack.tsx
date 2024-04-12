"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

function CardStack({
  children,
  stackName,
}: {
  children: React.ReactNode
  stackName: string
}) {
  const { selected } = useToggleBackFrontContext()
  return (
    <div
      className={`group flex h-24 items-center justify-center gap-x-8 rounded-2xl transition-all lg:hover:scale-110 lg:hover:shadow-xl bg-opacity-60 ${selected === ToggleButtonOptions.BACKEND ? "bg-black" : "bg-white"}`}
      title={stackName}
    >
      {children}
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
