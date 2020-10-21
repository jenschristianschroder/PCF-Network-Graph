interface DataSetMetadata {
    primaryEntityMetadata: EntityMetadata;
    relatedEntityMetadata: Dictionary<EntityMetadata>;
}
interface EntityMetadata {
    displayName: string;
    logicalName: string;
    primaryNameAttribute: string;
    primaryImageAttribute: string;
    primaryIdAttribute: string;
    privilegesByType: Dictionary<CrmDescriptors.SecurityPrivilegeMetadata>;
    description: string;
    entityPluralName: string;
    metadata: Dictionary<AttributeMetadata>;
    attributeNames: string[];
}
interface EntityReference {
    readonly entityLogicalName: string;
    readonly id: string;
    readonly name?: string;
}
interface AttributeMetadata {
    DisplayName: string;
    LogicalName: string;
    RequiredLevel: RequiredLevel;
    IsSecured: boolean;
    IsReadable: boolean;
    IsEditable: boolean;
    SourceType: number;
    Description: string;
    Type: string;
}
interface NumberMetadata extends AttributeMetadata {
    MinValue: number;
    MaxValue: number;
    ImeMode: ImeMode;
}
interface StringMetadata extends AttributeMetadata {
    MaxLength: number;
    ImeMode: ImeMode;
    Format: string;
}
interface FloatingNumberMetadata extends NumberMetadata {
    Precision: number;
}
interface DecimalNumberMetadata extends NumberMetadata {
    Precision: number;
}
interface WholeNumberMetadata extends NumberMetadata {
    Format: string;
    LanguageByCode?: Dictionary<string>;
    TimeZoneByCode?: Dictionary<string>;
}
interface DateTimeMetadata extends AttributeMetadata {
    Behavior: DateTimeFieldBehavior;
    Format: string;
    ImeMode: ImeMode;
}
interface LookupMetadata extends AttributeMetadata {
    Targets: string[];
}
interface OptionSetMetadata extends AttributeMetadata {
    Options: OptionMetadata[];
    DefaultValue: number;
}
interface TwoOptionMetadata extends AttributeMetadata {
    Options: [OptionMetadata, OptionMetadata];
    DefaultValue: boolean;
}
interface OptionMetadata {
    Label: string;
    Value: number;
    Color: string;
}
declare type RequiredLevel = -1 | 0 | 1 | 2 | 3;
declare type ImeMode = 0 | 1 | 2 | 3;
declare type DateTimeFieldBehavior = 0 | 1 | 3;
interface Dictionary<V> {
    [key: string]: V;
}
export { DataSetMetadata, EntityMetadata, EntityReference, AttributeMetadata, NumberMetadata, StringMetadata, FloatingNumberMetadata, DecimalNumberMetadata, WholeNumberMetadata, DateTimeMetadata, LookupMetadata, OptionMetadata, TwoOptionMetadata, OptionSetMetadata, RequiredLevel, ImeMode, DateTimeFieldBehavior, Dictionary, };
