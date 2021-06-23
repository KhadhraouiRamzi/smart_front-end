import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hist_communication } from '../../models/hist_communication';

@Injectable({
  providedIn: 'root'
})
export class HistCommunicationService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getHistCommunication(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/lististHistCommunication");
  }


  getlististCommunication(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listHistCommunication");
  }

  addHistCommunication(u: hist_communication) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-HistCommunication", u);
  }

  editHistCommunication(u: hist_communication) {
    return this.backend.put(this.baseUrl + "/updateHistCommunication/", u);
  }

  editHistCommunication2(u: hist_communication) {
    return this.backend.put(this.baseUrl + "/updateHistCommunication", u);
  }

  detailHistCommunication(id) {
    return this.backend.get<hist_communication>(this.baseUrl + "/GetOneHistCommunication/" + id);
  }
  deleteHistCommunication(id) {
    return this.backend.delete(this.baseUrl + "/deleteHistCommunication/" + id);
  }

  getHistCommunicationById(id) {
    return this.backend.get<hist_communication>(this.baseUrl + "/HistCommunication/by-id/" + id);
  }
}

