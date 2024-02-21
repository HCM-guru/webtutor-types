type CodeLibraryDocumentTopElem = XmlElem<{
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
} & ObjectCodeNameBase & ExecCodeBase & WebVariablesBase>;

type CodeLibraryDocument = XmlDocument<CodeLibraryDocumentTopElem>;
