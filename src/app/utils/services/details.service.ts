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
    return this.backend.get<any>(this.baseUrl + "/statPlateforme");
  }
  getTopArtiste(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtiste");
  }

  getTopCategory(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCategory");
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

  getStatCategorieById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statCategorie/by-userId/"+id);
  }

  getStatPlateformeById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statPlateforme/by-userId/"+id);
  }

  getStatDateById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statDate/by-userId/"+id);
  }


  
  getTopChansonById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChanson/by-userId/"+id);
  }

  getTopPlateformeById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateforme/by-userId/"+id);
  }
  getTopArtisteById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtiste/by-userId/"+id);
  }

  getTopCategoryById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCategory/by-userId/"+id);
  }

  getTopCountCById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountC/by-userId/"+id);
  }

  getTopCountAById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topCountA/by-userId/"+id);
  }

  getTopDateById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDate/by-userId/"+id);
  }

}
