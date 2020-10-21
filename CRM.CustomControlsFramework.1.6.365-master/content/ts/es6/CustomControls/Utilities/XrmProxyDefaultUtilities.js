export function getTimeZoneOffsetMinutes(date) {
    return date ? date.getTimezoneOffset() : 0;
}
export function getClientState() {
    return "";
}
export function getClient() {
    return "Web";
}
export function getFormFactor() {
    return 1;
}
export function openURL(url) {
    window.open(url, "_blank");
}
export function openAlertDialog(strings) {
    alert(strings.text);
    return Promise.resolve({});
}
export function openErrorDialog(strings) {
    alert((strings.message || "") +
        (strings.errorCode ? " (" + strings.errorCode + ")\n\n" : "\n\n") +
        (strings.details || ""));
    return Promise.resolve({});
}
export function openConfirmDialog(strings) {
    var value = confirm((strings.title ? strings.title + "\n" + (strings.subtitle ? strings.subtitle + "\n" : "\n") : "") + strings.text);
    return Promise.resolve({
        confirmed: value,
    });
}
