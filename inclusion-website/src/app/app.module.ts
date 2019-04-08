import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { LoginComponent } from './login/login.component';
import { TextContentComponent } from './admin/text-content/text-content.component';
import { PhotoContentComponent } from './admin/photo-content/photo-content.component';
import { ContentAdminComponent } from './admin/content-admin/content-admin.component';
import { MyDialogComponent } from './vueclient/my-dialog/my-dialog.component';
import { FooterComponent } from './vueclient/footer/footer.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { EnteteComponent } from './vueclient/entete/entete.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccueilComponent } from './vueclient/accueil/accueil.component';
import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { FileSelectDirective } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";
import { VueClientComponent } from './vue-client/vue-client.component';

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
    FileSelectDirective,
    VueClientComponent
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
    MyDialogComponent,
  ],

  exports: [
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }