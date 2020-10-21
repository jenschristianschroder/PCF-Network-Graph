import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableFooterProps extends IPropsBase {
    style?: IViewStyle;
}
declare class InnerTableFooter extends ComponentBase<ITableFooterProps, any> {
    static displayName: string;
    protected getElementName(): string;
}
declare const TableFooter: any;
export { ITableFooterProps, InnerTableFooter, TableFooter };
