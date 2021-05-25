import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getTopChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChanson");
  }

  getTopPlateforme(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPlateforme");
  }
  getTopArtiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtiste");
  }
  
  getTopCategory(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topcategory");
  }
  
  getTopCountC(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountC");
  }
  
  getTopCountA(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountA");
  }
   
  getTopDate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDate");
  } 
  
  
  getStatPlateforme(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateforme");
  }

  getStatChanson(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statChanson");
  }

  getStatArtiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statArtiste");
  }
  
  getStatCategory(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statcategory");
  }
  
  getStatCountC(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statCountC");
  }
  
  getStatCountA(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statCountA");
  }
   
  getStatDate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statDate");
  } 

  getStatArtisteById(id){
    return this.backend.get<any>(this.baseUrl + "/statArtiste/by-userId/" + id);
  }  
  
  getStatChansonById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statChanson/by-userId/"+id);
  }
 
  getImage(id: any){
    return this.backend.get<any>(this.baseUrl + "/get/"+id);
  }
}
