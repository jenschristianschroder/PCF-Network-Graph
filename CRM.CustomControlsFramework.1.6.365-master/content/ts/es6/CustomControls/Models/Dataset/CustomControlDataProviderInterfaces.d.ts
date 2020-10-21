import { DataSetMetadata, Dictionary, EntityReference } from "../CustomControlMetadataInterfaces";
import { FilterExpression, DataSetColumnSortStatus, LinkEntityExpression, DataSetColumn, ColumnInfo, onDataSetUpdatedCallback, DataSet } from "./CustomControlDataSetInterfaces";
interface Query {
    queryId?: number;
    columns: DataSetColumn[];
    filters?: FilterExpression;
    sortDetails?: DataSetColumnSortStatus[];
    pagingDetails?: PagingQueryDetails;
    linkingDetails?: LinkEntityExpression[];
}
interface DataProvider {
    getEntityName(): string;
    getRecords(query: Query): Promise<QueryResult>;
    getMetadata(columnNames?: string[]): Promise<DataSetMetadata>;
    newRecord(initialColumns?: string[]): Promise<DataSetEntityRecord>;
    delete(recordIds: string[]): Promise<void>;
    getCapabilities(): DataProviderCapabilities;
    setSelectedRecordIds(ids: string[]): void;
    getSelectedRecordIds(): string[];
    clearSelectedRecordIds(): void;
    getRelatedDataSet(column: DataSetColumn, updateCallback: onDataSetUpdatedCallback, targetEntityName?: string): DataSet;
    destroy(): void;
}
interface DataProviderCapabilities {
    isEditable: boolean;
    isFilterable: boolean;
    isSortable: boolean;
    canPaginate: boolean;
    canCreateNewRecords: boolean;
}
interface DataSetEntityRecord {
    getRecordId(): string;
    getNamedReference(): EntityReference;
    getValue(columnName: string): string | Date | number | number[] | boolean | EntityReference | EntityReference[];
    getFormattedValue(columnName: string, value?: string | Date | number | number[] | boolean | EntityReference | EntityReference[]): string;
    getColumnInfo(columnName: string): Promise<ColumnInfo>;
    setValue(columnName: string, value: string | Date | number | number[] | boolean | EntityReference | EntityReference[]): Promise<void>;
    isDirty(): boolean;
    isValid(): boolean;
    save(): Promise<DataSetEntityRecord>;
}
interface QueryResult {
    queryId?: number;
    records: Dictionary<DataSetEntityRecord>;
    hasNextPage: boolean;
    totalRecordCount?: number;
    sortedRecordIds: string[];
}
interface PagingQueryDetails {
    pageSize: number;
    pageNumber: number;
    retrieveTotalRecordCount?: boolean;
}
interface DataErrorObject {
    errorMessage: string;
    errorTitle?: string;
    errorCode?: number;
}
export { Query, DataProvider, DataProviderCapabilities, DataSetEntityRecord, QueryResult, PagingQueryDetails, DataErrorObject, };
