import { ICustomControlHostProps, IExternalUtils } from "./../CustomControlDataInterfaces";
import * as CustomControlBagInterfaces from "./../CustomControlExposedInterfaces";
export declare class UserSettings implements CustomControlBagInterfaces.IUserSettings {
    private _formattingData;
    private _utilsData;
    userId: string;
    userName: string;
    dateFormattingInfo: CustomControlBagInterfaces.DateFormattingInfo;
    numberFormattingInfo: CustomControlBagInterfaces.NumberFormattingInfo;
    isRTL: boolean;
    languageId: number;
    securityRoles: string[];
    isHighContrastEnabled: boolean;
    timeZoneUtcOffsetMinutes: number;
    pagingLimit: number;
    workDayStartTime: string;
    formatInfoCultureName: string;
    constructor(customControlProperties: ICustomControlHostProps, externalUtils: IExternalUtils);
    getTimeZoneOffsetMinutes(date?: Date): number;
}
