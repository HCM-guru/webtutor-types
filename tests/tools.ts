var collaboratorId = UniqueID();
var collaborator = tools.open_doc<CollaboratorDocument>(collaboratorId);
var collaborator2 = tools.new_doc_by_name<CollaboratorDocument>("collaborator");

if (collaborator !== undefined) {
  if (collaborator.TopElem.position_id.OptForeignElem !== undefined) {
    var foreignName = tools.get_foreign_field(collaborator.TopElem.position_id.OptForeignElem, "basic_rate", "");
  }

  collaborator.TopElem.Doc.TopElem.position_date.Value;
}

tools.object_filling(null, collaborator2.TopElem, collaboratorId, null);

tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId);
tools.common_filling("collaborator", collaborator2.TopElem, collaboratorId, collaborator?.TopElem, true);

var authorizationLibrary = tools.get_object_assembly("Authorization");
authorizationLibrary.GetValidateADALWithTokenAttributes("ad_server_tenant", "ad_clientid", "resourceId", "token", "properties", "stsDiscoveryEndPoint");
var crypto = tools.get_object_assembly("Crypto");
crypto.GetError();

var cryptoPro = tools.get_object_assembly("CryptoPro");
cryptoPro.CloseStore();

