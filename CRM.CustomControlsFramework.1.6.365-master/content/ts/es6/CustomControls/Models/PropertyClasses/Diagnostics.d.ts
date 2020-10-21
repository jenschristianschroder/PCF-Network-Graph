import { ICustomControlHostProps, IExternalUtils } from "./../CustomControlDataInterfaces";
export declare class Diagnostics implements ControlAndClientApiInterfaces.Diagnostics {
    private _externalUtils;
    private _controlId;
    constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
    addControlId(message: string): string;
    traceError(componentName: string, message: string): void;
    traceWarning(componentName: string, message: string): void;
    traceInfo(componentName: string, message: string): void;
    traceDebug(componentName: string, message: string): void;
}
