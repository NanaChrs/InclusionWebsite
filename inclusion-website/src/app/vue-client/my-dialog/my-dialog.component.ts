import { Component, OnInit, Inject, SimpleChanges, Input, Injectable } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})

@Injectable()
export class MyDialogComponent implements OnInit {

  constructor(public thisDialogRef:MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: String, private cookieService: CookieService) { }
  
  animationOFF: boolean = this.cookieService.check('animationOFF');

  ngOnInit() {
    var bouttonOff = document.getElementById('animationsOff');
    var bouttonOn = document.getElementById('animationsOn');
    if(this.animationOFF)
    {
      bouttonOff.style.backgroundColor = 'whitesmoke';
      bouttonOn.style.backgroundColor = '';
    }
    else{
    bouttonOn.style.backgroundColor = 'whitesmoke';
    bouttonOff.style.backgroundColor = '';
    }
  }

  onCloseCancel(){
    this.thisDialogRef.close();
  }


   //Boutons activation animations
   onAnnim(){
    var bouttonOff = document.getElementById('animationsOff');
    var bouttonOn = document.getElementById('animationsOn');
    this.cookieService.delete('animationOFF');
    bouttonOn.style.backgroundColor = 'white'
    bouttonOff.style.backgroundColor = '';
  }

  offAnnim(){
    var bouttonOff = document.getElementById('animationsOff');
    var bouttonOn = document.getElementById('animationsOn');
    this.cookieService.set('animationOFF','');
    bouttonOn.style.backgroundColor = '';
    bouttonOff.style.backgroundColor = 'white'
  }
}