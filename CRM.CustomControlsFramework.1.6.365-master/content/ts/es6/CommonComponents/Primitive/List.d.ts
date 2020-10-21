import * as React from "react";
import { IViewStyle } from "./IViewStyle";
import { IFlexboxContainerStyle } from "./IFlexboxContainerStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
import { IAccessibilityNotificationProps } from "./IAccessibilityNotificationProps";
import { ListStyleTypeProperty } from "csstype";
interface IListStyle extends IViewStyle, IFlexboxContainerStyle {
    listStyleType?: ListStyleTypeProperty;
}
interface IListProps extends IPropsBase, IAccessibilityNotificationProps {
    style?: IListStyle;
    role?: "list" | "tablist" | "menu" | string;
}
declare class InnerList extends ComponentBase<IListProps, any> {
    static displayName: string;
    constructor(props: IListProps);
    protected getElementName(): string;
    protected getFlexClassName(style: React.CSSProperties): string;
    protected getElementProps(): React.HTMLAttributes<Element>;
    protected getElementStyle(): React.CSSProperties;
}
declare const List: any;
export { IListStyle, IListProps, InnerList, List };
