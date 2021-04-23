import { Component } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';
import {AuthService} from "../services/auth.service";
import {RoleService} from "../../utils/services/role.service";
import { role } from '../../models/role';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent extends NbRegisterComponent {
  form: any = {
    nom: null,
    prenom: null,
    cin: null,
    dateCin: null,
    phone: null,
    email: null,
    password: null,
    role:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles:any [];


  constructor(private authService: AuthService,private roleService : RoleService) {
    super(undefined, {}, undefined, undefined);
  }

  ngOnInit(): void {
    this.roles=[];
    this.roleService.getRoles().subscribe(data=>{
      this.roles=data;
    })
  }

  onSubmit(): void {
    const { nom,prenom,cin,dateCin,phone,email, password,role} = this.form;

    this.authService.register(nom,prenom,cin,dateCin,phone,email, password,role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
