"use client"

import { useEffect, useRef, useState } from "react"
import { PiHamburgerBold, PiXBold } from "react-icons/pi"

import { NavigationPaths } from "@/types/NavigationPaths"
import Logo from "./modules/Logo"
import Button from "@/components/Buttons/Button"
import ToggleBackFront from "@/components/Buttons/ToggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { useFramerMotion } from "@/context/framerMotion"

function Navbar() {
  const { motion } = useFramerMotion()
  const { selected } = useToggleBackFrontContext()
  const navbarMenuRef = useRef(null)
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false)
  const [screenSize, setScreenSize] = useState(0)
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
    if (isOpenedNavbar) {
      setIsOpenedNavbar(!isOpenedNavbar)
    }
  }

  function toggleMenuNavbar() {
    setIsOpenedNavbar(!isOpenedNavbar)
  }

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isOpenedNavbar])

  /* ------------------- Close the menus when clicks outside ------------------ */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarMenuRef.current &&
        !(navbarMenuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpenedNavbar(false)
      }
    }
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside)

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpenedNavbar])

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY
      if (position > 100) {
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
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="nav"
        className="z-40 w-full"
        role="navigation"
      >
        <div
          className={`${isOpenedNavbar && `fixed h-screen w-screen overflow-auto bg-opacity-50 backdrop-blur ${selected === ToggleButtonOptions.BACKEND ? "bg-black" : "bg-white"}`}`}
        ></div>
        <div
          className={`fixed flex h-24 w-full flex-wrap items-center justify-between bg-opacity-40 p-8 transition duration-300 ${(isScrolling || isOpenedNavbar) && `${selected === ToggleButtonOptions.BACKEND ? "bg-black shadow-xl outline outline-1 outline-offset-1 outline-black/[.5] backdrop-blur-lg" : "bg-white shadow-xl outline outline-1 outline-offset-1 outline-white/[.5] backdrop-blur-lg"}`}`}
        >
          <div className="mr-4 flex xl:mr-8">
            <button
              onClick={(event) => handleClick(event, NavigationPaths.home)}
            >
              <Logo isOpenedNavbar={isOpenedNavbar} />
            </button>
          </div>
          <div className="flex items-center">
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 transition duration-300 hover:text-blue-500 ${isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
              aria-label="Open Menu"
            >
              <PiHamburgerBold size={36}>
                <title>Menu</title>
              </PiHamburgerBold>
            </Button>
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 transition duration-300 hover:text-blue-500 ${!isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
              aria-label="Close Menu"
            >
              <PiXBold size={36}>
                <title>Menu</title>
              </PiXBold>
            </Button>
          </div>
          <div
            id="menu"
            className={`${isOpenedNavbar ? "origin-top-right scale-100 opacity-100" : "origin-top-right scale-0 opacity-0"} h-0 w-full transition`}
          >
            <ul
              id="ulMenu"
              className={`my-12 flex transform flex-col items-center justify-center rounded-3xl px-4 py-4 text-center shadow-xl bg-opacity-80 ${selected === ToggleButtonOptions.BACKEND ? "bg-black" : "bg-white"}`}
            >
              <li>
                <button
                  className={`block w-full transform rounded-3xl p-4 font-semibold underline-offset-4 transition-all motion-reduce:transform-none hover:text-blue-500`}
                  title="Home"
                  onClick={(event) => handleClick(event, NavigationPaths.home)}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`block w-full transform rounded-3xl p-4 font-semibold underline-offset-4 transition-all motion-reduce:transform-none hover:text-blue-500`}
                  title="About"
                  onClick={(event) => handleClick(event, NavigationPaths.about)}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={`block w-full transform rounded-3xl p-4 font-semibold underline-offset-4 transition-all motion-reduce:transform-none hover:text-blue-500`}
                  title="Tech Stack"
                  onClick={(event) => handleClick(event, NavigationPaths.stack)}
                >
                  Stack
                </button>
              </li>
              <li>
                <button
                  className={`block w-full transform rounded-3xl p-4 font-semibold underline-offset-4 transition-all motion-reduce:transform-none hover:text-blue-500`}
                  title="Cases"
                  onClick={(event) => handleClick(event, NavigationPaths.cases)}
                >
                  Cases
                </button>
              </li>
              <li>
                <button
                  className={`block w-full transform rounded-3xl p-4 font-semibold underline-offset-4 transition-all motion-reduce:transform-none hover:text-blue-500`}
                  title="Contact"
                  onClick={(event) =>
                    handleClick(event, NavigationPaths.contact)
                  }
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed bottom-0 flex h-20 w-full bg-opacity-50 ${(isScrolling || isOpenedNavbar) && `${selected === ToggleButtonOptions.BACKEND ? "bg-black shadow-t-xl outline outline-1 outline-offset-1 outline-black/[.5] backdrop-blur" : "bg-white shadow-t-xl outline outline-1 outline-offset-1 outline-white/[.5] backdrop-blur"} ${isOpenedNavbar && "hidden"}`}`}
        ></div>
        <div
          className={`fixed bottom-3 left-1/2 -translate-x-[139.5px] lg:bottom-auto lg:top-[21.2px] xl:top-[15.5px] ${isOpenedNavbar && "scale-0 opacity-0"} `}
        >
          <ToggleBackFront />
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
