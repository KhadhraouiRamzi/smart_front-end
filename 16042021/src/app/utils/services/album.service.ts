import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { album } from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


  getdate(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listdate");
  }


  getalbum(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listAlbum");
  }

  
  getAlbum(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listAlbum");
  }
   
  getlistAlbum(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/albums");
  }

  addAlbum(u: album) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-album", u);
  }

  editAlbum(u: album) {
    return this.backend.put(this.baseUrl + "/updateAlbum/"  , u);
  }

  editAlbum2(u: album) {
    return this.backend.put(this.baseUrl + "/updateAlbum" , u);
  }

  detailAlbum(id) {
    return this.backend.get<album>(this.baseUrl + "/GetOneartiste/" + id);
  }
  deleteAlbum(id) {
    return this.backend.delete(this.baseUrl + "/deleteAlbum/" + id);
  }

  getAlbumById(id) {
    return this.backend.get<album>(this.baseUrl + "/album/by-id/" + id);
  }

  
}
