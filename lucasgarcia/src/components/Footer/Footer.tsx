"use client"

import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"
import Magnetic from "../Buttons/Magnetic"

function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <>
      <footer className="mt-16 flex h-60 w-full flex-col items-center justify-center gap-y-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 text-slate-200">
        <div className="text-center text-xs">
          &copy; {currentYear} Lucas Garcia. All Rights Reserved.
        </div>
        <div className="flex gap-x-4 text-2xl">
          <Magnetic>
            <a
              href={"https://github.com/garcialucasm"}
              target="_blank"
              className="transition-transform duration-500 hover:text-slate-400 motion-reduce:transform-none"
            >
              <PiGithubLogoFill />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={"https://www.linkedin.com/in/lucasmgarcia/"}
              target="_blank"
              className="transition-transform duration-500 hover:text-blue-500 motion-reduce:transform-none"
            >
              <PiLinkedinLogoFill />
            </a>
          </Magnetic>
        </div>
      </footer>
    </>
  )
}

export default Footer
