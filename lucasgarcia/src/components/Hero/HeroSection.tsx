import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"
import Link from "next/link"
import { NavigationPaths } from "@/types/NavigationPaths"
import { HiMiniChevronDoubleDown } from "react-icons/hi2"

function HeroSection() {
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    href: string
  ) {
    event.preventDefault()
    const offset = -110 // Adjust this value based on your desired offset
    const target = document.querySelector(href)
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <>
      <div
        id="home"
        className="flex h-svh w-full flex-col items-center justify-center shadow-inner"
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
          <button
            title="About"
            onClick={(event) => handleClick(event, NavigationPaths.about)}
          >
            <span
              className={`mx-1 border-b-4 border-neutral-400 hover:border-y-4 hover:bg-neutral-400 hover:text-neutral-900`}
            >
              about me
            </span>
          </button>
          and
          <button
            title="Selected cases"
            onClick={(event) => handleClick(event, NavigationPaths.cases)}
          >
            <span
              className={`mx-1 border-b-4 border-neutral-400 hover:border-y-4 hover:bg-neutral-400 hover:text-neutral-900`}
            >
              my work
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HeroSection
