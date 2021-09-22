import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {details} from '../../../../../models/details';
import {DetailsService} from '../../../../../utils/services/details.service';
import jsPDF from 'jspdf';
import {NbComponentShape, NbComponentStatus} from '@nebular/theme';
import html2canvas from 'html2canvas';
import {DataTableDirective} from 'angular-datatables';
import {utils, WorkBook, WorkSheet, writeFile} from "xlsx";
import {ExcelExportService} from '../../../../../utils/services/excel-export.service';
import {TokenStorageService} from '../../../../../auth/services/token-storage.service';
import {DatatableLanguage} from "../../../../../../assets/data/DatatableLanguage";
import { Pipe, PipeTransform } from '@angular/core';
 
declare var jQuery: any;
  
@Component({
  selector: 'ngx-total-stat',
  templateUrl: './total-stat.component.html',
  styleUrls: ['./total-stat.component.scss']
})
export class TotalStatComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string[]=[];
  messageError: string[]=[];
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste artiste.xlsx';
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

  constructor(private excelExportService: ExcelExportService,
              private detaisSerivce: DetailsService, private r: Router, public token: TokenStorageService) {
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [ 1, 'desc' ],
      language : DatatableLanguage.datatableFrench,
     };

    this.detaisSerivce.getTotalStatArtiste().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTotalStatArtisteById(idUser).subscribe(data => {
            this.details = data;

            /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

            setTimeout(function() { (function ($) {
              $(document).ready(function() {
                $('#table-orange-stat').DataTable({
                  "footerCallback": function (row, data, start, end, display ) {
                    var apiFiltre = this.api(), data;
                    // converting to interger to find total
                    var intVal = function ( i ) {
                      return typeof i === 'string' ?
                      parseFloat(i.replace(/\s/g,"").replace(/[,]/g, ''))*1 :
                        typeof i === 'number' ?
                          i : 0;
                    };

                    // computing column Total of the complete result
                    var ttc = apiFiltre
                      .column( 1,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var nbr_ecoute = apiFiltre
                      .column( 2,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var part_smart = apiFiltre
                      .column( 3,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var tax_telecom = apiFiltre
                      .column( 4,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var part_ttc = apiFiltre
                      .column( 5,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var htva = apiFiltre
                      .column( 6,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    var part_artiste = apiFiltre
                      .column( 7,{ page: 'current'} )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var total_ttc = apiFiltre
                      .column( 1 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalNbrEcoute = apiFiltre
                      .column( 2 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalPartSmart = apiFiltre
                      .column( 3 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalPartTelecom = apiFiltre
                      .column( 4 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalPartTTC = apiFiltre
                      .column( 5 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalPartHTVA = apiFiltre
                      .column( 6 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

                    // Total over all pages
                    var totalPartArtiste = apiFiltre
                      .column( 7 )
                      .data()
                      .reduce( function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0 );

    
                      function formatNumberEspace(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                      }
  
                      function formatNumber(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                      }
                    // Total filtré:
                    $( apiFiltre.column( 0 ).footer() ).html('Total Filtré');
                    $( apiFiltre.column( 1 ).footer()).html(formatNumberEspace((ttc/1000).toFixed())); 
                    $( apiFiltre.column( 2 ).footer() ).html(formatNumberEspace(nbr_ecoute.toFixed(3)));
                    $( apiFiltre.column( 3 ).footer() ).html(formatNumberEspace((part_smart/1000).toFixed(3)));
                    $( apiFiltre.column( 4 ).footer() ).html(formatNumberEspace((tax_telecom/1000).toFixed(3)));
                    $( apiFiltre.column( 5 ).footer() ).html(formatNumberEspace((part_ttc/1000).toFixed(3)));
                    $( apiFiltre.column( 6 ).footer() ).html(formatNumberEspace((htva/1000).toFixed(3)));
                    $( apiFiltre.column( 7 ).footer() ).html(formatNumberEspace((part_artiste/1000).toFixed(3)));
  
                  // Total Final:
                  $('tr:eq(1) th:eq(0)', apiFiltre.table().footer()).html('Total Final');
                  $('tr:eq(1) th:eq(1)', apiFiltre.table().footer()).html(formatNumberEspace((total_ttc/1000).toFixed(3)));
                  $('tr:eq(1) th:eq(2)', apiFiltre.table().footer()).html(formatNumberEspace((totalNbrEcoute.toFixed())));
                  $('tr:eq(1) th:eq(3)', apiFiltre.table().footer()).html(formatNumberEspace((totalPartSmart/1000).toFixed(3)));
                  $('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(formatNumberEspace((totalPartTelecom/1000).toFixed(3)));
                  $('tr:eq(1) th:eq(5)', apiFiltre.table().footer()).html(formatNumberEspace((totalPartTTC/1000).toFixed(3)));
                  $('tr:eq(1) th:eq(6)', apiFiltre.table().footer()).html(formatNumberEspace((totalPartHTVA/1000).toFixed(3)));
                  $('tr:eq(1) th:eq(7)', apiFiltre.table().footer()).html(formatNumberEspace((totalPartArtiste/1000).toFixed(3)));
        },
                  "order": [[ 2, "desc" ]],
                  "language": DatatableLanguage.datatableFrench
                } );
              } );
            })(jQuery); }, 150);

            /*-------------------------------------------------------------------------------------------*/

          })
        }
        else {
          console.log(res);
          this.details = res;

          /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

          setTimeout(function() { (function ($) {
            $(document).ready(function() {
              $('#table-orange-stat').DataTable({
                "footerCallback": function (row, data, start, end, display ) {
                  var apiFiltre = this.api(), data;
                  // converting to interger to find total
                  var intVal = function ( i ) {


                    return typeof i === 'string' ?
                      parseFloat(i.replace(/\s/g,"").replace(/[,]/g, ''))*1 :
                      typeof i === 'number' ?
                        i : 0;
 
                  };

                  // computing column Total of the complete result
                  var ttc = apiFiltre
                    .column( 1,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 )
                    ;

                  var nbr_ecoute = apiFiltre
                    .column( 2,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  var part_smart = apiFiltre
                    .column( 3,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  var tax_telecom = apiFiltre
                    .column( 4,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  var part_ttc = apiFiltre
                    .column( 5,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  var htva = apiFiltre
                    .column( 6,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  var part_artiste = apiFiltre
                    .column( 7,{ page: 'current'} )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var total_ttc = apiFiltre
                    .column( 1 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalNbrEcoute = apiFiltre
                    .column( 2 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalPartSmart = apiFiltre
                    .column( 3 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalPartTelecom = apiFiltre
                    .column( 4 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalPartTTC = apiFiltre
                    .column( 5 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalPartHTVA = apiFiltre
                    .column( 6 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                  // Total over all pages
                  var totalPartArtiste = apiFiltre
                    .column( 7 )
                    .data()
                    .reduce( function (a, b) {
                      return intVal(a) + intVal(b);
                    }, 0 );

                    function formatNumberEspace(num) {
                      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                    }

                    function formatNumber(num) {
                      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                    }
                  // Total filtré:
                  $( apiFiltre.column( 0 ).footer() ).html('Total Filtré');
                  $( apiFiltre.column( 1 ).footer()).html(formatNumberEspace(ttc.toFixed())); 
                  $( apiFiltre.column( 2 ).footer() ).html(formatNumberEspace((nbr_ecoute/1000).toFixed(3)));
                  $( apiFiltre.column( 3 ).footer() ).html(formatNumberEspace((part_smart/1000).toFixed(3)));
                  $( apiFiltre.column( 4 ).footer() ).html(formatNumberEspace((tax_telecom/1000).toFixed(3)));
                  $( apiFiltre.column( 5 ).footer() ).html(formatNumberEspace((part_ttc/1000).toFixed(3)));
                  $( apiFiltre.column( 6 ).footer() ).html(formatNumberEspace((htva/1000).toFixed(3)));
                  $( apiFiltre.column( 7 ).footer() ).html(formatNumberEspace((part_artiste/1000).toFixed(3)));
 
                },
                "order": [[ 2, "desc" ]],
                "language": DatatableLanguage.datatableFrench
              } );
            } );
          })(jQuery); }, 150);
          /*-------------------------------------------------------------------------------------------*/
          console.log(res);
        }
      });

  }

  displayBasic: boolean;
  currentartiste: details;

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('table-total-stat');
    const ws: WorkSheet = utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    writeFile(wb, this.fileName);
  }
  header = [['Nom Artiste', 'TTC']]

  public openPDF(): void {
    let DATA = document.getElementById('table-total-stat');

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

  Stat(u : details){
    //this.currentartiste = u;
   // this.displayBasic = true;
    this.r.navigate(['/pages/layout/total-stat-details/' + u[0]]);
    console.log(u);
   }
   
  Artiste(){
    this.r.navigate(['/pages/layout/total-stat/']);
  }
  Chanson(){
    this.r.navigate(['/pages/layout/total-stat-chanson/']);
  }
  Categorie(){
    this.r.navigate(['/pages/layout/total-stat-category/']);
  }
  Mois(){
    this.r.navigate(['/pages/layout/total-stat-date/']);
  }
  CountA(){
    this.r.navigate(['/pages/layout/total-stat-count-artsite/']);
  }
  CountD(){
    this.r.navigate(['/pages/layout/total-stat-count-chanson/']);
  }
  Plateforme(){
    this.r.navigate(['/pages/layout/total-stat-platefrome/']);
  }

  ajouter(){
    this.r.navigate(['/pages/layout/total/']);
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

}
