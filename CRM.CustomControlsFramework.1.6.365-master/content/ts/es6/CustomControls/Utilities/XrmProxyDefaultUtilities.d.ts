export declare function getTimeZoneOffsetMinutes(date: Date): number;
export declare function getClientState(): string;
export declare function getClient(): string;
export declare function getFormFactor(): number;
export declare function openURL(url: string): void;
export declare function openAlertDialog(strings: ControlAndClientApiInterfaces.AlertDialogStrings): Promise<ControlAndClientApiInterfaces.AlertDialogResponse>;
export declare function openErrorDialog(strings: ControlAndClientApiInterfaces.ErrorDialogOptions): Promise<ControlAndClientApiInterfaces.ErrorDialogResponse>;
export declare function openConfirmDialog(strings: ControlAndClientApiInterfaces.ConfirmDialogStrings): Promise<ControlAndClientApiInterfaces.ConfirmDialogResponse>;
