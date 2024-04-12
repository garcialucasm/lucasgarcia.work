"use client"

import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"
import Magnetic from "@/components/Buttons/Magnetic"
import { NavigationPaths } from "@/types/NavigationPaths"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"

function Footer() {
  const currentYear: number = new Date().getFullYear()
  const { selected } = useToggleBackFrontContext()

  return (
    <>
      <footer
        className={`mt-16 flex h-96 w-full flex-col items-center justify-center gap-y-4 bg-gradient-to-t ${selected === ToggleButtonOptions.BACKEND ? "from-black" : " from-white "} from-60% to-transparent`}
        id="footer"
      >
        <div className="text-center text-xs">
          &copy; {currentYear} Lucas Garcia. All Rights Reserved.
        </div>
        <div className="flex gap-x-8 text-4xl">
          <Magnetic>
            <a
              href={"https://www.linkedin.com/in/lucasmgarcia/"}
              target="_blank"
              className="hover:text-blue-700 motion-reduce:transform-none"
            >
              <div
                className={`rounded-lg p-2 transition-all hover:bg-opacity-70 ${selected === ToggleButtonOptions.BACKEND ? "hover:bg-neutral-700" : "hover:bg-slate-300"}`}
              >
                <PiLinkedinLogoFill />
              </div>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={"https://github.com/garcialucasm"}
              target="_blank"
              className="hover:text-slate-950 motion-reduce:transform-none"
            >
              <div
                className={`rounded-lg p-2 transition-all hover:bg-opacity-50 ${selected === ToggleButtonOptions.BACKEND ? "hover:bg-neutral-700 hover:text-white" : "hover:bg-slate-300"}`}
              >
                <PiGithubLogoFill />
              </div>
            </a>
          </Magnetic>
        </div>
      </footer>
    </>
  )
}

export default Footer
