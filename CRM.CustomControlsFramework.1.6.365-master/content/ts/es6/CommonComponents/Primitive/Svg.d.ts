import * as React from "react";
import { IPropsBase } from "./ComponentBase";
import { IViewStyle } from "./IViewStyle";
interface ISvgProps extends IPropsBase {
    source?: string;
    fallbackToImage?: boolean;
    style?: IViewStyle;
    altText?: string;
    title?: string;
    onParsingError?(errorMessage: string): void;
}
interface ISvgState {
    parsedSvgProps?: React.SVGAttributes<Element>;
}
declare const Svg: any;
export { ISvgProps, ISvgState, Svg };
