import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['entete.component.css']
})

export class EnteteComponent implements OnInit {
  cookieinverse: boolean = this.cookieService.check("inverse");
  fontsize: boolean = this.cookieService.check("fontSize");
  zone;
  text;

  dialogResult = "";
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public dialog: MatDialog, private router: Router, private cookieService: CookieService) { }


  ngOnInit() {
    this.text = document.getElementsByClassName("text")
  }


  ngAfterViewInit() {
    var path = this.router.url;
    var chemin = path.substr(1);
    var idBalise = document.getElementById(chemin);
    if (idBalise != null) {
      idBalise.style.backgroundColor = 'whitesmoke';
      idBalise.style.color = 'brown';
    }
    this.checkaccess();
  }

  openDialog() {
    this.dialog.open(MyDialogComponent, {
    });
  }

  openMenu() {
    var x = document.getElementById('menu_navigation_telephone');
    if (x.style.display === 'inline') {
      x.style.display = 'none';
    } else {
      x.style.display = 'inline';
    }
  }





  checkaccess = function () {
    this.cookieinverse = this.cookieService.check("inverse");
    this.fontsize = this.cookieService.check("fontSize");
    if (this.cookieinverse) {
      this.zone = document.getElementsByClassName('zone');
      for (var i = 0; i < this.zone.length; i++) {
        this.zone[i].style.filter = "invert(90%)";
      }
    }
    if (this.fontsize) {
      var taillePolice = +this.cookieService.get("fontSize")
      for (var y = 0; y < this.text.length; y++) {
        this.text[y].style.fontSize = taillePolice + 'em';
      }
    }
    setTimeout(() => {
      this.checkaccess();
    }, 1000);
  };


}