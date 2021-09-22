import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../../models/details';
import { users } from '../../models/users';
import { HttpHeaders} from "@angular/common/http";
import {TokenStorageService} from "../../auth/services/token-storage.service";

//const AUTH_API ="http://localhost:8081/rapportOrange/by-userId-datedebut-datefin";
const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'http://localhost:8081','responseType':'application/pdf','Accept':'application/pdf' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient,private token: TokenStorageService) { }

  generatePdf(id: Number, datedebut:Date,datefin:Date,retenue:Number) :  Observable<any> {

    return this.backend.get("http://localhost:8081/rapportOrange/by-userId-datedebut-datefin/" +id+"/"+datedebut+"/"+datefin+"/"+retenue,{ responseType: 'blob',headers: {'Accept': 'application/pdf'}});

  }

  getArtisteByNom(nom): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/artiste-ByNom/" +nom);
  }

  /*------Top 10-----------*/

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

/*-----------------Stat Orange------------------*/

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

  /*------------------Stat Orange By user id -----------*/

  getStatArtisteById(id){
    return this.backend.get<any>(this.baseUrl + "/statArtiste/by-userId/" + id);
  }

  
  getStatArtisteByNom(id){
    return this.backend.get<any>(this.baseUrl + "/statArtiste/by-nom/" + id);
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

  /*------------ Top By userId-------------*/

  getTopChansonById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topChanson/by-userId/"+id);
  }

  getTopPlateformeById(id: any): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/topPlateforme/by-userId/"+id);
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

  /*-------Other-------------*/
  getStatTotal(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/statTotal");
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

  /*---------------  Stat Total-----------------------*/

/*-----------------Stat Orange------------------*/

getTotalStatPlateforme(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatPlateforme");
}

getTotalStatChanson(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatChanson");
}

getTotalStatArtiste(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatArtiste");
}

getTotalStatCategory(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatcategory");
}

getTotalStatCountC(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatCountC");
}

getTotalStatCountA(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatCountA");
}

getTotalStatDate(): Observable<any> {
  return this.backend.get<any>(this.baseUrl + "/totalstatDate");
}

/*------------------Stat Orange By user id -----------*/

getTotalStatArtisteById(id){
  return this.backend.get<any>(this.baseUrl + "/totalstatArtiste/by-userId/" + id);
}


getTotalStatArtisteByNom(id){
  return this.backend.get<any>(this.baseUrl + "/totalstatArtiste/by-nom/" + id);
}

getTotalStatChansonById(id: any){
  return this.backend.get<any>(this.baseUrl + "/totalstatChanson/by-userId/"+id);
}

getTotalStatCategorieById(id: any){
  return this.backend.get<any>(this.baseUrl + "/totalstatCategorie/by-userId/"+id);
}

getTotalStatPlateformeById(id: any){
  return this.backend.get<any>(this.baseUrl + "/totalstatPlateforme/by-userId/"+id);
}

getTotalStatDateById(id: any){
  return this.backend.get<any>(this.baseUrl + "/totalstatDate/by-userId/"+id);
}

}
