import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component';
import {AuthGuard} from "./auth-guard.service";
import {NgxRegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
  ],
})
export class NgxAuthRoutingModule {
}
