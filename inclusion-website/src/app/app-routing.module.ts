import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./vue-client/accueil/accueil.component";
import { MenuComponent } from "./vue-client/menu/menu.component";
import { ContentAdminComponent } from "./admin/content-admin/content-admin.component";
import { EquipeComponent } from './vue-client/equipe/equipe.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponent, pathMatch: 'full' },
  { path: "menus", component: MenuComponent, pathMatch: 'full' },
  { path: "equipe", component: EquipeComponent, pathMatch: 'full' },
  { path: "admin/:url", component: ContentAdminComponent, pathMatch: 'full' },
  { path: "admin", component: AdminComponent, pathMatch: 'full' },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }