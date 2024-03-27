import { ToggleBackFrontProvider } from "./toggleBackFront"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToggleBackFrontProvider>{children}</ToggleBackFrontProvider>
}
