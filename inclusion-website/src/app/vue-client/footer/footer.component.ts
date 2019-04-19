import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  pageContent: String[];
  textContent: String[];
  semaine = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];
  horaire: String;
  private param: any;
  private mail: String;
  private tel: String;
  private adresse: String[] = [];
  private adresse_maps: String;
  private src_maps: String;
  private insta: String;
  private fb: String[];
  private uber: String;
  private tripAd: String;

  constructor(private jsonContentService: JsoncontentService) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("footer").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.horaire = this.textContent[0].slice(1, 8);
    });
    this.jsonContentService.getPageByName("param").subscribe(page => {
      this.param = page;
      this.mail = page["text-content"][0][1]["contenu"];
      this.tel = page["text-content"][0][0]["contenu"];
      this.adresse.push(page["text-content"][1][0]["contenu"]);
      this.adresse.push(page["text-content"][1][1]["contenu"]);
      this.adresse.push(page["text-content"][1][2]["contenu"]);
      this.adresse_maps = encodeURIComponent(this.adresse[0] + ' ' + this.adresse[1]);
      this.src_maps = "https://maps.google.com/maps?q=" + this.adresse_maps + "&t=&z=17&ie=UTF8&iwloc=&output=embed";
      this.insta = page["text-content"][2][0]["contenu"];
      this.fb = page["text-content"][2][1]["contenu"];
      this.uber = page["text-content"][2][2]["contenu"];
      this.tripAd = page["text-content"][2][3]["contenu"];
    });
  }

  ngAfterViewInit() { }
}
