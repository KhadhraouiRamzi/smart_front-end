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
export class BelieveService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient,private token: TokenStorageService) { }

  generatePdf(id: Number, datedebut:Date,datefin:Date,retenue:Number) : any {

    return this.backend.get("http://localhost:8081/rapportOrange/by-userId-datedebut-datefin/" +id+"/"+datedebut+"/"+datefin+"/"+retenue,{ responseType: 'blob',headers: {'Accept': 'application/pdf'}});

  }

  getTopChansonBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChansonBelieve");
  }

  getTopPlateformeBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeBelieve");
  }
  getTopArtisteBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtisteBelieve");
  }

  getTopPaysBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPaysBelieve");
  }

  getTopAbonnementBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topAbonnementBelieve");
  }

  getTopDateBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDateBelieve");
  }


  getStatPlateformeBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeBelieve");
  }

  getStatChansonBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statChansonBelieve");
  }

  getStatArtisteBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statArtisteBelieve");
  }

  getStatPaysBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPaysBelieve");
  }

  getStatAbonnementBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statAbonnementBelieve");
  }

  getStatDateBelieve(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statDateBelieve");
  }

  getStatArtisteBelieveById(id){
    return this.backend.get<any>(this.baseUrl + "/statArtisteBelieve/by-userId/" + id);
  }

  getStatChansonBelieveById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statChansonBelieve/by-userId/"+id);
  }

  getStatPaysBelieveById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statPaysBelieve/by-userId/"+id);
  }

  getStatPlateformeBelieveById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statPlateformeBelieve/by-userId/"+id);
  }

  getStatDateBelieveById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statDateBelieve/by-userId/"+id);
  }

  getStatAbonnementBelieveById(id: any){
    return this.backend.get<any>(this.baseUrl + "/statAbonnementBelieve/by-userId/"+id);
  }

  getTopChansonBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChansonBelieve/by-userId/"+id);
  }

  getTopPlateformeBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statPlateformeBelieve/by-userId/"+id);
  }
  getTopArtisteBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topArtisteBelieve/by-userId/"+id);
  }

  getTopPaysBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPaysBelieve/by-userId/"+id);
  }

  getTopAbonnementBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topAbonnementBelieve/by-userId/"+id);
  }

  getTopDateBelieveById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topDateBelieve/by-userId/"+id);
  }

  getStatBelieveTotal(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statBelieveTotal");
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
