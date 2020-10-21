import * as React from "react";
import * as Fela from "fela";
import { ICustomControlWebClientWrapperProps } from "../Models/CustomControlDataInterfaces";
interface CustomControlWebClientWrapperState {
}
declare class CustomControlWebClientWrapper extends React.Component<ICustomControlWebClientWrapperProps, CustomControlWebClientWrapperState> {
    private _initializeFela;
    private _generateFabricStylingWrapper;
    private _forceUpdate;
    getChildContext(): {
        renderer: Fela.IRenderer;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export { CustomControlWebClientWrapperState, CustomControlWebClientWrapper };
