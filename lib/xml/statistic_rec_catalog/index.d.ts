type StatisticRecCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_enabled: XmlElem<boolean>;
  auto_calc: XmlElem<boolean>;
  last_calculate_date: XmlElem<Date>;
  calc_period: XmlElem<number>;
  context_calc: XmlElem<boolean>;
  ready_to_analytics: XmlElem<boolean>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  period_type: XmlMultiElemObject<string>;
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  depth: XmlElem<number>;
  norm_from: XmlElem<number>;
  norm_to: XmlElem<number>;
  notification_type_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  catalog: XmlMultiElemObject<string, typeof common.exchange_object_types>;
  access_block_type: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
