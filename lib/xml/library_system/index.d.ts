type LibrarySystemDocumentTopElem = XmlTopElem & { Doc: LibrarySystemDocument } & 
AdminAccessBase &
WebVariablesBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting(): unknown;
  get_settings(): unknown;
};

type LibrarySystemDocument = XmlDocument & {
  TopElem: LibrarySystemDocumentTopElem;
};
