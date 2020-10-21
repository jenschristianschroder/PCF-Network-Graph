import * as React from "react";
import { ITextStyle } from "./Text";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface IHyperlinkStyle extends ITextStyle {
    cursor?: "pointer" | string;
    color?: string;
}
declare type ITargetType = "_blank" | "_self" | "_parent" | "_top";
interface IHyperlinkProps extends IPropsBase {
    href?: string;
    target?: ITargetType;
    style?: IHyperlinkStyle;
    download?: string;
}
declare class InnerHyperlink extends ComponentBase<IHyperlinkProps, any> {
    protected getElementName(): string;
    protected getElementProps(): React.AnchorHTMLAttributes<Element>;
}
declare const Hyperlink: any;
export { IHyperlinkStyle, ITargetType, IHyperlinkProps, InnerHyperlink, Hyperlink };
