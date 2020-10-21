/// <reference types="react" />
import { CustomControlHostRoot } from "../Components/CustomControlHostRoot";
import { IPopupService, IPopupProps } from "../Models/CustomControlExposedInterfaces";
declare class PopupService implements IPopupService {
    private _host;
    private _popups;
    private _popupsId;
    constructor(host: CustomControlHostRoot);
    private _getKeyName;
    private _createPopup;
    createPopup(props: IPopupProps): void;
    openPopup(name?: string): void;
    closePopup(name?: string): void;
    updatePopup(name: string, newProps: IPopupProps): void;
    deletePopup(name?: string): void;
    getPopups(): JSX.Element[];
    setPopupsId(id: string): void;
    getPopupsId(): string;
    renderPopups(): JSX.Element;
}
export { PopupService };
