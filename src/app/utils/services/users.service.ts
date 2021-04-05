import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getUser(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listUser");
  }

  getlistUser(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/users");
  }

  getArts(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/arts");
  }

  getArtistes(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/artistes");
  }
  getFours(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/fours");
  }

  getFournisseurs(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/fournisseurs");
  }

  addUser(u: users) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-user", u);
  }

  editUser(u: users) {
    return this.backend.put(this.baseUrl + "/updateUser/", u);
  }
  test(  u: users) {
    return this.backend.post(this.baseUrl + "/test1/" ,  u);
  }
  image(uploadImageData : any ,id) {
    return this.backend.put(this.baseUrl + "/upload/" + id, uploadImageData);
  }
  imageIn(uploadImageData : any) {
    return this.backend.put(this.baseUrl + "/uploadIn/", uploadImageData);
  }

  editUser2(u: users) {
    return this.backend.put(this.baseUrl + "/updateUser", u);
  }

  detailUser(id) {
    return this.backend.get<users>(this.baseUrl + "/GetOneUser/" + id);
  }
  deleteUser(id) {
    return this.backend.delete(this.baseUrl + "/deleteUser/" + id);
  }
  
  getUserById(id) {
    return this.backend.get<users>(this.baseUrl + "/user/by-id/" + id);
  }
}