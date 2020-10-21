import * as React from "react";
import { DisplayProperty, FontStyleProperty, FontWeightProperty, TextAlignProperty, UserSelectProperty, WordBreakProperty } from "csstype";
import { IViewStyle, IViewHtmlStyle } from "./IViewStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
import { IAccessibilityNotificationProps } from "./IAccessibilityNotificationProps";
interface ITextStyle extends IViewStyle {
    color?: string;
    fontFamily?: string;
    fontSize?: string | number;
    fontStyle?: FontStyleProperty;
    fontWeight?: FontWeightProperty;
    lineHeight?: string | number;
    textAlign?: TextAlignProperty;
    textDecoration?: string;
    display?: DisplayProperty;
    userSelect?: UserSelectProperty;
    wordBreak?: WordBreakProperty;
}
interface ITextProps extends IPropsBase, IAccessibilityNotificationProps {
    style?: ITextStyle & IViewHtmlStyle;
    role?: "alert" | "tooltip" | string;
    semanticTag?: "span" | "legend" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
}
declare class InnerText extends ComponentBase<ITextProps, any> {
    static displayName: string;
    protected getElementName(): "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "legend" | "span";
    protected getElementClassName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
declare const Text: any;
export { ITextStyle, ITextProps, InnerText, Text };
