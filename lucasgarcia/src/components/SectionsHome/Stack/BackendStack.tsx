"use client"

import { GiGears } from "react-icons/gi"
import { HiDatabase } from "react-icons/hi"
import { IoLogoNodejs } from "react-icons/io5"
import { SiJavascript, SiMocha } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { FaGithub, FaPython } from "react-icons/fa"
import CardStack from "./CardStack"
import { BiLogoPostgresql } from "react-icons/bi"
import ContainerStack from "@/components/Containers/ContainerStack"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"

export default function BackendStack() {
  const { selected } = useToggleBackFrontContext()
  return (
    <ContainerStack>
      <CardStack stackName="JavaScript">
        <>
          <span className="text-xl transition-all group-hover:scale-150 group-hover:text-yellow-400">
            <SiJavascript size={38} />
          </span>
        </>
      </CardStack>
      <CardStack stackName="TypeScript">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-blue-500">
          <SiTypescript size={38} />
        </span>
      </CardStack>
      <CardStack stackName="Python">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-yellow-400">
          <FaPython size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Node.js">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-green-500">
          <IoLogoNodejs size={42} />
        </span>
      </CardStack>
      <CardStack stackName="MySQL">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-indigo-500">
          <HiDatabase size={42} />
        </span>
      </CardStack>
      <CardStack stackName="PostgreSQL">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-blue-600">
          <BiLogoPostgresql size={42} />
        </span>
      </CardStack>
      <CardStack stackName="REST Api">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-teal-500">
          <GiGears size={38} />
        </span>
      </CardStack>
      <CardStack stackName="Unit Test">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-amber-500">
          <SiMocha size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Express.js">
        <span className="bg-slate-100 px-0.5 py-1 text-xl text-neutral-950 transition-all group-hover:scale-150 group-hover:bg-rose-500">
          <span className="p-1 text-xl font-light">ex</span>
        </span>
      </CardStack>
      <CardStack stackName="Git & GitHub">
        <span
          className={`text-xl transition-all group-hover:scale-150 ${selected === ToggleButtonOptions.BACKEND ? "group-hover:text-white" : "group-hover:text-black"}`}
        >
          <FaGithub size={42} />
        </span>
      </CardStack>
    </ContainerStack>
  )
}
