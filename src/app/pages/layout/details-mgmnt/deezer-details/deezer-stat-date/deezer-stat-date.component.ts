import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { details } from '../../../../../models/details';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import html2canvas from 'html2canvas';
import { DataTableDirective } from 'angular-datatables';
import { ExcelExportService } from '../../../../../utils/services/excel-export.service';
import { TokenStorageService } from '../../../../../auth/services/token-storage.service';
import { DatatableLanguage } from "../../../../../../assets/data/DatatableLanguage";
import { DeezerService } from '../../../../../utils/services/deezer.service';
declare var jQuery: any;
@Component({
  selector: 'ngx-deezer-stat-date',
  templateUrl: './deezer-stat-date.component.html',
  styleUrls: ['./deezer-stat-date.component.scss']
})
export class DeezerStatDateComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string;
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste top date.xlsx';
  details: details;
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['basic'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['info'];
  statuses7: NbComponentStatus[] = ['control'];
  sizes: NbComponentSize[] = ['giant'];
  shapes: NbComponentShape[] = ['round'];

  constructor(private excelExportService: ExcelExportService, private deezerSerivce: DeezerService, private r: Router,
    public token: TokenStorageService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [2, 'desc'],
      language: DatatableLanguage.datatableFrench
    };

    this.deezerSerivce.getStatDateDeezer().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.deezerSerivce.getStatDateDeezerById(idUser).subscribe(data => {
            this.details = data;
            /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

            setTimeout(function () {
              (function ($) {
                $(document).ready(function () {
                  $('#table-deezer-stat-date').DataTable({
                    "footerCallback": function (row, data, start, end, display) {
                      var apiFiltre = this.api(), data;
                      // converting to interger to find total
                      var intVal = function (i) {
                        return typeof i === 'string' ?
                          parseFloat(i.replace(/\s/g, "").replace(/[,]/g, '')) * 1 :
                          typeof i === 'number' ?
                            i : 0;
                      };

                      // computing column Total of the complete result
                      var ttc = apiFiltre
                        .column(2, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var nbr_ecoute = apiFiltre
                        .column(3, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var part_smart = apiFiltre
                        .column(4, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);
                      var part_artiste = apiFiltre
                        .column(5, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var total_ttc = apiFiltre
                        .column(2)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalNbrEcoute = apiFiltre
                        .column(3)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalPartSmart = apiFiltre
                        .column(4)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalPartArtiste = apiFiltre
                        .column(5)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      function formatNumberEspace(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                      }

                      // Total filtré:
                      $(apiFiltre.column(0).footer()).html('Total Filtré');
                      $(apiFiltre.column(2).footer()).html(formatNumberEspace((ttc / 1000).toFixed(3)));
                      $(apiFiltre.column(3).footer()).html(formatNumberEspace(nbr_ecoute.toFixed()));
                      $(apiFiltre.column(4).footer()).html(formatNumberEspace((part_smart / 1000).toFixed(3)));
                      $(apiFiltre.column(5).footer()).html(formatNumberEspace((part_artiste / 1000).toFixed(3)));

                      // Total Final:
                      $('tr:eq(1) th:eq(0)', apiFiltre.table().footer()).html('Total Final');
                      $('tr:eq(1) th:eq(1)', apiFiltre.table().footer()).html(total_ttc.toFixed(3));
                      $('tr:eq(1) th:eq(2)', apiFiltre.table().footer()).html(totalNbrEcoute.toFixed());
                      $('tr:eq(1) th:eq(3)', apiFiltre.table().footer()).html(totalPartSmart.toFixed(3));
                      $('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartArtiste.toFixed(3));

                    },
                    "order": [[2, "desc"]],
                    "language": DatatableLanguage.datatableFrench
                  });
                });
              })(jQuery);
            }, 150);

            /*-------------------------------------------------------------------------------------------*/
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {

          this.details = res;

          /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

          setTimeout(function () {
            (function ($) {
              $(document).ready(function () {
                $('#table-deezer-stat-date').DataTable({
                  "footerCallback": function (row, data, start, end, display) {
                    var apiFiltre = this.api(), data;
                    // converting to interger to find total
                    var intVal = function (i) {
                      return typeof i === 'string' ?
                        parseFloat(i.replace(/\s/g, "").replace(/[,]/g, '')) * 1 :
                        typeof i === 'number' ?
                          i : 0;

                    };

                    // computing column Total of the complete result
                    var ttc = apiFiltre
                      .column(2, { page: 'current' })
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                    var nbr_ecoute = apiFiltre
                      .column(3, { page: 'current' })
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                    var part_smart = apiFiltre
                      .column(4, { page: 'current' })
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);
                    var part_artiste = apiFiltre
                      .column(5, { page: 'current' })
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                    // Total over all pages
                    var total_ttc = apiFiltre
                      .column(2)
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                    // Total over all pages
                    var totalNbrEcoute = apiFiltre
                      .column(3)
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                    // Total over all pages
                    var totalPartSmart = apiFiltre
                      .column(4)
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);
                    var totalPartArtiste = apiFiltre
                      .column(5)
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0);

                      function formatNumberEspace(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                      }    

                    // Total filtré:
                    $( apiFiltre.column( 0 ).footer() ).html('Total Filtré');
                    $( apiFiltre.column( 2 ).footer() ).html(formatNumberEspace((ttc/1000).toFixed(3))); 
                    $( apiFiltre.column( 3 ).footer() ).html(formatNumberEspace(nbr_ecoute.toFixed()));
                    $( apiFiltre.column( 4 ).footer() ).html(formatNumberEspace((part_smart/1000).toFixed(3)));
                    $( apiFiltre.column( 5 ).footer() ).html(formatNumberEspace((part_artiste/1000).toFixed(3)));

                    // Total Final:
                    $('tr:eq(1) th:eq(0)', apiFiltre.table().footer()).html('Total Final');
                    $('tr:eq(1) th:eq(1)', apiFiltre.table().footer()).html(total_ttc.toFixed(3));
                    $('tr:eq(1) th:eq(2)', apiFiltre.table().footer()).html(totalNbrEcoute.toFixed());
                    $('tr:eq(1) th:eq(3)', apiFiltre.table().footer()).html(totalPartSmart.toFixed(3)); 
                    $('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartArtiste.toFixed(3));

                  },
                  "order": [[2, "desc"]],
                  "language": DatatableLanguage.datatableFrench
                });
              });
            })(jQuery);
          }, 150);

          /*-------------------------------------------------------------------------------------------*/

        }


      });
  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('table-deezer-stat-date');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }


  header = [['Date debut', 'Date fin', 'Net revenu', 'Nombre d écoute']]

  public openPDF(): void {
    let DATA = document.getElementById('table-deezer-stat-date');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Liste top date.pdf');
    });
  }

  generatePdf() {
    var pdf = new jsPDF();

    pdf.setFontSize(2);
    pdf.text('Smart Technoloy PDF', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);

    (pdf as any).autoTable({
      head: this.header,
      body: this.details,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc
    pdf.save('Artiste.pdf');
  }

  Artiste() {
    this.r.navigate(['/pages/layout/deezer/']);
  }
  Chanson() {
    this.r.navigate(['/pages/layout/deezer-stat-chanson/']);
  }
  Categorie() {
    this.r.navigate(['/pages/layout/deezer-stat-category/']);
  }
  Mois() {
    this.r.navigate(['/pages/layout/deezer-stat-date/']);
  }
  CountA() {
    this.r.navigate(['/pages/layout/deezer-stat-count-artsite/']);
  }
  CountD() {
    this.r.navigate(['/pages/layout/deezer-stat-count-chanson/']);
  }

  Plateforme() {
    this.r.navigate(['/pages/layout/deezer-stat-platefrome/']);
  }

  Pays() {
    this.r.navigate(['/pages/layout/deezer-stat-pays/']);
  }

  Abonnement() {
    this.r.navigate(['/pages/layout/deezer-stat-abonnement/']);
  }
  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadd() {
    console.log("file to upload: " + this.selectedFile);

    const uploadExcelData = new FormData();

    uploadExcelData.append('file', this.selectedFile);
    this.excelExportService.uploadExcelBeliveToDetail(uploadExcelData).subscribe(response => {
      this.statut = response.status;
      this.message = response.body.valueOf()['message'];
    }, error => this.message = error.message);
  }

}
