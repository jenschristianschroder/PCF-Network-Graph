import * as React from "react";
import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableCellProps extends IPropsBase {
    style?: IViewStyle;
    colSpan?: number;
    rowSpan?: number;
    scope?: string;
}
declare class InnerTableCell extends ComponentBase<ITableCellProps, any> {
    static displayName: string;
    protected getElementName(): string;
    protected getElementProps(): React.TdHTMLAttributes<Element>;
}
declare const TableCell: any;
export { ITableCellProps, InnerTableCell, TableCell };
