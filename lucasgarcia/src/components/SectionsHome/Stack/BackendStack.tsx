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

export default function BackendStack() {
  return (
    <ContainerStack>
      <CardStack stackName="JavaScript">
        <>
          <span className="text-xl group-hover:text-yellow-400 transition-all group-hover:scale-150">
            <SiJavascript size={38} />
          </span>
        </>
      </CardStack>
      <CardStack stackName="TypeScript">
        <span className="text-xl group-hover:text-cyan-500 transition-all group-hover:scale-150">
          <SiTypescript size={38} />
        </span>
      </CardStack>
      <CardStack stackName="Python">
        <span className="text-xl group-hover:text-yellow-400 transition-all group-hover:scale-150">
          <FaPython size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Node.js">
        <span className="text-xl group-hover:text-green-500 transition-all group-hover:scale-150">
          <IoLogoNodejs size={42} />
        </span>
      </CardStack>
      <CardStack stackName="MySQL">
        <span className="text-xl group-hover:text-indigo-500 transition-all group-hover:scale-150">
          <HiDatabase size={42} />
        </span>
      </CardStack>
      <CardStack stackName="PostgreSQL">
        <span className="text-xl group-hover:text-cyan-600 transition-all group-hover:scale-150">
          <BiLogoPostgresql size={42} />
        </span>
      </CardStack>
      <CardStack stackName="REST Api">
        <span className="text-xl group-hover:text-teal-500 transition-all group-hover:scale-150">
          <GiGears size={38} />
        </span>
      </CardStack>
      <CardStack stackName="Unit Test">
        <span className="text-xl group-hover:text-amber-700 transition-all group-hover:scale-150">
          <SiMocha size={42} />
        </span>
      </CardStack>
      <CardStack stackName="Express.js">
        <span className="bg-slate-800 px-0.5 py-1 text-xl text-white group-hover:bg-rose-500 transition-all group-hover:scale-150">
          <span className="font-light p-1 text-xl">ex</span>
        </span>
      </CardStack>
      <CardStack stackName="Git & GitHub">
        <span className="text-xl transition-all group-hover:scale-150 group-hover:text-black">
          <FaGithub size={42} />
        </span>
      </CardStack>
    </ContainerStack>
  )
}
