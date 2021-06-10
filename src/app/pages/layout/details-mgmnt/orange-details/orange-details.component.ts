import { Component, OnInit } from '@angular/core';
import {NbComponentShape, NbComponentSize, NbComponentStatus, NbDialogService} from '@nebular/theme';
import {ExcelExportService} from "../../../../utils/services/excel-export.service";
import {HttpEventType} from "@angular/common/http";
import {Router} from "@angular/router";
import {getErrorMessage} from "codelyzer/templateAccessibilityElementsContentRule";
import {messages} from "../../../extra-components/chat/messages";

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
  statut:any;
  hide:any;

  constructor(private excelExportService: ExcelExportService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  /*uploadd() {
    console.log("file to upload: "+this.selectedFile);

    const uploadExcelData = new FormData();

    uploadExcelData.append('file',this.selectedFile);
    this.excelExportService.uploadExcelToDetail(uploadExcelData).subscribe(response=>{
/!*      if (response) {*!/
        this.statut=response.status;
      console.log(this.statut);

      this.message = response.body.valueOf()['message'];
/!*      } if(!response) {
        !this.hide;
        console.log(this.hide);
        this.statut=response.status;
        console.log(this.statut);
        this.message = response.body.valueOf()['message'];
        console.log(this.message);
      }*!/
    },error => this.message=error.message);}*/


}
