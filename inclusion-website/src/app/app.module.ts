import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { LoginComponent } from './login/login.component';
import { TextContentComponent } from './text-content/text-content.component';
import { PhotoContentComponent } from './photo-content/photo-content.component';
import { ContentAdminComponent } from './content-admin/content-admin.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { EnteteComponent } from './entete/entete.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from "@angular/common/http";
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileSelectDirective } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavAdminComponent,
    LoginComponent,
    TextContentComponent,
    PhotoContentComponent,
    ContentAdminComponent,
    MyDialogComponent,
    EnteteComponent,
    AccueilComponent,
    FooterComponent,
    PhotoUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [
    MyDialogComponent
  ],

  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }