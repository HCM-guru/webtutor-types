type ProfessionalAreaDocumentTopElem = XmlTopElem & { Doc: ProfessionalAreaDocument } &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  parent_id: XmlElem<number>;
  professional_area_type_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type ProfessionalAreaDocument = XmlDocument & {
  TopElem: ProfessionalAreaDocumentTopElem;
};
