import { Injectable, OnInit } from "@angular/core";
import { JsoncontentService } from "./admin/content-admin/jsoncontent.service";

@Injectable()
export class ParamGeneraux implements OnInit {
  public mail: String[];
  public tel: String[];
  public rue: String;
  public ville: String;
  public pays: String;
  public insta: String;
  public fb: String;
  public uber: String;
  public tripAd: String;

  constructor(private jsonContentService: JsoncontentService) {}

  ngOnInit() {
    this.jsonContentService.getPageByName("param").subscribe(page => {
      this.mail = page["text-content"][0][0];
      this.tel = page["text-content"][0][1];
      this.rue = page["text-content"][1][0]["contenu"];
      this.ville = page["text-content"][1][1]["contenu"];
      this.pays = page["text-content"][1][2]["contenu"];
      this.insta = page["text-content"][2][0]["contenu"];
      this.fb = page["text-content"][2][1]["contenu"];
      this.uber = page["text-content"][2][2]["contenu"];
      this.tripAd = page["text-content"][2][3]["contenu"];
    });
  }
}
