import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
 
  dialogResult = "";
  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '25%',
      height: '25%',
    });

    dialogRef.afterClosed().subscribe(result => {console.log('Dialog closed: ${result');
    this.dialogResult = result;
  })
  }
}
