import { IPropsBase } from "./ComponentBase";
import { ITextInputStyle } from "./TextInput";
import * as AttributeName from "../Supplementary/Accessibility/Attributes/AttributeName";
interface ICheckboxStyle extends ITextInputStyle {
}
interface ICheckboxProps extends IPropsBase {
    style?: ICheckboxStyle;
    checked?: boolean;
    [AttributeName.ARIA_CHECKED]?: boolean;
    disabled?: boolean;
    onChange?: (checkboxValue: boolean) => void;
    name?: string;
    key?: string;
    accessibilityRole?: string;
}
declare const Checkbox: any;
export { ICheckboxStyle, ICheckboxProps, Checkbox };
