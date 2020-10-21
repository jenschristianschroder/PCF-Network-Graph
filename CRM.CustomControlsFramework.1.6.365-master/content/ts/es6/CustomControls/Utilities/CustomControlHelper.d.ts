﻿import { ICustomControlHostProps, ICustomControlHostOwnProps, IClientData } from "../Models/CustomControlDataInterfaces";
import { CustomControlEntityReference } from "../Models/CustomControlEntityReference";
declare function buildUniqueCustomControlId(props: ICustomControlHostProps, id: string, absoluteId?: string): string;
declare function buildChildDomId(props: ICustomControlHostOwnProps): string;
declare function buildTesthookId(props: ICustomControlHostProps, testhookId: string): string;
declare function buildTabIndexValue(props: ICustomControlHostProps): number;
declare function buildTooltipValue(props: ICustomControlHostProps): string;
declare function getHighContrastEnabled(): boolean;
declare function focusElementById(props: ICustomControlHostProps, id: string, isAbsoluteId?: boolean): void;
declare function blurElementById(props: ICustomControlHostProps, id: string, isAbsoluteId?: boolean): void;
declare function createCrmUri(url: string, data: IClientData): string;
declare function openDatasetItemAction(ownProps: ICustomControlHostProps, param: CustomControlInterfaces.IDataSetParameter, paramKey: string, runCustomOpenRecord: any, entityReference: CustomControlEntityReference, openDataSetItemOptions?: CustomControlInterfaces.IOpenDataSetItemOptions): void;
declare function areFilteringObjEqual(firstFilteringObj: CustomControlInterfaces.FilterExpression, secondFilteringObj: CustomControlInterfaces.FilterExpression): boolean;
declare function areSortingObjEqual(firstSortingObj: CustomControlInterfaces.IDataSetColumnSortStatus[], secondSortingObj: CustomControlInterfaces.IDataSetColumnSortStatus[]): boolean;
declare function getRecordSetQueryFromProps(ownProps: ICustomControlHostProps, paramKey: string): string;
declare function getParentIdFromProps(props: ICustomControlHostOwnProps): string;
declare function convertFetchXmlToFilterExpression(inputFetchXmlSnippet: string): CustomControlInterfaces.FilterExpression;
declare function convertFilterExpressionToFetchXml(filterExpression: CustomControlInterfaces.FilterExpression, xmlEncode: (s: string) => string): string;
declare function getNodeAttributeValueFromName(inputNode: Element, attribuetName: string): string;
declare function willUpdatePagingIndex(existedFirstPageNumber: number, existedLastPageNumber: number, nextFirstPageNumber: number, nextLastPageNumber: number): boolean;
declare function willLoadNextPage(existedFirstPageNumber: number, nextFirstPageNumber: number, existedLastPageNumber: number, nextLastPageNumber: number): boolean;
declare function willLoadExactPage(nextFirstPageNumber: number, nextLastPageNumber: number, oldPagingRefreshInput: string, newPagingRefreshInput: string, existedFirstPageNumber: number, existedLastPageNumber: number): boolean;
declare function willLoadPrevPage(existedFirstPageNumber: number, nextFirstPageNumber: number, existedLastPageNumber: number, nextLastPageNumber: number): boolean;
declare function pagingInputValid(pageNumber1: number, pageNumber2: number, pageNumber3: number, pageNumber4: number): boolean;
declare function isDataSetControl(manifest: CustomControlInterfaces.ICustomControlManifest): boolean;
declare function hasDataProvider(parameters: CustomControlInterfaces.IParameterDefinitionMap): boolean;
declare function isQuickFormControl(configuration: CustomControlInterfaces.ICustomControlConfiguration): boolean;
declare function getEntityTypeFromDescriptor(descriptor: CustomControlInterfaces.ICustomControlDescriptor): string;
declare function getRecordInfoFromControlProps(props: ICustomControlHostProps): {
    recordId: string;
    entityTypeName: string;
};
declare function getEntityTypeFromQuickFormDefaultConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
declare function getRecordIdFromQuickFormDefaultConfiguration(configuration: CustomControlInterfaces.ICustomControlConfiguration): string;
export { buildUniqueCustomControlId, buildChildDomId, focusElementById, blurElementById, createCrmUri, openDatasetItemAction, areFilteringObjEqual, areSortingObjEqual, buildTesthookId, buildTabIndexValue, buildTooltipValue, getParentIdFromProps, getRecordSetQueryFromProps, convertFetchXmlToFilterExpression, getHighContrastEnabled, convertFilterExpressionToFetchXml, getNodeAttributeValueFromName, pagingInputValid, willUpdatePagingIndex, willLoadPrevPage, willLoadNextPage, willLoadExactPage, isDataSetControl, isQuickFormControl, hasDataProvider, getEntityTypeFromDescriptor, getRecordInfoFromControlProps, getEntityTypeFromQuickFormDefaultConfiguration, getRecordIdFromQuickFormDefaultConfiguration, };
