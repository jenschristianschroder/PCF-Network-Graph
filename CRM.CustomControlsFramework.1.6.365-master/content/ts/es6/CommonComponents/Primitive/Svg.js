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
import { ComponentBase } from "./ComponentBase";
import * as SvgUtils from "./Svg/Utils";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "./FelaConnectHelper";
import { Image } from "./Image";
var InnerSvg = (function (_super) {
    __extends(InnerSvg, _super);
    function InnerSvg(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    InnerSvg.prototype.componentDidMount = function () {
        if (this.props.source) {
            this._inlineSvgImage(this.props.source);
        }
    };
    InnerSvg.prototype._inlineSvgImage = function (source) {
        var _this = this;
        SvgUtils.parseSvg(source).then(function (parsedSvgProps) {
            if (parsedSvgProps) {
                _this.setState({ parsedSvgProps: parsedSvgProps });
            }
            else {
                if (_this.props.onParsingError) {
                    _this.props.onParsingError("File content is empty");
                }
            }
        }, function (error) {
            if (_this.props.onParsingError) {
                _this.props.onParsingError(error.message);
            }
        });
    };
    InnerSvg.prototype._shouldRenderImg = function () {
        return this.props.source && this.props.fallbackToImage && !this.state.parsedSvgProps;
    };
    InnerSvg.prototype.getElementName = function () {
        return "svg";
    };
    InnerSvg.prototype.getElementProps = function () {
        return Object.assign({}, this.state.parsedSvgProps, this.props);
    };
    InnerSvg.prototype.render = function () {
        if (this._shouldRenderImg()) {
            var src = void 0;
            if (this.props.source) {
                src = this.props.source.replace(/\\/g, "/");
            }
            return React.createElement(Image, { source: src, style: this.props.style, altText: this.props.altText, title: this.props.title });
        }
        else {
            return React.createElement(this.getElementName(), this.getElementPropsInternal(), this.getElementChildren());
        }
    };
    InnerSvg.displayName = "Svg";
    return InnerSvg;
}(ComponentBase));
var Svg = ReactFela.connect(mapStylesToProps)(InnerSvg);
export { Svg };
