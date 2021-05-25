import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devise } from '../../models/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }
  

  getDevise(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDevise");
  }


  getlistDevise(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/devises");
  }

  addDevise(u: devise) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-devise", u);
  }

  editDevise(u: devise) {
    return this.backend.put(this.baseUrl + "/updateDevise/", u);
  }

  editDevise2(u: devise) {
    return this.backend.put(this.baseUrl + "/updateDevise", u);
  }

  detailDevise(id) {
    return this.backend.get<devise>(this.baseUrl + "/GetOneDevise/" + id);
  }
  deleteDevise(id) {
    return this.backend.delete(this.baseUrl + "/deleteDevise/" + id);
  }

  getDeviseById(id) {
    return this.backend.get<devise>(this.baseUrl + "/devise/by-id/" + id);
  }
}
