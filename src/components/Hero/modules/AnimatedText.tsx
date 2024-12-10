"use client"

import { TypeAnimation } from "react-type-animation"

function AnimatedText() {
  return (
    <TypeAnimation
      className="leading-tight text-pretty min-w-[215px] xxs:min-w-[306px] xs:min-w-[312px] sm:max-w-none lg:max-w-[850px] xl:max-w-none"
      style={{ whiteSpace: "pre-line", display: "block" }}
      preRenderFirstString={true}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "",
        2000,
        "Hi",
        2000,
        "Hi, I'm Lucas!",
        2500,
        "Hi, I'm ",
        500,
        "Hi, I'm a developer",
        4000,
        "Hi, I'm ",
        500,
        "Hi, I'm an engineer",
        2500,
        "",
        1000,
        "Feel free to drop me a message :)",
        2500,
        "Feel free to drop me a message ;)",
        0,
        "Feel free to drop me a message :)",
        1500,
        "",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}

export default AnimatedText
