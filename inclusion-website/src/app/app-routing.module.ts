
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ContentAdminComponent } from "./content-admin/content-admin.component";

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/:id", component: ContentAdminComponent },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
