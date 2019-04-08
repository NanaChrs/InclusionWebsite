import { Component, OnChanges, SimpleChanges, Input, OnInit } from '@angular/core';
import { NavAdminComponent } from "../nav-admin/nav-admin.component";
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { JsoncontentService } from "./jsoncontent.service";
import { filter } from 'rxjs/operators';
import { TextContentComponent } from '../text-content/text-content.component';
import { CommonModule } from "@angular/common";
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css']
})
export class ContentAdminComponent implements OnInit {
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
      if (e instanceof NavigationEnd && e.url != "/admin/param") {
        this.getPage();
      }

    });
  }

  ngOnInit() {

  }


  getPage(): void {
    this.jsonContentService.getPageByName(this.route.snapshot.paramMap.get('url'))
      .subscribe((page) => {
        this.url = this.route.snapshot.paramMap.get('url');
        this.pageContent = page;
        this.textContent = this.pageContent["text-content"];
        this.imageContent = this.pageContent["photo-content"];
        console.log(this.textContent);
      });
  }

  onClickSuppr(url: string) {
    var i = this.getIdOfPhoto(url);
    const link = this.url + '/' + i;
    this.jsonContentService.deletePageById(link).subscribe(() => console.log("Photo deleted"));
  }

  getIdOfPhoto(url: String): number {
    for (var i = 0; i < this.imageContent.length; i++) {
      if (this.imageContent != null) {
        if (this.imageContent[i]["source"] == url) {
          return i;
        }
      }
    }
  }

}