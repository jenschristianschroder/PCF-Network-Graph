import * as React from "react";
import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableHeaderCellProps extends IPropsBase {
    style?: IViewStyle;
    onClick?: React.MouseEventHandler;
    colSpan?: string;
    rowSpan?: number;
    scope?: string;
}
declare class InnerTableHeaderCell extends ComponentBase<ITableHeaderCellProps, any> {
    static displayName: string;
    constructor(props: ITableHeaderCellProps);
    private _onClickWrapper;
    protected getElementName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
declare const TableHeaderCell: any;
export { ITableHeaderCellProps, InnerTableHeaderCell, TableHeaderCell };
