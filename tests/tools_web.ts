var regExp = tools_web.reg_exp_init();
regExp.Pattern = "pattern";
regExp.Execute("source string");

var collaboratorDocument = tools.open_doc<CollaboratorDocument>(1);
if (collaboratorDocument !== undefined) {
  collaboratorDocument.TopElem.Doc.TopElem.position_name.Value;
  tools_web.check_access(collaboratorDocument, 1);
  collaboratorDocument.TopElem.Doc.TopElem.position_name.Doc.TopElem.tags[0].Doc.TopElem.password.Value;
}
