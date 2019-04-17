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
import { EquipeComponent } from './vue-client/equipe/equipe.component';
import { MentionsLegalesComponent } from './vue-client/mentions-legales/mentions-legales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { SafePipe } from './admin/content-admin/safe-pipe';
import { PlanSiteComponent } from './vue-client/plan-site/plan-site.component';
import { ContactComponent } from './vue-client/contact/contact.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavAdminComponent,
    LoginComponent,
    LogoutComponent,
    ContentAdminComponent,
    MyDialogComponent,
    EnteteComponent,
    AccueilComponent,
    FooterComponent,
    FileSelectDirective,
    VueClientComponent,
    MenuComponent,
    MentionsLegalesComponent,
    EquipeComponent,
    SafePipe,
    PlanSiteComponent,
    ContactComponent,

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
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6Leuzp0UAAAAAM4BZfnOoI8h-fGkOAnO0IiEZ4eQ',//Version local
      // siteKey: '6Lf8iJ4UAAAAAEf9I9l2sch22qFhFEhjsNrRVLMs',//Version Serveur

    }),
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