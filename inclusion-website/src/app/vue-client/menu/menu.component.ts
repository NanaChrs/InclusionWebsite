import { Component, OnInit } from '@angular/core';
import { JsoncontentService } from '../../admin/content-admin/jsoncontent.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
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

  constructor(
    private jsonContentService: JsoncontentService) {

  }

  ngOnInit() {
    this.jsonContentService.getPageByName('carte').subscribe((page) => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];


      this.entrees = this.pageContent["text-content"][0];
      this.titreEntrees = this.entrees[0];
      this.entrees.splice(0, 1);

      this.plats = this.pageContent["text-content"][1];
      this.titrePlats = this.plats[0];
      this.plats.splice(0, 1);

      this.desserts = this.pageContent["text-content"][2];
      this.titreDesserts = this.desserts[0];
      this.desserts.splice(0, 1);

    });
  }

}
