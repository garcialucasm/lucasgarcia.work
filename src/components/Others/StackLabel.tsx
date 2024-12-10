import { useToggleBackFrontContext } from "@/context/toggleBackFront"
import { ToggleButtonOptions } from "@/types/ToggleButtons"

function StackLabel({ children }: { children: React.ReactNode }) {
  const { selected } = useToggleBackFrontContext()
  return (
    <h4
      className={`text-nowrap rounded-md px-2 py-1 text-xs uppercase hover:bg-purple-800 hover:text-purple-100 bg-purple-100 ${selected === ToggleButtonOptions.BACKEND && "text-purple-950"}`}
    >
      {children}
    </h4>
  )
}

StackLabel.propTypes = {}

export default StackLabel
