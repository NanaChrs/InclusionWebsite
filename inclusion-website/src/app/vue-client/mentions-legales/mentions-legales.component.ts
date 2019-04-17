import { Component, OnInit } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-mentions-legales",
  templateUrl: "./mentions-legales.component.html",
  styleUrls: ["./mentions-legales.component.css"]
})
export class MentionsLegalesComponent implements OnInit {
  private pageContent: String[];
  private textContent: String[];
  private topmention: String[];
  private botmention: String[];

  constructor(private jsonContentService: JsoncontentService) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("mentions").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.topmention = this.textContent.slice(0, 2);
      this.botmention = this.textContent.slice(2, 3);
    });
  }
}
