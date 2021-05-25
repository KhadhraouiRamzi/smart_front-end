import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fournisseur } from '../../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getdat(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listdate");
  }


  getDetail(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDetail");
  }


  getFournisseur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listFournisseur");
  }

  getlistFournisseur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/fournisseur");
  }

  addFournisseur(u: fournisseur) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-fournisseur", u);
  }

  editFournisseur(u: fournisseur) {
    return this.backend.put(this.baseUrl + "/updateFournisseur/", u);
  }

  editFournisseur2(u: fournisseur) {
    return this.backend.put(this.baseUrl + "/updateFournisseur", u);
  }

  detailFournisseur(id) {
    return this.backend.get<fournisseur>(this.baseUrl + "/GetOneFournisseur/" + id);
  }
  deleteFournisseur(id) {
    return this.backend.delete(this.baseUrl + "/deleteFournisseur/" + id);
  }
  
  getFournisseurById(id) {
    return this.backend.get<fournisseur>(this.baseUrl + "/fournisseur/by-id/" + id);
  }
}
