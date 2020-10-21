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
import * as ReactDOM from "react-dom";
import { View } from "../View";
import { CustomControlSeeMoreStyleHelper } from "../../../CustomControls/Components/Helpers/CustomControlSeeMoreStyleHelper";
var ROOT_POPUP_ATTRIBUTE = "openedPopups";
var containerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
};
var RootNodeSuffix = "_popupContainer";
var RootPopup = (function (_super) {
    __extends(RootPopup, _super);
    function RootPopup(props) {
        var _this = _super.call(this, props) || this;
        _this._rootBodyElement = null;
        _this._seeMorePopupCount = null;
        _this._rootBodyElement = props.rootBodyElement || document.body;
        return _this;
    }
    RootPopup.prototype._getPopupId = function () {
        return ((this.props.parentCustomControlId ? this.props.parentCustomControlId + "|" : "") + this.props.id + RootNodeSuffix);
    };
    RootPopup.prototype._initializeRootNode = function () {
        if (!this._rootNode) {
            this._rootNode = document.createElement("section");
            this._rootNode.id = this._getPopupId();
            Object.assign(this._rootNode.style, {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
            });
            this._rootNode.setAttribute(ROOT_POPUP_ATTRIBUTE, "");
            this._rootBodyElement.appendChild(this._rootNode);
        }
    };
    RootPopup.prototype._getChildrenWithProps = function (children) {
        var _this = this;
        if (!children)
            return null;
        var result;
        if (children.map) {
            result = children.map(function (child) {
                return React.cloneElement(child, { rootPopupId: _this._getPopupId(), rootBodyElement: _this._rootBodyElement });
            });
        }
        else {
            result = React.cloneElement(children, {
                rootPopupId: this._getPopupId(),
                rootBodyElement: this._rootBodyElement,
            });
        }
        return result;
    };
    RootPopup.prototype._renderToBody = function () {
        if (this._seeMorePopupCount === null) {
            this._seeMorePopupCount = CustomControlSeeMoreStyleHelper.getInstance().getPopupCount();
        }
        var zIndexValue = this.props.customZIndex || 1;
        var shouldHaveZIndex = this.props.customZIndex || this._seeMorePopupCount > 0;
        var popupContainerStyle = this.props.style ? this.props.style : containerStyle;
        if (!this._style) {
            this._style = shouldHaveZIndex
                ? Object.assign({ zIndex: zIndexValue }, popupContainerStyle)
                : popupContainerStyle;
        }
        this._initializeRootNode();
    };
    RootPopup.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.style !== this.props.style) {
            this._style = null;
        }
    };
    RootPopup.prototype.componentDidMount = function () {
        if (this.props.openPopup) {
            this.props.openPopup(this._getPopupId());
        }
    };
    RootPopup.prototype.componentWillUnmount = function () {
        if (document.getElementById(this._rootNode.id)) {
            this._rootBodyElement.removeChild(this._rootNode);
        }
        if (this.props.closePopup) {
            this.props.closePopup(this._getPopupId());
        }
        this._rootNode = null;
    };
    RootPopup.prototype.render = function () {
        this._renderToBody();
        if (this.props.children) {
            return ReactDOM.createPortal(React.createElement(View, { style: this._style, tabIndex: this.props.tabIndex }, this._getChildrenWithProps(this.props.children)), this._rootNode);
        }
        return null;
    };
    return RootPopup;
}(React.Component));
export { ROOT_POPUP_ATTRIBUTE, RootPopup };
