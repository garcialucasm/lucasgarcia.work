"use client"

import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"
import Magnetic from "../Buttons/Magnetic"

function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <>
      <footer className="mt-auto flex h-40 w-full flex-col items-center justify-center gap-y-4 bg-stone-100 text-stone-600">
        <div className="text-center text-xs">
          &copy; {currentYear} Lucas Garcia. All Rights Reserved.
        </div>
        <div className="flex text-2xl gap-x-4">
          <Magnetic>
            <a href={"https://github.com/garcialucasm"} target="_blank" className="hover:text-stone-900 transition-transform duration-1000 motion-reduce:transform-none">
              <PiGithubLogoFill />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={"https://www.linkedin.com/in/lucasmgarcia/"}
              target="_blank" className="hover:text-blue-700 transition-transform duration-1000 motion-reduce:transform-none"
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
