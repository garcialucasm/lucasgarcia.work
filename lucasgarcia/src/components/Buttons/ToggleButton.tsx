"use client"

import { useState } from "react"
import { FaReact } from "react-icons/fa"
import { PiGearBold } from "react-icons/pi"
import { motion } from "framer-motion"

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"

interface ToggleButtonProps {
  optionA: string
  optionB: string
  childOptionA: React.ReactNode
  childOptionB: React.ReactNode
}

interface SliderToggleProps {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  optionA: string
  optionB: string
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  optionA,
  optionB,
  childOptionA,
  childOptionB,
}) => {
  const [selected, setSelected] = useState(optionA)
  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="flex w-fit rounded-full border bg-gradient-to-b from-gray-100 to-gray-200 p-2 drop-shadow-xl">
          <SliderToggle
            selected={selected}
            setSelected={setSelected}
            optionA={optionA}
            optionB={optionB}
          />
        </div>
      </div>
      <div
        className={`bg-gray-50" } grid h-full place-content-center rounded-xl p-8
        transition-colors`}
      >
        <div className={``}>
          {selected === optionA && childOptionA}
          {selected === optionB && childOptionB}
        </div>
      </div>
    </>
  )
}

const SliderToggle: React.FC<SliderToggleProps> = ({
  selected,
  setSelected,
  optionA,
  optionB,
}) => {
  return (
    <div className="relative flex w-fit items-center text-gray-600">
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionA && "text-blue-800"}`}
        onClick={() => {
          setSelected(optionA)
        }}
      >
        <div className="flex items-center gap-x-2 p-4 text-lg font-bold">
          <FaReact
            className={`${selected === optionA && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className="relative z-10">{optionA}</span>
        </div>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === optionB && "text-blue-800"}`}
        onClick={() => {
          setSelected(optionB)
        }}
      >
        <div className="flex items-center gap-x-2 p-4 text-lg font-bold">
          <PiGearBold
            className={`${selected === optionB && "animate-spin-slow"} relative z-10 text-xl`}
          />
          <span className="relative z-10">{optionB}</span>
        </div>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === optionB ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{
            type: "tween",
            damping: 15,
            stiffness: 250,
            duration: 0.2,
          }}
          className={`h-full w-1/2 rounded-full bg-white`}
        />
      </div>
    </div>
  )
}
