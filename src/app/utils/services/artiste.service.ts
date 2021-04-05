/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { artiste } from '../../models/artiste';
  
@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getdate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listdate");
  }


  getartiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDetail");
  }

  
  getChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listChanson");
  }
   
  getlistArtiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/artistes");
  }

  addArtiste(u: artiste) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-artiste", u);
  }

  editArtiste(u: artiste) {
    return this.backend.put(this.baseUrl + "/updateArtiste/"  , u);
  }

  editArtiste2(u: artiste) {
    return this.backend.put(this.baseUrl + "/updateartiste" , u);
  }

  detailArtiste(id) {
    return this.backend.get<artiste>(this.baseUrl + "/GetOneartiste/" + id);
  }
  deleteArtiste(id) {
    return this.backend.delete(this.baseUrl + "/deleteArtiste/" + id);
  }

  getArtisteById(id) {
    return this.backend.get<artiste>(this.baseUrl + "/artiste/by-id/" + id);
  }
  
 }
*/