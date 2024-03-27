import { ToggleButtonOptions } from "./ToggleButtons";

export type ToggleBackFrontContextProps = {
    selected: ToggleButtonOptions;
    settingToggleBackFront: (selected: ToggleButtonOptions) => void;
};