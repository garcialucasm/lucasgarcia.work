"use client"

import Image from "next/image"

import { ToggleButtonOptions } from "@/types/ToggleButtons"
import TitleLabel from "@/components/Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"
import ContainerSelectedCases from "@/components/Containers/ContainerSelectedCases"
import DescriptionLabel from "@/components/Others/DescriptionLabel"
import ImageSmall from "@/components/Others/ImageSmall"
import SubtitleLabel from "@/components/Others/SubtitleLabel"
import StackLabel from "@/components/Others/StackLabel"

function SelectedCases() {
  const { selected } = useToggleBackFrontContext()
  return (
    <div id="cases">
      <ContainerSections>
        <TitleLabel>Selected Cases</TitleLabel>
        <ContainerSelectedCases>
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
              <div className="text-nowrap font-semibold uppercase">
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
          <div className="transition-transform duration-500 lg:group-hover:scale-125">
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
        </ContainerSelectedCases>
      </ContainerSections>
    </div>
  )
}

export default SelectedCases
