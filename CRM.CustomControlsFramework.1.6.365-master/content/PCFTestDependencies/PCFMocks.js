var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultHostDispatchPropsActions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultDispatchPropsActions = void 0;
    // Default ICustomControlHostDispatchPropsActions method implementation
    exports.DefaultDispatchPropsActions = {
        clearNestedChild: function (key) {
            return false;
        },
        createAccessibilityComponent: function (props) {
            return undefined;
        },
        createCommandManagerUXComponent: function () {
            return undefined;
        },
        createKeyboardShortcut: function (keyCombination, shortcutHandler, isGlobal, areaName, shortcutDescription, srcElementId) {
            return undefined;
        },
        createXrmForm: function (contextToken, pageId, entityTypeName, entityId) {
            return false;
        },
        createXrmGrid: function (contextToken, pageId, parameters, controlName) {
            return false;
        },
        registerNewControl: function (contextToken, pageId, controlName, controlId) {
            return false;
        },
        executeAddOnLoad: function (dataSetObjectWrapper, contextToken) {
            return undefined;
        },
        executeNotifyHandlersThatEventOccurred: function (notifyHandlersThatEventOccurredParameter) {
            // TODO: 1649854 [Lookup] Update executeNotifyHandlersThatEventOccurred return types
            return new Promise(function (resolve) {
                resolve();
            });
        },
        getConnectorsApi: function (controlId) {
            return null;
        },
        getRecordSetQueryKey: function (dataSetObjectWrapper) {
            return "";
        },
        addSessionTab: function (sessionTab) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        closeSessionTab: function (closedSessionTabIndex) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        updateSessionTab: function (sessionTab) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        closeAllSessionTabs: function () {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        dismissMessage: function () {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        initializeReferencePanelControl: function (controls) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        cleanReferencePanelState: function () {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        markActiveTab: function (currentTab, isUnderOverflow) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        // Tracked: better stubbing for this method. Corresponds to context.resources.getResource method
        getResource: function (resource) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        initializeCommandManager: function (pageId, contextToken, controlId, commandManagerId) {
            var resolve;
            var promise = new Promise(function (_resolve) {
                resolve = _resolve;
                _resolve();
            });
            return { promise: promise, resolve: resolve };
        },
        loadManifest: function (customControlId, customControlName) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        loadResources: function (customControl) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        loadResourceStrings: function (customControl) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        triggerOfflineMetadataSync: function () {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        retrieveFormWithAttributes: function (entityName, formId, formType) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        refreshDataSetParameter: function (dataSetObjectWrapper, contextToken) {
            return undefined;
        },
        retrieveDataSetLookupCellParameter: function (dataSetParameter, dataSetLookupCellWrapper, contextToken) {
            return undefined;
        },
        renderNestedCustomControl: function (key, props, dataSetHostProps) {
            return undefined;
        },
        runCustomOpenRecord: function (record, contextToken) {
            return new Promise(function (resolve) {
                resolve(true);
            });
        },
        renderReactSubtree: function (element, node) {
            return;
        },
        retrieveGridData: function (query) {
            return undefined;
        },
        retrieveLookupData: function (query) {
            return undefined;
        },
        retrieveLookupMetadataAction: function (lookupObjectWrapper) {
            return undefined;
        },
        addPendingCommandManagerId: function (pageId, contextToken, controlId, commandManagerId) {
            return undefined;
        },
        retrieveRecordCommand: function (allRecords, commandManagerId, contextToken, records, commandButtonIds, filterByPriority, useNestedFormat, controlConstructorName, refreshAllRules, pageId) {
            return undefined;
        },
        retrieveRecordDataForForm: function (entityReference, formId, processControlDataRequest, // eslint-disable-line @typescript-eslint/ban-types
        additionalColumns, isPrimaryAttributeRequested) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        retrieveForm: function (entityReference, formId) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        retrieveEntityData: function (etn) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        retrieveChartDrilldownAttributes: function (etn) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        retrieveView: function (entityTypeName, viewQueryType, viewType, viewId) {
            return undefined;
        },
        retrieveViewSelector: function (entityTypeName, viewQueryType) {
            return undefined;
        },
        save: function (snapshotId, columns) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        saveEmbeddedEntity: function (pageId, entityTypeName, recordId, closestParentWithContext, columnSet) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        setFieldControlPersonalization: function (personalizationConfig, personalizations) {
            return undefined;
        },
        setGridControlPersonalization: function (personalizationConfig, personalizations) {
            return undefined;
        },
        setDashboardControlPersonalization: function (personalizationConfig, personalizations) {
            return undefined;
        },
        setGenericControlPersonalization: function (customControlId, personalizations) {
            return undefined;
        },
        setGlobalControlPersonalization: function (customControlId, personalizations) {
            return undefined;
        },
        setPowerBISignedInState: function (pageId, signedInState) {
            return undefined;
        },
        setValue: function (entityReference, controlKeyValuePairs, snapshotId, pageId) {
            return new Promise(function (resolve) {
                resolve("");
            });
        },
        setXrmObject: function (proxy) {
            return undefined;
        },
        updateFieldValue: function (pageId, controlNameValuePairs, suppressOnChange, entityTypeName, recordId, closestParentWithContext) {
            return undefined;
        },
        updateOutputs: function (pageId, entityTypeName, recordId, customControlId, closestControlParentWithSave, outputs, contextToken) {
            return undefined;
        },
        openPopup: function (popupId) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        closePopup: function (popupId) {
            return new Promise(function (resolve) {
                resolve();
            });
        },
        updateControlMemoizedDataSet: function (legacyDataSetWrapper, actions, recordId) {
            return undefined;
        },
        executeRollupRequest: function (target, fieldName, pageId) {
            return undefined;
        },
        isPresenceEnabledEntity: function (entityName) {
            return undefined;
        },
        getPresenceMappedField: function (entityName) {
            return undefined;
        },
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultHostDispatchProps", ["require", "exports", "contextmocks/DefaultHostDispatchPropsActions"], function (require, exports, DefaultHostDispatchPropsActions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHostDispatchProps = exports.DefaultModeDispatch = exports.DefaultDeviceDispatch = exports.DefaultNavigationDispatch = exports.DefaultUtilsDispatch = void 0;
    // Default IUtilsDispatch method implementation
    exports.DefaultUtilsDispatch = {
        setState: function (state) {
            console.debug("Invoked method setState()");
            return false;
        },
        logMessage: function (customControlName, message, logType) {
            console.debug("Invoked method logMessage()");
        },
    };
    // Default INavigationDispatch method implementation
    exports.DefaultNavigationDispatch = {
        openEditForm: function (entityReference, processId, processInstanceId, selectedStageId, isCrossEntityNavigate) {
            console.debug("Invoked method openEditForm()");
        },
        openGridPage: function (entityTypeName, viewId, showChart, visualizationType, visualizationId, filterExpression, chartDrillDownParameters, viewType) {
            console.debug("Invoked method openGridPage()");
        },
        openDashboard: function (id) {
            console.debug("Invoked method openDashboard()");
        },
        openCreateForm: function (logicalName, initialValues, createFromEntity) {
            console.debug("Invoked method openCreateForm()");
        },
        openSearch: function (query) {
            console.debug("Invoked method openSearch()");
        },
        openPowerBIFullScreenPage: function (powerBIEmbedUrl, powerBIGroupId, powerBIDashboardId, powerBITileId, powerBIReportId, powerBIReportUrl, powerBIComponentTypeCode) {
            console.debug("Invoked method openPowerBIFullScreenPage()");
        },
        openUrl: function (url, options) {
            console.debug("Invoked method openUrl()");
        },
        openUrlWithProtocol: function (url, protocol) {
            console.debug("Invoked method openUrlWithProtocol()");
        },
        openPhoneNumber: function (phoneNumber, etn, id, name, reg_etn, reg_id, reg_name, controlLogicalName, contextToken, openFormOnEnd, executeGlobalHandler) {
            console.debug("Invoked method openPhoneNumber()");
        },
        openMaps: function (address) {
            console.debug("Invoked method openMaps()");
        },
        openMap: function (address) {
            console.debug("Invoked method openMap()");
        },
    };
    // Default IDeviceDispatch method implementation
    exports.DefaultDeviceDispatch = {
        isGetBarcodeValueOperationAvailable: function () {
            return false;
        },
        isTakePictureOperationAvailable: function () {
            return false;
        },
        isCaptureVideoOperationAvailable: function () {
            return false;
        },
        isCaptureAudioOperationAvailable: function () {
            return false;
        },
        isOpenARViewerAvailable: function () {
            return false;
        },
    };
    // Default IModeDispatch method implementation
    exports.DefaultModeDispatch = {
        setNotification: function (message, id, pageId, controlName, contextToken, entityTypeName, entityId) {
            console.debug("Invoked method setNotification()");
            return false;
        },
        clearNotification: function (pageId, controlName, contextToken, entityTypeName, entityId, id) {
            console.debug("Invoked method clearNotification()");
            return false;
        },
    };
    // Default ICustomControlHostDispatchProps method implementation
    exports.DefaultHostDispatchProps = {
        propBagMethods: {
            utils: exports.DefaultUtilsDispatch,
            navigation: exports.DefaultNavigationDispatch,
            device: exports.DefaultDeviceDispatch,
            mode: exports.DefaultModeDispatch,
        },
        actions: DefaultHostDispatchPropsActions_1.DefaultDispatchPropsActions,
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultCustomControlHostDispatchProps", ["require", "exports", "contextmocks/DefaultHostDispatchProps"], function (require, exports, DefaultHostDispatchProps_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultCustomControlHostDispatchProps = void 0;
    exports.DefaultCustomControlHostDispatchProps = {
        propBagMethods: DefaultHostDispatchProps_1.DefaultHostDispatchProps.propBagMethods,
        actions: DefaultHostDispatchProps_1.DefaultHostDispatchProps.actions,
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultThemingData", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultThemingData = exports.DefaultThemingDataButtons = exports.DefaultThemingDataShadows = exports.DefaultThemingDataBorders = exports.DefaultThemingDataLookup = exports.DefaultThemingDataMeasures = exports.DefaultThemingDataBreakpoints = exports.DefaultThemingDataFontSizes = exports.DefaultThemingDataFontFamilies = exports.DefaultThemingDataSpacings = exports.DefaultThemingDataTextBox = exports.DefaultThemingDataColors = exports.DefaultThemingDataGrayColors = exports.DefaultLinkColors = exports.DefaultThemingDataLinkColors = exports.DefaultThemingDataBaseColors = exports.DefaultBaseColors = exports.DefaultThemingDataStatusColors = exports.DefaultStatusTheme = void 0;
    exports.DefaultStatusTheme = {
        Alert1: {
            Text: "#FFFFFF",
            Fill: "#ea0600",
        },
        Alert2: {
            Text: "#000000",
            Fill: "#ff0c00",
        },
        Priority1: {
            Text: "#FFFFFF",
            Fill: "#b22912",
        },
        Priority2: {
            Text: "#000000",
            Fill: "#ff5b45",
        },
        Priority3: {
            Text: "#000000",
            Fill: "#f2c624",
        },
        Positive1: {
            Text: "#FFFFFF",
            Fill: "#358717",
        },
        Positive2: {
            Text: "#000000",
            Fill: "#47c21d",
        },
        Info1: {
            Text: "#FFFFFF",
            Fill: "#3b79b7",
        },
        Neutral1: {
            Text: "#FFFFFF",
            Fill: "#666666",
        },
    };
    exports.DefaultThemingDataStatusColors = {
        neutral: "#FFFFFF",
        error: "#000000",
        warning: "#000000",
        success: "#000000",
        info: "#FFFFFF",
    };
    exports.DefaultBaseColors = {
        Red: {
            red1: "#ffa2a2",
            red2: "#ff0c00",
            red3: "#ea0600",
            red4: "#bf0900",
            red5: "#800600",
        },
        Orange: {
            orange1: "#ffd5d2",
            orange2: "#ff9685",
            orange3: "#ff5b45",
            orange4: "#b22912",
            orange5: "#80281a",
        },
        Yellow: {
            yellow1: "#fae8a7",
            yellow2: "#f7cf52",
            yellow3: "#f2c624",
            yellow4: "#bf991f",
            yellow5: "#725a0d",
        },
        Green: {
            green1: "#bdf2a7",
            green2: "#70bc57",
            green3: "#47c21d",
            green4: "#358717",
            green5: "#1c6512",
        },
        Blue: {
            blue1: "#a8d0ff",
            blue2: "#6aa6ff",
            blue3: "#3b79b7",
            blue4: "#315fa2",
            blue5: "#25477a",
        },
        Teal: {
            teal1: "#99ebed",
            teal2: "#00ced3",
            teal3: "#00b7c3",
            teal4: "#008992",
            teal5: "#005c62",
        },
        Purple: {
            purple1: "#e9bbff",
            purple2: "#a350c4",
            purple3: "#8c2ab5",
            purple4: "#691b88",
            purple5: "#46125b",
        },
        Clay: {
            clay1: "#f4c0b9",
            clay2: "#e2614f",
            clay3: "#db3923",
            clay4: "#a42b1a",
            clay5: "#6e1d12",
        },
        Pink: {
            pink1: "#ffddf2",
            pink2: "#ffc7ea",
            pink3: "#ffa8da",
            pink4: "#b26491",
            pink5: "#652f4e",
        },
        Grey: {
            grey1: "#efefef",
            grey2: "#e2e2e2",
            grey3: "#d8d8d8",
            grey4: "#b3b3b3",
            grey5: "#666666",
            grey6: "#444444",
            grey7: "#333333",
        },
        Violet: {
            violet1: "#e6bdee",
            violet2: "#b860c1",
            violet3: "#a638b2",
            violet4: "#6a1e7a",
            violet5: "#47104c",
        },
        White: "#FFFFFF",
        Black: "#000000",
        Transparent: "#FFFFFF",
        CalculateContrast: function () {
            return undefined;
        },
    };
    exports.DefaultThemingDataBaseColors = {
        white: "#FFFFFF",
        black: "#000000",
        red: "#ffa2a2",
        orange: "#ffd5d2",
        yellow: "#fae8a7",
        green: "#bdf2a7",
        blue: "#a8d0ff",
        teal: "#99ebed",
        purple: "#e9bbff",
    };
    exports.DefaultThemingDataLinkColors = {
        default: "#1160B7",
        visited: "#F8FAFC",
        disabled: "#666666",
    };
    exports.DefaultLinkColors = {
        Normal: {
            Text: "#1160B7",
            Fill: "#FFFFFF",
        },
        Hover: {
            Text: "#E7EFF7",
            Fill: "#FFFFFF",
        },
        Visited: {
            Text: "#F8FAFC",
            Fill: "#FFFFFF",
        },
        Pressed: {
            Text: "#25477a",
            Fill: "#FFFFFF",
        },
        Disabled: {
            Text: "#666666",
            Fill: "#666666",
        },
    };
    exports.DefaultThemingDataGrayColors = {
        gray01: "#efefef",
        gray02: "#e2e2e2",
        gray03: "#d8d8d8",
        gray04: "#b3b3b3",
        gray05: "#666666",
        gray06: "#444444",
        gray07: "#333333",
        gray08: "#333333",
        gray09: "#333333",
    };
    exports.DefaultThemingDataColors = {
        whitebackground: "#FFFFFF",
        defaulttheming: "#3B79B7",
        navbarshelf: "#FFFFFF",
        header: "#F26151",
        globallink: "#1160B7",
        selectedlinkeffect: "#F26158",
        hoverlinkeffect: "#E7EFF7",
        processcontrol: "#41A053",
        defaultentity: "#666666",
        defaultcustomentity: "#00CCA3",
        controlshade: "#FFFFFF",
        controlborder: "#BDC3C7",
        statustheme: exports.DefaultStatusTheme,
        status: exports.DefaultThemingDataStatusColors,
        baseColor: exports.DefaultBaseColors,
        base: exports.DefaultThemingDataBaseColors,
        links: exports.DefaultThemingDataLinkColors,
        linkstheme: exports.DefaultLinkColors,
        grays: exports.DefaultThemingDataGrayColors,
    };
    exports.DefaultThemingDataTextBox = {
        fonticonsize: "1em",
        fontweight: 400,
        contentfontweight: 600,
        fontsize: "1em",
        errorfontsize: "0.9em",
        spacing: "0.25em",
        containerspacing: "0.75em",
        rightmargin: "2em",
        lineheight: "1.5em",
        linethickness: "1px",
        errorlinethickness: "2px",
        horizontalpadding: "0.5em",
        verticalpadding: "0.5em",
        maxlength: 200,
        labelcolor: "#444444",
        contentcolor: "#000000",
        linecolor: "#DDDDDD",
        hoverboxcolor: "#0072C6",
        backgroundcolor: "#F2F8FF",
        errorbackgroundcolor: "#FFF5F5",
        redcolor: "#EA0600",
        bluecolor: "#0000FF",
        restmodecolor: "#FFFFFF",
    };
    exports.DefaultThemingDataSpacings = {
        xshorizontal: "0.5em",
        shorizontal: "0.5em",
        bhorizontal: "1em",
        mhorizontal: "2em",
        lhorizontal: "2.5em",
        xlhorizontal: "3.5em",
        xxlhorizontal: "4.5em",
        xsvertical: "0.5em",
        svertical: "0.5em",
        bvertical: "1em",
        mvertical: "2em",
        lvertical: "2.5em",
        xlvertical: "3.5em",
        xxlvertical: "4.5em",
    };
    exports.DefaultThemingDataFontFamilies = {
        semilight: "'SegoeUI-Light', 'Segoe UI Semilight', 'Segoe UI Regular', 'Segoe UI'",
        semibold: "'SegoeUI-Semibold', 'Segoe UI Semibold', 'Segoe UI Regular', 'Segoe UI'",
        regular: "'Segoe UI Regular', 'Segoe UI'",
        bold: "'SegoeUI-Bold', 'Segoe UI Bold', 'Segoe UI'",
    };
    exports.DefaultThemingDataFontSizes = {
        xsfontsize: "0.750rem",
        sfontsize: "0.875rem",
        bfontsize: "1rem",
        mfontsize: "1rem",
        lfontsize: "1.25rem",
        xlfontsize: "1.5rem",
        font225: "2.25rem",
        font200: "2.00rem",
        font175: "1.75rem",
        font150: "1.50rem",
        font125: "1.25rem",
        font115: "1.15rem",
        font100: "1.00rem",
        font085: "0.85rem",
        font075: "0.75rem",
    };
    exports.DefaultThemingDataBreakpoints = {
        dimensionxs: "320",
        dimensions: "480",
        dimensionm: "768",
        dimensionl: "1024",
        dimensionxl: "1024",
    };
    exports.DefaultThemingDataMeasures = {
        measure025: "0.25rem",
        measure050: "0.5rem",
        measure075: "0.75rem",
        measure100: "1.00rem",
        measure125: "1.25rem",
        measure150: "1.50rem",
        measure175: "1.75rem",
        measure200: "2.00rem",
        measure225: "2.25rem",
        measure250: "2.50rem",
        measure300: "3.00rem",
        measure350: "3.50rem",
        measure400: "4.00rem",
        measure450: "4.50rem",
        measure500: "5.00rem",
        measure550: "5.50rem",
        measure600: "6.00rem",
    };
    exports.DefaultThemingDataLookup = {
        tagpadding: "6px",
        tagmargin: "-5px",
        tagbackgroundcolor: "#ECF4FA",
    };
    exports.DefaultThemingDataBorders = {
        border01: "1px solid #efefef",
        border02: "1px solid #d8d8d8",
        border03: "1px dashed black",
    };
    exports.DefaultThemingDataShadows = {
        shadow01: "0px 2px 4px 0px rgba(0, 0, 0, 0.5);",
    };
    exports.DefaultThemingDataButtons = {
        button01primary: {
            borderColor: "transparent",
            backgroundColor: "#3b79b7",
            height: "2.50rem",
            minWidth: "6.00rem",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "1.00rem",
            paddingRight: "1.00rem",
            ":focus": {
                outline: "1px dashed black",
            },
            ":hover": {
                backgroundColor: "#25477a",
            },
            ":active": {
                backgroundColor: "#25477a",
                outline: "1px solid #25477a",
                border: "1px solid white",
                ":disabled": {
                    outline: 0,
                    border: "1px solid transparent",
                },
            },
            ":disabled": {
                backgroundColor: "#666666",
                cursor: "not-allowed",
                "> span": {
                    color: "#efefef",
                },
            },
        },
        button01secondary: {
            border: "1px solid #3b79b7",
            backgroundColor: "#FFFFFF",
            height: "2.50rem",
            minWidth: "6.00rem",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "1.00rem",
            paddingRight: "1.00rem",
            ":focus": {
                outline: "1px dashed black",
            },
            ":hover": {
                backgroundColor: "#25477a",
                borderColor: "transparent",
                "> span": {
                    color: "#FFFFFF",
                },
                ":disabled": {
                    "> span": {
                        color: "#efefef",
                    },
                },
            },
            ":active": {
                backgroundColor: "#25477a",
                outline: "1px solid #25477a",
                border: "1px solid white",
                borderColor: "transparent",
                "> span": {
                    color: "#FFFFFF",
                },
                ":disabled": {
                    outline: 0,
                    border: "1px solid transparent",
                },
            },
            ":disabled": {
                backgroundColor: "#666666",
                cursor: "not-allowed",
                borderColor: "transparent",
                "> span": {
                    color: "#efefef",
                },
            },
        },
        buttonprimarytext: {
            fontSize: "1.00rem",
            fontFamily: "'Segoe UI Regular', 'Segoe UI'",
            color: "#FFFFFF",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        },
        buttonsecondarytext: {
            fontSize: "1.00rem",
            fontFamily: "'Segoe UI Regular', 'Segoe UI'",
            color: "#3b79b7",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        },
        actioniconbutton01: {
            height: "2.50rem",
            width: "2.50rem",
            borderStyle: "none",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "> span": {
                fontSize: "1.00rem",
                color: "#333333",
            },
            ":focus": {
                outline: "1px dashed black",
            },
            ":hover": {
                backgroundColor: "#efefef",
            },
            ":disabled": {
                cursor: "not-allowed",
                "> span": {
                    color: "#b3b3b3",
                },
            },
        },
        button02primary: {
            borderColor: "transparent",
            backgroundColor: "#3b79b7",
            height: "1.50rem",
            minWidth: "4.00rem",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            ":focus": {
                outline: "1px dashed black",
            },
            ":hover": {
                backgroundColor: "#25477a",
            },
            ":active": {
                backgroundColor: "#25477a",
                outline: "1px solid #25477a",
                border: "1px solid white",
                ":disabled": {
                    outline: 0,
                    border: "1px solid transparent",
                },
            },
            ":disabled": {
                backgroundColor: "#666666",
                cursor: "not-allowed",
                "> span": {
                    color: "#efefef",
                },
            },
        },
        button02secondary: {
            border: "1px solid #3b79b7",
            backgroundColor: "#FFFFFF",
            height: "1.50rem",
            minWidth: "4.00rem",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            ":focus": {
                outline: "1px dashed black",
            },
            ":hover": {
                backgroundColor: "#25477a",
                borderColor: "transparent",
                "> span": {
                    color: "#FFFFFF",
                },
                ":disabled": {
                    "> span": {
                        color: "#efefef",
                    },
                },
            },
            ":active": {
                backgroundColor: "#25477a",
                outline: "1px solid #25477a",
                border: "1px solid white",
                borderColor: "transparent",
                "> span": {
                    color: "#FFFFFF",
                },
                ":disabled": {
                    outline: 0,
                    border: "1px solid transparent",
                },
            },
            ":disabled": {
                backgroundColor: "#666666",
                cursor: "not-allowed",
                borderColor: "transparent",
                "> span": {
                    color: "#efefef",
                },
            },
        },
    };
    exports.DefaultThemingData = {
        defaultThemingData: {
            normalfontfamily: "'SegoeUI', 'Segoe UI'",
            normalfontcolor: "#F26197",
            normalfontsize: "13px",
            solidborderstyle: "solid",
            noneborderstyle: "none",
            colors: exports.DefaultThemingDataColors,
            textbox: exports.DefaultThemingDataTextBox,
            spacings: exports.DefaultThemingDataSpacings,
            fontfamilies: exports.DefaultThemingDataFontFamilies,
            fontsizes: exports.DefaultThemingDataFontSizes,
            breakpoints: exports.DefaultThemingDataBreakpoints,
            measures: exports.DefaultThemingDataMeasures,
            lookup: exports.DefaultThemingDataLookup,
            borders: exports.DefaultThemingDataBorders,
            shadows: exports.DefaultThemingDataShadows,
            buttons: exports.DefaultThemingDataButtons,
        },
        getEntityColor: function (entityLogicalName) {
            return "blue";
        },
        fullScreenOverrideStyle: undefined,
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultCustomControlHostOwnProps", ["require", "exports", "contextmocks/DefaultThemingData"], function (require, exports, DefaultThemingData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultCustomControlHostOwnProps = exports.DefaultCustomControlDescriptor = void 0;
    exports.DefaultCustomControlDescriptor = {
        Id: "",
        Label: "TestLabel",
        Name: "",
        DomId: "",
        ShowLabel: true,
        Visible: true,
        Disabled: false,
    };
    exports.DefaultCustomControlHostOwnProps = {
        controlId: "TestControl",
        configuration: undefined,
        descriptor: exports.DefaultCustomControlDescriptor,
        id: "0",
        systemDefinedProperties: {},
        formInfo: undefined,
        parentDefinedControlProps: {},
        rowSpan: 1,
        themingData: DefaultThemingData_1.DefaultThemingData,
        children: undefined,
        contextString: "",
        parentContextToken: undefined,
        externalCommandManagerId: undefined,
        externalCommandPromise: undefined,
        shouldRender: undefined,
        logLevel: 2,
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultFormattingData", ["require", "exports", "@pcf/runtime/lib/CustomControls/Models/PropertyFallbacks/Formatting/SimpleFormatters"], function (require, exports, SimpleFormatters_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultFormattingData = void 0;
    exports.DefaultFormattingData = {
        timeZoneUtcOffsetMinutes: -480,
        dateTimeFormatInfo: {
            AMDesignator: "AM",
            AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            AbbreviatedMonthGenitiveNames: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "",
            ],
            AbbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            CalendarWeekRule: 0,
            Calendar: {
                MinSupportedDateTime: new Date(),
                MaxSupportedDateTime: new Date(),
                AlgorithmType: 1,
                CalendarType: 1,
                Eras: [1],
                TwoDigitYearMax: 2029,
                IsReadOnly: false,
                minSupportedDateTime: new Date(),
                maxSupportedDateTime: new Date(),
                algorithmType: 1,
                calendarType: 1,
                eras: [1],
                twoDigitYearMax: 2029,
                isReadOnly: false,
            },
            DateSeparator: "/",
            DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            FirstDayOfWeek: 0,
            FullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
            LongDatePattern: "dddd, MMMM d, yyyy",
            LongTimePattern: "h:mm:ss tt",
            MonthDayPattern: "MMMM dd",
            MonthGenitiveNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "",
            ],
            MonthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "",
            ],
            PMDesignator: "PM",
            ShortDatePattern: "M/d/yyyy",
            ShortTimePattern: "h:mm tt",
            ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            SortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            TimeSeparator: ":",
            UniversalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
            YearMonthPattern: "MMMM yyyy",
            amDesignator: "AM",
            abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            abbreviatedMonthGenitiveNames: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "",
            ],
            abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
            calendarWeekRule: 0,
            calendar: {
                MinSupportedDateTime: new Date(),
                MaxSupportedDateTime: new Date(),
                AlgorithmType: 1,
                CalendarType: 1,
                Eras: [1],
                TwoDigitYearMax: 2029,
                IsReadOnly: false,
                minSupportedDateTime: new Date(),
                maxSupportedDateTime: new Date(),
                algorithmType: 1,
                calendarType: 1,
                eras: [1],
                twoDigitYearMax: 2029,
                isReadOnly: false,
            },
            dateSeparator: "/",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            firstDayOfWeek: 0,
            fullDateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt",
            longDatePattern: "dddd, MMMM d, yyyy",
            longTimePattern: "h:mm:ss tt",
            monthDayPattern: "MMMM dd",
            monthGenitiveNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "",
            ],
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "",
            ],
            pmDesignator: "PM",
            shortDatePattern: "M/d/yyyy",
            shortTimePattern: "h:mm tt",
            shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            timeSeparator: ":",
            universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
            yearMonthPattern: "MMMM yyyy",
        },
        numberFormatInfo: {
            CurrencyDecimalDigits: 2,
            CurrencyDecimalSeparator: ".",
            CurrencyGroupSeparator: ",",
            CurrencyGroupSizes: [3],
            CurrencyNegativePattern: 0,
            CurrencyPositivePattern: 0,
            CurrencySymbol: "$",
            NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            NANSymbol: "",
            NegativeInfinitySymbol: "-Infinity",
            NegativeSign: "-",
            NumberDecimalDigits: 2,
            NumberDecimalSeparator: ".",
            NumberGroupSeparator: ",",
            NumberGroupSizes: [3],
            NumberNegativePattern: 1,
            PerMilleSymbol: "�",
            PercentDecimalDigits: 2,
            PercentDecimalSeparator: ".",
            PercentGroupSeparator: ",",
            PercentGroupSizes: [3],
            PercentNegativePattern: 0,
            PercentPositivePattern: 0,
            PercentSymbol: "%",
            PositiveInfinitySymbol: "Infinity",
            PositiveSign: "+",
            currencyDecimalDigits: 2,
            currencyDecimalSeparator: ".",
            currencyGroupSeparator: ",",
            currencyGroupSizes: [3],
            currencyNegativePattern: 0,
            currencyPositivePattern: 0,
            currencySymbol: "$",
            nativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            nanSymbol: "",
            negativeInfinitySymbol: "-Infinity",
            negativeSign: "-",
            numberDecimalDigits: 2,
            numberDecimalSeparator: ".",
            numberGroupSeparator: ",",
            numberGroupSizes: [3],
            numberNegativePattern: 1,
            perMilleSymbol: "�",
            percentDecimalDigits: 2,
            percentDecimalSeparator: ".",
            percentGroupSeparator: ",",
            percentGroupSizes: [3],
            percentNegativePattern: 0,
            percentPositivePattern: 0,
            percentSymbol: "%",
            positiveInfinitySymbol: "Infinity",
            positiveSign: "+",
        },
        timeZoneAdjusters: [],
        formatInfoCultureName: "en-US",
        formatter: SimpleFormatters_1.SimpleFormatter,
        languagesByCode: {
            "1033": "English",
            "-1": "All Languages",
        },
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultHostPropBagData", ["require", "exports", "contextmocks/DefaultFormattingData", "contextmocks/DefaultThemingData"], function (require, exports, DefaultFormattingData_1, DefaultThemingData_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHostPropBagData = exports.DefaultPageData = exports.DefaultModeData = exports.DefaultResourceData = exports.DefaultUtilsData = exports.DefaultClientData = void 0;
    exports.DefaultClientData = {
        orgSettingsData: {
            isRTL: false,
            fiscalYearStartDate: new Date("2017-01-01T18:59:00.000Z"),
            fiscalPeriodFormat: 1,
            fiscalPeriodType: 2002,
            fiscalYearFormatYear: 1,
            fiscalYearFormatPrefix: 1,
            fiscalYearFormatSuffix: 3,
            fiscalYearDisplayCode: 1,
            fiscalPeriodConnector: "s",
            showWeekNumber: false,
            boundDashboardDefaultCardExpanded: false,
            organizationId: "{E534EEBD-1E20-4C07-894A-99CD76927368}",
            isActionCardEnabled: false,
            isEmailMonitoringAllowed: false,
            allowUnresolvedPartiesOnEmailSend: false,
        },
        languageCode: 1033,
        isRTL: false,
        showWeekNumber: false,
        locale: "en-US",
        userAgent: {
            isWin: true,
            isAndroid: false,
            isAndroidModern: false,
            isIos: false,
            isBrowserIE: false,
            isBrowserChrome: true,
            isBrowserFirefox: false,
        },
        usePathBasedUrls: false,
        organizationUniqueName: "OneFarm",
        disableScroll: false,
        formFactor: 2,
    };
    exports.DefaultUtilsData = {
        encoder: {
            CrmHtmlEncode: function () {
                return undefined;
            },
            CrmUrlEncode: function () {
                return undefined;
            },
        },
        dateTimeUtils: {
            getDSTAdjustmentMinutes: function (time, adjusters) {
                return 0;
            },
            getWeekOfYear: function (time, firstDayOfWeek, calendarWeekRule) {
                return 0;
            },
        },
        scheduleRender: function (render) {
            return undefined;
        },
        hasEntityPrivilege: function (entityTypeName, privilegeType, privilegeDepth) {
            return true;
        },
    };
    exports.DefaultResourceData = {
        strings: {},
        stringsLoaded: true,
    };
    exports.DefaultModeData = {
        entityTypeName: undefined,
        entityId: "4ff37e24-3c76-e711-8105-000d3aa167ac",
        entityRecordName: "A. Datum Corporation (sample)",
        isOffline: false,
    };
    exports.DefaultPageData = {
        appId: "047efa7c-0976-e711-8104-000d3aa167ac",
        isPageReadOnly: false,
    };
    // Default IPropBagData data definition
    exports.DefaultHostPropBagData = {
        // ICommonPropBagData
        formattingData: DefaultFormattingData_1.DefaultFormattingData,
        clientData: exports.DefaultClientData,
        utilsData: exports.DefaultUtilsData,
        themingData: DefaultThemingData_2.DefaultThemingData,
        // IPropBagData
        accessibilityData: {
            assignedTabIndex: 0,
            assignedTooltip: "Mock Tooltip",
        },
        resourcesData: exports.DefaultResourceData,
        modeData: exports.DefaultModeData,
        pageData: exports.DefaultPageData,
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultCustomHostStateProps", ["require", "exports", "contextmocks/DefaultHostPropBagData"], function (require, exports, DefaultHostPropBagData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultCustomControlHostStateProps = void 0;
    exports.DefaultCustomControlHostStateProps = {
        stateToPropsMappingError: undefined,
        stateToPropsMappingErrorMessage: undefined,
        dynamicData: {
            parameters: undefined,
            dataReady: true,
            updated: true,
        },
        manifest: undefined,
        personalizationState: undefined,
        propBagData: DefaultHostPropBagData_1.DefaultHostPropBagData,
        children: undefined,
        personalizationConfiguration: undefined,
        pageType: undefined,
        popupStack: [],
        contextToken: undefined,
        internalCommandManagerEtns: undefined,
        updatedProperties: [],
        internalCommandManagerIds: [],
        globalCommandManagerInitialized: false,
        portalFlyoutToDialogId: "",
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultXrmProxy", ["require", "exports", "@pcf/runtime/lib/CustomControls/Utilities/XrmProxyDefaultUtilities"], function (require, exports, ProxyUtils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MockXrmProxy = exports.InitializeXrm = exports.XRMINIT = void 0;
    exports.XRMINIT = false;
    // Tracked: mock all methods on the XrmProxy that the PCF API depends on
    function InitializeXrm(xrmproxy, xrmObject) {
        if (exports.XRMINIT) {
            return;
        }
        var proxy = xrmproxy || window.CustomControls.XrmProxy;
        if (!proxy) {
            throw new Error("XrmProxy was not passed and cannot be found on the window");
        }
        if (!xrmObject) {
            xrmObject = exports.MockXrmProxy;
        }
        // Corresponds to Utility interface in the component framework
        proxy.setUtils(xrmObject.Utils);
        // Corresponds to Device interface in the component framework
        proxy.setDeviceContext(xrmObject.Device);
        // Corresponds to Navigation interface in the component framework
        // Using javascript functions such as alert, confirm to mimic some of these APIs for now
        proxy.setNavigationContext(xrmObject.Navigation);
        var webAPI = xrmObject.WebApi;
        proxy.setWebApi({
            offline: webAPI,
            online: webAPI,
        });
        // Reporting and Diagnostics are not part of the interfaces exposed to PCF users.
        // Keep them for now because unsure about the side effects of removval.
        proxy.setReporting(xrmObject.Reporting);
        proxy.setDiagnostics();
        exports.XRMINIT = true;
    }
    exports.InitializeXrm = InitializeXrm;
    exports.MockXrmProxy = {
        Utils: {
            getEntityMetadata: function (entityType, attributes) {
                return Promise.reject(new Error("This method is not supported!"));
            },
            lookupObjects: function (lookupOptions) {
                return Promise.reject(new Error("This method is not supported!"));
            },
        },
        Device: {
            captureImage: function (options) {
                return Promise.resolve(undefined);
            },
            captureAudio: function () {
                return Promise.resolve(undefined);
            },
            captureVideo: function () {
                return Promise.resolve(undefined);
            },
            pickFile: function (options) {
                return Promise.resolve(undefined);
            },
            getBarcodeValue: function () {
                return Promise.resolve("");
            },
            getCurrentPosition: function () {
                return Promise.resolve({
                    // MSFT visitor Center
                    coords: {
                        latitude: 47.642232,
                        longitude: -122.1389797,
                        accuracy: 128.02101335797585,
                        altitude: 103.73896789550781,
                        heading: -1,
                        speed: -1,
                        altitudeAccuracy: 10,
                    },
                    timestamp: 1564510895072.865,
                });
            },
            openARViewer: function (options) {
                return Promise.resolve("");
            },
        },
        Navigation: {
            openAlertDialog: ProxyUtils.openAlertDialog,
            openConfirmDialog: ProxyUtils.openConfirmDialog,
            openErrorDialog: ProxyUtils.openErrorDialog,
            openUrl: ProxyUtils.openURL,
            openFile: function (file, options) {
                alert("Your control is trying to open a file. This is not yet supported.");
                return Promise.resolve();
            },
            openForm: function (options, parameters) {
                alert("Your control is trying to open a form. This is not yet supported.");
                return Promise.resolve({ savedEntityReference: [] });
            },
            openWebResource: function (name, options, data) {
                alert("Your control is trying to open a web resource. This is not yet supported.");
            },
        },
        WebApi: {
            createRecord: function (entityType, data) {
                alert("Your control is trying to create a record. This is not yet supported.");
                return Promise.reject(new Error("Your control is trying to create a record. This is not yet supported."));
            },
            deleteRecord: function (entityType, id) {
                alert("Your control is trying to delete a record. This is not yet supported.");
                return Promise.reject(new Error("Your control is trying to delete a record. This is not yet supported."));
            },
            updateRecord: function (entityType, id, data) {
                alert("Your control is trying to update a record. This is not yet supported.");
                return Promise.reject(new Error("Your control is trying to update a record. This is not yet supported."));
            },
            retrieveMultipleRecords: function (entityType, options, maxPageSize) {
                alert("Your control is trying to retrieve multiple records. This is not yet supported.");
                return Promise.reject(new Error("Your control is trying to retrieve multiple records. This is not yet supported."));
            },
            retrieveRecord: function (entityType, id, options) {
                alert("Your control is trying to retrieve a record. This is not yet supported.");
                return Promise.reject(new Error("Your control is trying to retrieve a record. This is not yet supported."));
            },
        },
        Reporting: {
            reportSuccess: function (componentName, params) {
                return undefined;
            },
            reportFailure: function (componentName, error, suggestedMitigation, params) {
                return componentName + " error: " + error;
            },
            reportEvent: function (event) {
                return undefined;
            },
        },
        Diagnostics: {
            traceError: function (componentName, message) {
                return componentName + " error: " + message;
            },
            traceWarning: function (componentName, message) {
                return undefined;
            },
            traceInfo: function (componentName, message) {
                return componentName + " message: " + message;
            },
            traceDebug: function (componentName, message) {
                return undefined;
            },
        },
    };
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("contextmocks/DefaultMockExports", ["require", "exports", "contextmocks/DefaultXrmProxy", "contextmocks/DefaultCustomControlHostDispatchProps", "contextmocks/DefaultCustomHostStateProps", "contextmocks/DefaultCustomControlHostOwnProps", "@pcf/runtime/lib/CustomControls/Models/PropertyFallbacks/Formatting/SimpleFormatters"], function (require, exports, DefaultXrmProxy_1, DefaultCustomControlHostDispatchProps_1, DefaultCustomHostStateProps_1, DefaultCustomControlHostOwnProps_1, SimpleFormatters_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenerateDefaultCustomControlProps = void 0;
    function GenerateDefaultCustomControlProps(configuration, manifest, descriptor, dynamicData) {
        if (descriptor === void 0) { descriptor = DefaultCustomControlHostOwnProps_1.DefaultCustomControlDescriptor; }
        if (dynamicData === void 0) { dynamicData = null; }
        var dispatchProps = DefaultCustomControlHostDispatchProps_1.DefaultCustomControlHostDispatchProps;
        var stateProps = DefaultCustomHostStateProps_1.DefaultCustomControlHostStateProps;
        stateProps.manifest = manifest;
        stateProps.dynamicData = dynamicData;
        var ownProps = DefaultCustomControlHostOwnProps_1.DefaultCustomControlHostOwnProps;
        ownProps.configuration = configuration;
        descriptor && (ownProps.descriptor = descriptor);
        return Object.assign(dispatchProps, stateProps, ownProps);
    }
    exports.GenerateDefaultCustomControlProps = GenerateDefaultCustomControlProps;
    window.PCFUtilities = {};
    window.PCFUtilities.GenerateDefaultCustomControlProps = GenerateDefaultCustomControlProps;
    window.PCFUtilities.InitializeMockXrmProxy = DefaultXrmProxy_1.InitializeXrm;
    window.PCFUtilities.Defaults = {};
    window.PCFUtilities.Defaults.ControlDescriptor = DefaultCustomControlHostOwnProps_1.DefaultCustomControlDescriptor;
    window.PCFUtilities.Defaults.Formatter = SimpleFormatters_2.SimpleFormatter;
    window.PCFUtilities.Defaults.XrmObject = DefaultXrmProxy_1.MockXrmProxy;
});
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
define("index", ["require", "exports", "contextmocks/DefaultMockExports"], function (require, exports, DefaultMockExports_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(DefaultMockExports_1, exports);
});
//# sourceMappingURL=PCFMocks.js.map