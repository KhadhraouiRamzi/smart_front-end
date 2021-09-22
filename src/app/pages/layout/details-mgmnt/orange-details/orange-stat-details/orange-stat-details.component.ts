import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentStatus } from '@nebular/theme';
import { DatatableLanguage } from '../../../../../../assets/data/DatatableLanguage';
import { TokenStorageService } from '../../../../../auth/services/token-storage.service';
import { details } from '../../../../../models/details';
import { DetailsService } from '../../../../../utils/services/details.service';
import { ExcelExportService } from '../../../../../utils/services/excel-export.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {DataTableDirective} from 'angular-datatables';
import {utils, WorkBook, WorkSheet, writeFile} from "xlsx";
import { ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'ngx-orange-stat-details',
  templateUrl: './orange-stat-details.component.html',
  styleUrls: ['./orange-stat-details.component.scss']
})
export class OrangeStatDetailsComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string[]=[];
  messageError: string[]=[];
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste top artiste.xlsx';
  details: details;
  st:any;
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['basic'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['info'];
  statuses7: NbComponentStatus[] = ['control'];
  shapes: NbComponentShape[] = ['round'];
  submitted: boolean=false;

  constructor(private excelExportService: ExcelExportService,private detaisSerivce: DetailsService, 
    private r: Router, public token: TokenStorageService,private ar: ActivatedRoute) {
  }


  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [ 1, 'desc' ],
      language : DatatableLanguage.datatableFrench,
     };
     
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = routeId;  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isEmptyObject(id)) {
      console.log("----> Not Null");

      this.detaisSerivce.getStatArtisteByNom(id).subscribe(data => {
        this.details = data;
        /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/
 
        setTimeout(function() { (function ($) {
          $(document).ready(function() {
            $('#table-orange-stat-date').DataTable({
              "footerCallback": function ( ) {
                var apiFiltre = this.api();
                // converting to interger to find total
                var intVal = function ( i ) {
                  return typeof i === 'string' ?
                  parseFloat(i.replace(/\s/g,"").replace(/[,]/g, ''))*1 :
                    typeof i === 'number' ?
                      i : 0;
                };

                // computing column Total of the complete result
                var ttc = apiFiltre
                  .column( 2,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var nbr_ecoute = apiFiltre
                  .column( 3,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var part_smart = apiFiltre
                  .column( 4,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var tax_telecom = apiFiltre
                  .column( 5,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var part_ttc = apiFiltre
                  .column( 6,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var htva = apiFiltre
                  .column( 7,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                var part_artiste = apiFiltre
                  .column( 8,{ page: 'current'} )
                  .data()
                  .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                  }, 0 );

                  function formatNumberEspace(num) {
                    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                  }

               
                    // Total filtré:
                    $( apiFiltre.column( 0 ).footer() ).html('Total Filtré');
                    $( apiFiltre.column( 2 ).footer() ).html(formatNumberEspace((ttc/1000).toFixed(3)));
                    $( apiFiltre.column( 3 ).footer() ).html(formatNumberEspace(nbr_ecoute.toFixed()));
                    $( apiFiltre.column( 4 ).footer() ).html(formatNumberEspace((part_smart/1000).toFixed(3)));
                    $( apiFiltre.column( 5 ).footer() ).html(formatNumberEspace((tax_telecom/1000).toFixed(3)));
                    $( apiFiltre.column( 6 ).footer() ).html(formatNumberEspace((part_ttc/1000).toFixed(3)));
                    $( apiFiltre.column( 7 ).footer() ).html(formatNumberEspace((htva/1000).toFixed(3)));
                    $( apiFiltre.column( 8 ).footer() ).html(formatNumberEspace((part_artiste/1000).toFixed(3)));
  
                      },
              "order": [[ 0, "desc" ]],
              "language": DatatableLanguage.datatableFrench
            } );
          } );
        })(jQuery); }, 150);

        /*-------------------------------------------------------------------------------------------*/

      })

    } else {
      console.log("----> Null");
    }

  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('table-orange-stat');
    const ws: WorkSheet = utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    writeFile(wb, this.fileName);
  }
  header = [['Nom Artiste', 'TTC']]

  public openPDF(): void {
    let DATA = document.getElementById('table-orange-stat');

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Liste top artistes.pdf');
    });
  }
 


  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadd() {
    console.log("file to upload: "+this.selectedFile);

    const uploadExcelData = new FormData();

    this.message = this.messageError = [];
    this.submitted = true;

    uploadExcelData.append('file',this.selectedFile);
    this.excelExportService.uploadExcelOrangeToDetail(uploadExcelData).subscribe((response)=>{
      this.submitted = false;
        this.message = response.body.valueOf()['message'];

  },error => this.messageError=error.valueOf()['error']['message'])};


  annuler() {
    this.r.navigate(['/pages/layout/orange-stat/']);

  }
}
