type ResponseDocumentTopElem = XmlTopElem & { Doc: ResponseDocument } &
PersonFillingBase &
AdminAccessBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  response_type_id: XmlElem<number>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  is_public: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  basic_score: XmlElem<number>;
  basic_desc: XmlElem<string>;
  calc_basic_values(): unknown;
};

type ResponseDocument = XmlDocument & {
  TopElem: ResponseDocumentTopElem;
};
