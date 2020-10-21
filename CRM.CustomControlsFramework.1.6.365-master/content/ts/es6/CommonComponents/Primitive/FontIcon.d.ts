import { IViewStyle } from "./IViewStyle";
import { ITextStyle } from "./Text";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface IFontIconProps<T> extends IPropsBase {
    type: T;
    style?: IViewStyle & ITextStyle;
}
declare abstract class FontIcon<T> extends ComponentBase<IFontIconProps<T>, any> {
    static displayName: string;
    constructor(props?: IFontIconProps<T>);
    protected getElementName(): string;
    protected getElementClassName(): string;
    abstract getSymbolClassName(type: T): string;
}
export { IFontIconProps, FontIcon };
