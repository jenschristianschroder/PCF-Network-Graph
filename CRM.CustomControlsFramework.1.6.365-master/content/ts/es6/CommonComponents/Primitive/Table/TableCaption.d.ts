import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableCaptionProps extends IPropsBase {
    style?: IViewStyle;
}
declare class InnerTableCaption extends ComponentBase<ITableCaptionProps, any> {
    static displayName: string;
    protected getElementName(): string;
}
declare const TableCaption: any;
export { ITableCaptionProps, InnerTableCaption, TableCaption };
