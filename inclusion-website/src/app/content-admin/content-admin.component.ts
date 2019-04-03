import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NavAdminComponent } from "../nav-admin/nav-admin.component";
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { JsoncontentService } from "./jsoncontent.service";
import { Location } from "@angular/common"
import { filter } from 'rxjs/operators';
import { TextContentComponent } from '../text-content/text-content.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css']
})
export class ContentAdminComponent {
  pageContent: String;
  url: String;
  textContent: String[];
  imageContent: String[];


  constructor(
    private route: ActivatedRoute,
    private jsonContentService: JsoncontentService,
    public router: Router
    ) {
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd && e.url!="/admin/param"){
          this.getPage();
        }
        
      });
  }


  getPage(): void{
    this.jsonContentService.getPageByName(this.route.snapshot.paramMap.get('url'))
    .subscribe((page) => {
      this.pageContent=page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
    
    });
  }
 
}