/* excel-export.service.ts

import { utils as XLSXUtils, writeFile } from 'xlsx';
import { WorkBook, WorkSheet } from 'xlsx/types';*/

import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IExportAsExcelProps {
  readonly data: any[];
  readonly fileName: string;
  readonly sheetName?: string;
  readonly header?: string[];
  readonly table?: HTMLElement;
}

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  private baseUrl = 'http://localhost:8080';
  private file: any;

  constructor(private http: HttpClient) { }

  uploadExcelToDetail(uploadExcelData : FormData) {
    return this.http.post(this.baseUrl + "/uploadExcel", uploadExcelData,{ observe: 'response' });
  }

}
