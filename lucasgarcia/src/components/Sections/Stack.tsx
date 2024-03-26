import { ToggleButton } from "../Buttons/ToggleButton"
import TitleLabel from "../Others/TitleLabel"
import BackendStack from "../Stack/BackendStack"
import FrontendStack from "../Stack/FrontendStack"

function Stack() {
  return (
    <>
      <div className="flex flex-col">
        <TitleLabel>Tech Stack</TitleLabel>
        <div className="h-full w-full rounded-xl bg-gray-200">
          <ToggleButton
            optionA="Frontend"
            optionB="Backend"
            childOptionA={<FrontendStack />}
            childOptionB={<BackendStack />}
          />
        </div>
      </div>
    </>
  )
}

export default Stack
