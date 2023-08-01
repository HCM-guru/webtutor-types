type DnProgDiscAppendDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnProgDiscAppendDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  program_discipline_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  educat_form_id: XmlElem<string>;
  qualification_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnProgDiscAppendDocument = XmlDocument & {
  TopElem: DnProgDiscAppendDocumentTopElem;
};
