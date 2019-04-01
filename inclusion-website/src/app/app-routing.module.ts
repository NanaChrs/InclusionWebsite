import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { EnteteComponent } from "./entete/entete.component";
import { ContentAdminComponent } from "./content-admin/content-admin.component";

const routes: Routes = [
  { path: "", component: EnteteComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/:id", component: ContentAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
