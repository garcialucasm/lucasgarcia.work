import TitleLabel from "@/components/Others/TitleLabel"
import ContainerSections from "@/components/Containers/ContainerSections"
import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"
import ContainerSubSections from "../Containers/ContainerSubSections"

function Contact() {
  const { selected } = useToggleBackFrontContext()
  return (
    <div className="group" id="contact">
      <ContainerSections>
        <div className="flex flex-col items-center gap-y-8">
          <TitleLabel>Contact</TitleLabel>
          <ContainerSubSections>
            <div className={`flex w-full flex-col items-start gap-8`}>
              <p className="w-full">
                Say Hello!{" "}
                <span className="inline-block text-4xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:rotate-45 motion-reduce:transform-none">
                  👋
                </span>
              </p>
              <p className="w-full text-pretty">
                If you&apos;d like to chat about a project or just have
                question, feel free to reach out and connect with me on{" "}
                <a
                  href={"https://www.linkedin.com/in/lucasmgarcia/"}
                  target="_blank"
                  className="origin-bottom border-b-2 border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-blue-50"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href={"https://github.com/garcialucasm"}
                  target="_blank"
                  className="border-b-2 border-neutral-500 transition-all duration-300 hover:bg-neutral-500 hover:text-neutral-50"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </ContainerSubSections>
        </div>
      </ContainerSections>
    </div>
  )
}

export default Contact
