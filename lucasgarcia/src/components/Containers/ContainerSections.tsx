import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

interface ContainerSectionsProps {
  children: React.ReactNode
}

const ContainerSections: React.FC<ContainerSectionsProps> = ({ children }) => {
  const { selected } = useToggleBackFrontContext()
  return (
    <>
      <div className={`flex flex-col gap-y-8 md:p-12 xl:p-16`}>
        {children}
      </div>
    </>
  )
}

export default ContainerSections
