var TRACE_LOCATION = "CustomControl.";
var Diagnostics = (function () {
    function Diagnostics(customControlProperties, externalUtils) {
        this._externalUtils = externalUtils;
        this._controlId = customControlProperties.controlId;
    }
    Diagnostics.prototype.addControlId = function (message) {
        return message + "[CustomControlId = " + this._controlId + "]";
    };
    Diagnostics.prototype.traceError = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceError(TRACE_LOCATION + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceWarning = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceWarning(TRACE_LOCATION + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceInfo = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceInfo(TRACE_LOCATION + componentName, this.addControlId(message));
    };
    Diagnostics.prototype.traceDebug = function (componentName, message) {
        return this._externalUtils.xrmProxy.Diagnostics.traceDebug(TRACE_LOCATION + componentName, this.addControlId(message));
    };
    return Diagnostics;
}());
export { Diagnostics };
