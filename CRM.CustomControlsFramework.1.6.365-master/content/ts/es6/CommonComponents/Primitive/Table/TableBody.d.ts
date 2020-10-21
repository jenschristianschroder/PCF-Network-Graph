import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableBodyProps extends IPropsBase {
    style?: IViewStyle;
}
declare class InnerTableBody extends ComponentBase<ITableBodyProps, any> {
    static displayName: string;
    protected getElementName(): string;
}
declare const TableBody: any;
export { ITableBodyProps, InnerTableBody, TableBody };
