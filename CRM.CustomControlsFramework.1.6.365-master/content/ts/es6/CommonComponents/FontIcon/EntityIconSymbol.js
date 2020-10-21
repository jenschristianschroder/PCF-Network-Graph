var EntityIconSymbolMapping = {
    account: "crmSymbolFont entity-symbol Account",
    activitypointer: "crmSymbolFont entity-symbol Activitypointer",
    appointment: "crmSymbolFont entity-symbol Appointment",
    article: "symbolFont Article-symbol",
    businessunit: "crmSymbolFont entity-symbol BusinessUnit",
    campaign: "crmSymbolFont entity-symbol Campaign",
    campaignresolution: "symbolFont CampaignResolution-symbol",
    case: "symbolFont Case-symbol",
    caseresolution: "symbolFont CaseResolution-symbol",
    chat: "symbolFont Chat-symbol",
    competitor: "crmSymbolFont entity-symbol Competitor",
    connection: "crmSymbolFont entity-symbol Connection",
    contact: "crmSymbolFont entity-symbol Contact",
    contract: "crmSymbolFont entity-symbol Contract",
    createquote: "symbolFont CreateQuote-symbol",
    customactivity: "symbolFont CustomActivity-symbol",
    customeraddress: "crmSymbolFont entity-symbol CustomerAddress",
    dashboard: "crmSymbolFont entity-symbol Dashboard",
    distributionList: "symbolFont DistributionList-symbol",
    documenttemplates: "symbolFont DocumentTemplates-symbol",
    email: "crmSymbolFont entity-symbol Email",
    externalUser: "symbolFont GuestUser-symbol",
    fax: "crmSymbolFont entity-symbol Fax",
    goal: "crmSymbolFont entity-symbol Goal",
    guestUser: "symbolFont GuestUser-symbol",
    incident: "crmSymbolFont entity-symbol Incident",
    invoice: "crmSymbolFont entity-symbol Invoice",
    knowledgearticle: "crmSymbolFont entity-symbol Knowledgearticle",
    lead: "crmSymbolFont entity-symbol Lead",
    letter: "crmSymbolFont entity-symbol Letter",
    mail: "symbolFont Mail-symbol",
    membersicon: "symbolFont MembersIcon-symbol",
    metric: "crmSymbolFont entity-symbol Metric",
    opportunity: "crmSymbolFont entity-symbol Opportunity",
    opportunityproduct: "crmSymbolFont entity-symbol Opportunityproduct",
    phone: "symbolFont Phone-symbol",
    phonecall: "crmSymbolFont entity-symbol Phonecall",
    position: "crmSymbolFont entity-symbol Position",
    product: "crmSymbolFont entity-symbol Product",
    queueicon: "symbolFont QueueIcon-symbol",
    queueitem: "crmSymbolFont entity-symbol Queueitem",
    queueitemroute: "symbolFont QueueItemRoute-symbol",
    quote: "crmSymbolFont entity-symbol Quote",
    report: "crmSymbolFont entity-symbol Report",
    resolvecase: "symbolFont ResolveCase-symbol",
    salesliterature: "crmSymbolFont entity-symbol SalesLiterature",
    salesorder: "crmSymbolFont entity-symbol Salesorder",
    serviceactivity: "symbolFont ServiceActivity-symbol",
    sharepointdocument: "crmSymbolFont entity-symbol Sharepointdocument",
    socialprofile: "crmSymbolFont entity-symbol Socialprofile",
    systemuser: "crmSymbolFont entity-symbol Systemuser",
    task: "crmSymbolFont entity-symbol Task",
    team: "crmSymbolFont entity-symbol Team",
    transactioncurrency: "crmSymbolFont entity-symbol TransactionCurrency",
    user: "symbolFont GuestUser-symbol",
    wordtemplates: "symbolFont WordTemplates-symbol",
    msdyusd_task: "crmSymbolFont entity-symbol msdyusd_task-symbol",
    msdyusd_configuration: "crmSymbolFont entity-symbol msdyusd_configuration-symbol",
    msdyusd_customizationfiles: "crmSymbolFont entity-symbol msdyusd_customizationfiles-symbol",
    msdyusd_entitysearch: "crmSymbolFont entity-symbol msdyusd_entitysearch-symbol",
    msdyusd_uiievent: "crmSymbolFont entity-symbol msdyusd_uiievent-symbol",
    msdyusd_form: "crmSymbolFont entity-symbol msdyusd_form-symbol",
    uii_option: "crmSymbolFont entity-symbol uii_option-symbol",
    uii_hostedapplication: "crmSymbolFont entity-symbol uii_hostedapplication-symbol",
    msdyusd_scriptlet: "crmSymbolFont entity-symbol msdyusd_scriptlet-symbol",
    msdyusd_toolbarstrip: "crmSymbolFont entity-symbol msdyusd_toolbarstrip-symbol",
    msdyusd_usersettings: "crmSymbolFont entity-symbol msdyusd_usersettings-symbol",
    msdyusd_agentscriptaction: "crmSymbolFont entity-symbol msdyusd_agentscriptaction-symbol",
    msdyusd_auditanddiagnosticssetting: "crmSymbolFont entity-symbol msdyusd_auditanddiagnosticssetting-symbol",
    msdyusd_sessioninformation: "crmSymbolFont entity-symbol msdyusd_sessioninformation-symbol",
    msdyusd_windowroute: "crmSymbolFont entity-symbol msdyusd_windowroute-symbol",
    customentity: "symbolFont CustomEntity-symbol",
    default: "symbolFont CustomEntity-symbol",
    unresolvedaddress: "symbolFont InformationIcon-symbol",
    recurringappointmentmaster: "symbolFont NewRecurringAppointment-symbol",
    service: "crmSymbolFont entity-symbol Service",
    serviceappointment: "crmSymbolFont entity-symbol ServiceAppointment",
    equipment: "crmSymbolFont entity-symbol Equipment",
    pricelevel: "crmSymbolFont entity-symbol PriceLevel",
    goalrollupquery: "crmSymbolFont entity-symbol GoalRollUpQuery",
    uomschedule: "crmSymbolFont entity-symbol UoMSchedule",
    discounttype: "crmSymbolFont entity-symbol DiscountType",
    territory: "crmSymbolFont entity-symbol Territory",
    socialactivity: "crmSymbolFont entity-symbol Socialactivity",
    calendar: "crmSymbolFont entity-symbol Calendar",
    category: "crmSymbolFont entity-symbol Category",
    entitlement: "crmSymbolFont entity-symbol Entitlement",
    queue: "crmSymbolFont entity-symbol Queue",
    routingrule: "crmSymbolFont entity-symbol RoutingRule",
    routingruleitem: "crmSymbolFont entity-symbol RoutingRuleItem",
    msdyn_knowledgearticletemplate: "crmSymbolFont entity-symbol msdyn_knowledgearticletemplate",
    msdyn_servicelevelagreement: "crmSymbolFont entity-symbol msdyn_servicelevelagreement",
    msdyn_servicelevelagreementkpi: "crmSymbolFont entity-symbol msdyn_servicelevelagreementkpi",
    msdyn_servicelevelagreementinstance: "crmSymbolFont entity-symbol msdyn_servicelevelagreementinstance",
    Code: "crmSymbolFont entity-symbol Code",
    GroupList: "crmSymbolFont entity-symbol GroupList",
    CompletedSolid: "crmSymbolFont entity-symbol CompletedSolid",
    WarningSolid: "crmSymbolFont entity-symbol WarningSolid",
    site: "crmSymbolFont entity-symbol Site",
};
function getSymbolMappingByTypeName(name) {
    return EntityIconSymbolMapping[name] ? EntityIconSymbolMapping[name] : EntityIconSymbolMapping.default;
}
export { getSymbolMappingByTypeName };
