import { instance as TelemetryReporter } from "../Reporting/TelemetryReporter";
var DEFAULT_PAGE_SIZE = 25;
var DataSetState;
(function (DataSetState) {
    DataSetState[DataSetState["Available"] = 0] = "Available";
    DataSetState[DataSetState["Busy"] = 1] = "Busy";
    DataSetState[DataSetState["Error"] = 2] = "Error";
    DataSetState[DataSetState["Destroyed"] = 3] = "Destroyed";
})(DataSetState || (DataSetState = {}));
var lookupTypes = ["lookup", "owner", "regarding", "partylist"];
var DataSetObjectWrapper = (function () {
    function DataSetObjectWrapper(provider, configuration) {
        this._updatedProperties = [];
        this._columns = null;
        this._records = {};
        this._sortedRecordIds = [];
        this._error = false;
        this._errorMessage = "";
        this._loading = false;
        this._updateOnQueryId = -1;
        this._dataProvider = provider;
        this._configuration = configuration;
        if (this._configuration.initQuery) {
            this._setupFromInitQuery();
        }
        this._moveToState({ uniqueId: -1, state: DataSetState.Available });
    }
    DataSetObjectWrapper.prototype.getDataSet = function (forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!this._dataset || forceRefresh) {
            this._dataset = this._generateDataset();
        }
        return this._dataset;
    };
    DataSetObjectWrapper.prototype.setControlReRender = function (controlReRender) {
        this.requestRerender = controlReRender;
    };
    DataSetObjectWrapper.prototype.requestRerender = function (_callback) {
        return;
    };
    DataSetObjectWrapper.prototype.destroy = function () {
        this._moveToState({ uniqueId: -1, state: DataSetState.Destroyed });
        this._pagingDetails = null;
        this._filteringDetails = null;
        this._sortingDetails = null;
        this._configuration.events.dataSetUpdatedCallback = null;
        this._configuration = null;
        this._updatedProperties = null;
        this._columns = null;
        this._records = null;
        this._sortedRecordIds = null;
    };
    DataSetObjectWrapper.prototype._setupFromInitQuery = function () {
        var _a, _b, _c, _d, _e, _f;
        this._columns = this._configuration.initQuery.columns;
        this._sortingDetails = (_a = this._configuration.initQuery) === null || _a === void 0 ? void 0 : _a.sortDetails;
        this._pagingDetails = {
            pageSize: ((_c = (_b = this._configuration.initQuery) === null || _b === void 0 ? void 0 : _b.pagingDetails) === null || _c === void 0 ? void 0 : _c.pageSize) || DEFAULT_PAGE_SIZE,
            firstPageNumber: ((_e = (_d = this._configuration.initQuery) === null || _d === void 0 ? void 0 : _d.pagingDetails) === null || _e === void 0 ? void 0 : _e.pageNumber) || 1,
            totalResultCount: -1,
            hasNextPage: false,
            hasPreviousPage: false,
        };
        this._filteringDetails = {
            filterExpression: (_f = this._configuration.initQuery) === null || _f === void 0 ? void 0 : _f.filters,
        };
        this.getDataSet();
    };
    DataSetObjectWrapper.prototype._generateDataset = function () {
        var dataset = {
            columns: JSON.parse(JSON.stringify(this._columns)),
            records: this._generateDataSetRecords(),
            sortedRecordIds: this._sortedRecordIds,
            error: this._error,
            loading: this._loading,
            errorMessage: this._errorMessage,
            sorting: this._sortingDetails ? JSON.parse(JSON.stringify(this._sortingDetails)) : [],
            refresh: this.refresh.bind(this),
            getSelectedRecordIds: this._getSelectedRecordIds.bind(this),
            setSelectedRecordIds: this._setSelectedRecordIds.bind(this),
            clearSelectedRecordIds: this._clearSelectedRecordIds.bind(this),
            addColumn: this._addColumn.bind(this),
            newRecord: this._newRecord.bind(this),
            delete: this._delete.bind(this),
            getDataSetCapabilities: this._getDataSetCapabilities.bind(this),
            getTargetEntityType: this._getTargetEntityType.bind(this),
            getRelatedDataSet: this._getRelatedDataSet.bind(this),
            paging: {
                totalResultCount: this._pagingDetails.totalResultCount,
                hasNextPage: this._pagingDetails.hasNextPage,
                hasPreviousPage: this._pagingDetails.firstPageNumber > 1,
                loadExactPage: this._loadExactPage.bind(this),
                loadNextPage: this._loadNextPage.bind(this),
                loadPreviousPage: this._loadPreviousPage.bind(this),
                setPageSize: this._setPageSize.bind(this),
            },
            filtering: {
                setFilter: this._setFilter.bind(this),
                getFilter: this._getFilter.bind(this),
                clearFilter: this._clearFilter.bind(this),
            },
            linking: null,
        };
        return dataset;
    };
    DataSetObjectWrapper.prototype._moveToState = function (newState) {
        switch (newState.state) {
            case DataSetState.Available:
                if (newState.uniqueId && this._updateOnQueryId === newState.uniqueId) {
                    this._loading = false;
                    this._error = false;
                    this._errorMessage = "";
                }
                break;
            case DataSetState.Busy:
                this._loading = true;
                this._error = false;
                this._errorMessage = "";
                this._dataset.loading = true;
                break;
            case DataSetState.Error:
            case DataSetState.Destroyed:
                this._loading = false;
                this._error = true;
                this._errorMessage = newState.message;
                this._dataset.error = true;
                this._dataset.loading = false;
                this._dataset.errorMessage = newState.message;
                break;
        }
    };
    DataSetObjectWrapper.prototype._generateDataSetRecords = function () {
        var datasetRecords = {};
        for (var id in this._records) {
            var record = this._records[id];
            datasetRecords[id] = this._generateDataSetRecordForDataSet(record);
        }
        return datasetRecords;
    };
    DataSetObjectWrapper.prototype._generateDataSetRecordForDataSet = function (record) {
        var datasetrecord = {
            getRecordId: record.getRecordId.bind(record),
            getNamedReference: record.getNamedReference.bind(record),
            getValue: record.getValue.bind(record),
            getFormattedValue: record.getFormattedValue.bind(record),
            getColumnInfo: record.getColumnInfo.bind(record),
            setValue: record.setValue.bind(record),
            isDirty: record.isDirty.bind(record),
            isValid: record.isValid.bind(record),
            save: record.save.bind(record),
        };
        return datasetrecord;
    };
    DataSetObjectWrapper.prototype.refresh = function () {
        var _this = this;
        var _a, _b, _c;
        this._moveToState({ state: DataSetState.Busy });
        if (JSON.stringify(this._sortingDetails) !== JSON.stringify(this._dataset.sorting)) {
            this._updatedProperties.push("sortorder");
            this._sortingDetails = this._dataset.sorting;
        }
        if (JSON.stringify(this._columns) !== JSON.stringify(this._dataset.columns)) {
            this._updatedProperties.push("columns");
            this._columns = this._dataset.columns;
        }
        this._dataProvider.clearSelectedRecordIds();
        this._updateOnQueryId = Math.random();
        var query = {
            queryId: this._updateOnQueryId,
            columns: this._columns,
            sortDetails: this._sortingDetails,
            pagingDetails: {
                pageNumber: this._pagingDetails.firstPageNumber,
                pageSize: this._pagingDetails.pageSize,
                retrieveTotalRecordCount: ((_c = (_b = (_a = this._configuration) === null || _a === void 0 ? void 0 : _a.initQuery) === null || _b === void 0 ? void 0 : _b.pagingDetails) === null || _c === void 0 ? void 0 : _c.retrieveTotalRecordCount) || false,
            },
            filters: this._getFilter(),
            linkingDetails: null,
        };
        try {
            this._dataProvider
                .getRecords(query)
                .then(function (queryResult) {
                _this._processQueryResult(queryResult);
                _this._moveToState({ uniqueId: queryResult.queryId, state: DataSetState.Available });
                _this._onDataSetUpdated(query.queryId);
                TelemetryReporter.reportEventSuccess("PCF_dataset_refresh", []);
            })
                .catch(function (e) {
                var errorMessage = e.message || e.errorMessage || "Unknown error while fetching records";
                _this._moveToState({ uniqueId: query.queryId, state: DataSetState.Error, message: errorMessage });
                _this._onDataSetUpdated(query.queryId);
                var telemetryEventParams = [{ name: "message", value: errorMessage }];
                TelemetryReporter.reportEventFailure("PCF_dataset_refresh", telemetryEventParams);
            });
        }
        catch (e) {
            var errorMessage = e.message || e.errorMessage || "Unknown error while fetching records";
            this._moveToState({ uniqueId: query.queryId, state: DataSetState.Error, message: errorMessage });
            this._onDataSetUpdated(query.queryId);
            var telemetryEventParams = [{ name: "message", value: errorMessage }];
            TelemetryReporter.reportEventFailure("PCF_dataset_refresh", telemetryEventParams);
        }
    };
    DataSetObjectWrapper.prototype._onDataSetUpdated = function (uniqueId) {
        var _a, _b;
        if (uniqueId !== this._updateOnQueryId) {
            return;
        }
        this._dataset = this._generateDataset();
        if ((_b = (_a = this._configuration) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.dataSetUpdatedCallback) {
            var clonedUpdateProps = Object.assign([], this._updatedProperties);
            TelemetryReporter.reportEventSuccess("PCF_dataset_updatecallback_called", []);
            this._configuration.events.dataSetUpdatedCallback(this._dataset, clonedUpdateProps);
        }
        this._updatedProperties = [];
    };
    DataSetObjectWrapper.prototype._processQueryResult = function (queryResult) {
        this._updatedProperties.push("records");
        this._records = queryResult.records;
        this._sortedRecordIds = queryResult.sortedRecordIds;
        this._pagingDetails.hasNextPage = queryResult.hasNextPage;
        this._pagingDetails.totalResultCount = queryResult.totalRecordCount;
    };
    DataSetObjectWrapper.prototype._setSelectedRecordIds = function (recordIds) {
        this._dataProvider.setSelectedRecordIds(recordIds);
    };
    DataSetObjectWrapper.prototype._getSelectedRecordIds = function () {
        return this._dataProvider.getSelectedRecordIds();
    };
    DataSetObjectWrapper.prototype._clearSelectedRecordIds = function () {
        this._dataProvider.clearSelectedRecordIds();
    };
    DataSetObjectWrapper.prototype._getTargetEntityType = function () {
        return this._dataProvider.getEntityName();
    };
    DataSetObjectWrapper.prototype._loadExactPage = function (pageNumber) {
        if (!isNaN(pageNumber) && pageNumber > 0) {
            this._pagingDetails.firstPageNumber = pageNumber;
        }
        this._updatedProperties.push("page");
        this.refresh();
    };
    DataSetObjectWrapper.prototype._loadPreviousPage = function () {
        this._loadExactPage(this._pagingDetails.firstPageNumber - 1);
    };
    DataSetObjectWrapper.prototype._loadNextPage = function () {
        this._loadExactPage(this._pagingDetails.firstPageNumber + 1);
    };
    DataSetObjectWrapper.prototype._setPageSize = function (pageSize) {
        if (pageSize > 0) {
            this._pagingDetails.pageSize = pageSize;
        }
    };
    DataSetObjectWrapper.prototype._setFilter = function (filter) {
        this._filteringDetails.filterExpression = filter;
        this._updatedProperties.push("filter");
    };
    DataSetObjectWrapper.prototype._getFilter = function () {
        return this._filteringDetails.filterExpression;
    };
    DataSetObjectWrapper.prototype._clearFilter = function () {
        this._filteringDetails.filterExpression = null;
        this._updatedProperties.push("filter");
    };
    DataSetObjectWrapper.prototype._getDataSetCapabilities = function () {
        return this._dataProvider.getCapabilities();
    };
    DataSetObjectWrapper.prototype._addColumn = function (_name, _entityAlias) {
    };
    DataSetObjectWrapper.prototype._newRecord = function () {
        var _this = this;
        var initialColumns = this._columns.map(function (column) { return column.name; });
        return this._dataProvider.newRecord(initialColumns).then(function (record) {
            var datasetRecord = _this._generateDataSetRecordForDataSet(record);
            TelemetryReporter.reportEventSuccess("PCF_dataset_newrecord_created", []);
            return datasetRecord;
        });
    };
    DataSetObjectWrapper.prototype._delete = function (recordIds) {
        return this._dataProvider.delete(recordIds);
    };
    DataSetObjectWrapper.prototype._getRelatedDataSet = function (columnName, updateCallback, targetEntityName) {
        var column = this._columns.find(function (c) { return c.name === columnName && lookupTypes.indexOf(c.dataType) > -1; });
        if (!column) {
            return null;
        }
        return this._dataProvider.getRelatedDataSet(column, updateCallback, targetEntityName);
    };
    return DataSetObjectWrapper;
}());
export { DataSetObjectWrapper };
