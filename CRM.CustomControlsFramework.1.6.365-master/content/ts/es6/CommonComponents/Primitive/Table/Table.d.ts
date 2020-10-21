import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableStyle extends IViewStyle {
    tableLayout?: "fixed" | "auto";
}
interface ITableProps extends IPropsBase {
    style?: ITableStyle;
}
declare class InnerTable extends ComponentBase<ITableProps, any> {
    static displayName: string;
    protected getElementName(): string;
}
declare const Table: any;
export { ITableStyle, ITableProps, InnerTable, Table };
