import { PiMapPin } from "react-icons/pi"

import AnimatedText from "./modules/AnimatedText"

function HeroSection() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="text-4xl sm:text-6xl font-extrabold text-center px-8">
          <AnimatedText />
        </div>
        <div className="relative top-8 flex text-2xl items-center">
          <PiMapPin /> 
          <span className="text-base font-semibold">Porto, PT</span>
        </div>
          <div className="relative top-16 text-sm flex items-center">Discover more&nbsp;<span className="transition-transform duration-1000 hover:text-stone-500 underline underline-offset-4 motion-reduce:transform-none">about me.</span></div>
      </div>
    </>
  )
}

export default HeroSection
