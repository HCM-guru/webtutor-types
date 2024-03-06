interface ResourceDocumentLink {
  object_id: XmlElem<number>;
  object_catalog: XmlElem<string>;
  object_name: XmlElem<string>;
  date_modify: XmlElem<Date>;
}

interface ResourceDocumentPresentationSlideShapePoint {
  class: XmlElem<unknown>;
  x: XmlElem<string>;
  y: XmlElem<string>;
}

interface ResourceDocumentPresentationSlideShape {
  class: XmlElem<unknown>;
  shapeClassName: XmlElem<string>;
  id: XmlElem<string>;
  roomID: XmlElem<string>;
  presentationId: XmlElem<string>;
  pageID: XmlElem<string>;
  ownerId: XmlElem<string>;
  ownerName: XmlElem<string>;
  type: XmlElem<string>;
  x: XmlElem<string>;
  y: XmlElem<string>;
  width: XmlElem<string>;
  height: XmlElem<string>;
  lineWidth: XmlElem<number>;
  fillStartColor: XmlElem<number>;
  fillEndColor: XmlElem<number>;
  useGradient: XmlElem<boolean>;
  lineColor: XmlElem<number>;
  opacity: XmlElem<string>;
  rotation: XmlElem<string>;
  text: XmlElem<string>;
  source: XmlElem<string>;
  fileID: XmlElem<string>;
  resourceID: XmlElem<string>;
  quality: XmlElem<string>;
  position: XmlElem<number>;
  playing: XmlElem<boolean>;
  lastPlayingTime: XmlElem<number>;
  points: XmlMultiElem<ResourceDocumentPresentationSlideShapePoint>;
}

interface ResourceDocumentPresentationSlide {
  class: XmlElem<unknown>;
  id: XmlElem<number>;
  name: XmlElem<string>;
  number: XmlElem<number>;
  shapes: XmlMultiElem<ResourceDocumentPresentationSlideShape>;
}

interface ResourceDocumentPresentation {
  class: XmlElem<string>;
  id: XmlElem<number>;
  name: XmlElem<string>;
  file_id: XmlElem<number>;
  current_slide_id: XmlElem<number>;
  slides: XmlMultiElem<ResourceDocumentPresentationSlide>;
}

interface ResourceDocumentFileUrl {
  id: XmlElem<string>;
  code: XmlElem<string>;
  url: XmlElem<string>;
}

interface ResourceDocumentLastData {
  file_name: XmlElem<string>;
  size: XmlElem<number>;
}

type ResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase & {
  Doc: ResourceDocument;
  type: XmlElem<string, typeof common.resource_types>;
  status: XmlElem<string, typeof common.course_test_states>;
  file_name: XmlElem<string>;
  allow_download: XmlElem<boolean>;
  allow_unauthorized_download: XmlElem<boolean>;
  allow_search: XmlElem<boolean>;
  data: XmlElem<Binary>;
  file_url: XmlElem<string>;
  size: XmlElem<number>;
  use_count: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  file_source: XmlElem<number, FileSourceCatalogDocumentTopElem>;
  resource_type_id: XmlElem<number, ResourceTypeCatalogDocumentTopElem>;
  file_path: XmlElem<string>;
  checksum: XmlElem<string>;
  links: XmlMultiElem<ResourceDocumentLink>;
  presentation: XmlElem<ResourceDocumentPresentation>;
  library_player_id: XmlElem<number, LibraryPlayerCatalogDocumentTopElem>;
  file_urls: XmlMultiElem<ResourceDocumentFileUrl>;
  last_data: XmlElem<ResourceDocumentLastData>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  save_data(): unknown;
  get_temp_data(_url: unknown): unknown;
  get_data(_url: unknown): unknown;
  get_data_add(sIDParam: string, sUrlParam: string): unknown;
  download(oRequest: unknown, oResponse: unknown): unknown;
  download_add(sIDParam: string, oRequest: unknown, oResponse: unknown): unknown;
  check_resource_double(sFileName: string, iSize: number): unknown;
  put_data(_url: unknown, _source: unknown, _filename: unknown): unknown;
  put_data_add(sUrlParam: string, sCodeParam: string): unknown;
  del_data_add(sIDParam: string): unknown;
  put_str(sDataPARAM: string, _filename: unknown, _source: unknown): unknown;
  add_counter(_source: unknown): unknown;
  del_counter(_source: unknown, _source_id: number): unknown;
  obtain_link(_source: unknown): unknown;
  guess_type(sFileUrlParam: string): unknown;
  role_id: XmlMultiElemObject<number>;
};

type ResourceDocument = XmlDocument & {
  TopElem: ResourceDocumentTopElem;
  resource: ResourceDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
