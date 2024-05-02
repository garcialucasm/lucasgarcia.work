"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { motion } from "framer-motion"

function ContainerSubSections({ children }: { children: React.ReactNode }) {
  const { selected } = useToggleBackFrontContext()
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`group flex w-full flex-col items-center gap-8 rounded-2xl p-8 transition-shadow duration-500 hover:shadow-center-xl lg:flex-row lg:items-start lg:p-16 ${selected === ToggleButtonOptions.BACKEND ? "bg-black bg-opacity-30" : "bg-white bg-opacity-60"}`}
    >
      {children}
    </motion.div>
  )
}

ContainerSubSections.propTypes = {}

export default ContainerSubSections
