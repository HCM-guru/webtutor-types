export { };

var anyId = UniqueID();
var workflowDoc = tools.open_doc<WorkflowDocument>(anyId)!;
var positionDoc = tools.open_doc<PositionDocument>(anyId)!;
var collaboratorDoc = tools.open_doc<CollaboratorDocument>(anyId)!;

//Doc
const testWorkflowXmlElemDocType: WorkflowDocument["TopElem"]["is_std"]["Doc"]["TopElem"]["doc_info"]["creation"]["date"]["Doc"]["DocID"] extends number ? true : false = true;
workflowDoc.TopElem.is_std.Doc.TopElem.doc_info.creation.date.Doc.TopElem.doc_info.creation.Doc.TopElem.doc_info.creation.user_id.Value;
positionDoc.TopElem.name.Doc.TopElem.doc_info.creation.date.Doc.TopElem.doc_info.creation.Doc.TopElem.doc_info.creation.user_id.Value;

//Parent
workflowDoc.TopElem.is_std.Parent.doc_info.Parent.doc_info.creation.date.Value;
positionDoc.TopElem.name.Parent.doc_info.Parent.doc_info.creation.date.Value;

//Value с примитив
const testWorkflowXmlElemPrimitiveValue: WorkflowDocument["TopElem"]["is_std"]["Value"] extends boolean ? true : false = true;
const testPositionPrimitiveValue: PositionDocument["TopElem"]["basic_collaborator_id"]["Value"] extends number ? true : false = true;
workflowDoc.TopElem.is_std.Value;
positionDoc.TopElem.doc_info.creation.date.Value;

//Value объект
const testWorkflowXmlElemValuePrimitive: WorkflowDocument["TopElem"]["doc_info"]["Value"] extends undefined ? true : false = true;
const testPositionXmlElemValueObject: PositionDocument["TopElem"]["basic_collaborator_id"]["sd"]["fullname"]["Value"] extends string ? true : false = true;
workflowDoc.TopElem.doc_info.Value;
positionDoc.TopElem.basic_collaborator_id.sd.fullname.Value;


//ForeignElem
const testWorkflowXmlElemForeignElemExists: CollaboratorDocument["TopElem"]["doc_info"]["creation"]["user_id"]["ForeignElem"] extends CollaboratorCatalogDocumentTopElem ? true : false = false;
const testPositionXmlElemForeignElemExists: PositionDocument["TopElem"]["basic_collaborator_id"]["ForeignElem"] extends CollaboratorCatalogDocumentTopElem ? true : false = true;
const testPositionXmlElemForeignElemPrimitiveType: PositionDocument["TopElem"]["basic_collaborator_id"]["ForeignElem"]["fullname"] extends string ? true : false = true;

workflowDoc.TopElem.doc_info.creation.user_id.ForeignElem.fullname.Value
positionDoc.TopElem.basic_collaborator_id.ForeignElem.fullname.Value;

//OptForeignElem
if (workflowDoc.TopElem.doc_info.creation.user_id.OptForeignElem !== undefined) {
  const testWorkflowXmlElemOptForeignElemExists: CollaboratorDocument["TopElem"]["doc_info"]["creation"]["user_id"]["OptForeignElem"] extends CollaboratorCatalogDocumentTopElem ? true : false = false;

  workflowDoc.TopElem.doc_info.creation.user_id.OptForeignElem.fullname.Value
}

if (positionDoc.TopElem.basic_collaborator_id.OptForeignElem !== undefined) {
  const testPositionXmlElemOptForeignElemExists: PositionDocument["TopElem"]["basic_collaborator_id"]["OptForeignElem"] extends CollaboratorCatalogDocumentTopElem | undefined ? true : false = true;
  const testPositionXmlElemOptForeignElemPrimitiveType: PositionDocument["TopElem"]["basic_collaborator_id"]["OptForeignElem"]["fullname"] extends string ? true : false = true;

  positionDoc.TopElem.basic_collaborator_id.OptForeignElem.fullname.Value;
}

//Child
var childXmlElem = workflowDoc.TopElem.Child("has_error");
childXmlElem.Value;

//OptChild
var optChildXmlElem = workflowDoc.TopElem.OptChild("run_action");

if (optChildXmlElem != undefined) {
  optChildXmlElem.Value;
}

//NextSibling
//TODO: не ясно как это проверять в TS. Он как-то должен понимать последовательность полей в схеме
const testWorkflowXmlElemNextSiblingType: WorkflowDocument["TopElem"]["code"]["NextSibling"] extends WorkflowDocument["TopElem"]["name"] ? true : false = true;
workflowDoc.TopElem.code.NextSibling.Value == workflowDoc.TopElem.name.Value;
