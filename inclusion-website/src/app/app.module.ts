import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PopupComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  entryComponents:[
    MyDialogComponent
  ],

  exports:[
    PopupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
