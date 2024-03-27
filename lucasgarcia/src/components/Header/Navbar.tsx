"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { PiListBold, PiXBold } from "react-icons/pi"

import { NavigationPaths } from "@/types/NavigationPaths"
import Logo from "./modules/Logo"
import Button from "../Buttons/Button"

function Navbar() {
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false)
  const navbarMenuRef = useRef(null)
  const pathname = usePathname()
  const [screenSize, setScreenSize] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

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
      <nav id="nav" className="z-50 w-full" role="navigation">
        <div
          className={`${isOpenedNavbar && screenSize < 768 && "fixed h-screen w-screen overflow-auto bg-gray-100 bg-opacity-50 backdrop-blur"}`}
        ></div>
        <div
          className={`md:flex-no-wrap fixed mx-auto flex w-full flex-wrap items-center p-8 transition duration-500 ${isScrolling && "bg-gray-50 bg-opacity-70 shadow-xl backdrop-blur"}`}
        >
          <div className="mr-4 md:mr-8">
            <Link href={NavigationPaths.home} rel="home">
              <Logo isOpenedNavbar={isOpenedNavbar} />
            </Link>
          </div>
          <div className="ml-auto md:hidden">
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 top-8 transition duration-300 ${isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
            >
              <PiListBold size={28}>
                <title>Menu</title>
              </PiListBold>
            </Button>
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 top-8 transition duration-300 ${!isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
            >
              <PiXBold size={28}>
                <title>Menu</title>
              </PiXBold>
            </Button>
          </div>
          <div
            id="menu"
            className={`${isOpenedNavbar ? "origin-top-right scale-100 opacity-100" : "origin-top-right scale-0 opacity-0"} h-0 w-full transition duration-300 md:flex md:w-auto md:flex-grow md:scale-100 md:items-center md:opacity-100 md:transition-none`}
          >
            <ul
              id="ulMenu"
              className="my-12 flex transform flex-col px-4 items-center justify-center rounded-xl bg-white py-4 text-center shadow-xl md:mx-0 md:my-0 md:ml-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none"
            >
              <Link
                className={`${pathname == NavigationPaths.home && "text-gray-500"} block w-full transform rounded-xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-gray-100 motion-reduce:transform-none md:p-4 md:hover:bg-transparent md:hover:text-gray-400`}
                href={NavigationPaths.home}
                title="Home"
              >
                <li>Home</li>
              </Link>
              <Link
                className={`${pathname == NavigationPaths.work && "text-gray-500"} block w-full transform rounded-xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-gray-100 motion-reduce:transform-none md:p-4 md:hover:bg-transparent md:hover:text-gray-400`}
                href={NavigationPaths.work}
                title="Work"
              >
                <li>Work</li>
              </Link>
              <Link
                className={`${pathname == NavigationPaths.about && "text-gray-500"} block w-full transform rounded-xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-gray-100 motion-reduce:transform-none md:p-4 md:hover:bg-transparent md:hover:text-gray-400`}
                href={NavigationPaths.about}
                title="About"
              >
                <li>About</li>
              </Link>
              <Link
                className={`${pathname == NavigationPaths.contact && "text-gray-500"} block w-full transform rounded-xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-gray-100 motion-reduce:transform-none md:p-4 md:hover:bg-transparent md:hover:text-gray-400`}
                href={NavigationPaths.contact}
                title="Contact"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
