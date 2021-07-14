import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }

  getHistRevenuById(id) {
    return this.backend.get<users>(this.baseUrl + "/HistRevenu/by-id/" + id);
  }

  getHistRevenu() {
    return this.backend.get<users>(this.baseUrl + "/HistRevenu");
  }
}
