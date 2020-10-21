import { IFontIconProps, FontIcon } from "../Primitive/FontIcon";
import { CrmIconSymbol } from "./CrmIconSymbol";
declare class InnerCrmIcon extends FontIcon<CrmIconSymbol> {
    getSymbolClassName(type: CrmIconSymbol): string;
}
declare const CrmIcon: any;
export { InnerCrmIcon, CrmIcon, IFontIconProps };
