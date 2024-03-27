import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"
import Link from "next/link"
import { NavigationPaths } from "@/types/NavigationPaths"

function HeroSection() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="px-8 text-center text-4xl font-extrabold sm:text-6xl min-h-20">
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
          <Link href={NavigationPaths.work}>
            <span className="border-b-4 border-gray-300 mx-1 transition-all duration-200 hover:bg-gray-300 transform">
              about work
            </span>
          </Link>
          and
          <Link href={NavigationPaths.about}>
            <span className="border-b-4 border-gray-300 mx-1 transition-all duration-200 hover:bg-gray-300 transform">
              about me
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeroSection
