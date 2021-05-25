import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {


  baseUrl: string = "http://localhost:8081";

  constructor(private backend: HttpClient) { }


}
