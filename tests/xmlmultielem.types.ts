export { };

var anyId = UniqueID();
var workflowDoc = tools.open_doc<WorkflowDocument>(anyId)!;
var positionDoc = tools.open_doc<PositionDocument>(anyId)!;
var collaboratorDoc = tools.open_doc<CollaboratorDocument>(anyId)!;

//Doc
const testWorkflowXmlMultiElemObjectDoc: WorkflowDocument["TopElem"]["role_id"]["Instances"][0].Value extends number ? true : false = true;
const testWorkflowXmlMultiElemDocType: WorkflowDocument["TopElem"]["Doc"]["TopElem"]["escalations"][0]["Doc"]["TopElem"]["escalations"][0]["assessments"]["Doc"]["DocID"] extends number ? true : false = true;
workflowDoc.TopElem.Doc.TopElem.escalations[0].Doc.TopElem.escalations[0].assessments[0].assessment_id.Doc.DocID;

//Parent
workflowDoc.TopElem.Doc.TopElem.escalations[0].Parent[0].code.Value;
collaboratorDoc.TopElem.Doc.TopElem.change_logs[0].Parent[0].id.Value;




//TODO:Value примитив

//TODO:Value объект
