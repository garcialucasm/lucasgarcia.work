"use client"

import { GiGears } from "react-icons/gi"
import {
  SiNextdotjs,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import CardStack from "./CardStack"
import {
  FaAngular,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaWordpress,
} from "react-icons/fa"
import { TbBrandCypress } from "react-icons/tb"
import { FaTheaterMasks } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { GrTest } from "react-icons/gr"
import { DiJavascript } from "react-icons/di"
import { TbSettingsSearch } from "react-icons/tb"
import { useState } from "react"
import { useFramerMotion } from "@/context/framerMotion"

const stacks = [
  {
    name: "JavaScript",
    icon: DiJavascript,
    size: 42,
    hoverColor: "group-hover:text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    size: 42,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    size: 42,
    hoverColor: "group-hover:text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    size: 42,
    hoverColor: "group-hover:text-sky-500",
  },
  {
    name: "Angular",
    icon: FaAngular,
    size: 42,
    hoverColor: "group-hover:text-red-600",
  },
  {
    name: "React.js",
    icon: FaReact,
    size: 42,
    hoverColor: "group-hover:text-violet-600",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    size: 42,
    hoverColor: "group-hover:text-black",
  },
  {
    name: "REST Api",
    icon: GiGears,
    size: 38,
    hoverColor: "group-hover:text-teal-500",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    size: 42,
    hoverColor: "group-hover:text-cyan-500",
  },
  {
    name: "Bootstrap",
    icon: BsBootstrap,
    size: 42,
    hoverColor: "group-hover:text-purple-700",
  },
  {
    name: "SEO",
    icon: TbSettingsSearch,
    size: 42,
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "Wordpress",
    icon: FaWordpress,
    size: 42,
    hoverColor: "group-hover:text-sky-800",
  },
  {
    name: "E2E Test",
    icon: GrTest,
    size: 42,
    hoverColor: "group-hover:text-pink-700",
  },
  {
    name: "Playwright",
    icon: FaTheaterMasks,
    size: 42,
    hoverColor: "group-hover:text-green-700",
  },
  {
    name: "Cypress",
    icon: TbBrandCypress,
    size: 42,
    hoverColor: "group-hover:text-cyan-700",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    size: 42,
    hoverColor: "group-hover:text-pink-700",
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
    size: 42,
    hoverColor: "group-hover:text-black",
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

export default function FrontendStack() {
  const { motion } = useFramerMotion()
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
            <span className={`text-xl transition-all group-hover:scale-125 sm:group-hover:scale-150`}>
              <stack.icon size={stack.size} className={`${stack.hoverColor}`} />
            </span>
          </CardStack>
        </motion.li>
      ))}
    </motion.ul>
  )
}
