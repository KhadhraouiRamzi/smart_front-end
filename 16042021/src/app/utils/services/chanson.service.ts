import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { chanson } from '../../models/chanson';

@Injectable({
  providedIn: 'root'
})
export class ChansonService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getdate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listdate");
  }


  getDetail(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDetail");
  }


  getChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listChanson");
  }

  getlistChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/chansons");
  }

  addChanson(u: chanson) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-chanson", u);
  }

  editChanson(u: chanson) {
    return this.backend.put(this.baseUrl + "/updateChanson/", u);
  }

  editChanson2(u: chanson) {
    return this.backend.put(this.baseUrl + "/updateChanson", u);
  }

  detailChanson(id) {
    return this.backend.get<chanson>(this.baseUrl + "/GetOnechanson/" + id);
  }
  deleteChanson(id) {
    return this.backend.delete(this.baseUrl + "/deleteChanson/" + id);
  }

  getChansonById(id) {
    return this.backend.get<chanson>(this.baseUrl + "/chanson/by-id/" + id);
  }
}