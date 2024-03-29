type PaCompetenceCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.assessment_appraise_participants>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  expert_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expert_person_fullname: XmlElem<string>;
  expert_person_position_name: XmlElem<string>;
  assessment_appraise_type: XmlElem<string, typeof common.assessment_appraise_types>;
  is_done: XmlElem<boolean>;
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string>;
  mark: XmlElem<string>;
  weight: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
