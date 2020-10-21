import { DataSetFactory } from "./DataSetFactory";
var MockDataProvider = (function () {
    function MockDataProvider(entityName, maxRecords) {
        this._entityName = entityName;
        this._maxRecords = maxRecords;
        this._records = {};
    }
    MockDataProvider.prototype.getEntityName = function () {
        return this._entityName;
    };
    MockDataProvider.prototype.getRecords = function (query) {
        if (query.columns.length === 0) {
            var dataseterror = {
                errorMessage: "No columns",
            };
            return Promise.reject(dataseterror);
        }
        var availablePages = this._maxRecords / query.pagingDetails.pageSize;
        if (query.pagingDetails.pageNumber > availablePages) {
            var dataseterror = {
                errorMessage: "Incorrect pages",
            };
            return Promise.reject(dataseterror);
        }
        var columnNames = query.columns.map(function (c) { return c.name; });
        var sortedIds = [];
        for (var i = 0; i < query.pagingDetails.pageSize; i++) {
            this._records[i] = new MockDataSetEntityRecord(columnNames, i.toString(), this._entityName);
            sortedIds.push(i.toString());
        }
        var queryResult = {
            queryId: query.queryId,
            records: this._records,
            sortedRecordIds: sortedIds,
            hasNextPage: !(query.pagingDetails.pageNumber >= availablePages),
            totalRecordCount: this._maxRecords,
        };
        return Promise.resolve(queryResult);
    };
    MockDataProvider.prototype.getMetadata = function (columnNames) {
        console.log("getMetadata called with columnNames ", columnNames);
        return Promise.resolve(null);
    };
    MockDataProvider.prototype.newRecord = function () {
        console.log("newRecord called");
        return Promise.resolve(null);
    };
    MockDataProvider.prototype.delete = function (recordIds) {
        console.log("delete called with recordIds", recordIds);
        return Promise.resolve(null);
    };
    MockDataProvider.prototype.getCapabilities = function () {
        return {
            isEditable: true,
            isFilterable: true,
            isSortable: true,
            canPaginate: true,
            canCreateNewRecords: true,
        };
    };
    MockDataProvider.prototype.setSelectedRecordIds = function (_ids) {
        this._selectedRecordIds = _ids;
    };
    MockDataProvider.prototype.getSelectedRecordIds = function () {
        return this._selectedRecordIds;
    };
    MockDataProvider.prototype.clearSelectedRecordIds = function () {
        this._selectedRecordIds = [];
    };
    MockDataProvider.prototype.getRelatedDataSet = function (_column, _updateCallback) {
        var primaryColumn = {
            name: "column1",
            alias: "Column1",
            dataType: "SingleLine.Text",
            displayName: "Column1",
            order: 1,
            visualSizeFactor: 1,
            isPrimary: true,
        };
        var query = {
            columns: [primaryColumn],
            sortDetails: [],
            filters: null,
            pagingDetails: {
                pageNumber: 1,
                pageSize: 25,
                retrieveTotalRecordCount: true,
            },
        };
        var config = {
            initQuery: query,
            events: {
                dataSetUpdatedCallback: _updateCallback,
            },
        };
        return DataSetFactory.getDataSet(this, config);
    };
    MockDataProvider.prototype.destroy = function () {
        this._records = null;
    };
    return MockDataProvider;
}());
var randomValue = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
var MockDataSetEntityRecord = (function () {
    function MockDataSetEntityRecord(columnNames, id, entityName) {
        var _this = this;
        this._columns = columnNames;
        this._recordId = id;
        this._record = {};
        this._entityName = entityName;
        this._columns.forEach(function (column) {
            _this._record[column] = randomValue();
        });
    }
    MockDataSetEntityRecord.prototype.getRecordId = function () {
        return this._recordId;
    };
    MockDataSetEntityRecord.prototype.getNamedReference = function () {
        return {
            name: "",
            id: this._recordId,
            entityLogicalName: this._entityName,
        };
    };
    MockDataSetEntityRecord.prototype.getValue = function (columnName) {
        return this._record[columnName];
    };
    MockDataSetEntityRecord.prototype.getFormattedValue = function (columnName) {
        return this._record[columnName];
    };
    MockDataSetEntityRecord.prototype.getColumnInfo = function (_columnName) {
        return Promise.reject("Not implemented");
    };
    MockDataSetEntityRecord.prototype.setValue = function (_columnName, _value) {
        return Promise.resolve();
    };
    MockDataSetEntityRecord.prototype.isDirty = function () {
        return false;
    };
    MockDataSetEntityRecord.prototype.isValid = function () {
        return true;
    };
    MockDataSetEntityRecord.prototype.save = function () {
        return Promise.resolve(this);
    };
    return MockDataSetEntityRecord;
}());
export { MockDataProvider, MockDataSetEntityRecord };
