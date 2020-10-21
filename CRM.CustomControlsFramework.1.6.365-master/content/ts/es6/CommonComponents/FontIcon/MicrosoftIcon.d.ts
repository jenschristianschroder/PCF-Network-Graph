import { IFontIconProps, FontIcon } from "../Primitive/FontIcon";
import { MicrosoftIconSymbol } from "./MicrosoftIconSymbol";
declare class InnerMicrosoftIcon extends FontIcon<MicrosoftIconSymbol> {
    getSymbolClassName(type: MicrosoftIconSymbol): string;
}
declare enum IconPosition {
    None = 0,
    Left = 1,
    Top = 2
}
declare const MicrosoftIcon: any;
export { InnerMicrosoftIcon, MicrosoftIcon, IFontIconProps, IconPosition };
