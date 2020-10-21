import * as React from "react";
import { IFlexboxStyle } from "./IFlexboxStyle";
import { IFlexboxItemStyle } from "./IFlexboxItemStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
import { GlobalsNumber, OverflowProperty, VerticalAlignProperty } from "csstype";
interface IImageProps extends IPropsBase {
    source?: string;
    style?: IImageStyle & IFlexboxItemStyle;
    altText?: string;
    onLoad?(): void;
    onError?(event: React.SyntheticEvent<Element, Event>): void;
}
interface IImageStyle extends IFlexboxStyle {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number | string;
    borderWidth?: number | string;
    opacity?: GlobalsNumber;
    overflow?: OverflowProperty;
    verticalAlign?: VerticalAlignProperty<string | number>;
    horizontalAlign?: string;
}
declare class InnerImage extends ComponentBase<IImageProps, any> {
    static displayName: string;
    constructor(props: IImageProps);
    private _onLoad;
    protected getElementName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
declare const Image: any;
export { IImageStyle, IImageProps, InnerImage, Image };
