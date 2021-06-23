import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
    NbAlertModule,
    NbButtonModule, NbCardModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbOptionModule, NbPopoverModule, NbSelectModule
} from '@nebular/theme';

import { NgxLoginComponent } from './login/login.component';
import {NgxRegisterComponent} from "./register/register.component";
import { ProfileComponent } from './profile/profile.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NgxAuthRoutingModule,

        NbAuthModule,
        NbIconModule,
        NbOptionModule,
        NbSelectModule,
        NbCardModule,
        NbPopoverModule,
    ],
  declarations: [
    NgxLoginComponent,NgxRegisterComponent, ProfileComponent],
})
export class NgxAuthModule {
}
