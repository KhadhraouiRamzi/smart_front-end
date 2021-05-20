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
  file: File;
  arrayBuffer: string | ArrayBuffer;

  selectedFile: File;
  message: string;

  constructor(private excelExportService: ExcelExportService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadd() {
    console.log("file to upload: "+this.selectedFile);

    const uploadExcelData = new FormData();

    uploadExcelData.append('file',this.selectedFile);

    this.excelExportService.uploadExcelToDetail(uploadExcelData).subscribe(response=>{
      if (response) {
        console.log(response);
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    });
  }

  back() {
    this.router.navigate(['/pages/layout/list-chanson/']);
  }

  /*fileReader(file: any, classe: { libelle: any; ecole: any; date_creation: any; nbre_etudiant: any; }) {
    throw new Error('Method not implemented.');
  }
  // ...*/

}
