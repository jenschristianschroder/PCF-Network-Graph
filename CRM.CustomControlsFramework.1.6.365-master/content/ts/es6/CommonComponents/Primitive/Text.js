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
import { ComponentBase } from "./ComponentBase";
import * as AttributeName from "../Supplementary/Accessibility/Attributes/AttributeName";
import * as AccessibilityRole from "../Supplementary/Accessibility/Attributes/Role";
import * as AriaLive from "../Supplementary/Accessibility/Attributes/AriaLive";
import * as ReactFela from "react-fela";
import { ruleGen } from "./FelaConnectHelper";
function transformFontWeight(fontWeight) {
    switch (fontWeight) {
        case "normal":
            return "normal";
        case "bold":
            return "bold";
        default:
            return Number(fontWeight);
    }
}
var InnerText = (function (_super) {
    __extends(InnerText, _super);
    function InnerText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerText.prototype.getElementName = function () {
        return this.props.semanticTag || "span";
    };
    InnerText.prototype.getElementClassName = function () {
        var className = this.props.styles ? this.props.styles : "";
        return this.props.className ? className + " " + this.props.className : className;
    };
    InnerText.prototype.getElementProps = function () {
        var options = {};
        switch (this.props.role) {
            case AccessibilityRole.ALERT:
                options[AttributeName.ARIA_LIVE] = this.props.notificationType || AriaLive.POLITE;
                break;
        }
        return options;
    };
    InnerText.displayName = "Text";
    return InnerText;
}(ComponentBase));
function fontWeightRuleGen(props) {
    if (props && props.style) {
        if (props.style.fontWeight) {
            return Object.assign({}, {
                fontWeight: typeof props.style.fontWeight === "string"
                    ? transformFontWeight(props.style.fontWeight)
                    : props.style.fontWeight,
            }, ruleGen(props));
        }
        return Object.assign(props.style, ruleGen(props));
    }
    return {};
}
var mapStylesToProps = function (props) { return function (renderer) { return renderer.renderRule(fontWeightRuleGen, props); }; };
var Text = ReactFela.connect(mapStylesToProps)(InnerText);
export { InnerText, Text };
