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
  textContent: String;
  imageContent: String;

  constructor(
    private jsonContentService: JsoncontentService) {

  }

  ngOnInit() {
    this.jsonContentService.getPageByName('menu').subscribe((page) => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
      console.log(this.pageContent);
    });
  }

}
