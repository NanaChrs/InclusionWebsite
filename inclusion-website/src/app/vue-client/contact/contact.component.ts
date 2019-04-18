import { Component, OnInit } from "@angular/core";
import { Mail } from "../../_models";
import { HttpClientService } from "../../service/httpclientservice.service";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  cookieinverse: boolean = this.cookieService.check("inverse");

  private name: string;
  private sender: string;
  private object: string;
  private message: string;
  private mail: Mail = new Mail();
  private pageContent: String[];
  private textContent: String;
  private imageContent: String;
  private mailtext: String;
  private tel: String;
  private adress: String;

  constructor(
    private http: HttpClientService,
    private jsonContentService: JsoncontentService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("contact").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
    });
    this.jsonContentService.getPageByName("param").subscribe(page => {
      this.tel = page["text-content"][0][0]["contenu"];
      this.mailtext = page["text-content"][0][1]["contenu"];
      this.adress = page["text-content"][1][0]["contenu"] + " " + page["text-content"][1][1]["contenu"];
      console.log(this.mailtext);
    });
  }

  ngAfterViewInit() {
    // lancement de la fonction permettant de verifier les modifications "accessibilité"
    this.checkaccess();
  }

  sendMail() {
    this.mail.name = this.name;
    this.mail.sender = this.sender;
    this.mail.object = this.object;
    this.mail.message = this.message;
    this.http.postMail(this.mail).subscribe(e => {
      if (e[0]) {
        return true;
      }
      return false;
    });
  }

  checkaccess = function () {
    this.cookieinverse = this.cookieService.check("inverse");
    if (this.cookieinverse) {
      this.map = document.getElementsByClassName("googlemap");
      for (var i = 0; i < this.map.length; i++) {
        this.map[i].style.filter = "invert(90%)";
      }
    }
    setTimeout(() => {
      this.checkaccess();
    }, 100);
  };
}
