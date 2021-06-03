import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }


  register( nom: string,prenom: string,email: string, password: string, role:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nom,
      prenom,
      email,
      password,
      role
    }, httpOptions);
  }


  isAuthenticated(): boolean {

    if(sessionStorage.getItem('auth-token') && sessionStorage.getItem('auth-user')){
      return true;
    }
    else
      return false;
  }
}
