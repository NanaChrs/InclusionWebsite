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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavAdminComponent,
    LoginComponent,
    TextContentComponent,
    PhotoContentComponent,
    ContentAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
