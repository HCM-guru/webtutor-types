export { };
var anyId = UniqueID();
var workflowDoc = tools.open_doc<WorkflowDocument>(anyId);
var positionDoc = tools.open_doc<PositionDocument>(anyId)!;

if (workflowDoc !== undefined) {
  //LastSavedData
  workflowDoc.LastSavedData.run_action();
  workflowDoc.LastSavedData.is_std.Doc.LastSavedData.is_std.Value;

  //TopElem
  workflowDoc.TopElem.AttrNames;
  positionDoc.TopElem.AttrNames;

  var testWorkflowXmlDocumentTopElem: WorkflowDocument["TopElem"] extends WorkflowDocumentTopElem ? true : false = true;
  var testPositionXmlDocumentTopElem: PositionDocument["TopElem"] extends PositionDocumentTopElem ? true : false = true;
}
