import * as React from "react";
import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableRowProps extends IPropsBase {
    style?: IViewStyle;
    onClick?: React.MouseEventHandler;
}
declare class InnerTableRow extends ComponentBase<ITableRowProps, any> {
    static displayName: string;
    constructor(props: ITableRowProps);
    private _onClickWrapper;
    protected getElementName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
declare const TableRow: any;
export { ITableRowProps, InnerTableRow, TableRow };
