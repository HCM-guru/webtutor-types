interface CollaboratorDocumentChangeLog extends CustomElemsBase {
  id: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  position_parent_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  position_parent_name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  date: XmlElem<Date>;
  comment: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  working_days: XmlElem<number>;
  working_hours: XmlElem<number>;
  rate: XmlElem<number>;
  rate_percent: XmlElem<number>;
}

interface CollaboratorDocumentHistoryState {
  id: XmlElem<string>;
  state_id: XmlElem<string, typeof lists.person_states>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  comment: XmlElem<string>;
}

interface CollaboratorDocumentCustomParam {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface CollaboratorDocumentPersonConfig {
  avatar_filename: XmlElem<string>;
  nick: XmlElem<string>;
  status: XmlElem<string>;
  default_info_type: XmlElem<string>;
}

interface CollaboratorDocumentCompBenPaymentType {
  payment_type_id: XmlElem<number>;
  max_value: XmlElem<number>;
  comment: XmlElem<string>;
}

interface CollaboratorDocumentCompBen {
  salary: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  payment_period: XmlElem<string>;
  comment: XmlElem<string>;
  payment_types: XmlMultiElem<CollaboratorDocumentCompBenPaymentType>;
}

interface CollaboratorDocumentLastData {
  web_banned: XmlElem<boolean>;
  login: XmlElem<string>;
  password: XmlElem<string>;
  access_role: XmlElem<string>;
  is_arm_admin: XmlElem<boolean>;
  is_application_admin: XmlElem<boolean>;
  is_content_admin: XmlElem<boolean>;
  in_request_black_list: XmlElem<boolean>;
  position_id: XmlElem<number>;
  pict_url: XmlElem<string>;
  avatar_filename: XmlElem<string>;
}

type CollaboratorDocumentTopElem = XmlElem<
PersonBase &
PassportDataBase &
FileListBaseFile &
FuncManagersBase &
PathSubsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
PersonObjectLinksBase &
{
  id: XmlElem<number>;
  code: XmlElem<string>;
  eid: XmlElem<string>;
  name(): string;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  position_parent_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  position_parent_name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string>;
  change_password: XmlElem<boolean>;
  is_candidate: XmlElem<boolean>;
  is_outstaff: XmlElem<boolean>;
  candidate_status_type_id: XmlElem<number>;
  candidate_id: XmlElem<number>;
  is_dismiss: XmlElem<boolean>;
  hire_date: XmlElem<Date>;
  dismiss_date: XmlElem<Date>;
  position_date: XmlElem<Date>;
  in_request_black_list: XmlElem<boolean>;
  request_black_list_data: XmlElem<Date>;
  request_black_list_comment: XmlElem<string>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  access: XmlElem<AccessBase>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string>;
  pict_url: XmlElem<string>;
  access_time_start: XmlElem<string>;
  access_time_end: XmlElem<string>;
  is_time_access(): boolean;
  desc: XmlElem<string>;
  disp_empty_fields: XmlElem<boolean>;
  disp_personal_info: XmlElem<boolean>;
  disp_login: XmlElem<boolean>;
  disp_sex: XmlElem<boolean>;
  disp_desc: XmlElem<boolean>;
  disp_files: XmlElem<boolean>;
  disp_birthdate: XmlElem<boolean>;
  disp_birthdate_year: XmlElem<boolean>;
  disp_resume: XmlElem<boolean>;
  allow_personal_chat_request: XmlElem<boolean>;
  personal_chat_confirmation_required: XmlElem<boolean>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  web_enter_date: XmlElem<Date>;
  category_id: XmlMultiElem<string>;
  change_logs: XmlMultiElem<CollaboratorDocumentChangeLog>;
  current_state: XmlElem<string>;
  history_states: XmlMultiElem<CollaboratorDocumentHistoryState>;
  personal_config: XmlElem<CollaboratorDocumentPersonConfig>;
  doc_info: XmlElem<DocInfoBase>;
  last_import_date: XmlElem<Date>;
  custom_params: XmlMultiElem<CollaboratorDocumentCustomParam>;
  level_id: XmlElem<number, LevelCatalogDocumentTopElem>;
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  comp_ben: XmlElem<CollaboratorDocumentCompBen>;
  gdpr: XmlElem<boolean>;
  last_data: XmlElem<CollaboratorDocumentLastData>;
  clear_cur_position(): void;
  start_action(type: string): number;
  set_basic_position(positionId: number): boolean;
  get_courses(type?: "active" | "completed" | "all"): unknown[];
  get_tests(type?: "active" | "completed" | "all"): unknown[];
  assign_course(
    courseId: number,
    dateStart: Date,
    dateEnd: Date,
    eventId: number
  ): number;
  assign_test(
    assessmentId: number,
    dateStart: Date,
    dateEnd: Date,
    eventId: number
  ): number;
  get_info(): unknown[];
  get_events(type: string, status: string, role: string): unknown[];
  get_groups(): unknown[];
  get_event_results(): unknown[];
  update_info(
    lastname: string,
    firstname: string,
    middlename: string,
    address: string,
    phone: string,
    email: string,
    login: string,
    password: string
  ): unknown[] | void;
  clear_subs_fields(): void;
}>;

type CollaboratorDocument = XmlDocument<CollaboratorDocumentTopElem>;
