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
      className={`flex w-fit rounded-full border border-white border-opacity-10 bg-opacity-50 backdrop-blur p-2 ${selected === ToggleButtonOptions.BACKEND ? "bg-neutral-800 shadow-inner-bottom-dark md:shadow-inner-top-dark" : "bg-white shadow-inner-bottom-light md:shadow-inner-top-light"}`}
    >
      <SliderToggle optionA={optionA} optionB={optionB} />
    </div>
  )
}
