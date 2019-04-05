import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./vueclient/accueil/accueil.component";
import { ContentAdminComponent } from "./content-admin/content-admin.component";

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "admin/:url", component: ContentAdminComponent },
  { path: "admin", component: AdminComponent },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }