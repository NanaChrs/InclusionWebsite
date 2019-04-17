import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from "@angular/router";
import { JsoncontentService } from "./jsoncontent.service";
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: "app-content-admin",
  templateUrl: "./content-admin.component.html",
  styleUrls: ["./content-admin.component.css"]
})
export class ContentAdminComponent implements OnInit {
  private pageContent: String[];
  private url: String;
  private textContent: String[][];
  private imageContent: String[];
  private imageBandeau: String[];
  public uploader: FileUploader;
  public uploaderbandeau: FileUploader;
  private newContent;
  private newPerson;
  // private uploadURL = "https://dev.inclusion-restaurant.fr/api/pages/";
  private uploadURL: string = "http://localhost:8000/api/pages/";
  uploadbandeauURL = "";

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

  }

  getPage(): void {
    this.newContent = [];
    this.newPerson = [];
    this.jsonContentService
      .getPageByName(this.route.snapshot.paramMap.get("url"))
      .subscribe(page => {
        this.url = this.route.snapshot.paramMap.get("url");
        this.pageContent = page;
        this.textContent = this.pageContent["text-content"];
        this.imageContent = this.pageContent["photo-content"];
        this.imageBandeau = this.pageContent["bandeau"];
        if (this.url == "equipe") {
          for (var i = 0; i < this.textContent.length; i++) {
            this.newContent.push({
              emplacement: "",
              contenu: ""
            });
          }
          this.newPerson.push({
            emplacement: "Nom",
            contenu: ""
          });
          this.newPerson.push({
            emplacement: "Description",
            contenu: ""
          });
          this.newPerson.push({
            photo: "Numéro de la photo",
            source: ""
          });
        } else if (this.url == "carte") {
          for (var i = 0; i < this.textContent.length; i++) {
            this.newContent.push({
              emplacement: "",
              contenu: "",
              prix: ""
            });
          }
        } else {
          for (var i = 0; i < this.textContent.length; i++) {
            this.newContent.push({
              emplacement: "",
              contenu: ""
            });
          }
        }
      });
    console.log(this.route.snapshot.paramMap.get("url"));
    this.uploadURL = "http://localhost:8000/api/pages/" + this.route.snapshot.paramMap.get("url") + "/upload";
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

    this.uploadbandeauURL = "http://localhost:8000/api/pages/" +
      this.route.snapshot.paramMap.get("url") + "/uploadbandeau";
    this.uploaderbandeau = new FileUploader({
      url: this.uploadbandeauURL,
      itemAlias: "bandeau"
    });
    this.uploaderbandeau.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploaderbandeau.onCompleteItem = (
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

  onClickSupprBandeau(url: string) {
    var i = this.getIdOfPhotoBandeau(url);
    const link = this.url + "/" + i;
    this.jsonContentService.deletePageByIdBandeau(link).subscribe(() => {
      console.log("Photo deleted");
      this.getPage();
    });
  }

  getIdOfPhotoBandeau(url: String): number {
    console.log("Le bon url ========= " + url);
    for (var i = 0; i < this.imageBandeau.length; i++) {
      if (this.imageBandeau != null) {
        if (this.imageBandeau[i]["source"] == url) {
          console.log("Le bon indice ========= " + url);
          return i;
        }
      }
    }
  }

  upload(): void {
    this.uploader.uploadAll();
  }

  uploadBandeau(): void {
    this.uploaderbandeau.uploadAll();
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

  addNewParagraph(i) {
    this.textContent[i].push(this.newContent[i]);
    this.save();
  }

  addNewPerson() {
    this.textContent.splice(-1, 0, this.newPerson);
    this.save();
    console.log(this.textContent);
  }

  onClickSupprCategory(i) {
    this.textContent.splice(i, 1);
    this.save();
  }

  onClickSupprItem(i, j) {
    this.textContent[i].splice(j, 1);
    console.log(this.textContent[i].length);
    this.save();
  }
}
