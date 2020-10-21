import * as React from "react";
import { IFlexboxStyle } from "./IFlexboxStyle";
import { IFlexboxItemStyle } from "./IFlexboxItemStyle";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface IIFrameProps extends IPropsBase {
    name?: string;
    src?: string;
    style?: IIFrameStyle & IFlexboxItemStyle;
    scrolling?: string;
    key?: string;
    security?: string;
    title?: string;
    allow?: string;
    onLoad?(): void;
    onMessage?(event: MessageEvent): void;
    registerSendMessageHandler?(handler: (message: any) => void): void;
    onReadyStateComplete?(): void;
}
interface IIFrameStyle extends IFlexboxStyle {
    border?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number | string;
    opacity?: number;
    overflow?: "visible" | "hidden";
}
declare class InnerIFrame extends ComponentBase<IIFrameProps, any> {
    static displayName: string;
    private _iframeElement;
    private _origin;
    private _receiveMessageHandler;
    constructor(props: IIFrameProps);
    private _normalizeUrl;
    private _onLoad;
    protected getElementName(): string;
    protected getElementProps(): React.IframeHTMLAttributes<Element>;
    componentWillReceiveProps(): void;
    private _resetEventHandlers;
    private _registerIframeElement;
    componentWillUnmount(): void;
    private _receiveMessage;
    private _sendMessage;
}
declare const IFrame: any;
export { IIFrameStyle, IIFrameProps, InnerIFrame, IFrame };
