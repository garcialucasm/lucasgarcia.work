"use client"

import Image from "next/image"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "@/components/Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"
import ContainerSubSections from "@/components/Containers/ContainerSubSections"
import DescriptionLabel from "@/components/Others/DescriptionLabel"
import ImageSmall from "@/components/Others/ImageSmall"
import SubtitleLabel from "@/components/Others/SubtitleCasesLabel"
import StackLabel from "@/components/Others/StackLabel"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import TitleCasesLabel from "../Others/TitleCasesLabel"

const repoOwner = "garcialucasm"
const repoName = "ipc-bike-app"

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
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

function SelectedCases() {
  const { selected } = useToggleBackFrontContext()
  const [stacksFrontend] = useState([
    { name: "Next.js" },
    { name: "React.js" },
    { name: "Typescript" },
    { name: "Tailwind CSS" },
    { name: "Winston" },
  ])
  const [stackBackend] = useState([
    { name: "Node.js" },
    { name: "Typescript" },
    { name: "PostgreSQL" },
    { name: "Express.js" },
    { name: "Mocha Test" },
    { name: "REST API" },
    { name: "Winston" },
  ])

  const [versionIpcBike, setVersionIpcBike] = useState("")

  useEffect(() => {
    const fetchVersion = async () => {
      fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/tags`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          setVersionIpcBike(data[0]["name"])
        })
        .catch((error) => {
          console.error("Error fetching latest version of IPC Bike:", error)
        })
    }

    fetchVersion()
  }, [])

  return (
    <div id="cases">
      <ContainerSections>
        <TitleLabel>Selected Cases</TitleLabel>
        <ContainerSubSections>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <ImageSmall>
              <Image
                src="/dk-square.png"
                width={200}
                height={200}
                alt="Denmark Flag"
              />
            </ImageSmall>
            <div className="flex flex-col gap-y-1">
              <TitleCasesLabel>{`IPC Bike`}</TitleCasesLabel>
              <SubtitleLabel>Web App Booking System</SubtitleLabel>
            </div>
            <DescriptionLabel>
              Web application for bicycle management at International
              People&apos;s College in Denmark. The project aims to manage
              college bicycles for admins, students, and professors through a
              reservation system.
            </DescriptionLabel>
            <div className="flex flex-col gap-4 text-sm">
              <div className="font-semibold uppercase">
                Production Version:{" "}
                <span className="mx-1 text-nowrap rounded-md bg-amber-100 px-2 py-1 text-xs font-normal text-amber-700">
                  {versionIpcBike && versionIpcBike.includes("v0.0.")
                    ? "Alpha "
                    : versionIpcBike && versionIpcBike.includes("v0.")
                      ? "Beta "
                      : ""}
                  {versionIpcBike && versionIpcBike
                    ? versionIpcBike && versionIpcBike
                    : "Please, check on github"}
                </span>
              </div>
              <div className="font-semibold">
                LINK:{" "}
                <a
                  href="https://ipc.bike/"
                  className="text-nowrapp x-2 mx-1 py-1 font-normal text-blue-500 underline"
                >
                  ipc.bike
                </a>
              </div>
              <div className="font-semibold">
                PROJECT OVERVIEW:{" "}
                <a
                  href="https://ipc.bike/web/project"
                  target="_blanc"
                  className="text-nowrapp x-2 mx-1 py-1 font-normal text-blue-500 underline"
                >
                  ipc.bike/web/project
                </a>
              </div>
              <div className="font-semibold uppercase">
                {selected} Tech Stack:
              </div>
              {selected === ToggleButtonOptions.BACKEND && (
                <motion.ul
                  className="flex flex-wrap items-center gap-2 text-sm"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stackBackend.map((stacks) => (
                    <motion.li
                      key={stacks.name}
                      className="item"
                      variants={item}
                    >
                      {" "}
                      <StackLabel>{stacks.name}</StackLabel>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
              {selected === ToggleButtonOptions.FRONTEND && (
                <motion.ul
                  className="flex flex-wrap items-center gap-2 text-sm"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stacksFrontend.map((stack) => (
                    <motion.li
                      key={stack.name}
                      className="item"
                      variants={item}
                    >
                      {" "}
                      <StackLabel>{stack.name}</StackLabel>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </div>
          <div className="transform-gpu transition-transform duration-300 lg:group-hover:scale-125">
            <Image
              src="/ipc-bike-mockup.png"
              width={720}
              height={496}
              alt="Mockup IPC Bike"
              className={`${selected === ToggleButtonOptions.BACKEND && "hidden"}`}
            />
            <Image
              src="/ipc-bike-mockup-backend.png"
              width={720}
              height={496}
              alt="Mockup IPC Bike"
              className={`${selected === ToggleButtonOptions.FRONTEND && "hidden"}`}
            />
          </div>
        </ContainerSubSections>
      </ContainerSections>
    </div>
  )
}

export default SelectedCases
