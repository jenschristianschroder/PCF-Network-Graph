import { IViewStyle } from "./IViewStyle";
interface IScrollViewStyle extends IViewStyle {
    borderWidth?: number;
    overflowX?: "hidden" | "scroll";
    overflowY?: "hidden" | "scroll";
}
export { IScrollViewStyle };
