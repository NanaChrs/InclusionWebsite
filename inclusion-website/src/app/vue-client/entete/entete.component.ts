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
  // text;
  // taillePolice;


  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor(public dialog: MatDialog,private router: Router,  private cookieService: CookieService) {}
  dialogResult = "";

  ngOnInit() {
    // this.text = document.getElementsByClassName("text")
  }


  ngAfterViewInit() {
    var path = this.router.url;
    var chemin = path.substr(1);
    var idBalise = document.getElementById(chemin);
    if (idBalise != null) {
      idBalise.style.backgroundColor = 'whitesmoke';
      idBalise.style.color = 'brown';
    }
    // this.checkaccess();
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

  // checkaccess = function(){ 
  //   this.taillePolice = this.cookieService.get("fontSize");
  //   this.text[0].style.fontSize= this.taillePolice+'em';
  //   setTimeout(() => {
  //     this.checkaccess();
  //   }, 100);
  // }


}
