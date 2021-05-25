import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FTP } from '../../models/FTP';

@Injectable({
  providedIn: 'root'
})
export class FtpService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }
  
  getFtp(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listFtp");
  }


  getlistFtp(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/ftps");
  }

  addFtp(u: FTP) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-ftp", u);
  }

  editFtp(u: FTP) {
    return this.backend.put(this.baseUrl + "/updateFtp/", u);
  }

  editFtp2(u: FTP) {
    return this.backend.put(this.baseUrl + "/updateFtp", u);
  }

  detailFtp(id) {
    return this.backend.get<FTP>(this.baseUrl + "/GetOneFtp/" + id);
  }
  deleteFtp(id) {
    return this.backend.delete(this.baseUrl + "/deleteFtp/" + id);
  }

  getFtpById(id) {
    return this.backend.get<FTP>(this.baseUrl + "/ftp/by-id/" + id);
  }
}
