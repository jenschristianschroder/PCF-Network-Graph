import { DataSetObjectWrapper } from "./DataSetObjectWrapper";
var DataSetFactory = (function () {
    function DataSetFactory() {
    }
    DataSetFactory.getDataSet = function (dataProvider, configuration) {
        var dataSetObjectWrapper = new DataSetObjectWrapper(dataProvider, configuration);
        return dataSetObjectWrapper.getDataSet();
    };
    DataSetFactory.createDataSetObjectWrapper = function (dataProvider, configuration) {
        return new DataSetObjectWrapper(dataProvider, configuration);
    };
    return DataSetFactory;
}());
export { DataSetFactory };
