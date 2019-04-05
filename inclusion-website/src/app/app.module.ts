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
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { EnteteComponent } from './entete/entete.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

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
    MatInputModule
  ],
  entryComponents: [
    MyDialogComponent
  ],

  exports: [
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }