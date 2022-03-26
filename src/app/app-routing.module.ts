
import { MainComponent } from './pages/login/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rota para direcionar sempre na tela de login

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "login"
},
{ path: "login", component: LoginComponent },
{ path: "main", component: MainComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders<Component> = RouterModule.forRoot(routes);
