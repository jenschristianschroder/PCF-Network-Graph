import { IPropsBase } from "./ComponentBase";
import { IViewStyle } from "./IViewStyle";
interface ILivePersonaCardHoverTargetProps extends IPropsBase {
    displayName: string;
    emailAddress?: string;
    entityReference: any;
    personaType: string;
    onKeyDownContainerId: string;
    recordId: string;
    registerHasLivePersonaCardLoadedCallback?: (hasLivePersonaCardLoaded: () => boolean) => void;
    registerOpenCardCallback: (openCardCallback: () => void) => void;
    style: IViewStyle;
}
declare enum LivePersonaCardInitializationState {
    NotInitialized = "NotInitialized",
    Initializing = "Initializing",
    Initialized = "Initialized",
    Failed = "Failed"
}
declare const LivePersonaCardHoverTarget: any;
export { LivePersonaCardInitializationState, ILivePersonaCardHoverTargetProps, LivePersonaCardHoverTarget };
