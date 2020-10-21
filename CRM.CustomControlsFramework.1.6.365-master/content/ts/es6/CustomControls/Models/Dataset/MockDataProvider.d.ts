import { DataProvider, Query, QueryResult, DataProviderCapabilities, DataSetEntityRecord } from "./CustomControlDataProviderInterfaces";
import { DataSetColumn, onDataSetUpdatedCallback, DataSet, DataSetRecord, ColumnInfo } from "./CustomControlDataSetInterfaces";
import { DataSetMetadata, EntityReference } from "../CustomControlMetadataInterfaces";
declare class MockDataProvider implements DataProvider {
    private _entityName;
    private _maxRecords;
    private _records;
    private _selectedRecordIds;
    constructor(entityName: string, maxRecords: number);
    getEntityName(): string;
    getRecords(query: Query): Promise<QueryResult>;
    getMetadata(columnNames?: string[]): Promise<DataSetMetadata>;
    newRecord(): Promise<DataSetEntityRecord>;
    delete(recordIds: string[]): Promise<void>;
    getCapabilities(): DataProviderCapabilities;
    setSelectedRecordIds(_ids: string[]): void;
    getSelectedRecordIds(): string[];
    clearSelectedRecordIds(): void;
    getRelatedDataSet(_column: DataSetColumn, _updateCallback: onDataSetUpdatedCallback): DataSet;
    destroy(): void;
}
declare class MockDataSetEntityRecord implements DataSetRecord {
    private _record;
    private _columns;
    private _recordId;
    private _entityName;
    constructor(columnNames: string[], id: string, entityName: string);
    getRecordId(): string;
    getNamedReference(): EntityReference;
    getValue(columnName: string): string | number | boolean | EntityReference | Date | number[] | EntityReference[];
    getFormattedValue(columnName: string): string;
    getColumnInfo(_columnName: string): Promise<ColumnInfo>;
    setValue(_columnName: string, _value: string | number | boolean | EntityReference | Date | number[] | EntityReference[]): Promise<void>;
    isDirty(): boolean;
    isValid(): boolean;
    save(): Promise<DataSetEntityRecord>;
}
export { MockDataProvider, MockDataSetEntityRecord };
