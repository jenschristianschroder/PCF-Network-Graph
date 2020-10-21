var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactFela from "react-fela";
import { ComponentBase } from "./ComponentBase";
import { mapStylesToProps } from "./FelaConnectHelper";
import { instance as XrmProxy } from "../../CustomControls/Utilities/XrmProxy";
import { ClientContext } from "../../CustomControls/Utilities/Contexts";
var SELECT_EMAIL_ADDRESS_CONTACT = "?$select=emailaddress1";
var SELECT_EMAIL_ADDRESS_USER = "?$select=internalemailaddress,azureactivedirectoryobjectid";
var CCF_TELEMETRY_EVENT = "uci_controlframework_usage";
var LivePersonaCardInitializationState;
(function (LivePersonaCardInitializationState) {
    LivePersonaCardInitializationState["NotInitialized"] = "NotInitialized";
    LivePersonaCardInitializationState["Initializing"] = "Initializing";
    LivePersonaCardInitializationState["Initialized"] = "Initialized";
    LivePersonaCardInitializationState["Failed"] = "Failed";
})(LivePersonaCardInitializationState || (LivePersonaCardInitializationState = {}));
var InnerLivePersonaCardHoverTarget = (function (_super) {
    __extends(InnerLivePersonaCardHoverTarget, _super);
    function InnerLivePersonaCardHoverTarget(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            identifiers: null,
            hasDataLoaded: false,
        };
        _this._isLivePersonCardLibAvailable = _this._isLivePersonCardLibAvailable.bind(_this);
        _this._onKeyDownOpenCard = _this._onKeyDownOpenCard.bind(_this);
        return _this;
    }
    InnerLivePersonaCardHoverTarget.prototype.getElementProps = function () {
        var props = {
            accessibilityLabel: this.props.accessibilityLabel,
            displayName: this.props.displayName,
            emailAddress: this.props.emailAddress,
            entityReference: this.props.entityReference,
            personaType: this.props.personaType,
            recordId: this.props.recordId,
            registerOpenCardCallback: this.props.registerOpenCardCallback,
        };
        return props;
    };
    InnerLivePersonaCardHoverTarget.prototype.componentDidMount = function () {
        if (this.props.registerOpenCardCallback) {
            this.props.registerOpenCardCallback(this._onKeyDownOpenCard);
        }
        if (this.props.registerHasLivePersonaCardLoadedCallback) {
            this.props.registerHasLivePersonaCardLoadedCallback(this._isLivePersonCardLibAvailable);
        }
    };
    InnerLivePersonaCardHoverTarget.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.recordId !== this.props.recordId) {
            this.setState({
                identifiers: null,
                hasDataLoaded: false,
            });
            this._getRecordData();
        }
    };
    InnerLivePersonaCardHoverTarget.prototype.render = function () {
        var children = this.getElementChildren();
        if (this._isLivePersonCardLibAvailable() && this.state.hasDataLoaded) {
            var LivePersonaCardHoverTargetV2 = window.LivePersonaCardHoverTargetV2;
            if (LivePersonaCardHoverTargetV2) {
                return (React.createElement(LivePersonaCardHoverTargetV2, { cardParameters: this._makeLivePersonaCardParameters(false), tabIndex: "-1" }, React.createElement("span", { id: this.props.id, style: this.props.style }, children)));
            }
        }
        else if (this._isLivePersonCardLibAvailable() && !this.state.hasDataLoaded) {
            this._getRecordData();
        }
        return children;
    };
    InnerLivePersonaCardHoverTarget.prototype._makeLivePersonaCardParameters = function (cardOpenedByKeyboardShortcut) {
        var _this = this;
        var identifiers = this.state.identifiers || {};
        var hostAppId = this._getHostAppId();
        var cardAction = cardOpenedByKeyboardShortcut ? "Card opened from keyboard shortcut" : "Card opened by hovering";
        return {
            personaInfo: {
                identifiers: {
                    HostAppPersonaId: hostAppId,
                    Smtp: identifiers.smtp,
                    AadObjectId: identifiers.aadObjectId,
                    PersonaType: this.props.personaType,
                },
                displayName: this.props.displayName,
            },
            behavior: {
                onCardOpen: function () { return _this._reportCardUsage(cardAction); },
                onCardClose: function () { return _this._reportCardUsage("Card Closed"); },
                disableClick: true,
            },
            ariaLabel: this.props.accessibilityLabel ? this.props.accessibilityLabel : undefined,
        };
    };
    InnerLivePersonaCardHoverTarget.prototype._onKeyDownOpenCard = function () {
        if (this._isLivePersonCardLibAvailable() &&
            this.state.hasDataLoaded &&
            window.LPC &&
            window.LPC.openCard) {
            if (this.props.onKeyDownContainerId) {
                var containerElem = document.getElementById(this.props.onKeyDownContainerId);
                if (containerElem) {
                    var cardParams = this._makeLivePersonaCardParameters(true);
                    window.LPC.openCard(containerElem, cardParams);
                }
            }
        }
    };
    InnerLivePersonaCardHoverTarget.prototype._getHostAppId = function () {
        return this.props.entityReference.LogicalName + ":" + this.props.recordId;
    };
    InnerLivePersonaCardHoverTarget.prototype._getRecordData = function () {
        var _this = this;
        if (!this.state.hasDataLoaded) {
            var logicalName_1 = this.props.entityReference.LogicalName;
            try {
                XrmProxy.retrieveRecord(logicalName_1, this.props.recordId, this._getQueryOptions(logicalName_1))
                    .then(function (recordData) {
                    var identifiers = _this._getLpcIdentifiers(recordData, logicalName_1);
                    if (identifiers) {
                        _this.setState({
                            identifiers: identifiers,
                            hasDataLoaded: true,
                        });
                    }
                })
                    .catch(function () {
                    XrmProxy.Diagnostics.traceError("LivePersonaHoverTarget", "Failed to fetch record data.");
                });
            }
            catch (ex) {
                XrmProxy.Diagnostics.traceError("LivePersonaHoverTarget", "Failed to fetch record data: " + ex);
            }
        }
    };
    InnerLivePersonaCardHoverTarget.prototype._getQueryOptions = function (logicalName) {
        switch (logicalName) {
            case "contact":
                return SELECT_EMAIL_ADDRESS_CONTACT;
            case "systemuser":
                return SELECT_EMAIL_ADDRESS_USER;
        }
        return "";
    };
    InnerLivePersonaCardHoverTarget.prototype._getLpcIdentifiers = function (recordData, logicalName) {
        switch (logicalName) {
            case "contact":
                return {
                    smtp: recordData.emailaddress1,
                };
            case "systemuser":
                return {
                    smtp: recordData.internalemailaddress,
                    aadObjectId: recordData.azureactivedirectoryobjectid,
                };
        }
        return null;
    };
    InnerLivePersonaCardHoverTarget.prototype._isLivePersonCardLibAvailable = function () {
        var lpcState = this.context ? this.context.lpcInitializationState : undefined;
        return lpcState
            ? lpcState === LivePersonaCardInitializationState.Initialized
            : false;
    };
    InnerLivePersonaCardHoverTarget.prototype._reportCardUsage = function (action) {
        var actionType = {
            name: "EventContext",
            value: action,
        };
        var controlName = {
            name: "ControlName",
            value: "LivePersonaHoverTarget",
        };
        var eventParameters = [actionType, controlName];
        var usageEvent = {
            eventName: CCF_TELEMETRY_EVENT,
            eventParameters: eventParameters,
        };
        XrmProxy.Reporting.reportEvent(usageEvent);
    };
    InnerLivePersonaCardHoverTarget.displayName = "LivePersonaCardHoverTarget";
    return InnerLivePersonaCardHoverTarget;
}(ComponentBase));
InnerLivePersonaCardHoverTarget.contextType = ClientContext;
var LivePersonaCardHoverTarget = ReactFela.connect(mapStylesToProps)(InnerLivePersonaCardHoverTarget);
export { LivePersonaCardInitializationState, LivePersonaCardHoverTarget };
