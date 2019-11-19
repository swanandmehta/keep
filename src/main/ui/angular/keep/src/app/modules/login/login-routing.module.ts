<<<<<<< HEAD
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
=======
>>>>>>> branch 'Feature/login' of https://github.com/swanandmehta/keep.git
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
<<<<<<< HEAD
  },
  {
    path : 'reset-password',
    component : ResetPasswordComponent,
    pathMatch : 'full'
=======
>>>>>>> branch 'Feature/login' of https://github.com/swanandmehta/keep.git
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
