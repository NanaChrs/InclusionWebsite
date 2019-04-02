import { Component, OnInit } from '@angular/core';
import { Page } from "../Page/Page";
import { PageService } from '../Page/page.service';
import { TestService } from "../test.service";


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
    // private testService: TestService
  ) { }

  ngOnInit() {
    this.getPages();
    //this.geturl();
  }

  getPages(): void {
    //Subscribe --> attend que la requête soit terminée pour effectuer l'ction dans le callback
    this.pageService.getPages().subscribe(pages => this.pages = pages);
  }

  // geturl() {
  //   this.testService.getAll().subscribe((pages) => {
  //     this.log = pages;
  //     console.log(pages)
  //   });
  // }

}
