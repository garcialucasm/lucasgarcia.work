"use client"

import Image from "next/image"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "@/components/Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"
import ContainerSubSections from "@/components/Containers/ContainerSubSections"
import DescriptionLabel from "@/components/Others/DescriptionLabel"
import ImageSmall from "@/components/Others/ImageSmall"
import SubtitleLabel from "@/components/Others/SubtitleLabel"
import StackLabel from "@/components/Others/StackLabel"
// import { useEffect, useState } from "react"

// const repoOwner = "garcialucasm"
// const repoName = "ipc-bike-app"
let versionIpcBike = "Alpha 0.0.3"

function SelectedCases() {
  const { selected } = useToggleBackFrontContext()

  // const [versionIpcBike, setVersionIpcBike] = useState(null)

  // useEffect(() => {
  //   const fetchVersion = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`,
  //         { cache: "no-store" }
  //       )
  //       const data = await response.json()
  //       setVersionIpcBike(data.tag_name)
  //     } catch (error) {
  //       console.error("Error fetching latest version of IPC Bike:", error)
  //     }
  //   }

  //   fetchVersion()
  // }, [])

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
              <TitleLabel>{`IPC Bike`}</TitleLabel>
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
                  {versionIpcBike}
                </span>
              </div>
              <div className="font-semibold">
                LINK:{" "}
                <a
                  href="https://ipcbike.vercel.app/"
                  className="text-nowrapp x-2 mx-1 py-1 font-normal text-blue-500 underline"
                >
                  ipcbike.vercel.app
                </a>
              </div>
              <div className="font-semibold">
                PROJECT OVERVIEW:{" "}
                <a
                  href="https://ipcbike.vercel.app/web/project"
                  target="_blanc"
                  className="text-nowrapp x-2 mx-1 py-1 font-normal text-blue-500 underline"
                >
                  ipcbike.vercel.app/web/project
                </a>
              </div>
              <div className="font-semibold uppercase">
                {selected} Tech Stack:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {selected == ToggleButtonOptions.BACKEND ? (
                  <>
                    <StackLabel>Node.js</StackLabel>
                    <StackLabel>Typescript</StackLabel>
                    <StackLabel>PostgreSQL</StackLabel>
                    <StackLabel>Express.js</StackLabel>
                    <StackLabel>Mocha Test</StackLabel>
                    <StackLabel>REST API</StackLabel>
                    <StackLabel>Winston</StackLabel>
                  </>
                ) : (
                  <>
                    <StackLabel>Next.js</StackLabel>
                    <StackLabel>React.js</StackLabel>
                    <StackLabel>Typescript</StackLabel>
                    <StackLabel>Tailwind CSS</StackLabel>
                    <StackLabel>Winston</StackLabel>
                  </>
                )}
              </div>
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
