import { instance as TelemetryManagerInstance } from "./TelemetryManager";
var PCFUsageLogger = (function () {
    function PCFUsageLogger() {
        this._isSuccessLogged = false;
        this._isFailureLogged = false;
    }
    PCFUsageLogger.prototype.logUsageSuccessEvent = function (props) {
        if (!this._isSuccessLogged) {
            TelemetryManagerInstance.reportUsage(props, "Success");
            this._isSuccessLogged = true;
        }
    };
    PCFUsageLogger.prototype.logUsageFailureEvent = function (props) {
        if (!this._isFailureLogged) {
            TelemetryManagerInstance.reportUsage(props, "Failure");
            this._isFailureLogged = true;
        }
    };
    PCFUsageLogger.prototype.logUsageOutputChanged = function (props) {
        TelemetryManagerInstance.reportUsage(props, "NotifyOutputChanged was called by a destroyed control");
    };
    PCFUsageLogger.prototype.logFailureEvent = function (props, exception, apiName, parentId, suggestedMitigation, failureType) {
        TelemetryManagerInstance.reportEventFailure(props, exception, apiName, parentId, suggestedMitigation, failureType);
    };
    return PCFUsageLogger;
}());
export { PCFUsageLogger };
