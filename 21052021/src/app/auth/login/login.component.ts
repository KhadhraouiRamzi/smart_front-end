import {Component, OnInit} from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import {TokenStorageService} from "../services/token-storage.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit{

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showMessages: any;
  errors: string[];
  messages: string[];
  submitted: boolean;




  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,router: Router) {
    super(undefined, {}, undefined, router);}


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  
  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.submitted=true;

        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/pages']);

      },
      err => {
        console.log("aaa");
/*        //this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.submitted=false;
        this.messages=err.error.messages;*/
        alert(err.error.message)

      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
