import { ICustomControlHostProps } from "../Models/CustomControlDataInterfaces";
declare class PCFUsageLogger {
    private _isSuccessLogged;
    private _isFailureLogged;
    constructor();
    logUsageSuccessEvent(props: ICustomControlHostProps): void;
    logUsageFailureEvent(props: ICustomControlHostProps): void;
    logUsageOutputChanged(props: ICustomControlHostProps): void;
    logFailureEvent(props: ICustomControlHostProps, exception: Error, apiName: string, parentId?: string, suggestedMitigation?: string, failureType?: string): void;
}
export { PCFUsageLogger };
