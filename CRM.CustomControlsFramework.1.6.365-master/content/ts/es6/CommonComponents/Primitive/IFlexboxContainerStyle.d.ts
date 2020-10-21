import * as React from "react";
import { AlignContentProperty, AlignItemsProperty, DisplayProperty, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty } from "csstype";
import { IFlexboxStyle } from "./IFlexboxStyle";
interface IFlexboxContainerStyle extends IFlexboxStyle {
    display?: DisplayProperty;
    alignItems?: AlignItemsProperty;
    flexDirection?: FlexDirectionProperty;
    flexWrap?: FlexWrapProperty;
    justifyContent?: JustifyContentProperty;
    alignContent?: AlignContentProperty;
}
declare function applyIFlexboxContainerProp(style: IFlexboxContainerStyle): React.CSSProperties;
declare function getCssClassName(display: string): string;
export { IFlexboxContainerStyle, applyIFlexboxContainerProp, getCssClassName };
