import { ICustomControlHostProps, IExternalUtils, IHostData } from "./../CustomControlDataInterfaces";
import * as CustomControlBagInterfaces from "./../CustomControlExposedInterfaces";
export declare class Client implements CustomControlBagInterfaces.IClient {
    private _externalUtils;
    private _customControlProperties;
    private _xrmProxy;
    isPreview: boolean;
    formFactor: any;
    userAgent: CustomControlBagInterfaces.CustomControlExposedUserAgent;
    languageCode: string;
    isRTL: boolean;
    locale: string;
    orgSettings: CustomControlBagInterfaces.ICustomControlExposedOrgSettings;
    dateFormattingInfo: CustomControlBagInterfaces.DateFormattingInfo;
    numberFormattingInfo: CustomControlBagInterfaces.NumberFormattingInfo;
    userTimeZoneUtcOffsetMinutes: number;
    getUserTimeZoneUtcOffset: (d: Date) => number;
    allocatedWidth: number;
    allocatedHeight: number;
    trackContainerResize: (shouldTrack: boolean) => void;
    setFullScreen: (isFullscreen: boolean) => void;
    setFullscreen: (isFullscreen: boolean) => void;
    ignoreSelfUpdates: (shouldIgnore: boolean) => void;
    disableScroll: boolean;
    constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
    getClient(): string;
    isOffline(): boolean;
    getFormFactor(): any;
    getClientState(): string;
    updateClientBag(hostData: IHostData): void;
}
