import { ToggleButton } from "../Buttons/ToggleButton"
import TitleLabel from "../Others/TitleLabel"
import BackendStack from "./BackendStack"
import FrontendStack from "./FrontendStack"

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
