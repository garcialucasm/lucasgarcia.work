"use client"

import { GiGears } from "react-icons/gi"
import { HiDatabase } from "react-icons/hi"
import { IoLogoNodejs } from "react-icons/io5"
import {
  SiExpress,
  SiJavascript,
  SiLinux,
  SiDocker,
  SiSwagger,
  SiTypescript,
  SiSqlite,
} from "react-icons/si"
import { FaGithub, FaPython } from "react-icons/fa"
import CardStack from "./CardStack"
import { BiLogoPostgresql } from "react-icons/bi"
import { BiLogoMongodb } from "react-icons/bi"
import { GrTest } from "react-icons/gr"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { useState } from "react"
import { useFramerMotion } from "@/context/framerMotion"

const stacks = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    size: 38,
    hoverColor: "group-hover:text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    size: 38,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "Python",
    icon: FaPython,
    size: 42,
    hoverColor: "group-hover:text-yellow-400",
  },
  {
    name: "Node.js",
    icon: IoLogoNodejs,
    size: 42,
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "MySQL",
    icon: HiDatabase,
    size: 42,
    hoverColor: "group-hover:text-indigo-500",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    size: 42,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    size: 42,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "MongoDB",
    icon: BiLogoMongodb,
    size: 42,
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "Unit Tests",
    icon: GrTest,
    size: 36,
    hoverColor: "group-hover:text-yellow-500",
  },
  {
    name: "Integr. Tests",
    icon: GrTest,
    size: 36,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "Load Tests",
    icon: GrTest,
    size: 36,
    hoverColor: "group-hover:text-green-600",
  },
  {
    name: "E2E Tests",
    icon: GrTest,
    size: 36,
    hoverColor: "group-hover:text-pink-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    size: 42,
    hoverColor: "group-hover:text-red-300",
  },
  {
    name: "REST Api",
    icon: GiGears,
    size: 38,
    hoverColor: "group-hover:text-teal-500",
  },
  {
    name: "Swagger",
    icon: SiSwagger,
    size: 42,
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "Docker",
    icon: SiDocker,
    size: 42,
    hoverColor: "group-hover:text-blue-600",
  },
  {
    name: "Linux",
    icon: SiLinux,
    size: 42,
    hoverColor: "group-hover:text-yellow-400",
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
    size: 42,
    hoverColor: "group-hover:text-white",
  },
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
  const { motion } = useFramerMotion()
  const { selected } = useToggleBackFrontContext()
  const [stackData] = useState(stacks)

  return (
    <motion.ul
      className="grid grid-cols-2 items-center justify-center gap-4 sm:gap-8 font-semibold lg:grid-cols-3 xl:grid-cols-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stackData.map((stack) => (
        <motion.li key={stack.name} className="item" variants={item}>
          <CardStack stackName={stack.name}>
            <span
              className={`text-xl transition-all group-hover:scale-125 sm:group-hover:scale-150 ${stack.hoverColor}`}
            >
              <stack.icon size={stack.size} />
            </span>
          </CardStack>
        </motion.li>
      ))}
    </motion.ul>
  )
}
