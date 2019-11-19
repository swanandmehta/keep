import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'sign-up',
    component : RegistrationComponent,
    pathMatch : 'full'
  },
  {
    path : 'reset-password',
    component : ResetPasswordComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
