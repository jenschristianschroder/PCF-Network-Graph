import { DataProvider, Query } from "./CustomControlDataProviderInterfaces";
import { DataSetObjectWrapper } from "./DataSetObjectWrapper";
import { DataSet, onDataSetUpdatedCallback } from "./CustomControlDataSetInterfaces";
declare class DataSetFactory {
    static getDataSet(dataProvider: DataProvider, configuration: DataSetFactoryConfiguration): DataSet;
    static createDataSetObjectWrapper(dataProvider: DataProvider, configuration: DataSetFactoryConfiguration): DataSetObjectWrapper;
}
interface DataSetFactoryConfiguration {
    initQuery?: Query;
    events?: DataSetEventConfiguration;
}
interface DataSetEventConfiguration {
    dataSetUpdatedCallback?: onDataSetUpdatedCallback;
    recordSelectedCallback?: onRecordSelected;
}
interface onRecordSelected {
    (recordId: string): void;
}
export { DataSetFactory, DataSetFactoryConfiguration, onRecordSelected, DataSetEventConfiguration };
