import { useRef, useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";

export default function Magnetic({ children }: any) {
  const ref = useRef<HTMLDivElement>(null); // Specify the type of ref
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const props = useSpring({
    from: { x: 0, y: 0 },
    to: { ...position },
    config: {
      mass: 0.1,
      damping: 15,
      easing: easings.easeInBounce,
      stiffness: 150,
    },
  });

  const handleMouse = (event: { clientX: any; clientY: any }) => {
    if (ref.current) {
      const { clientX, clientY } = event;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <animated.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={props}>
      {children}
    </animated.div>
  );
}
