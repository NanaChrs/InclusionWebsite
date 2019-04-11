import { Component, OnInit } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  // Récupération Json
  pageContent: String;
  textContent: String[];
  imageContent: String[];

  titreEntrees: String;
  entrees: String[];
  titrePlats: String;
  plats: String[];
  titreDesserts: String;
  desserts: String[];

  constructor(private jsonContentService: JsoncontentService) {}

  ngOnInit() {
    this.jsonContentService.getPageByName("carte").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
    });
  }
}
