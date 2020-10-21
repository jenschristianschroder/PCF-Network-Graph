/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
// Default ICustomControlHostDispatchPropsActions method implementation
export var DefaultDispatchPropsActions = {
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
//# sourceMappingURL=DefaultHostDispatchPropsActions.js.map