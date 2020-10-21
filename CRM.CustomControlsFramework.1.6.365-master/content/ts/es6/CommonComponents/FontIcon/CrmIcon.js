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
import { getSymbolMapping } from "./CrmIconSymbol";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "../Primitive/FelaConnectHelper";
var InnerCrmIcon = (function (_super) {
    __extends(InnerCrmIcon, _super);
    function InnerCrmIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InnerCrmIcon.prototype.getSymbolClassName = function (type) {
        return getSymbolMapping(type);
    };
    return InnerCrmIcon;
}(FontIcon));
var CrmIcon = ReactFela.connect(mapStylesToProps)(InnerCrmIcon);
export { InnerCrmIcon, CrmIcon };
