import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marketing } from '../../models/marketing';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getMarkById(id) {
    return this.backend.get<marketing>(this.baseUrl + "/marketing/by-id/" + id);
  }
  getMarketing(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listMarketing");
  }


  getlistMarketing(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/marketings");
  }

  addMarketing(u: marketing) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-marketing", u);
  }

  editMarketing(u: marketing) {
    return this.backend.put(this.baseUrl + "/updateMarketing/", u);
  }

  editMarketing2(u: marketing) {
    return this.backend.put(this.baseUrl + "/updateMarketing", u);
  }

  detailMarketing(id) {
    return this.backend.get<marketing>(this.baseUrl + "/GetOneMarketing/" + id);
  }
  deleteMarketing(id) {
    return this.backend.delete(this.baseUrl + "/deleteMarketing/" + id);
  }

  getMarketingById(id) {
    return this.backend.get<marketing>(this.baseUrl + "/marketing/by-id/" + id);
  }
}
