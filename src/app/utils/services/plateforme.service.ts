import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { plateforme } from '../../models/plateforme';

@Injectable({
  providedIn: 'root'
})
export class PlateformeService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getPlateformeById(id) {
    return this.backend.get<plateforme>(this.baseUrl + "/plateforme/by-id/" + id);
  }
  getPlateforme(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listPlateforme");
  }


  getlistPlateforme(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/plateformes");
  }

  addPlateforme(u: plateforme) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-plateforme", u);
  }

  editPlateforme(u: plateforme) {
    return this.backend.put(this.baseUrl + "/updatePlateforme/", u);
  }

  editplateforme2(u: plateforme) {
    return this.backend.put(this.baseUrl + "/updatePlateforme", u);
  }

  detailPlateforme(id) {
    return this.backend.get<plateforme>(this.baseUrl + "/GetOnePlateforme/" + id);
  }
  deletePlateforme(id) {
    return this.backend.delete(this.baseUrl + "/deletePlateforme/" + id);
  }

  
}
