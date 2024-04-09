import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

interface ContainerSectionsProps {
  children: React.ReactNode
}

const ContainerSections: React.FC<ContainerSectionsProps> = ({ children }) => {
  const { selected } = useToggleBackFrontContext()
  return (
    <>
      <div className={`flex transform-gpu flex-col gap-y-8 rounded-3xl transition-all duration-300 hover:shadow-center-2xl p-8 md:p-12 xl:p-16 hover:xl:scale-105 ${selected === ToggleButtonOptions.BACKEND ? "bg-neutral-900 bg-opacity-50" : "bg-neutral-200 hover:bg-neutral-100"}`}>
        {children}
      </div>
    </>
  )
}

export default ContainerSections
