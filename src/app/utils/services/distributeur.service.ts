import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distributeur } from '../../models/distributeur';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DistributeurService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getDistributeurById(id) {
    return this.backend.get<distributeur>(this.baseUrl + "/distributeur/by-id/" + id);
  }
  getDistributeur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDistributeur");
  }


  getlistDistributeur(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/distributeurs");
  }

  addDistributeur(u: distributeur) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-distributeur", u);
  }

  editDistributeur(u: distributeur) {
    return this.backend.put(this.baseUrl + "/updateDistributeur/", u);
  }

  editDistributeur2(u: distributeur) {
    return this.backend.put(this.baseUrl + "/updateDistributeur", u);
  }

  detailDistributeur(id) {
    return this.backend.get<distributeur>(this.baseUrl + "/GetOneDistributeur/" + id);
  }
  deleteDistributeur(id) {
    return this.backend.delete(this.baseUrl + "/deleteDistributeur/" + id);
  }

}
