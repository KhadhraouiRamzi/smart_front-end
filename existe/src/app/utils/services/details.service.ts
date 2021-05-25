import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getStatChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChanson");
  }

  getStatArtiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtiste");
  }
  
  getStatCategory(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCategory");
  }
  
  getStatCountC(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountC");
  }
  
  getStatCountA(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountA");
  }
   
  getStatDate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDate");
  } 
}
