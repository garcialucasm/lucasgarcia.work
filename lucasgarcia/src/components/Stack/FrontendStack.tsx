"use client"

import { GiGears } from "react-icons/gi"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import CardStack from "./CardStack"
import { FaCss3Alt, FaGithub, FaHtml5, FaReact, FaWordpress } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { DiJavascript } from "react-icons/di"
import { TiZoom } from "react-icons/ti"

export default function FrontendStack() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 font-semibold">
      <CardStack stackName="HTML">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-orange-500">
          <FaHtml5 size={42} />
        </span>
      </CardStack>
      <CardStack stackName="CSS">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-sky-500">
          <FaCss3Alt size={42} />
        </span>
      </CardStack>
      <CardStack stackName="JavaScript">
        <>
          <span className="text-xl transition-all group-hover:scale-150 group-hover:text-yellow-400">
            <DiJavascript size={42} />
          </span>
        </>
      </CardStack>
      <CardStack stackName="TypeScript">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-blue-500">
          <SiTypescript size={42} />
        </span>
      </CardStack>
      <CardStack stackName="React.js">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-violet-600">
          <FaReact size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Next.js">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-black">
          <SiNextdotjs size={42} />
        </span>
      </CardStack>
      <CardStack stackName="REST Api">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-teal-500">
          <GiGears size={38} />
        </span>
      </CardStack>
      <CardStack stackName="Bootstrap CSS">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-purple-700">
          <BsBootstrap size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Tailwind CSS">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-sky-500">
          <SiTailwindcss size={42} />
        </span>
      </CardStack>
      <CardStack stackName="SEO">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-green-500">
          <TiZoom size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Wordpress">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-blue-600">
          <FaWordpress size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Git & GitHub">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-black">
          <FaGithub size={42} />
        </span>
      </CardStack>
    </div>
  )
}
