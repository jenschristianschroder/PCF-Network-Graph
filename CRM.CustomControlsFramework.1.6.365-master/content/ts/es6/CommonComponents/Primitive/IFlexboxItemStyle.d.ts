import { AlignSelfProperty } from "csstype";
import { IFlexboxStyle } from "./IFlexboxStyle";
interface IFlexboxItemStyle extends IFlexboxStyle {
    alignSelf?: AlignSelfProperty;
    flex?: number | string;
}
export { IFlexboxItemStyle };
