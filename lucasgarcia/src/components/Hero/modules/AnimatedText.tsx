"use client"

import { TypeAnimation } from "react-type-animation"

function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi",
        1000,
        "Hi, I'm Lucas!",
        2500,
        "Hi, I'm ",
        1000,
        "Hi, I'm a web developer",
        4000,
        "Hi, I'm ",
        1000,
        "Hi, I'm an engineer",
        2500,
        "",
        1000,
        "Feel free to drop me a message :) ",
        2500,
        "Feel free to drop me a message ;) ",
        200,
        "Feel free to drop me a message :) ",
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
