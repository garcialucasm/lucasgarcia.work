"use client"

import { ToggleButtonOptions, ToggleButtonProps } from "@/types/ToggleButtons"
import { SliderToggle } from "./modules/SliderToggle"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
}) => {
  const { selected } = useToggleBackFrontContext()
  return (
    <div
      className={`flex w-fit rounded-full border p-2 shadow-xl md:bg-opacity-30 md:shadow-none ${selected === ToggleButtonOptions.BACKEND ? "bg-neutral-700 border-purple-200" : "bg-neutral-100 border-neutral-400"}`}
    >
      <SliderToggle optionA={optionA} optionB={optionB} />
    </div>
  )
}
