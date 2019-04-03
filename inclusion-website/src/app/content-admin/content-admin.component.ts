import { Component, OnInit } from '@angular/core';
import { NavAdminComponent } from "../nav-admin/nav-admin.component";
import { ActivatedRoute } from '@angular/router';
import { JsoncontentService } from "./jsoncontent.service";
@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css']
})
export class ContentAdminComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private jsonContentService: JsoncontentService
    ) {
  }

  ngOnInit() {
    this.getPage();
  }


  getPage(): void{
    this.jsonContentService.getPageById("").subscribe(page => console.log(page));
  }
 
}