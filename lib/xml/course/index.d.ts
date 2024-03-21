interface CourseDocumentPartActivityState {
  activity_state_id: XmlElem<number, ActivityStateCatalogDocumentTopElem>;
  score: XmlElem<number>;
  state_id: XmlElem<number, typeof common.learning_states>;
}

interface CourseDocumentPartCompletedParentPart {
  part_code: XmlElem<string>;
}

interface CourseDocumentPart {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.course_part_types>;
  max_score: XmlElem<number>;
  mastery_score: XmlElem<number>;
  mastery_score_relative: XmlElem<number>;
  url: XmlElem<string>;
  course_module_id: XmlElem<number, CourseModuleCatalogDocumentTopElem>;
  parent_part_code: XmlElem<string>;
  desc: XmlElem<string>;
  win_width: XmlElem<number>;
  win_height: XmlElem<number>;
  disp_scrolling: XmlElem<boolean>;
  resizable: XmlElem<boolean>;
  is_mandatory: XmlElem<boolean>;
  is_visible: XmlElem<boolean>;
  max_time_allowed: XmlElem<string>;
  time_limit_action: XmlElem<string>;
  set_status_side: XmlElem<string>;
  score_factor: XmlElem<number>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  attempts_num: XmlElem<number>;
  start_day: XmlElem<number>;
  duration_day: XmlElem<number>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_states: XmlMultiElem<CourseDocumentPartActivityState>;
  object_id: XmlElem<number>;
  cl_module_view: XmlElem<string>;
  completed_parent_parts: XmlMultiElem<CourseDocumentPartCompletedParentPart>;
  view: XmlElem<ViewConditionsBase>;
  launch: XmlElem<ViewConditionsBase>;
  cl_module_protocol: XmlElem<string>;
}

type CourseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
EstimationLevelsBase &
CourseExpertsBase &
CourseSettingsBase &
CatalogListBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
ProctoringBase &
GameBonusBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseDocument;
  desc: XmlElem<string>;
  status: XmlElem<string, typeof common.course_test_states>;
  win_width: XmlElem<number>;
  win_height: XmlElem<number>;
  disp_scrolling: XmlElem<boolean>;
  resizable: XmlElem<boolean>;
  struct_type: XmlElem<string>;
  library_url: XmlElem<string>;
  parts: XmlMultiElem<CourseDocumentPart>;
  course_finish_redirect: XmlElem<string>;
  course_finish_redirect_url: XmlElem<string>;
  base_url: XmlElem<string>;
  view_type: XmlElem<string>;
  mastery_score: XmlElem<number>;
  max_score: XmlElem<number>;
  score_sum_type: XmlElem<string>;
  score_sum_eval: XmlElem<string>;
  yourself_start: XmlElem<boolean>;
  finish_without_mastery_score: XmlElem<boolean>;
  auto_finish: XmlElem<boolean>;
  ignor_location: XmlElem<boolean>;
  start_after_finish: XmlElem<boolean>;
  no_url_info: XmlElem<boolean>;
  disp_folder_desc: XmlElem<boolean>;
  duration: XmlElem<number>;
  no_encoding_core_lesson: XmlElem<boolean>;
  not_use_default_notification: XmlElem<boolean>;
  default_response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  allow_disp_response: XmlElem<boolean>;
  cl_course_id: XmlElem<number, ClCourseCatalogDocumentTopElem>;
  version: XmlElem<string>;
  price: XmlElem<number>;
  pwt_disp: XmlElem<boolean>;
  import_type: XmlElem<string>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  schedule: XmlElem<MsWeekScheduleBase>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  get_part_code(): unknown;
  Width(code: string): unknown;
  Height(code: string): unknown;
  DispScrolling(code: unknown): unknown;
  Resizable(code: unknown): unknown;
  get_workflow_id(): unknown;
  get_pwt_info(source: unknown): unknown;
  GetPartUrl(code: unknown, index: unknown): unknown;
  get_info(): unknown;
  role_id: XmlMultiElemObject<number>;
};

type CourseDocument = XmlDocument & {
  TopElem: CourseDocumentTopElem;
  course: CourseDocumentTopElem;
  DocDesc(): unknown;
};
