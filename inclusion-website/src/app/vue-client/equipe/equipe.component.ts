import { Component, OnInit } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"]
})
export class EquipeComponent implements OnInit {
  //   alt : "photo d'identité de ";
  //   public content = [
  //     {
  //     nom: "Jules",
  //     fonction :"Gitkraken destructeur",
  //   },
  // {
  //   nom:"Clément",
  //   fonction:"Json pro user"
  // },
  // {
  //   nom:"Mathilde",
  //   fonction:"La meuf fatiguée"
  // },
  // {
  //   nom:"Thibaut",
  //   fonction:"Le mec du css"
  // },
  // {
  //   nom:"Maxime",
  //   fonction:"Mec cool"
  // },
  // {
  //   nom:"Lisa",
  //   fonction:"Meuf cool"
  // }]

  pageContent: String[];
  textContent: String[];
  imageContent: String[];
  equipe: String[][];
  descriptionGlobale: String;
  descriptions: String[];
  nom: String;

  constructor(private jsonContentService: JsoncontentService) { }

  ngOnInit() {
    this.jsonContentService.getPageByName('equipe').subscribe((page) => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.descriptionGlobale = this.textContent[0][0]['contenu'];
      this.imageContent = this.pageContent["photo-content"];
      this.descriptions = this.textContent;
      this.descriptions.splice(0, 1);
      console.log(this.descriptions);
    });
  }
}

