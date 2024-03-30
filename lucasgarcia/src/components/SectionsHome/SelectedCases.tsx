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
    <div id="work-section">
      <ContainerSections>
        <TitleLabel>Selected Cases</TitleLabel>
        <ContainerSelectedCases>
          <div className="flex flex-col gap-4 w-1/2">
            <ImageSmall>
              <Image
                src="/dk-square.png"
                width={200}
                height={200}
                alt="Picture of the author"
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
            <div className="flex gap-4 text-sm">
              <div className="text-nowrap font-semibold uppercase">
                {selected} Tech Stack:
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
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
          <div className="w-1/2 flex">
            <Image
              src="/temp-image.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </ContainerSelectedCases>
      </ContainerSections>
    </div>
  )
}

export default SelectedCases
