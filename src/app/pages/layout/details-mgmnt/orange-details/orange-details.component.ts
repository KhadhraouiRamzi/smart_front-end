import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import {ExcelExportService} from "../../../../utils/services/excel-export.service";
import {HttpEventType} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-orange-details',
  templateUrl: './orange-details.component.html',
  styleUrls: ['./orange-details.component.scss']
})
export class OrangeDetailsComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  file: any;
  arrayBuffer: string | ArrayBuffer;

  selectedFile: File;
  currentFile: File;

  constructor(private excelExportService: ExcelExportService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFile = event.target.files;
  }

  upload() {
    console.log("aaaa");
    this.currentFile=this.selectedFile;
    console.log("aaaa"+this.currentFile);
    this.excelExportService.uploadExcelToDetail(this.currentFile);
  }

  back() {
    this.router.navigate(['/pages/layout/list-chanson/']);
  }

  /*fileReader(file: any, classe: { libelle: any; ecole: any; date_creation: any; nbre_etudiant: any; }) {
    throw new Error('Method not implemented.');
  }
  // ...*/

}
