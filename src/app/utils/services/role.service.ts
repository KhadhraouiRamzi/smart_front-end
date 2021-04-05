import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { role } from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getRoleById(id) {
    return this.backend.get<role>(this.baseUrl + "/role/by-id/" + id);
  }
  getRole(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/listRole");
  }


  getlistRole(): Observable<any> {
    return this.backend.get<any>(this.baseUrl + "/roles");
  }

  addRole(u: role) {
    console.log(u);
    return this.backend.post(this.baseUrl + "/new-role", u);
  }

  editRole(u: role) {
    return this.backend.put(this.baseUrl + "/updateRole/", u);
  }

  editRole2(u: role) {
    return this.backend.put(this.baseUrl + "/updateRole", u);
  }

  detailRole(id) {
    return this.backend.get<role>(this.baseUrl + "/GetOneRole/" + id);
  }
  deleteRole(id) {
    return this.backend.delete(this.baseUrl + "/deleteRole/" + id);
  }
 
}
