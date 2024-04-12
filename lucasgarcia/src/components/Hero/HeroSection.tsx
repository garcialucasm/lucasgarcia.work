import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"
import { NavigationPaths } from "@/types/NavigationPaths"
import { BsChevronCompactDown } from "react-icons/bs"
import { useEffect, useState } from "react"

function HeroSection() {
  const [isScrolling, setIsScrolling] = useState(false)

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    href: string
  ) {
    event.preventDefault()
    const offset = -130 // Adjust this value based on your desired offset
    const target = document.querySelector(href)
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY
      if (position > 10) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div
        id="home"
        className="flex h-svh w-full flex-col items-center justify-center shadow-inner"
      >
        <div className="min-h-32 text-pretty px-8 text-center text-4xl font-extrabold sm:text-6xl">
          <AnimatedText />
        </div>
        <div className="relative top-8 flex text-2xl">
          <span className="px-1">
            <PiMapPin />{" "}
          </span>
          <span className="flex w-fit text-center text-base font-semibold">
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
              className={`mx-1 border-b-2 border-neutral-400 transition-all duration-300 hover:bg-neutral-400 hover:text-neutral-900`}
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
              className={`mx-1 border-b-2 border-neutral-400 transition-all duration-300 hover:bg-neutral-400 hover:text-neutral-900`}
            >
              my work
            </span>
          </button>
        </div>
        <div
          className={`fixed bottom-4 hidden opacity-50 ${!isScrolling && "md:block"}`}
        >
          <button
            onClick={(event) => handleClick(event, NavigationPaths.about)}
          >
            <BsChevronCompactDown size={42} />
          </button>
        </div>
      </div>
    </>
  )
}

export default HeroSection
