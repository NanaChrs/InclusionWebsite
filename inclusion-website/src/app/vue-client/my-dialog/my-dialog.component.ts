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
  animationOFF: boolean = this.cookieService.check('animationOFF');
  checkTaillePolice: boolean = this.cookieService.check('fontSize');
  bouttonOffAnim;
  bouttonOnAnim;


  taillePolice = 1;
  text;
  pasModificationTaillePolice = 0.2;


  constructor(public thisDialogRef:MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: String, private cookieService: CookieService) { }


  ngOnInit() {
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    if(this.animationOFF)
    {
      this.bouttonOffAnim.style.backgroundColor = 'whitesmoke';
      this.bouttonOnAnim.style.backgroundColor = '';
    }
    else{
      this.bouttonOnAnim.style.backgroundColor = 'whitesmoke';
      this.bouttonOffAnim.style.backgroundColor = '';
    }

    if(!this.checkTaillePolice){
      this.taillePolice=1;
    }
    else{
      this.taillePolice=+this.cookieService.get("fontSize")
    }
    this.text = document.getElementsByClassName("text")
  }

  ngAfterViewInit() {
    this.text = document.getElementsByClassName("text")
  }

  onCloseCancel(){
    this.thisDialogRef.close();
  }


   //Boutons activation animations
   onAnnim(){
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    this.cookieService.delete('animationOFF');
    this.bouttonOnAnim.style.backgroundColor = 'white'
    this.bouttonOffAnim.style.backgroundColor = '';
  }

  offAnnim(){
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    this.cookieService.set('animationOFF','');
    this.bouttonOnAnim.style.backgroundColor = '';
    this.bouttonOffAnim.style.backgroundColor = 'white'
  }


  //Boutons augmentation/diminution taille text
  onDownFontsize(){
    if(this.taillePolice>1){
      this.taillePolice-=this.pasModificationTaillePolice;
    }
    var stock = (this.taillePolice).toFixed(1);
    for (var y =0; y<this.text.length;y++){
      this.text[y].style.fontSize= stock+'em';
    }
    this.cookieService.set('fontSize', stock);
  }

  onUpFontsize(){
    if(this.taillePolice<2){
      this.taillePolice+=this.pasModificationTaillePolice;
    }
    var stock = (this.taillePolice).toFixed(1);
    for (var y =0; y<this.text.length;y++){
      this.text[y].style.fontSize= stock+'em';
    }
    this.cookieService.set('fontSize', stock);
  }
}