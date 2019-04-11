import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { JsoncontentService } from "./jsoncontent.service";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-content-admin",
  templateUrl: "./content-admin.component.html",
  styleUrls: ["./content-admin.component.css"]
})
export class ContentAdminComponent implements OnInit {
  pageContent: String[];
  url: String;
  textContent: String[];
  imageContent: String[];
  public uploader: FileUploader;
  // private uploadURL = "https://dev.inclusion-restaurant.fr/api/pages/";
  private uploadURL: string = "http://localhost:8000/api/pages/";

  constructor(
    private route: ActivatedRoute,
    private jsonContentService: JsoncontentService,
    public router: Router
  ) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && e.url != "/admin/param") {
        this.getPage();
      }
    });
  }

  ngOnInit() {
    this.uploadURL += this.route.snapshot.paramMap.get("url") + "/upload";
    this.uploader = new FileUploader({
      url: this.uploadURL,
      itemAlias: "photo"
    });
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("FileUpload:uploaded:", item, status, response);
      alert("File uploaded successfully");
      this.getPage();
    };
  }

  getPage(): void {
    this.jsonContentService
      .getPageByName(this.route.snapshot.paramMap.get("url"))
      .subscribe(page => {
        this.url = this.route.snapshot.paramMap.get("url");
        this.pageContent = page;
        this.textContent = this.pageContent["text-content"];
        this.imageContent = this.pageContent["photo-content"];
        console.log(this.textContent.length);
      });
  }

  onClickSuppr(url: string) {
    var i = this.getIdOfPhoto(url);
    const link = this.url + "/" + i;
    this.jsonContentService.deletePageById(link).subscribe(() => {
      console.log("Photo deleted");
      this.getPage();
    });
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

  upload(): void {
    this.uploader.uploadAll();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  save() {
    this.jsonContentService
      .postPageByName(this.route.snapshot.paramMap.get("url"), this.pageContent)
      .subscribe(() => {
        this.getPage();
      });
  }
}
