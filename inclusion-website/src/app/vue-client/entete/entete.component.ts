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
  // inverse: boolean = this.cookieService.check("inverse");

  dialogResult = "";
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public dialog: MatDialog, private router: Router) { }
  // constructor(public dialog: MatDialog, private router: Router, private cookieService: CookieService) { }


  ngOnInit() {
    // this.checkaccess();
  }


  ngAfterViewInit() {
    // var header = document.getElementById('header');
    var path = this.router.url;
    var chemin = path.substr(1);
    var idBalise = document.getElementById(chemin);
    if (idBalise != null) {
      idBalise.style.backgroundColor = 'whitesmoke';
      idBalise.style.color = 'brown';
    }
    // if(this.inverse){
    //   header.style.filter="invert(90%)";
    // }
  }

  openDialog() {
    this.dialog.open(MyDialogComponent, {
      width: '25%',
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


  // checkaccess = function () {
  //   var header = document.getElementById('header');
  //   this.inverse = this.cookieService.check("inverse");
  //   if (this.inverse) {
  //     header.style.filter = "invert(90%)"
  //   }
  //   else { header.style.filter = ""; }
  //   setTimeout(() => {
  //     this.checkaccess();
  //   }, 100);
  // };


}
