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
      className={`group flex h-20 sm:h-24 items-center justify-center gap-x-2 sm:gap-x-8 rounded-2xl border border-neutral-500 border-opacity-10 shadow-lg transition-all lg:hover:scale-110 lg:hover:shadow-xl ${selected === ToggleButtonOptions.BACKEND ? "lg:hover:shadow-black shadow-black bg-neutral-900" : "bg-white bg-opacity-20"}`}
      title={stackName}
    >
      {children}
      <span>{stackName}</span>
    </div>
  )
}

CardStack.propTypes = {}

export default CardStack
