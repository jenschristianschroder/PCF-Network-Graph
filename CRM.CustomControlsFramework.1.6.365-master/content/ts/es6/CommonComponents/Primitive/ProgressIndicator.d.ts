import * as React from "react";
import { ComponentBase, IPropsBase } from "./ComponentBase";
interface IProgressIndicatorStyle {
    height?: string;
    width?: string;
    color?: string;
}
interface IProgressIndicatorProps extends IPropsBase {
    active?: boolean;
    progressType?: "bar" | "ring";
    progress?: number;
    progressDots?: number;
    className?: string;
    style?: IProgressIndicatorStyle;
    animating?: boolean;
    animationDelay?: number;
    displayDelay?: number;
}
interface ProgressIndicatorState {
    renderIndicator: boolean;
}
declare class InnerProgressIndicator extends ComponentBase<IProgressIndicatorProps, ProgressIndicatorState> {
    static displayName: string;
    private _delayTimeoutId;
    constructor(props: IProgressIndicatorProps);
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IProgressIndicatorProps, nextState: ProgressIndicatorState): boolean;
    protected getElementName(): string;
    protected getFlexClassName(style: React.CSSProperties): string;
    protected getElementChildren(): React.ReactNode;
}
declare const ProgressIndicator: any;
export { IProgressIndicatorStyle, IProgressIndicatorProps, InnerProgressIndicator, ProgressIndicator };
