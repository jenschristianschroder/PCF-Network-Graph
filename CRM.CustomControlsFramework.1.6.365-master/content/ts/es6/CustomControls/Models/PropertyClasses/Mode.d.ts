import { ICustomControlHostProps, IExternalUtils, IHostData } from "./../CustomControlDataInterfaces";
import * as CustomControlBagInterfaces from "./../CustomControlExposedInterfaces";
export declare class Mode implements CustomControlBagInterfaces.IMode {
    private _customControlProperties;
    private _modeData;
    allocatedWidth: number;
    allocatedHeight: number;
    trackContainerResize: (shouldTrack: boolean) => void;
    setFullScreen: (isFullScreen: boolean) => void;
    isControlDisabled: boolean;
    isVisible: boolean;
    label: string;
    accessibilityLabel: string;
    isOffline: boolean;
    fullPageParam: any;
    rowSpan: number;
    hasFocus: boolean;
    isPreview: boolean;
    isAuthoringMode: boolean;
    isActive: boolean;
    isRead: boolean;
    contextInfo: CustomControlBagInterfaces.IContextInfo;
    constructor(customControlProperties: ICustomControlHostProps, _externalUtils: IExternalUtils, hostData: IHostData);
    setNotification(message: string, id: string): boolean;
    clearNotification(id?: string): boolean;
    setControlState(state: any, globalSetting?: boolean, pageLevel?: boolean): boolean;
    blur(): void;
    focus(): void;
}
