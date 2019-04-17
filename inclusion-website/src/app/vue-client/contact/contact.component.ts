import { Component, OnInit } from "@angular/core";
import { Mail } from "../../_models";
import { HttpClientService } from "../../service/httpclientservice.service";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  private name: string;
  private sender: string;
  private object: string;
  private message: string;
  private mail: Mail = new Mail();
  private pageContent: String[];
  private textContent: String;
  private imageContent: String;

  constructor(
    private http: HttpClientService,
    private jsonContentService: JsoncontentService
  ) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("contact").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
    });
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
}
