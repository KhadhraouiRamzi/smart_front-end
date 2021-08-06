import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../../auth/services/token-storage.service";

//const AUTH_API ="http://localhost:8081/rapportOrange/by-userId-datedebut-datefin";
const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'http://localhost:8081','responseType':'application/pdf','Accept':'application/pdf' })
};
@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  baseUrl: string = "http://localhost:8081";  

  constructor(private backend: HttpClient,private token: TokenStorageService) { }

  generatePdf(id: Number, datedebut:Date,datefin:Date,retenue:Number) : any {

    return this.backend.get("http://localhost:8081/rapportOrange/by-userId-datedebut-datefin/" +id+"/"+datedebut+"/"+datefin+"/"+retenue,{ responseType: 'blob',headers: {'Accept': 'application/pdf'}});

  }

  getTopChansonDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChansonDeezer");
  }

  getTopPlateformeDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeDeezer");
  }
  getTopArtisteDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtisteDeezer");
  }

  getTopPaysDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPaysDeezer");
  }

  getTopAbonnementDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topAbonnementDeezer");
  }
 
  getTopDateDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDateDeezer");
  }


  getStatPlateformeDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeDeezer");
  }

  getStatChansonDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statChansonDeezer");
  }

  getStatArtisteDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statArtisteDeezer");
  }

  getStatPaysDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPaysDeezer");
  }

  getStatAbonnementDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statAbonnementDeezer");
  }

  getStatDateDeezer(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statDateDeezer");
  }

  getStatArtisteDeezerById(id){
    return this.backend.get<any>(this.baseUrl + "/statArtisteDeezer/by-userId/" + id);
  }

  getStatChansonDeezerById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statChansonDeezer/by-userId/"+id);
  }

  getStatPaysDeezerById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statPaysDeezer/by-userId/"+id);
  }

  getStatPlateformeDeezerById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statPlateformeDeezer/by-userId/"+id);
  }

  getStatDateDeezerById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statDateDeezer/by-userId/"+id);
  }
  
  getStatAbonnementDeezerById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statAbonnementDeezer/by-userId/"+id);
  }

  getTopChansonDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChansonDeezer/by-userId/"+id);
  }

  getTopPlateformeDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeDeezer/by-userId/"+id);
  }
  getTopArtisteDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtisteDeezer/by-userId/"+id);
  }

  getTopPaysDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPaysDeezer/by-userId/"+id);
  }

  getTopAbonnementDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topAbonnementDeezer/by-userId/"+id);
  }

  getTopDateDeezerById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDateDeezer/by-userId/"+id);
  }

  getStatDeezerTotal(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statDeezerTotal");
  }

  paiementParMois(namea: String, date1:Date,date2:Date) : Observable<any>{
    console.log(namea+" "+date1+" "+date2);
    return this.backend.put(this.baseUrl + "/paiementParMois/"+namea+"/"+date1+"/"+date2, httpOptions);
  }

  compenseParMois(namea: String, date1:Date,date2:Date) : Observable<any>{
    console.log(namea+" "+date1+" "+date2);
    return this.backend.put(this.baseUrl + "/compenseParMois/"+namea+"/"+date1+"/"+date2, httpOptions);
  }

  paiementParMoisHist(namea: String, date1:Date,date2:Date) : Observable<any>{
    console.log(namea+" "+date1+" "+date2);
    return this.backend.put(this.baseUrl + "/paiementParMoisHist/"+namea+"/"+date1+"/"+date2, httpOptions);
  }

}
