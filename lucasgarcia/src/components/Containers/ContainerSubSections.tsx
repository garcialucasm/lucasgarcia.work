"use client"

import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { useFramerMotion } from "@/context/framerMotion"

function ContainerSubSections({ children }: { children: React.ReactNode }) {
  const { motion } = useFramerMotion()
  const { selected } = useToggleBackFrontContext()
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`group flex w-full flex-col items-center gap-8 rounded-2xl border border-neutral-500 border-opacity-10 p-8 shadow-lg lg:flex-row lg:items-start lg:p-16 ${selected === ToggleButtonOptions.BACKEND ? "shadow-black" : "bg-white bg-opacity-20"}`}
    >
      {children}
    </motion.div>
  )
}

ContainerSubSections.propTypes = {}

export default ContainerSubSections
