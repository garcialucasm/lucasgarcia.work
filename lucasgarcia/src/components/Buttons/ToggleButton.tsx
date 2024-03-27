"use client"

import { ToggleButtonProps } from "@/types/ToggleButtons"
import { SliderToggle } from "./modules/SliderToggle"

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex w-fit rounded-full border border-gray-300 bg-white p-2 shadow-inner">
          <SliderToggle optionA={optionA} optionB={optionB} />
        </div>
      </div>
    </>
  )
}