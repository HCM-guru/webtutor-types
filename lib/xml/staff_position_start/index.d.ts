type StaffPositionStartDocumentTopElem = XmlTopElem & { Doc: StaffPositionStartDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  staff_position_id: XmlElem<number>;
  position_date: XmlElem<Date>;
  document: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StaffPositionStartDocument = XmlDocument & {
  TopElem: StaffPositionStartDocumentTopElem;
};
