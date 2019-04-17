import { Injectable } from "@angular/core";
import { JsoncontentService } from "./admin/content-admin/jsoncontent.service";

@Injectable()
export class ParamGeneraux {
  public mail: String;
  public tel: String;
  public rue: String;
  public ville: String;
  public pays: String;
  public insta: String;
  public fb: String;
  public uber: String;
  public tripAd: String;

  constructor(public jsonContentService: JsoncontentService) {
    this.jsonContentService.getPageByName("param").subscribe(page => {
      this.mail = page[0][0]["contenu"];
      this.tel = page[0][1]["contenu"];
      this.rue = page[1][0]["contenu"];
      this.ville = page[1][1]["contenu"];
      this.pays = page[1][2]["contenu"];
      this.insta = page[2][0]["contenu"];
      this.fb = page[2][1]["contenu"];
      this.uber = page[2][2]["contenu"];
      this.tripAd = page[2][3]["contenu"];
    });
  }
}
