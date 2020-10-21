import { IThemeMap } from "../Models/CustomControlDataInterfaces";
import { IDesignBag } from "../Models/CustomControlExposedInterfaces";
declare class ManifestDesignHelper {
    private _map;
    GetThemeData(manifest: CustomControlInterfaces.ICustomControlManifest, theme: IThemeMap): IDesignBag;
}
declare const instance: ManifestDesignHelper;
export { ManifestDesignHelper, instance };
