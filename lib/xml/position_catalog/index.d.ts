type PositionCatalogDocumentTopElem = XmlElem<{
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  basic_collaborator_id: XmlElem<number>;
  basic_collaborator_fullname: XmlElem<string>;
  basic_rate: XmlElem<number>;
  is_boss: XmlElem<boolean>;
  position_date: XmlElem<Date>;
  position_finish_date: XmlElem<Date>;
  is_position_finished: XmlElem<boolean>;
  position_assignment_type: XmlElem<string>;
  position_appointment_type_id: XmlElem<number>;
  competence_profile_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  knowledge_profile_id: XmlElem<number>;
  position_common_id: XmlElem<number>;
  position_family_id: XmlElem<number>;
  staff_position_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}>;

type PositionCatalogDocument = XmlDocument<PositionCatalogDocumentTopElem>;
