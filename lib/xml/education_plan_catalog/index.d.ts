type EducationPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  update_status_and_activity: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  fact_finish_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  last_activity_date: XmlElem<Date>;
  mark: XmlElem<number>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  readiness_percent: XmlElem<number>;
  development_plan_id: XmlElem<number, DevelopmentPlanCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
