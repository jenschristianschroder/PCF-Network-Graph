import * as React from "react";
import { IPropsBase, ComponentBase } from "../ComponentBase";
interface IOptionStyle {
    backgroundColor?: string;
    color?: string;
}
interface IOptionProps extends IPropsBase {
    value?: CustomControlInterfaces.ICCFOptionSetValue;
    style?: IOptionStyle;
    disabled?: boolean;
    selected?: boolean;
}
declare class InnerOption extends ComponentBase<IOptionProps, any> {
    protected getElementName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
    protected getElementChildren(): React.ReactNode;
}
declare const Option: any;
export { IOptionStyle, IOptionProps, InnerOption, Option };
