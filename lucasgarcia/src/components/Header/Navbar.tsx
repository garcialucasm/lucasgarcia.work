"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { PiListBold, PiXBold } from "react-icons/pi"

import { NavigationPaths } from "@/types/NavigationPaths"
import Logo from "./modules/Logo"
import Button from "@/components/Buttons/Button"
import ToggleBackFront from "@/components/Buttons/ToggleBackFront"

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
      <nav id="nav" className="z-40 w-full" role="navigation">
        <div
          className={`${isOpenedNavbar && screenSize < 1280 && "fixed h-screen w-screen overflow-auto bg-slate-100 bg-opacity-50 backdrop-blur"}`}
        ></div>
        <div
          className={`xl:flex-no-wrap fixed flex h-24 w-full flex-wrap items-center justify-between p-8 transition duration-500 ${(isScrolling || isOpenedNavbar) && "bg-slate-50 bg-opacity-70 shadow-xl backdrop-blur"}`}
        >
          <div className="mr-4 flex xl:mr-8">
            <Link href={NavigationPaths.home} title="Home">
              <Logo isOpenedNavbar={isOpenedNavbar} />
            </Link>
          </div>
          <div className="flex items-center xl:hidden">
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 transition duration-300 ${isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
            >
              <PiListBold size={28}>
                <title>Menu</title>
              </PiListBold>
            </Button>
            <Button
              onClick={toggleMenuNavbar}
              className={`absolute right-8 transition duration-300 ${!isOpenedNavbar ? "scale-0 opacity-0" : "scale-100 opacity-100"} flex items-center`}
            >
              <PiXBold size={28}>
                <title>Menu</title>
              </PiXBold>
            </Button>
          </div>
          <div
            id="menu"
            className={`${isOpenedNavbar ? "origin-top-right scale-100 opacity-100" : "origin-top-right scale-0 opacity-0"} h-0 w-full transition duration-300 xl:flex xl:w-fit xl:scale-100 xl:items-center xl:opacity-100 xl:transition-none ${screenSize === 1279 && "transition-none"}`}
          >
            <ul
              id="ulMenu"
              className="my-12 flex transform flex-col items-center justify-center rounded-3xl bg-white px-4 py-4 text-center shadow-xl xl:mx-0 xl:my-0 xl:flex-row xl:items-center xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none"
            >
              <Link
                className={`${pathname == NavigationPaths.home && "text-slate-500"} block w-full transform rounded-3xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-slate-100 motion-reduce:transform-none xl:p-4 xl:hover:bg-transparent xl:hover:text-cyan-600`}
                href={NavigationPaths.home}
                title="Home"
              >
                <li>Home</li>
              </Link>
              <a
                className={`${pathname == NavigationPaths.about && "text-slate-500"} block w-full transform rounded-3xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-slate-100 motion-reduce:transform-none xl:p-4 xl:hover:bg-transparent xl:hover:text-cyan-600`}
                href={NavigationPaths.about}
                title="About"
              >
                <li>About</li>
              </a>
              <a
                className={`${pathname == NavigationPaths.work && "text-slate-500"} block w-full transform rounded-3xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-slate-100 motion-reduce:transform-none xl:p-4 xl:hover:bg-transparent xl:hover:text-cyan-600`}
                href={NavigationPaths.work}
                title="Work"
              >
                <li>Work</li>
              </a>
              <a
                className={`${pathname == NavigationPaths.contact && "text-slate-500"} block w-full transform rounded-3xl p-4 font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:bg-slate-100 motion-reduce:transform-none xl:p-4 xl:hover:bg-transparent xl:hover:text-cyan-600`}
                href={NavigationPaths.contact}
                title="Contact"
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <div
          className={`fixed bottom-4 left-1/2 origin-center -translate-x-[139.5px] transition-all duration-0 md:bottom-auto md:top-[21.2px] xl:top-[15.5px] ${isOpenedNavbar && "scale-0 opacity-0"} `}
        >
          <ToggleBackFront />
        </div>
      </nav>
    </>
  )
}

export default Navbar
