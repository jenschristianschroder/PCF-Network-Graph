import { CustomControlEntityReference } from "../Models/CustomControlEntityReference";
declare const FIELD_SECTION_ITEM_ID = "MscrmControls.Containers.FieldSectionItem";
declare const IFRAME_CLASS_ID = "{fd2a7985-3187-444e-908d-6624b21f69c0}";
declare const WEBRESOURCE_CLASS_ID = "{9fdf5f91-88b1-47f4-ad53-c11efc01a01d}";
interface IConfigAuxInfo {
    quickFormId?: string;
    chartDataRequestType?: CustomControlInterfaces.FirstDataRequestType;
}
declare enum ContainerControlType {
    GridContainer = 0,
    DashboardContainer = 1,
    QuickCreateForm = 2,
    FieldSectionContainer = 3,
    TimelineContainer = 4,
    ChartControl = 5,
    WebresourceControl = 6,
    DummyControl = 7,
    CalendarControl = 8
}
declare const KNOWN_FALLBACK_CONTROLS: {
    [controlName: string]: string;
};
declare function updateManifestFallback(controlName: string, fallback: string): void;
declare function getManifestFallback(controlName: string): string;
declare function getDataFieldNameForTimer(descriptor: CustomControlInterfaces.ICustomControlDescriptor, TIMER_CONTROL_DATAFIELDNAME_KEY: string): string;
declare function getFieldSectionItemSpecificationParameters(explicitConfig: CustomControlInterfaces.ICustomControlConfiguration, classId?: string): any;
declare function isFieldSectionItemControl(controlId: string): boolean;
declare function wrapFieldLevelConfig(explicitConfig: CustomControlInterfaces.ICustomControlConfiguration, manifest: CustomControlInterfaces.ICustomControlManifest): CustomControlInterfaces.ICustomControlConfiguration;
declare function constructTimerParameters(timerParameters: CustomControlInterfaces.ITimerParameter): CustomControlInterfaces.ITimerParameter;
declare function extendDefaultValueParameterByControlDescriptor(defaultValueParameter: CustomControlInterfaces.ICustomControlParameterDefinition, descriptor: CustomControlInterfaces.ICustomControlDescriptor): CustomControlInterfaces.ICustomControlParameterDefinition;
declare function isNullOrUndefined(util: any): boolean;
declare function retrieveDefaultConfigurationForFieldControl(name: string, dataFieldName: string, type: string, entityTypeName?: string, classId?: string, descriptor?: CustomControlInterfaces.ICustomControlDescriptor, auxInfo?: IConfigAuxInfo): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultBusinessProcessFlowConfig(controlId: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDataSetColumnLookupConfiguration(controlId: string, formFactor: number, viewId: string, targetEntityName: string, parameterName: string, allowFilterOff: boolean, relationshipName: string, dependentAttributeType: string, dependentAttributeName: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveFalseBoundLookupConfig(controlId: string, viewId: string, targetEntityName: string, displayName: string, callback: (value: any) => void): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveFalseBoundLookupConfig2(controlId: string, defaultViewId: string, defaultEntityType: string, entityTypes: string[], lookupType: string, callback: (value: any) => void, extraFilters: string[], additionalTargetExtraFilters: {
    [key: string]: string[];
}, value?: CustomControlEntityReference | CustomControlEntityReference[], disableMru?: boolean, searchText?: string, useMainFormDialogForEdit?: boolean, useMainFormDialogForCreate?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultDashboardConfig(name: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultReferencePanelConfig(name: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForSubgridControl(controlId: string, parameters: CustomControlInterfaces.IGridCustomControlDescriptorParameters, isAssociatedGrid?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForHomePageGridControl(controlId: string, entityName: string, viewId: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForHomePageGridControlForChart(controlId: string, entityName: string, viewId: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForHomePageChartControl(name: string, entityName: string, viewId: string, visualizationId: string, refreshCounter?: number, filterExpression?: string, isUserChart?: boolean, chartDrillDownParameters?: CustomControlInterfaces.ChartDrillDownParameter[], isUserView?: boolean, extraFilters?: string[], linkEntities?: string, renderStandaloneExpandButton?: boolean, renderStandaloneCloseButton?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForAssociatedGridChartControl(name: string, entityName: string, viewId: string, visualizationId: string, relationshipName: string, refreshCounter?: number, isUserChart?: boolean, isUserView?: boolean, extraFilters?: string[], linkEntities?: string, renderStandaloneCloseButton?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveContainerControlForFormPowerBIControl(parameters: CustomControlInterfaces.IPowerBIParameterDefinition, FormFactor: number, Name: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForQuickFormChartControl(parameters: CustomControlInterfaces.IChartCustomControlDescriptorParameters, dataRequestType?: CustomControlInterfaces.FirstDataRequestType, renderChartCommandBar?: boolean): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForFormChartControl(parameters: CustomControlInterfaces.IChartCustomControlDescriptorParameters, firstDataRequestType?: CustomControlInterfaces.FirstDataRequestType, refreshCounter?: number): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDefaultConfigurationForControl(name: string, dataFieldName: string, type: string, descriptor: CustomControlInterfaces.ICustomControlDescriptor, entityTypeName?: string, classId?: string): CustomControlInterfaces.ICustomControlConfiguration;
declare function retrieveDataTypeBySourceTypeForControl(type: string, classId?: string): string;
declare function retrieveContainerControlTypeByControlId(controlId: string): ContainerControlType;
declare function retrieveDefaultManifestNameByDataType(dataType: string, attributes?: CustomControlInterfaces.ICustomControlAttributes): string;
declare function retrieveDefaultManifestByConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
declare function isLegacyDataSetControl(controlManifest: CustomControlInterfaces.ICustomControlManifest): boolean;
export { IConfigAuxInfo, ContainerControlType, constructTimerParameters, getDataFieldNameForTimer, getFieldSectionItemSpecificationParameters, retrieveDefaultBusinessProcessFlowConfig, retrieveDataSetColumnLookupConfiguration, retrieveFalseBoundLookupConfig, retrieveFalseBoundLookupConfig2, retrieveDefaultDashboardConfig, retrieveDefaultReferencePanelConfig, isNullOrUndefined, retrieveDefaultConfigurationForFieldControl, retrieveDefaultConfigurationForSubgridControl, retrieveDefaultConfigurationForHomePageGridControl, retrieveDefaultConfigurationForHomePageGridControlForChart, retrieveDefaultConfigurationForHomePageChartControl, retrieveDefaultConfigurationForAssociatedGridChartControl, retrieveDefaultConfigurationForQuickFormChartControl, retrieveDefaultConfigurationForFormChartControl, retrieveContainerControlForFormPowerBIControl, retrieveDefaultConfigurationForControl, extendDefaultValueParameterByControlDescriptor, wrapFieldLevelConfig, isFieldSectionItemControl, retrieveDataTypeBySourceTypeForControl, retrieveDefaultManifestNameByDataType, retrieveDefaultManifestByConfiguration, isLegacyDataSetControl, retrieveContainerControlTypeByControlId, FIELD_SECTION_ITEM_ID, IFRAME_CLASS_ID, WEBRESOURCE_CLASS_ID, KNOWN_FALLBACK_CONTROLS, updateManifestFallback, getManifestFallback, };
