"use client"

import { GiGears } from "react-icons/gi"
import { HiDatabase } from "react-icons/hi"
import { IoLogoNodejs } from "react-icons/io5"
import { SiExpress, SiJavascript, SiMocha } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { FaGithub, FaPython } from "react-icons/fa"
import CardStack from "./CardStack"
import { BiLogoPostgresql } from "react-icons/bi"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { useState } from "react"
import { motion } from "framer-motion"

const stacks = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    size: 38,
    hoverColor: "group-hover:text-yellow-400",
  },
  { name: "TypeScript", icon: SiTypescript, size: 38, hoverColor: "group-hover:text-blue-500" },
  { name: "Python", icon: FaPython, size: 42, hoverColor: "group-hover:text-yellow-400" },
  { name: "Node.js", icon: IoLogoNodejs, size: 42, hoverColor: "group-hover:text-green-500" },
  { name: "MySQL", icon: HiDatabase, size: 42, hoverColor: "group-hover:text-indigo-500" },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    size: 42,
    hoverColor: "group-hover:text-blue-500",
  },
  { name: "REST Api", icon: GiGears, size: 38, hoverColor: "group-hover:text-teal-500" },
  { name: "Unit Test", icon: SiMocha, size: 42, hoverColor: "group-hover:text-yellow-600" },
  { name: "Express.js", icon: SiExpress, size: 42, hoverColor: "group-hover:text-white" },
  { name: "Git & GitHub", icon: FaGithub, size: 42, hoverColor: "group-hover:text-white" },
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function BackendStack() {
  const { selected } = useToggleBackFrontContext()
  const [stackData] = useState(stacks)

  return (
    <motion.ul
      className="container grid grid-cols-1 items-center justify-center gap-8 font-semibold sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stackData.map((stack) => (
        <motion.li key={stack.name} className="item" variants={item}>
          <CardStack stackName={stack.name}>
            <span
              className={`text-xl transition-all group-hover:scale-150 ${stack.hoverColor}`}
            >
              <stack.icon size={stack.size} />
            </span>
          </CardStack>
        </motion.li>
      ))}
    </motion.ul>
  )
}
