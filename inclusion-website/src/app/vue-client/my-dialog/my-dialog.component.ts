import { Component, OnInit, Inject, SimpleChanges, Input, Injectable, NgZone } from '@angular/core';
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
  cookieinverse: boolean = this.cookieService.check('inverse');
  checkTaillePolice: boolean = this.cookieService.check('fontSize');
  bouttonOffAnim;
  bouttonOnAnim;
  colorDefaut;
  colorInverse;

  zone;
  map;
  img;


  taillePolice = 1.0;
  text;
  pasModificationTaillePolice = 0.2;


  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: String, private cookieService: CookieService) { }


  ngOnInit() {
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    this.colorDefaut = document.getElementById('defaut');
    this.colorInverse = document.getElementById('inverse');
    // var general = document.getElementById('generaldial');
    if (this.animationOFF) {
      this.bouttonOffAnim.style.backgroundColor = 'whitesmoke';
      this.bouttonOffAnim.style.color = '#000';
      this.bouttonOnAnim.style.backgroundColor = '';
      this.bouttonOnAnim.style.color = '#fff';
    }
    else {
      this.bouttonOnAnim.style.backgroundColor = 'whitesmoke';
      this.bouttonOnAnim.style.color = '#000';
      this.bouttonOffAnim.style.backgroundColor = '';
      this.bouttonOffAnim.style.color = '#fff';
    }

    if (this.cookieinverse) {
      this.colorInverse.style.backgroundColor = 'whitesmoke';
      this.colorInverse.style.color = '#000';
      this.colorDefaut.style.backgroundColor = '';
      this.colorDefaut.style.color = '#fff';
      // general.style.filter = "invert(90%)";
      this.map = document.getElementsByClassName('googlemap');
      this.zone = document.getElementsByClassName('zone');
      for (var i = 0; i < this.zone.length; i++) {
        this.zone[i].style.filter = "invert(90%)";
      }
    }
    else {
      this.colorDefaut.style.backgroundColor = 'whitesmoke';
      this.colorDefaut.style.color = '#000';
      this.colorInverse.style.backgroundColor = '';
      this.colorInverse.style.color = '#fff';
    }

    if (!this.checkTaillePolice) {
      this.taillePolice = 1;
    }
    else {
      this.taillePolice = +this.cookieService.get("fontSize")
    }
    this.text = document.getElementsByClassName("text")
  }

  ngAfterViewInit() {
    this.text = document.getElementsByClassName("text")
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }



  //Boutons activation animations
  onAnnim() {
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    this.cookieService.delete('animationOFF');
    this.bouttonOnAnim.style.backgroundColor = 'whitesmoke';
    this.bouttonOnAnim.style.color = '#000';
    this.bouttonOffAnim.style.backgroundColor = '';
    this.bouttonOffAnim.style.color = '#fff';
  }

  offAnnim() {
    this.bouttonOffAnim = document.getElementById('animationsOff');
    this.bouttonOnAnim = document.getElementById('animationsOn');
    this.cookieService.set('animationOFF', '', 365);
    this.bouttonOnAnim.style.backgroundColor = '';
    this.bouttonOnAnim.style.color = '#fff';
    this.bouttonOffAnim.style.backgroundColor = 'whitesmoke';
    this.bouttonOffAnim.style.color = '#000';
  }


  //Boutons augmentation/diminution taille text
  onDownFontsize() {
    if (this.taillePolice > 1.09) {
      this.taillePolice -= this.pasModificationTaillePolice;
    }
    var stock = (this.taillePolice).toFixed(1);
    for (var y = 0; y < this.text.length; y++) {
      this.text[y].style.fontSize = stock + 'em';
    }
    this.cookieService.set('fontSize', stock, 365);
  }

  onUpFontsize() {
    if (this.taillePolice < 1.99) {
      this.taillePolice += this.pasModificationTaillePolice;
    }
    var stock = (this.taillePolice).toFixed(1);
    for (var y = 0; y < this.text.length; y++) {
      this.text[y].style.fontSize = stock + 'em';
    }
    this.cookieService.set('fontSize', stock, 365);
  }



  //Boutons activation animations
  onDefautCouleur() {
    // var general = document.getElementById('generaldial');
    this.map = document.getElementsByClassName('googlemap');
    this.img = document.getElementsByClassName('photo');
    this.colorDefaut = document.getElementById('defaut');
    this.colorInverse = document.getElementById('inverse');
    this.cookieService.delete('inverse');
    this.colorDefaut.style.backgroundColor = 'white';
    this.colorDefaut.style.color = '#000';
    this.colorInverse.style.backgroundColor = '';
    this.colorInverse.style.color = '#fff';
    // general.style.filter = "";
    this.zone = document.getElementsByClassName('zone');
    for (var i = 0; i < this.zone.length; i++) {
      this.zone[i].style.filter = "";
    }
    for (var y = 0; y < this.map.length; y++) {
      this.map[y].style.filter = "";
    }
    for (var y = 0; y < this.img.length; y++) {
      this.img[y].style.filter = "";
    }
  }

  onInverseCouleur() {
    // var general = document.getElementById('generaldial');
    this.map = document.getElementsByClassName('googlemap');
    this.img = document.getElementsByClassName('photo');
    this.colorDefaut = document.getElementById('defaut');
    this.colorInverse = document.getElementById('inverse');
    this.cookieService.set('inverse', '', 365);
    this.colorInverse.style.backgroundColor = 'white';
    this.colorInverse.style.color = '#000';
    this.colorDefaut.style.backgroundColor = '';
    this.colorDefaut.style.color = '#fff';
    // general.style.filter = "invert(90%)";
    this.zone = document.getElementsByClassName('zone');
    for (var i = 0; i < this.zone.length; i++) {
      this.zone[i].style.filter = "invert(90%)";
    }
    for (var y = 0; y < this.map.length; y++) {
      this.map[y].style.filter = "invert(90%)";
    }
    for (var y = 0; y < this.img.length; y++) {
      this.img[y].style.filter = "invert(90%)";
    }
  }
}
