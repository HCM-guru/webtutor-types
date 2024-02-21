var documentId = UniqueID();

var collaboratorDocument = tools.open_doc<CollaboratorDocument>(collaboratorId);

if (collaboratorDocument !== undefined) {
  collaboratorDocument.TopElem.password.Doc.TopElem.password.Parent.password.Value;
  collaboratorDocument.TopElem.Doc.TopElem.password.Value;
  var firstChangeLog = collaboratorDocument.TopElem.change_logs[0];
  firstChangeLog.working_days.Doc.TopElem.password;

  collaboratorDocument.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.Doc;

  collaboratorDocument.TopElem.Doc.TopElem.Doc.TopElem.Doc.TopElem.position_id.Value;

  collaboratorDocument.TopElem.position_id.Value;

  if (collaboratorDocument.TopElem.position_id.OptForeignElem !== undefined) {
    collaboratorDocument.TopElem.position_id.OptForeignElem.id.Value;

    collaboratorDocument.TopElem.position_id.Doc.TopElem.position_id.Doc.TopElem.position_id.OptForeignElem!.position_date.Value;

    var topelem = collaboratorDocument.TopElem;
    topelem.change_logs[0].working_days.Doc.TopElem.Name;
  }

  collaboratorDocument.TopElem.position_id.Value;

  collaboratorDocument.TopElem.fullname();
}

var positionDocument = tools.open_doc<PositionDocument>(documentId);

if (positionDocument !== undefined) {
  positionDocument.TopElem.basic_collaborator_id.sd.fullname;
}

var workflowDoc = tools.open_doc<WorkflowDocument>(documentId);

if (workflowDoc !== undefined) {
  workflowDoc.TopElem.Doc.TopElem.escalations[0].Doc.TopElem.escalations[0].assessments[0].assessment_id.Doc;
  workflowDoc.TopElem.is_std.Doc.TopElem.doc_info.creation.date.Doc.TopElem.doc_info.creation.Doc.TopElem.doc_info.creation.user_id.Value;

  // Проверка LastSavedData
  workflowDoc.LastSavedData.role_id.ByValueExists(1000);

  // Проверка получения значений через Child
  var childXmlElem = workflowDoc.TopElem.Child("has_error");
  childXmlElem.Value;

  var childXmlMultiElem = workflowDoc.TopElem.Child("escalations");
  childXmlMultiElem[0].type.Value;

  // Проверка ссылок на родителя
  childXmlElem.Parent;
  childXmlMultiElem[0].Parent;
  workflowDoc.TopElem.Parent;
  workflowDoc.TopElem.warning_str.Parent;
}
