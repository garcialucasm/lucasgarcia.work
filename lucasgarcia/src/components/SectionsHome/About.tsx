"use client"

import Image from "next/image"

import TitleLabel from "@/components/Others/TitleLabel"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import ContainerSections from "@/components/Containers/ContainerSections"
import TextLabel from "../Others/TextLabel"
import ParagraphLabel from "../Others/ParagraphLabel"

const DESCRIPTION_ABOUT_P1 =
  "Hi again! My name is Lucas. I an engineer and web developer."
const DESCRIPTION_ABOUT_P2 =
  "I've been working with engineering and technology for over a decade and I love looking for alternatives on how technology and people can work together. During my career, I had the opportunity to work on several projects which significantly improved my problem-solving skills, strategic mindset, creativity, and team spirit. I strongly believe that a collaborative environment allows us to achieve much better results. I'm naturally curious, resilient, and perpetually working on improvements. Presently, my professional endeavors are centered around web development. If you have any questions, feel free to drop me a message."
const DESCRIPTION_ABOUT_P3 =
  "I'm naturally curious, resilient, and perpetually working on improvements. Presently, my professional endeavors are centered around web development."
const DESCRIPTION_ABOUT_P4 =
  "To know more about my experience, education and skills, feel free to connect with me on LinkedIn. And if you have any questions, feel free to drop me a message."

function About() {
  const { selected } = useToggleBackFrontContext()
  return (
    <div className="group" id="about">
      <ContainerSections>
        <div className="flex flex-col items-center gap-y-8">
          <TitleLabel>About me</TitleLabel>
          <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-start">
            <div className="flex flex-col lg:w-2/3">
              <TextLabel>
                <ParagraphLabel>{DESCRIPTION_ABOUT_P1}</ParagraphLabel>
                <ParagraphLabel>{DESCRIPTION_ABOUT_P2}</ParagraphLabel>
                <ParagraphLabel>{DESCRIPTION_ABOUT_P3}</ParagraphLabel>
                <ParagraphLabel>{DESCRIPTION_ABOUT_P4}</ParagraphLabel>
              </TextLabel>
            </div>
            <div className="order-first flex h-64 w-64 overflow-hidden rounded-full border-8 border-white transition-colors group-hover:border-neutral-300 lg:order-none lg:h-fit lg:w-1/3">
              <Image
                src="/profile-picture.jpeg"
                width={720}
                height={720}
                alt="Lucas Profile"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </ContainerSections>
    </div>
  )
}

export default About