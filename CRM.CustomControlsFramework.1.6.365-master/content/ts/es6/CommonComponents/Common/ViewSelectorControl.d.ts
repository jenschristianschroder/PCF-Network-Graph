import * as React from "react";
import { CrmIconSymbol } from "../FontIcon/CrmIconSymbol";
import { MicrosoftIconSymbol } from "../FontIcon/MicrosoftIconSymbol";
import { IComboBoxOption, IComboBoxProps, IComboBoxState, InnerComboBox } from "../Primitive/ComboBox";
import { IComboBoxStyle } from "../Primitive/ComboBox/IComboBoxStyle";
import { IViewStyle } from "../Primitive/IViewStyle";
import { IImageStyle } from "../Primitive/Image";
import { InnerListItem } from "../Primitive/ListItem";
import { ITextStyle } from "../Primitive/Text";
import { IFlexboxContainerStyle } from "../Primitive/View";
interface IViewSelectorControlCategory {
    id: string;
    name: string;
}
interface IViewSelectorControlOption extends IComboBoxOption {
    categoryId?: string;
    imageSource?: string;
    iconCategory?: number;
    altText?: string;
    iconType?: CrmIconSymbol | MicrosoftIconSymbol;
    iconStyle?: IImageStyle & IViewStyle & ITextStyle;
    iconTitle?: string;
}
interface IViewSelectorControlProps extends IComboBoxProps {
    categories?: IViewSelectorControlCategory[];
    hoveredStyle?: IViewSelectorControlStyle;
    viewSelectorStyle?: IViewSelectorControlStyle;
    overrideTextContainerStyle?: IFlexboxContainerStyle & IViewStyle;
    expandedBackgroundColor?: string;
    caretStyle?: ITextStyle;
    caretType?: MicrosoftIconSymbol;
    onItemIconPointerDown?: (option: IViewSelectorControlOption) => void;
    isRTL?: boolean;
    useViewSelectorV2?: boolean;
    placeItemIconOnRight?: boolean;
}
interface IViewSelectorControlState extends IComboBoxState {
    selectedItemId?: string;
}
interface IViewSelectorControlStyle extends IComboBoxStyle {
}
declare class ViewSelectorControl extends InnerComboBox<IViewSelectorControlProps, IViewSelectorControlState> {
    static displayName: string;
    constructor(props?: IViewSelectorControlProps);
    protected handleItemSelected(item: InnerListItem): void;
    protected handleItemIconPointerDown(e: React.MouseEvent): void;
    protected handleSpaceKey(e: KeyboardEvent): void;
    protected handleArrowUp(amount: number): void;
    protected handleArrowDown(e: KeyboardEvent, amount: number): void;
    protected handleRelativeToElementSelector(element: HTMLElement): HTMLElement;
    protected calculateWidth(): number | string;
    private _handleIconClick;
    private _renderListItem;
    private _getPlaceItemIconOnRight;
    private _getListItemTextStyle;
    private _renderOptions;
    private _getOptionTestHooks;
    private _renderCategories;
    private _renderCategoryHeader;
    protected getPageSize(): number;
    protected getListItemStyle(): {
        flex: string;
        cursor: string;
        padding: string;
        ":hover": {
            backgroundColor: string;
            color: string;
        };
    };
    protected getSelectedItemStyle(): {
        backgroundColor: string;
        color: string;
    };
    private _getSelectedStateBackGroundColor;
    private _getHoverStyle;
    protected renderOptionsList(): JSX.Element;
    protected getTextOnlyStyle(): ITextStyle;
    protected getTextOnlyInnerComponent(valueId: string): JSX.Element;
    protected handleValueChange(valueNew: string): void;
    private _renderCaretButton;
    protected renderFlyout(isRTL?: boolean): JSX.Element;
    private _getFlyoutStyle;
    private _getFlyoutRelatioveElementAndDirection;
    protected handleFlyoutOutsideClick(e: MouseEvent): void;
    render(): JSX.Element;
}
export { IViewSelectorControlOption, IViewSelectorControlCategory, IViewSelectorControlStyle, IViewSelectorControlProps, IViewSelectorControlState, ViewSelectorControl, };
