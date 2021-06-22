import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../../models/details';
import { users } from '../../models/users';
import { HttpHeaders} from "@angular/common/http";

const AUTH_API ="http://localhost:8081/rapportOrange/by-userId-datedebut-datefin";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailsService { 

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { } 

  generatePdf(id: Number, datedebut:Date,datefin:Date,retenue:Number) : Observable<any>{ 
    console.log(id+" "+datedebut+" "+datefin+" "+retenue);
    return this.backend.post(AUTH_API , { 
     id,datedebut,datefin,retenue }, httpOptions);
  }

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

  getStatTotal(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statTotal");
  }
  
  paiementParMois(namea: String, date1:Date,date2:Date) : Observable<any>{ 
    console.log(namea+" "+date1+" "+date2);
    return this.backend.post(this.baseUrl + "/paiementParMois" , { 
      namea,date1,date2 }, httpOptions);
  }
}
