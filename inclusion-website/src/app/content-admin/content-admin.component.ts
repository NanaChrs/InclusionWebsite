import { Component, OnInit } from '@angular/core';
import { NavAdminComponent } from "../nav-admin/nav-admin.component";

import SampleJson from '../../assets/SampleJson.json';

@Component({
  selector: 'app-content-admin',
  templateUrl: './content-admin.component.html',
  styleUrls: ['./content-admin.component.css']
})
export class ContentAdminComponent implements OnInit {
  private jsonToDisplay;

  constructor() {
    this.jsonToDisplay = SampleJson;
  }

  ngOnInit() {
    this.displayJson();
  }

  displayJson(): void {
    console.log('Reading local json files');
    console.log(SampleJson);
  }
}