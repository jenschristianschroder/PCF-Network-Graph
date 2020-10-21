import { IconPosition } from "../../CommonComponents/FontIcon/MicrosoftIcon";
import { CustomControlEntityReference } from "./CustomControlEntityReference";
import { CultureInfo } from "../Utilities/CultureInfo";
interface ITimeZoneAdjusterState {
    dateStart: Date;
    dateEnd: Date;
    delta: number;
    daylightStart: ITransitionConstraintState;
    daylightEnd: ITransitionConstraintState;
}
interface ITransitionConstraintState {
    day: number;
    dayOfWeek: number;
    month: number;
    week: number;
    timeOfDay: Date;
    isFixedDateRule: boolean;
}
interface IFormatter {
    ParseDateFromString: (value: string, format: string, cultureInfo: CultureInfo, formatterProperties: any) => Date;
    formatIntegerValue(input: number, cultureInfo: CultureInfo): string;
    formatCurrencyValue(input: number, cultureInfo: CultureInfo, currencySymbol?: string, precision?: number): string;
    parseFormatted?(input: any, formatterProperties: any, cultureInfo: CultureInfo, format: string, resourceStrings?: {
        [Key: string]: string;
    }): number | Date | string | boolean | number[];
    formatShortDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatLongDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatSortableDateValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior): string;
    formatSortableDateTimeValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatShortDateTimeValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatDateLongAbbreviated(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatDateYearMonthValue(input: Date, cultureInfo: CultureInfo, behavior?: CrmFramework.DateTimeFieldBehavior, timeZoneOffsetMinutes?: number, adjusters?: ITimeZoneAdjusterState[]): string;
    formatDecimalValue(input: number, cultureInfo: CultureInfo, precision?: number): string;
    formatLanguageValue(input: number, languagesByCode: {
        [code: number]: string;
    }): string;
}
interface IEncoder {
    CrmUrlEncode(s: string): string;
    CrmHtmlEncode(s: string): string;
}
interface IDateTimeUtils {
    getDSTAdjustmentMinutes(time: Date, adjusters: ITimeZoneAdjusterState[]): number;
    getWeekOfYear(time: Date, firstDayOfWeek: number, calendarWeekRule: number, isLegacyFeatureEnabled?: boolean): number;
}
interface IPerformanceStopwatch {
    start(): void;
    stop(): void;
}
interface IPerformanceEvent {
    createMarker(parameters?: {
        [parameterName: string]: string;
    }, retroactiveTimestamp?: number): void;
    startStopwatch(parameters?: {
        [parameterName: string]: string;
    }): (parameters?: {
        [parameterName: string]: string;
    }) => void;
    createRetroactiveStopwatch(startTime: number, duration: number, parameters?: {
        [parameterName: string]: string;
    }): void;
}
interface IKeyboardShortcut {
    getKeyCombination: () => number[];
    getShortcutHandler: () => any;
    getIsGlobal: () => boolean;
    getIsHidden: () => boolean;
    getAreaName: () => string;
    getKeyboardShortcutType: () => any;
    getSrcElementId: () => string;
    getShortcutDescription: () => string;
}
interface ICCFConnectedCommandManagerProps {
    commandbarDisplayMode?: number;
    id: string;
    xrmReady: boolean;
    ribbonId: string;
    mainMenuLength: number;
    iconPosition: IconPosition;
    width?: number;
    selectedRecords?: CustomControlEntityReference[];
    key?: string;
    shouldEvaluateRules?: boolean;
    commandManagerId?: string;
    metaDataLoadedResolve?: (value: boolean) => void;
    isHidden?: boolean;
    addedCommandList?: any[];
    commandButtonWidth?: number;
    commandBarStyle?: any;
    customCommandManagerStyle?: any;
    contextToken?: any;
    rootZIndex?: boolean;
    customControlType?: string;
    focusOnFirstChild?: boolean;
}
export { ICCFConnectedCommandManagerProps, IKeyboardShortcut, IPerformanceEvent, IPerformanceStopwatch, ITransitionConstraintState, ITimeZoneAdjusterState, IDateTimeUtils, IEncoder, IFormatter, };
