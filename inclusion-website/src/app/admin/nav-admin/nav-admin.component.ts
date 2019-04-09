import { Component, OnInit } from '@angular/core';
import { Page } from "../Page/Page";
import { PageService } from '../Page/page.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../service/authentification.service';


@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  pages: Page[];
  log: String[];

  constructor(
    private pageService: PageService,
    private router: Router,
    private authentification : AuthentificationService,
  ) { }

  ngOnInit() {
    this.getPages();
  }

  ngAfterViewInit() {
    this.colorSelectedPage();
  }

  getPages(): void {
    //Subscribe --> attend que la requête soit terminée pour effectuer l'ction dans le callback
    this.pageService.getPages().subscribe(pages => this.pages = pages);
  }

  colorSelectedPage(): void {
    //Reset element to general class
    var elements = document.getElementsByClassName("div-element-menu-selected");
    if (elements.length > 0) {
      elements[0].className = "div-element-menu";
    }

    //Set class "selected" to the corresponding element
    var url = this.router.url.split('/');
    let doc = document.getElementById(url[url.length - 1]);
    if (doc != null) {
      doc.className = "div-element-menu-selected";
    }
  }

}
