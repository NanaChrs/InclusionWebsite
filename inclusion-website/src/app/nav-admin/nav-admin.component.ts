import { Component, OnInit } from '@angular/core';
import { Page } from "../Page/Page";
import { PageService } from '../Page/page.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  pages : Page[];

  constructor(private pageService: PageService ) { }

  ngOnInit() {
    this.getPages();
  }

  getPages(): void{
    //Subscribe --> attend que la reque^te soit terminée pour effectuer l'ction dans le callback
    this.pageService.getHeroes().subscribe(heroes => this.pages = heroes);
  }
  

}
