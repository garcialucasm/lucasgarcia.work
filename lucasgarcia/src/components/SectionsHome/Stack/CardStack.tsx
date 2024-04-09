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
      className={`group flex h-24 items-center justify-center gap-x-8 rounded-2xl lg:hover:scale-110 lg:hover:shadow-xl ${selected === ToggleButtonOptions.BACKEND ? "bg-neutral-800" : "bg-white"}`}
      title={stackName}
    >
      {children}
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
