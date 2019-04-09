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
  checkTaillePolice: boolean = this.cookieService.check('fontSize');
  text;
  taillePolice;

  dialogResult = "";
  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public dialog: MatDialog,private router: Router,  private cookieService: CookieService) {}
 

  ngOnInit() {
    this.text = document.getElementsByClassName("text")
    this.taillePolice=+this.cookieService.get("fontSize")
  }


  ngAfterViewInit() {
    var path = this.router.url;
    var chemin = path.substr(1);
    var idBalise = document.getElementById(chemin);
    if (idBalise != null) {
      idBalise.style.backgroundColor = 'whitesmoke';
      idBalise.style.color = 'brown';
    }
    if(this.checkTaillePolice){
      for (var y =0; y<this.text.length;y++){
        this.text[y].style.fontSize= this.taillePolice+'em';
      }
    }
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
