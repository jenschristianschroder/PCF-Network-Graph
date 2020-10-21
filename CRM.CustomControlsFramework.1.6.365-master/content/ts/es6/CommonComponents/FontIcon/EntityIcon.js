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
import { FontIcon } from "../Primitive/FontIcon";
import { getSymbolMappingByTypeName } from "./EntityIconSymbol";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "../Primitive/FelaConnectHelper";
var InnerEntityIcon = (function (_super) {
    __extends(InnerEntityIcon, _super);
    function InnerEntityIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerEntityIcon.prototype.getSymbolClassName = function (name) {
        return getSymbolMappingByTypeName(name);
    };
    return InnerEntityIcon;
}(FontIcon));
var EntityIcon = ReactFela.connect(mapStylesToProps)(InnerEntityIcon);
export { InnerEntityIcon, EntityIcon };
