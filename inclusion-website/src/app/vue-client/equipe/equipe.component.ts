import { Component, OnInit } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"]
})
export class EquipeComponent implements OnInit {
  pageContent: String[];
  textContent: String[];
  imageContent: String[];
  equipe: String[][];
  descriptionGlobale: String;
  descriptions: String[];
  nousRejoindre: String[];
  nom: String;

  constructor(private jsonContentService: JsoncontentService) {}

  ngOnInit() {
    this.jsonContentService.getPageByName("equipe").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.descriptionGlobale = this.textContent[0][0]["contenu"];
      this.imageContent = this.pageContent["photo-content"];
      this.descriptions = this.textContent;
      this.descriptions.splice(0, 1);
      this.nousRejoindre = this.descriptions.splice(
        this.descriptions.length - 1,
        1
      );
    });
  }
}
