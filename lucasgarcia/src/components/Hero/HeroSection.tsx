import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"
import Link from "next/link"
import { NavigationPaths } from "@/types/NavigationPaths"
import { HiMiniChevronDoubleDown } from "react-icons/hi2"

function HeroSection() {
  return (
    <>
      <div
        id="hero-section"
        className="background-mash flex h-svh w-full flex-col items-center justify-center shadow-inner"
      >
        <div className="min-h-32 text-pretty px-8 text-center text-4xl font-extrabold sm:text-6xl">
          <AnimatedText />
        </div>
        <div className="relative top-8 flex items-center text-2xl">
          <span className="px-1">
            <PiMapPin />{" "}
          </span>
          <span className="text-base font-semibold">
            Currently near Aveiro and Porto, Portugal
          </span>
        </div>
        <div className="relative top-16 flex items-start text-sm">
          <span className="">Discover more</span>
          <Link href={NavigationPaths.about}>
            <span className="mx-1 transform border-b-4 border-cyan-200 border-opacity-40 transition-all duration-200 hover:bg-cyan-200 hover:bg-opacity-40">
              about me
            </span>
          </Link>
          and
          <Link href={NavigationPaths.work}>
            <span className="mx-1 transform border-b-4 border-cyan-200 border-opacity-40 transition-all duration-200 hover:bg-cyan-200 hover:bg-opacity-40">
              my work
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeroSection
