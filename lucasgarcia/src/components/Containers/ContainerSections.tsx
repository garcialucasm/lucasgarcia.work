import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

interface ContainerSectionsProps {
  children: React.ReactNode
}

const ContainerSections: React.FC<ContainerSectionsProps> = ({ children }) => {
  const { selected } = useToggleBackFrontContext()
  return (
    <>
      <div className={`flex flex-col gap-y-8 md:px-12 xl:px-16`}>
        {children}
      </div>
    </>
  )
}

export default ContainerSections
