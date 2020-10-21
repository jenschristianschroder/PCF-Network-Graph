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
import { ComponentBase } from "../ComponentBase";
import * as ReactFela from "react-fela";
import { mapStylesToProps } from "../FelaConnectHelper";
var InnerTableHeaderCell = (function (_super) {
    __extends(InnerTableHeaderCell, _super);
    function InnerTableHeaderCell(props) {
        var _this = _super.call(this, props) || this;
        _this._onClickWrapper = _this._onClickWrapper.bind(_this);
        return _this;
    }
    InnerTableHeaderCell.prototype._onClickWrapper = function (event) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    };
    InnerTableHeaderCell.prototype.getElementName = function () {
        return "th";
    };
    InnerTableHeaderCell.prototype.getElementProps = function () {
        var returnElementProps = Object.assign({}, this.props, {
            children: null,
            onClick: this._onClickWrapper,
        });
        return returnElementProps;
    };
    InnerTableHeaderCell.displayName = "TableHeaderCell";
    return InnerTableHeaderCell;
}(ComponentBase));
var TableHeaderCell = ReactFela.connect(mapStylesToProps)(InnerTableHeaderCell);
export { InnerTableHeaderCell, TableHeaderCell };
