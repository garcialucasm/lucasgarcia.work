"use client"

import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"
import Magnetic from "@/components/Buttons/Magnetic"

function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <>
      <footer className="background-mash-dark mt-16 flex h-60 w-full flex-col items-center justify-center gap-y-4 text-slate-200">
        <div className="text-center text-xs">
          &copy; {currentYear} Lucas Garcia. All Rights Reserved.
        </div>
        <div className="flex gap-x-8 text-4xl">
          <Magnetic>
            <a
              href={"https://github.com/garcialucasm"}
              target="_blank"
              className="transition-all hover:text-slate-950 motion-reduce:transform-none"
            >
              <div className="rounded-lg border border-slate-600 bg-slate-500 bg-opacity-30 p-2 hover:border-slate-300 hover:bg-slate-300 hover:bg-opacity-50">
                <PiGithubLogoFill />
              </div>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={"https://www.linkedin.com/in/lucasmgarcia/"}
              target="_blank"
              className="transition-all hover:text-blue-700 motion-reduce:transform-none"
            >
              <div className="rounded-lg border border-slate-600 bg-slate-500 bg-opacity-30 p-2 hover:border-slate-300 hover:bg-slate-300 hover:bg-opacity-70">
                <PiLinkedinLogoFill />
              </div>
            </a>
          </Magnetic>
        </div>
      </footer>
    </>
  )
}

export default Footer
