import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rota para direcionar sempre na tela de login

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "login"
},
{
  path: "login", component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
