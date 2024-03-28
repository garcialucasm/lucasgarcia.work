"use client"

import { ToggleButtonProps } from "@/types/ToggleButtons"
import { SliderToggle } from "./modules/SliderToggle"

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
}) => {
  return (
      <div className="flex w-fit rounded-full border border-slate-300 bg-white p-2 shadow-xl md:shadow-none">
        <SliderToggle optionA={optionA} optionB={optionB} />
      </div>
  )
}
