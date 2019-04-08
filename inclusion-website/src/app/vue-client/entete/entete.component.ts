import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['entete.component.css']
})

export class EnteteComponent implements OnInit {

  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor(public dialog: MatDialog) {}
 
  dialogResult = "";
  ngOnInit() {
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


}
