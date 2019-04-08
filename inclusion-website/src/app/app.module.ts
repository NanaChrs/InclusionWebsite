import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { LoginComponent } from './login/login.component';
import { ContentAdminComponent } from './admin/content-admin/content-admin.component';
import { MyDialogComponent } from './vue-client/my-dialog/my-dialog.component';
import { FooterComponent } from './vue-client/footer/footer.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { EnteteComponent } from './vue-client/entete/entete.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccueilComponent } from './vue-client/accueil/accueil.component';
import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FileSelectDirective } from "ng2-file-upload";
import { VueClientComponent } from './vue-client/vue-client.component';
import { MenuComponent } from './vue-client/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavAdminComponent,
    LoginComponent,
    ContentAdminComponent,
    MyDialogComponent,
    EnteteComponent,
    AccueilComponent,
    FooterComponent,
    FileSelectDirective,
    VueClientComponent,
    MenuComponent
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
    ReactiveFormsModule
  ],
  entryComponents: [
    MyDialogComponent,
  ],

  exports: [
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }