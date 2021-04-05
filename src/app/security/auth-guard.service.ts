import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {

    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['logins']);
      return false;
    }
    return true;
  }
  
}

