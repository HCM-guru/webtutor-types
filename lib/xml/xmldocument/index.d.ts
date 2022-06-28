interface IWTXmlDocument<T> {
  DocID: number;
  TopElem: IWTXmlDocumentTopElem<T>;
  Save(): undefined;
  BindToDb(databaseName?: string): undefined;
  WriteDocInfo: boolean;
}

type IWTXmlDocumentTopElem<T> = T & {
  Name: string;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  Doc: IWTXmlDocument<T>;
  role_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<IWTDocInfo>;
  OptChild(childName: string): any;
  AssignElem(TopElem: IWTXmlDocumentTopElem<any>): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  access?: XmlElem<IWTAccessDocBase>;
}