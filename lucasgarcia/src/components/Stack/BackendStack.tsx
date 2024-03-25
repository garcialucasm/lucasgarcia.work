import { GiGears } from "react-icons/gi"
import { HiDatabase } from "react-icons/hi"
import { IoLogoNodejs } from "react-icons/io5"
import { SiExpress, SiJavascript, SiMocha } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import CardStack from "./cardStack"

export default function BackendStack() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 font-semibold">
      <CardStack stackColor="amber" stackName="JavaScript">
        <SiJavascript size={38} />
      </CardStack>
      <CardStack stackColor="blue" stackName="TypeScript">
        <SiTypescript size={38} />
      </CardStack>
      <CardStack stackColor="green" stackName="Node.js">
        <IoLogoNodejs size={42} />
      </CardStack>
      <CardStack stackColor="indigo" stackName="MySQL">
        <HiDatabase size={42} />
      </CardStack>
      <CardStack stackColor="pink" stackName="REST Api">
        <GiGears size={38} />
      </CardStack>
      <CardStack stackColor="rose" stackName="Mocha">
        <SiMocha size={42} />
      </CardStack>
      <CardStack stackColor="rose" stackName="Express">
        <span className="font-divght text-2xl  p-1">ex</span>
      </CardStack>
    </div>
  )
}
