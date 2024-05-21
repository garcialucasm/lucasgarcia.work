import { FramerMotionProvider } from "./framerMotion"
import { ToggleBackFrontProvider } from "./toggleBackFront"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FramerMotionProvider>
      <ToggleBackFrontProvider>{children}</ToggleBackFrontProvider>
    </FramerMotionProvider>
  )
}
