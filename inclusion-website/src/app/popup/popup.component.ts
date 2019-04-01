import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-popupfenetre',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  

  constructor(public dialog: MatDialog) {}
 
  dialogResult = "";
  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '25%',
      data: 'Modifier la taille des caractères'
    });

    dialogRef.afterClosed().subscribe(result => {console.log('Dialog closed: ${result');
    this.dialogResult = result;
  })
  }

}
