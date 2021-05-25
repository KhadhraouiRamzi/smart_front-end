import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { communication } from '../../models/communication';

@Injectable({
  providedIn: 'root'
})
export class CommunicationsService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }
 


  getCom(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listCommunication");
  }


  getlistCom(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/communications");
  }

  addCommunication(u: communication) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-communication", u);
  }

  editChanson(u: communication) {
    return this.backend.put(this.baseUrl + "/updateCommunication/", u);
  }

  editCommunication2(u: communication) {
    return this.backend.put(this.baseUrl + "/updateCommunication", u);
  }

  detailCommunication(id) {
    return this.backend.get<communication>(this.baseUrl + "/GetOneCommunication/" + id);
  }
  deleteCommunication(id) {
    return this.backend.delete(this.baseUrl + "/deleteCommunication/" + id);
  }

  getCommunicationById(id) {
    return this.backend.get<communication>(this.baseUrl + "/communication/by-id/" + id);
  }
}