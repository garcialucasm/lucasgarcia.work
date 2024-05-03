"use client"

import { GiGears } from "react-icons/gi"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import CardStack from "./CardStack"
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaWordpress,
} from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { TiZoom } from "react-icons/ti"
import { useState } from "react"
import { delay, motion } from "framer-motion"

const stacks = [
  { name: "HTML5", icon: FaHtml5, size: 42, hoverColor: "orange-500" },
  { name: "CSS3", icon: FaCss3Alt, size: 42, hoverColor: "purple-500" },
  {
    name: "JavaScript",
    icon: DiJavascript,
    size: 42,
    hoverColor: "yellow-400",
  },
  { name: "TypeScript", icon: SiTypescript, size: 42, hoverColor: "blue-500" },
  { name: "React.js", icon: FaReact, size: 42, hoverColor: "violet-600" },
  { name: "Next.js", icon: SiNextdotjs, size: 42, hoverColor: "black" },
  { name: "REST Api", icon: GiGears, size: 38, hoverColor: "teal-500" },
  { name: "Tailwind", icon: SiTailwindcss, size: 42, hoverColor: "purple-500" },
  { name: "Bootstrap", icon: BsBootstrap, size: 42, hoverColor: "purple-700" },
  { name: "SEO", icon: TiZoom, size: 42, hoverColor: "green-500" },
  { name: "Wordpress", icon: FaWordpress, size: 42, hoverColor: "purple-600" },
  { name: "Git & GitHub", icon: FaGithub, size: 42, hoverColor: "black" },
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

export default function FrontendStack() {
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
              className={`text-xl transition-all group-hover:scale-150 group-hover:text-${stack.hoverColor}`}
            >
              <stack.icon size={stack.size} />
            </span>
          </CardStack>
        </motion.li>
      ))}
    </motion.ul>
  )
}
