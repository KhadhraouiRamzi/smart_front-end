import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operateur } from '../../models/operateur';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getOperateurById(id) {
    return this.backend.get<operateur>(this.baseUrl + "/operateur/by-id/" + id);
  }
  getOperateur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listOperateur");
  }


  getlistOperateur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/operateurs");
  }

  addOperateur(u: operateur) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-operateur", u);
  }

  editOperateur(u: operateur) {
    return this.backend.put(this.baseUrl + "/updateOperateur/", u);
  }

  editOperateur2(u: operateur) {
    return this.backend.put(this.baseUrl + "/updateOperateur", u);
  }

  detailOperateur(id) {
    return this.backend.get<operateur>(this.baseUrl + "/GetOneOperateur/" + id);
  }
  deleteOperateur(id) {
    return this.backend.delete(this.baseUrl + "/deleteOperateur/" + id);
  }
 
}
