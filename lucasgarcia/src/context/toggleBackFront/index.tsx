"use client"

import { ToggleBackFrontContextProps } from "@/types/ContextType"
import { ToggleButtonOptions } from "@/types/ToggleButtons"
import { createContext, useContext, useState } from "react"

const ToggleBackFrontContext = createContext<ToggleBackFrontContextProps>(
  {} as ToggleBackFrontContextProps
)

const ToggleBackFrontProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selected, setSelected] = useState<ToggleButtonOptions>(
    ToggleButtonOptions.FRONTEND
  )

  const settingToggleBackFront = (selected: ToggleButtonOptions) => {
    setSelected(selected)
  }

  return (
    <ToggleBackFrontContext.Provider
      value={{ selected, settingToggleBackFront }}
    >
      <>{children}</>
    </ToggleBackFrontContext.Provider>
  )
}

const useToggleBackFrontContext = () => {
  const context = useContext(ToggleBackFrontContext)
  return context
}

export { ToggleBackFrontProvider, useToggleBackFrontContext }
