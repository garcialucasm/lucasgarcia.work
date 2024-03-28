import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"
import Link from "next/link"
import { NavigationPaths } from "@/types/NavigationPaths"

function HeroSection() {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <div className="min-h-20 px-8 text-center text-4xl font-extrabold sm:text-6xl">
          <AnimatedText />
        </div>
        <div className="relative top-8 flex items-center text-2xl">
          <span className="px-1">
            <PiMapPin />{" "}
          </span>
          <span className="text-base font-semibold inline-block bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 bg-clip-text text-transparent">
            Currently near Aveiro and Porto, Portugal
          </span>
        </div>
        <div className="relative top-16 flex items-start text-sm">
          <span className="">Discover more</span>
          <Link href={NavigationPaths.about}>
            <span className="mx-1 transform border-b-4 border-slate-300 transition-all duration-200 hover:bg-slate-300">
              about me
            </span>
          </Link>
          and
          <Link href={NavigationPaths.work}>
            <span className="mx-1 transform border-b-4 border-slate-300 transition-all duration-200 hover:bg-slate-300">
              my work
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeroSection
