import * as FormatterUtils from "./FormatterUtils";
import { AjaxDate } from "./AjaxDate";
import { CultureInfo } from "../../../Utilities/CultureInfo";
var SimpleFormatter = (function () {
    function SimpleFormatter() {
    }
    SimpleFormatter.ParseDateFromString = function (value, format, cultureInfo) {
        var controlFormat = format;
        if (controlFormat) {
            controlFormat = controlFormat.toLowerCase();
        }
        var indexOfSpace = value.indexOf(" ");
        switch (format) {
            case "date":
            case "dateonly":
                if (indexOfSpace > 0) {
                    controlFormat = "datetime";
                }
                break;
            case "datetime":
            case "dateandtime":
                if (indexOfSpace < 0) {
                    controlFormat = "date";
                }
                break;
        }
        var formatPattern = FormatterUtils.getFormatPattern(cultureInfo, controlFormat);
        return AjaxDate.parse(value, formatPattern, cultureInfo);
    };
    SimpleFormatter.formatIntegerValue = function (input, cultureInfo) {
        return SimpleFormatter.formatDecimalValue(input, cultureInfo, 0);
    };
    SimpleFormatter.parseFormatted = function () {
        return null;
    };
    SimpleFormatter.formatCurrencyValue = function (input, cultureInfo, currencySymbol, precision) {
        var formattedCurrencyValue = FormatterUtils.basicFormatCurrencyValue(input, cultureInfo, precision);
        return currencySymbol !== null && currencySymbol !== undefined
            ? formattedCurrencyValue.replace(FormatterUtils.getCurrencySymbol(cultureInfo), currencySymbol)
            : formattedCurrencyValue;
    };
    SimpleFormatter.formatShortDateValue = function (input, cultureInfo) {
        return AjaxDate.localeFormat(input, "d", cultureInfo);
    };
    SimpleFormatter.formatLongDateValue = function (input, cultureInfo) {
        return AjaxDate.localeFormat(input, "D", cultureInfo);
    };
    SimpleFormatter.formatDecimalValue = function (input, cultureInfo, precision) {
        if (input < 0) {
            return FormatterUtils.formatNegativeDecimalValue(input, cultureInfo, precision);
        }
        else {
            return FormatterUtils.formatPositiveDecimalValue(input, cultureInfo, precision);
        }
    };
    SimpleFormatter.formatSortableDateValue = function (input) {
        var formattedValue = SimpleFormatter.formatSortableDateTimeValue(input);
        return formattedValue.split("T")[0];
    };
    SimpleFormatter.formatSortableDateTimeValue = function (input) {
        return AjaxDate.localeFormat(input, "s", CultureInfo.CurrentCulture);
    };
    SimpleFormatter.formatShortDateTimeValue = function (input, cultureInfo) {
        var shortDatePattern = FormatterUtils.getShortDatePattern(cultureInfo);
        var shortTimePattern = FormatterUtils.getShortTimePattern(cultureInfo);
        return AjaxDate.localeFormat(input, shortDatePattern + " " + shortTimePattern, cultureInfo);
    };
    SimpleFormatter.formatDateLongAbbreviated = function (input, cultureInfo) {
        var longDatePattern = FormatterUtils.getLongDatePattern(cultureInfo);
        longDatePattern = longDatePattern.replace("MMMM", "MMM");
        longDatePattern = longDatePattern.replace("dddd", "ddd");
        return AjaxDate.localeFormat(input, longDatePattern, cultureInfo);
    };
    SimpleFormatter.formatDateYearMonthValue = function (input, cultureInfo) {
        return AjaxDate.localeFormat(input, "Y", cultureInfo);
    };
    SimpleFormatter.formatLanguageValue = function (input, languagesByCode) {
        if (isNaN(input) || input < -1)
            return undefined;
        else if (input !== null && (!languagesByCode || !languagesByCode[input]))
            return input.toString();
        else
            return languagesByCode[input];
    };
    return SimpleFormatter;
}());
export { SimpleFormatter };
