import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import {AuthService} from "../services/auth.service";
import {RoleService} from "../../utils/services/role.service";
import { role } from '../../models/role';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
  form: any = {
    nom: null,
    prenom: null,
    phone: null,
    email: null,
    password: null,
    role:null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles:any [];


  constructor( private r: Router,private authService: AuthService,private roleService : RoleService,public datepipe: DatePipe) {
    super(undefined, {}, undefined, undefined);
  }

  ngOnInit(): void {
    this.roles=[];
    this.roleService.getRoles().subscribe(data=>{
      this.roles=data;
      console.log(data);
    })
  }

  onSubmit(): void {
    const { nom,prenom,phone,email, password,role} = this.form;
/*
    const formatDate = this.datepipe.transform(this.date, 'yyyy-MM-dd');
*/
    this.authService.register(nom,prenom,phone,email, password,role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.r.navigate(['/pages/dashboard']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
