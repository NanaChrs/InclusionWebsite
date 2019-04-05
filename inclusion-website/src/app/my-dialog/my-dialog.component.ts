import { Component, OnInit, Inject, SimpleChanges, Input, Injectable } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})

@Injectable()
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef:MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: String, private cookieService: CookieService) { }

  message = "hello world";

  private messageSource = new BehaviorSubject<string>("defaultmessage");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message : string) {
    this.messageSource.next(message);
  }

  ngOnInit() {
  }
  
}
