import { DEFAULT_FLUENT_DL } from "../Models/PropertyFallbacks/Design/DefaultDesignLanguage";
var ManifestDesignHelper = (function () {
    function ManifestDesignHelper() {
        this._map = {};
    }
    ManifestDesignHelper.prototype.GetThemeData = function (manifest, theme) {
        if (!theme) {
            theme = DEFAULT_FLUENT_DL;
        }
        var name = manifest.ConstructorName + "-" + theme.DesignLanguageId + "-" + theme.ThemeId;
        if (this._map.hasOwnProperty(name)) {
            return this._map[name];
        }
        var newMap = {
            DesignLanguageId: theme.DesignLanguageId,
            ThemeId: theme.ThemeId,
        };
        if (!manifest.DesignMap || !manifest.DesignMap.DesignMap)
            return newMap;
        for (var key in manifest.DesignMap.DesignMap) {
            var value = manifest.DesignMap.DesignMap[key];
            var mapping = value.split(".");
            var newValue = theme;
            for (var i = 0; i < mapping.length; i++) {
                if (newValue) {
                    newValue = newValue[mapping[i]];
                }
                else {
                    newValue = value;
                    break;
                }
            }
            newMap[key] = newValue || value;
        }
        this._map[name] = newMap;
        return newMap;
    };
    return ManifestDesignHelper;
}());
var instance = new ManifestDesignHelper();
export { ManifestDesignHelper, instance };
