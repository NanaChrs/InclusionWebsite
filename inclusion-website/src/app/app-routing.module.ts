import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./vue-client/accueil/accueil.component";
import { MenuComponent } from "./vue-client/menu/menu.component";
import { ContentAdminComponent } from "./admin/content-admin/content-admin.component";
import { EquipeComponent } from './vue-client/equipe/equipe.component';
import { MentionsLegalesComponent } from './vue-client/mentions-legales/mentions-legales.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { PlanSiteComponent } from './vue-client/plan-site/plan-site.component';


const routes: Routes = [
  { path: "accueil", component: AccueilComponent, pathMatch: 'full' },
  { path: "menus", component: MenuComponent, pathMatch: 'full' },
  { path: "equipe", component: EquipeComponent, pathMatch: 'full' },
  { path: "mentions-legales", component: MentionsLegalesComponent, pathMatch: 'full' },
  { path: "plan-site", component: PlanSiteComponent, pathMatch: 'full' },
  { path: "admin/:url", component: ContentAdminComponent, pathMatch: 'full' ,canActivate:[AuthGaurdService]},
  { path: "admin", component: AdminComponent, pathMatch: 'full' ,canActivate:[AuthGaurdService]},
  { path: "login", component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: "**", redirectTo: "/accueil" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }