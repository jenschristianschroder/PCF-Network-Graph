import * as React from "react";
import { IViewStyle, IViewHtmlStyle } from "./IViewStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface IListItemStyle extends IViewStyle, IViewHtmlStyle {
}
interface IListItemProps extends IPropsBase {
    style?: IListItemStyle;
    selectedStyle?: IListItemStyle;
    role?: "listitem" | "menuitem" | "tab" | "option" | string;
    isSelected?: boolean;
    dataText?: string;
    dataValue?: string;
    onSelected?: (element: React.Component<any, any>) => void;
    dataExpanded?: boolean;
}
declare class InnerListItem extends ComponentBase<IListItemProps, {}> {
    static displayName: string;
    private _handleSelected;
    componentWillReceiveProps(nextProps: IListItemProps): void;
    protected getElementName(): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
}
declare const ListItem: any;
export { IListItemStyle, IViewHtmlStyle, IListItemProps, InnerListItem, ListItem };
