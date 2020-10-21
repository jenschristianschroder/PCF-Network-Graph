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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import * as Fela from "fela";
import * as FelaDOM from "fela-dom";
import * as PropTypes from "prop-types";
import { Styler } from "../../ExternalElements/styler/Styler";
import { CustomControlHostRoot } from "./CustomControlHostRoot";
import { MeasuringHandler } from "../../CommonComponents/Common/MeasuringHandler/MeasuringHandler";
import { instance as XrmProxy } from "../Utilities/XrmProxy";
import * as DefaultControlMapper from "../Utilities/DefaultControlMapper";
var _FelaInitialized = false;
var _FelaRenderer = null;
var _FelaElement = null;
var CustomControlWebClientWrapper = (function (_super) {
    __extends(CustomControlWebClientWrapper, _super);
    function CustomControlWebClientWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomControlWebClientWrapper.prototype._initializeFela = function () {
        if (!_FelaInitialized) {
            if (!_FelaRenderer) {
                _FelaRenderer = Fela.createRenderer();
            }
            if (!_FelaElement) {
                _FelaElement = document.createElement("style");
                _FelaElement.id = "stylesheet";
                document.head.appendChild(_FelaElement);
            }
            FelaDOM.render(_FelaRenderer, _FelaElement);
            _FelaInitialized = true;
        }
    };
    CustomControlWebClientWrapper.prototype._generateFabricStylingWrapper = function (child) {
        if (this.props.stylingTheme && window.FluentUIReact && Styler) {
            return (React.createElement(Styler, { theme: this.props.stylingTheme.theme, scopedSettings: this.props.stylingTheme.scopedSettings }, child));
        }
        return child;
    };
    CustomControlWebClientWrapper.prototype._forceUpdate = function (callback) {
        this.forceUpdate(callback);
    };
    CustomControlWebClientWrapper.prototype.getChildContext = function () {
        if (!_FelaInitialized) {
            this._initializeFela();
        }
        return {
            renderer: _FelaRenderer,
        };
    };
    CustomControlWebClientWrapper.prototype.componentDidMount = function () {
        this.props.setReRenderCallBack(this._forceUpdate.bind(this));
    };
    CustomControlWebClientWrapper.prototype.render = function () {
        return (React.createElement(CustomControlHostRoot, __assign({ generateStylingWrapperElement: this.props.stylingTheme ? this._generateFabricStylingWrapper.bind(this) : null }, this.props.givenHostProps)));
    };
    return CustomControlWebClientWrapper;
}(React.Component));
CustomControlWebClientWrapper.childContextTypes = {
    renderer: PropTypes.object,
};
window.CustomControls = {};
window.CustomControls.CustomControlHostRoot = CustomControlHostRoot;
window.CustomControls.CustomControlWebClientWrapper = CustomControlWebClientWrapper;
window.CustomControls.MeasuringHandler = MeasuringHandler.getInstance();
window.CustomControls.XrmProxy = XrmProxy;
window.CustomControls.Utilities = {};
window.CustomControls.Utilities.GetDefaultControlConfig =
    DefaultControlMapper.retrieveDefaultConfigurationForControl;
window.CustomControls.Utilities.GetDefaultControlManifest =
    DefaultControlMapper.retrieveDefaultManifestByConfiguration;
export { CustomControlWebClientWrapper };
