import * as React from "react";
import { ComponentBase, IPropsBase } from "./ComponentBase";
import { ITextStyle } from "./Text";
import { IViewStyle } from "./IViewStyle";
import { PresenceIndicatorSize } from "./PresenceIndicator";
import { CustomControlEntityReference } from "../../CustomControls/Models/CustomControlEntityReference";
interface IEntityImageProps extends IPropsBase {
    hasPrimaryImageField?: boolean;
    imageSrc?: string;
    customEntityIcon?: string;
    entityPrimaryField?: string;
    entityHealthScore?: number;
    style?: IEntityImageStyle;
    alt?: string;
    sipUrl?: string;
    presenceIndicatorSize?: PresenceIndicatorSize;
    entityReference?: CustomControlEntityReference;
    iconStyle?: IViewStyle & ITextStyle;
    wrapperStyle?: IViewStyle;
}
interface IEntityImageStyle extends IViewStyle {
    fontSize?: string;
}
declare enum Mode {
    CustomImage = 0,
    Initials = 1,
    CustomEntityIcon = 2,
    DefaultEntityIcon = 3
}
declare class InnerEntityImage extends ComponentBase<IEntityImageProps, {}> {
    static displayName: string;
    static backgroundColors: string[];
    static getMode(props: IEntityImageProps): Mode;
    private _isCustomImageMode;
    private _isInitialsMode;
    private _isCustomEntityIconMode;
    private _isDefaultEntityIconMode;
    private _renderHealthCircle;
    protected getElementName(): string;
    protected getElementProps(): React.InputHTMLAttributes<Element>;
    protected getElementChildren(): React.ReactNode;
    private _renderEntityImageWithPresence;
    render(): JSX.Element;
}
declare const EntityImage: any;
export { Mode as EntityImageMode, IEntityImageStyle, IEntityImageProps, InnerEntityImage, EntityImage };
