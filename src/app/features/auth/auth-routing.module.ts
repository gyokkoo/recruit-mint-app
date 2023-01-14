import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from '../../shared/layout/layout.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         { path: 'login', component: LoginComponent },
         { path: 'register', component: RegisterComponent },
         { path: 'password-reset-request', component: PasswordResetRequestComponent },
         { path: 'password-reset', component: PasswordResetComponent },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class AuthRoutingModule {}
