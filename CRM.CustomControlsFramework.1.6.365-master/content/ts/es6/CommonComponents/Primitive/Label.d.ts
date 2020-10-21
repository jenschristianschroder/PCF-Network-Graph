import * as React from "react";
import { ITextStyle } from "./Text";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface ILabelProps extends IPropsBase {
    style?: ITextStyle;
    forElementId?: string;
}
declare class InnerLabel extends ComponentBase<ILabelProps, any> {
    static displayName: string;
    protected getElementName(): string;
    protected getElementProps(): React.LabelHTMLAttributes<Element>;
}
declare const Label: any;
export { ITextStyle, ILabelProps, InnerLabel, Label };
