interface QtiAssessmentDocumentAssessmentSectionSelectionOrderingPoint {
  point_num: XmlElem<number>;
  item_num: XmlElem<number>;
  item_sum_num(): unknown;
}

interface QtiAssessmentDocumentAssessmentSectionSelectionOrdering {
  order: XmlElem<string, typeof common.order_types>;
  select_id: XmlElem<string>;
  select_num: XmlElem<number>;
  points: XmlMultiElem<QtiAssessmentDocumentAssessmentSectionSelectionOrderingPoint>;
}

interface QtiAssessmentDocumentAssessmentSectionItemScale {
  scale_id: XmlElem<string>;
}

interface QtiAssessmentDocumentAssessmentSectionItem {
  id: XmlElem<number>;
  title: XmlElem<string>;
  scales: XmlMultiElem<QtiAssessmentDocumentAssessmentSectionItemScale>;
}

interface QtiAssessmentDocumentAssessmentSectionRole {
  id: XmlElem<number>;
}

interface QtiAssessmentDocumentAssessmentSection {
  id: XmlElem<number>;
  code: XmlElem<string>;
  title: XmlElem<string>;
  duration: XmlElem<number>;
  passing_score: XmlElem<number>;
  display_correct_answer: XmlElem<boolean>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  feedback_wrong: XmlElem<string>;
  feedback_correct: XmlElem<string>;
  rubric: XmlElem<RubricBase>;
  objectives: XmlElem<ObjectivesBase>;
  selection_ordering: XmlElem<QtiAssessmentDocumentAssessmentSectionSelectionOrdering>;
  items: XmlMultiElem<QtiAssessmentDocumentAssessmentSectionItem>;
  comment: XmlElem<string>;
  roles: XmlMultiElem<QtiAssessmentDocumentAssessmentSectionRole>;
}

interface QtiAssessmentDocumentAssessmentPlayer {
  type: XmlElem<string, typeof common.player_types>;
  fit_screen: XmlElem<boolean>;
  position: XmlElem<string, typeof common.player_positions>;
  language: XmlElem<string, typeof common.player_languages>;
  send_type: XmlElem<string, typeof common.player_send_types>;
  send_timer: XmlElem<number>;
  display_type: XmlElem<string, typeof common.player_display_types>;
  rubric_display_type: XmlElem<string, typeof common.player_rubric_display_types>;
  display_map: XmlElem<boolean>;
  navigate_map: XmlElem<boolean>;
  strict_navigation: XmlElem<boolean>;
  navigate_progress: XmlElem<boolean>;
  strict_timing: XmlElem<boolean>;
  accept_next: XmlElem<boolean>;
  lock_result: XmlElem<boolean>;
  connection_break: XmlElem<boolean>;
  url_params: XmlElem<string>;
  display_res_score: XmlElem<boolean>;
}

interface QtiAssessmentDocumentAssessmentScale {
  id: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
}

interface QtiAssessmentDocumentAssessment extends ProctoringBase, CatalogListBase, CourseExpertsBase, FileListBase, CustomElemsBase, KnowledgePartsBase, KnowledgePartsBaseOld, GameBonusBase, EstimationLevelsBase, ClLocalizationsBase, AdminAccessBase {
  id: XmlElem<number>;
  code: XmlElem<string>;
  title: XmlElem<string>;
  name(): unknown;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.course_test_states>;
  testing_system_id: XmlElem<number, TestingSystemCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  attempts_num: XmlElem<number>;
  passing_score: XmlElem<number>;
  use_scale_calculation: XmlElem<boolean>;
  test_finish_redirect: XmlElem<string>;
  test_finish_redirect_url: XmlElem<string>;
  activation_code: XmlElem<string>;
  not_display_feedback: XmlElem<boolean>;
  not_disp_last_attempt: XmlElem<boolean>;
  not_display_unfinished_score: XmlElem<boolean>;
  feedback_wrong: XmlElem<string>;
  feedback_correct: XmlElem<string>;
  feedback_passed: XmlElem<string>;
  feedback_failed: XmlElem<string>;
  use_launch_code: XmlElem<boolean>;
  not_sent_correct_answer: XmlElem<boolean>;
  rubric: XmlElem<RubricBase>;
  objectives: XmlElem<ObjectivesBase>;
  sections: XmlMultiElem<QtiAssessmentDocumentAssessmentSection>;
  certificate_type_id: XmlElem<number, CertificateTypeCatalogDocumentTopElem>;
  display_result: XmlElem<boolean>;
  is_adaptive_test: XmlElem<boolean>;
  display_correct_answer: XmlElem<boolean>;
  display_result_report: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  display_correct_answer_in_report: XmlElem<boolean>;
  display_answers_in_report: XmlElem<boolean>;
  proctoring_system_id: XmlElem<number, ProctoringSystemCatalogDocumentTopElem>;
  external_type: XmlElem<string, typeof common.assessment_external_types>;
  not_use_default_notification: XmlElem<boolean>;
  view_templates: XmlElem<MsViewTemplatesBase>;
  comment: XmlElem<string>;
  schedule: XmlElem<MsWeekScheduleBase>;
  access: XmlElem<AccessDocBase>;
  publish_url: XmlElem<string>;
  publish_date: XmlElem<Date>;
  template_url: XmlElem<string>;
  win_width: XmlElem<string>;
  win_height: XmlElem<string>;
  player: XmlElem<QtiAssessmentDocumentAssessmentPlayer>;
  scales: XmlMultiElem<QtiAssessmentDocumentAssessmentScale>;
  before_finish_eval: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  get_info(): unknown;
  update_structure(): unknown;
  role_id: XmlMultiElemObject<number>;
}

type QtiAssessmentDocumentTopElem = XmlTopElem & {
  Doc: QtiAssessmentDocument;

};

type QtiAssessmentDocument = XmlDocument & {
  TopElem: QtiAssessmentDocumentTopElem;
  qti_assessment: QtiAssessmentDocumentTopElem;
  assessment: XmlElem<QtiAssessmentDocumentAssessment>;
  OnCreate(): unknown;
  DocDesc(): unknown;
};
