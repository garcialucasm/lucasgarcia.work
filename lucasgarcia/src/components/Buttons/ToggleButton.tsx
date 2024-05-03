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
      className={`flex w-fit rounded-full border border-white border-opacity-10 bg-opacity-5 p-2 ${selected === ToggleButtonOptions.BACKEND ? "bg-black shadow-inner-bottom-dark md:shadow-inner-top-dark" : "bg-black shadow-inner-bottom-light md:shadow-inner-top-light"}`}
    >
      <SliderToggle optionA={optionA} optionB={optionB} />
    </div>
  )
}
