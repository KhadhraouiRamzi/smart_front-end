import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../../models/details';

@Injectable({
  providedIn: 'root'
})
export class DetailCrudService {


  baseUrl: string = "http://localhost:8081";

   constructor(private backend: HttpClient) { }


  getDetail(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listDetail");
  }


  getlistDetail(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/details");
  }

  addDetail(u: details) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-detail", u);
  }

  editDetail(u: details) {
    return this.backend.put(this.baseUrl + "/updateDetail/", u);
  }

  editDetail2(u: details) {
    return this.backend.put(this.baseUrl + "/updateDetail", u);
  }

  detailDetail(id) {
    return this.backend.get<details>(this.baseUrl + "/GetOneDetail/" + id);
  }
  deleteDetail(id) {
    return this.backend.delete(this.baseUrl + "/deleteDetail/" + id);
  }

  getDetailById(id) {
    return this.backend.get<details>(this.baseUrl + "/detail/by-id/" + id);
  }
}
