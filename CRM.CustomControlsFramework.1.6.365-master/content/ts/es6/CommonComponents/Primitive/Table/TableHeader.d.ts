import { IViewStyle } from "../IViewStyle";
import { ComponentBase, IPropsBase } from "../ComponentBase";
interface ITableHeaderProps extends IPropsBase {
    style?: IViewStyle;
}
declare class InnerTableHeader extends ComponentBase<ITableHeaderProps, any> {
    static displayName: string;
    protected getElementName(): string;
}
declare const TableHeader: any;
export { ITableHeaderProps, InnerTableHeader, TableHeader };
