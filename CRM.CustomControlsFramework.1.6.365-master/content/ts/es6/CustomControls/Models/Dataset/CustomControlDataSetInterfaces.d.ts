import { DataProviderCapabilities as DataSetCapabilites, DataSetEntityRecord } from "./CustomControlDataProviderInterfaces";
import { AttributeMetadata } from "../CustomControlMetadataInterfaces";
interface ModernDataSet {
    columns: DataSetColumn[];
    records: {
        [id: string]: DataSetEntityRecord;
    };
    sortedRecordIds: string[];
    error: boolean;
    errorMessage: string;
    loading: boolean;
    sorting: DataSetColumnSortStatus[];
    filtering: DataSetFiltering;
    paging: DataSetPaging;
    linking: DataSetLinking;
    addColumn?: (name: string, entityAlias?: string) => void;
    setSelectedRecordIds(ids: string[]): void;
    getSelectedRecordIds(): string[];
    clearSelectedRecordIds(): void;
    refresh(): void;
    getTargetEntityType(): string;
    newRecord(): Promise<DataSetEntityRecord>;
    delete(recordIds: string[]): Promise<void>;
    getDataSetCapabilities(): DataSetCapabilites;
    getRelatedDataSet(columnName: string, updateCallback: onDataSetUpdatedCallback, targetEntityName?: string): ModernDataSet;
}
declare const enum DataSetUpdatePropertyNames {
    Records = "records",
    Columns = "columns",
    SortOrder = "sortorder",
    Page = "page",
    Filter = "filter"
}
interface onDataSetUpdatedCallback {
    (updatedDataSet: ModernDataSet, updatedProps: DataSetUpdatePropertyNames[]): void;
}
interface DataSetColumn {
    name: string;
    displayName: string;
    dataType: string;
    alias: string;
    order: number;
    visualSizeFactor: number;
    isHidden?: boolean;
    isPrimary?: boolean;
    disableSorting?: boolean;
    attributes?: AttributeMetadata;
}
interface DataSetColumnSortStatus {
    name: string;
    sortDirection: CustomControlInterfaces.ColumnSortDirection;
}
interface ColumnInfo {
    readonly error: boolean;
    readonly errorMessage?: string;
    readonly security?: SecurityValues;
    readonly type: string;
}
interface SecurityValues {
    readonly editable: boolean;
    readonly readable: boolean;
    readonly secured: boolean;
}
interface DataSetFiltering {
    getFilter(): FilterExpression;
    setFilter(expression: FilterExpression): void;
    clearFilter(): void;
}
interface FilterExpression {
    conditions: CustomControlInterfaces.ConditionExpression[];
    filterOperator: CustomControlInterfaces.FilterOperator;
    filters?: FilterExpression[];
}
interface DataSetPaging {
    readonly totalResultCount: number;
    readonly hasNextPage: boolean;
    readonly hasPreviousPage: boolean;
    loadNextPage(): void;
    loadPreviousPage(): void;
    loadExactPage(pageNumber: number): void;
    setPageSize(pageSize: number): void;
}
interface DataSetLinking {
    getLinkedEntities(): LinkEntityExpression[];
    addLinkedEntity(expression: LinkEntityExpression): void;
}
interface LinkEntityExpression {
    name: string;
    from: string;
    to: string;
    linkType: string;
    alias: string;
}
export { ModernDataSet as DataSet, DataSetEntityRecord as DataSetRecord, DataSetColumn, DataSetColumnSortStatus, DataSetFiltering, FilterExpression, DataSetPaging, DataSetLinking, LinkEntityExpression, ColumnInfo, SecurityValues, DataSetUpdatePropertyNames, onDataSetUpdatedCallback, };
