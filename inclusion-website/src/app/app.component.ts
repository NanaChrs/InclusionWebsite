import { Component, OnInit } from "@angular/core";
import { JsoncontentService } from "./admin/content-admin/jsoncontent.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "inclusion";
  public paramGeneraux: String[];

  constructor(private jsonContentService: JsoncontentService) {}

  ngOnInit(): void {
    this.jsonContentService.getPageByName("param").subscribe(page => {
      this.paramGeneraux = page["param"];
    });
  }
}
