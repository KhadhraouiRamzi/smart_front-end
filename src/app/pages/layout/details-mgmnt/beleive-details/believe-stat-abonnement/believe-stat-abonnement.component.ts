  import { Component, OnInit, ViewChild } from '@angular/core';
  import { Router } from '@angular/router';
  import { Subject } from 'rxjs';
  import jsPDF from 'jspdf';
  import { NbComponentShape, NbComponentStatus } from '@nebular/theme';
  import html2canvas from 'html2canvas';
  import { DataTableDirective } from 'angular-datatables';
  import { utils, WorkBook, WorkSheet, writeFile } from "xlsx";
  import { details } from '../../../../../models/details';
  import { BelieveService } from '../../../../../utils/services/believe.service';
  import { ExcelExportService } from '../../../../../utils/services/excel-export.service';
  import { TokenStorageService } from '../../../../../auth/services/token-storage.service';
  import { DatatableLanguage } from '../../../../../../assets/data/DatatableLanguage';
  declare var jQuery: any;
  @Component({
    selector: 'ngx-believe-stat-abonnement',
    templateUrl: './believe-stat-abonnement.component.html',
    styleUrls: ['./believe-stat-abonnement.component.scss']
  })
  export class BelieveStatAbonnementComponent implements OnInit {
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;

    selectedFile: File;
    message: string[] = [];
    messageError: string[] = [];
    statut: any;
    hide: any;
    dtOptions: DataTables.Settings = {};
    dtTrigger = new Subject();
    fileName = 'Liste aboonement.xlsx';
    details: details;
    st: any;
    statuses: NbComponentStatus[] = ['success'];
    statuses2: NbComponentStatus[] = ['primary'];
    statuses3: NbComponentStatus[] = ['danger'];
    statuses4: NbComponentStatus[] = ['basic'];
    statuses5: NbComponentStatus[] = ['warning'];
    statuses6: NbComponentStatus[] = ['info'];
    statuses7: NbComponentStatus[] = ['control'];
    shapes: NbComponentShape[] = ['round'];
    submitted: boolean = false;

    constructor(private excelExportService: ExcelExportService,
      private believeSerivce: BelieveService, private r: Router, public token: TokenStorageService) {
    }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        order: [1, 'desc'],
        language: DatatableLanguage.datatableFrench,
      };

      this.believeSerivce.getStatAbonnementBelieve().subscribe(
        res => {
          let role = this.token.getUser()['roles'];
          let idUser = this.token.getUser().id;
          if (role == "ROLE_ARTISTE") {
            this.believeSerivce.getStatAbonnementBelieveById(idUser).subscribe(data => {
              this.details = data;

              /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

              setTimeout(function () {
                (function ($) {
                  $(document).ready(function () {
                    $('#table-believe-stat-abonnement').DataTable({
                      "footerCallback": function (row, data, start, end, display) {
                        var apiFiltre = this.api(), data;
                        // converting to interger to find total
                        var intVal = function (i) {
                          return typeof i === 'string' ?
                            parseFloat(i.replace(/[,]/g, '')) * 1 :
                            typeof i === 'number' ?
                              i : 0;
                        };

                        // computing column Total of the complete result
                        var ttc = apiFiltre
                          .column(1, { page: 'current' })
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);

                        var nbr_ecoute = apiFiltre
                          .column(2, { page: 'current' })
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);

                        var part_smart = apiFiltre
                          .column(3, { page: 'current' })
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);



                        var part_artiste = apiFiltre
                          .column(4, { page: 'current' })
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);

                        // Total over all pages
                        var total_ttc = apiFiltre
                          .column(1)
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);

                        // Total over all pages
                        var totalNbrEcoute = apiFiltre
                          .column(2)
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);

                        // Total over all pages
                        var totalPartSmart = apiFiltre
                          .column(3)
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);


                        // Total over all pages
                        var totalPartArtiste = apiFiltre
                          .column(4)
                          .data()
                          .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                          }, 0);


                        // Total filtré:
                        $(apiFiltre.column(0).footer()).html('Total Filtré');
                        $(apiFiltre.column(1).footer()).html(ttc.toFixed(3));
                        $(apiFiltre.column(2).footer()).html(nbr_ecoute.toFixed());
                        $(apiFiltre.column(3).footer()).html(part_smart.toFixed(3));
                       /* $(apiFiltre.column(4).footer()).html(tax_telecom.toFixed(3));
                        $(apiFiltre.column(5).footer()).html(part_ttc.toFixed(3));
                        $(apiFiltre.column(6).footer()).html(htva.toFixed(3));*/
                        $(apiFiltre.column(4).footer()).html(part_artiste.toFixed(3));

                        // Total Final:
                        $('tr:eq(1) th:eq(0)', apiFiltre.table().footer()).html('Total Final');
                        $('tr:eq(1) th:eq(1)', apiFiltre.table().footer()).html(total_ttc.toFixed(3));
                        $('tr:eq(1) th:eq(2)', apiFiltre.table().footer()).html(totalNbrEcoute.toFixed());
                        $('tr:eq(1) th:eq(3)', apiFiltre.table().footer()).html(totalPartSmart.toFixed(3));
                        /*$('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartTelecom.toFixed(3));
                        $('tr:eq(1) th:eq(5)', apiFiltre.table().footer()).html(totalPartTTC.toFixed(3));
                        $('tr:eq(1) th:eq(6)', apiFiltre.table().footer()).html(totalPartHTVA.toFixed(3));*/
                        $('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartArtiste.toFixed(3));

                      },
                      "order": [[1, "desc"]],
                      "language": DatatableLanguage.datatableFrench
                    });
                  });
                })(jQuery);
              }, 150);

              /*-------------------------------------------------------------------------------------------*/

            })
          }
          else {
            console.log(res);
            this.details = res;

            /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

            setTimeout(function () {
              (function ($) {
                $(document).ready(function () {
                  $('#table-believe-stat-abonnement').DataTable({
                    "footerCallback": function (row, data, start, end, display) {
                      var apiFiltre = this.api(), data;
                      // converting to interger to find total
                      var intVal = function (i) {
                        return typeof i === 'string' ?
                          parseFloat(i.replace(/[,]/g, '')) * 1 :
                          typeof i === 'number' ?
                            i : 0;
                      };

                      // computing column Total of the complete result
                      var ttc = apiFiltre
                        .column(1, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var nbr_ecoute = apiFiltre
                        .column(2, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var part_smart = apiFiltre
                        .column(3, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                     /* var tax_telecom = apiFiltre
                        .column(4, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var part_ttc = apiFiltre
                        .column(5, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      var htva = apiFiltre
                        .column(6, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);*/

                      var part_artiste = apiFiltre
                        .column(4, { page: 'current' })
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var total_ttc = apiFiltre
                        .column(1)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalNbrEcoute = apiFiltre
                        .column(2)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalPartSmart = apiFiltre
                        .column(3)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                     /* var totalPartTelecom = apiFiltre
                        .column(4)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalPartTTC = apiFiltre
                        .column(5)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);

                      // Total over all pages
                      var totalPartHTVA = apiFiltre
                        .column(6)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);*/

                      // Total over all pages
                      var totalPartArtiste = apiFiltre
                        .column(4)
                        .data()
                        .reduce(function (a, b) {
                          return intVal(a) + intVal(b);
                        }, 0);


                      // Total filtré:
                      $(apiFiltre.column(0).footer()).html('Total Filtré');
                      $(apiFiltre.column(1).footer()).html(ttc.toFixed(3));
                      $(apiFiltre.column(2).footer()).html(nbr_ecoute.toFixed());
                      $(apiFiltre.column(3).footer()).html(part_smart.toFixed(3));
                      /*$(apiFiltre.column(4).footer()).html(tax_telecom.toFixed(3));
                      $(apiFiltre.column(5).footer()).html(part_ttc.toFixed(3));
                      $(apiFiltre.column(6).footer()).html(htva.toFixed(3));*/
                      $(apiFiltre.column(4).footer()).html(part_artiste.toFixed(3));

                      // Total Final:
                      $('tr:eq(1) th:eq(0)', apiFiltre.table().footer()).html('Total Final');
                      $('tr:eq(1) th:eq(1)', apiFiltre.table().footer()).html(total_ttc.toFixed(3));
                      $('tr:eq(1) th:eq(2)', apiFiltre.table().footer()).html(totalNbrEcoute.toFixed());
                      $('tr:eq(1) th:eq(3)', apiFiltre.table().footer()).html(totalPartSmart.toFixed(3));
                      /*$('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartTelecom.toFixed(3));
                      $('tr:eq(1) th:eq(5)', apiFiltre.table().footer()).html(totalPartTTC.toFixed(3));
                      $('tr:eq(1) th:eq(6)', apiFiltre.table().footer()).html(totalPartHTVA.toFixed(3));*/
                      $('tr:eq(1) th:eq(4)', apiFiltre.table().footer()).html(totalPartArtiste.toFixed(3));

                    },
                    "order": [[1, "desc"]],
                    "language": DatatableLanguage.datatableFrench
                  });
                });
              })(jQuery);
            }, 150);

            /*-------------------------------------------------------------------------------------------*/
            console.log(res);

          }
        });
   }

    exportexcel(): void {
      /* table id is passed over here */
      let element = document.getElementById('table-believe-stat-abonnement');
      const ws: WorkSheet = utils.table_to_sheet(element);

      /* generate workbook and add the worksheet */
      const wb: WorkBook = utils.book_new();
      utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      writeFile(wb, this.fileName);
    }


    header = [['Nom Artiste', 'Net Revenu', 'Nombre d écoute']]

    public openPDF(): void {
      let DATA = document.getElementById('table-believe-stat-abonnement');

      html2canvas(DATA).then(canvas => {

        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

        PDF.save('Liste abonnement.pdf');
      });
    }

    Artiste() {
      this.r.navigate(['/pages/layout/believe/']);
    }
    Chanson() {
      this.r.navigate(['/pages/layout/believe-stat-chanson/']);
    }
    Pays() {
      this.r.navigate(['/pages/layout/believe-stat-pays/']);
    }
    Mois() {
      this.r.navigate(['/pages/layout/believe-stat-date/']);
    }
    Abonnement() {
      this.r.navigate(['/pages/layout/believe-stat-abonnement/']);
    }
    Plateforme() {
      this.r.navigate(['/pages/layout/believe-stat-platefrome/']);
    }



    selectFile(event) {
      this.selectedFile = event.target.files[0];
    }

    uploadd() {
      console.log("file to upload: " + this.selectedFile);

      const uploadExcelData = new FormData();

      this.message = this.messageError = [];
      this.submitted = true;

      uploadExcelData.append('file', this.selectedFile);
      this.excelExportService.uploadExcelBeliveToDetail(uploadExcelData).subscribe((response) => {
        this.submitted = false;
        this.message = response.body.valueOf()['message'];
      }, error => this.messageError = error.valueOf()['error']['message'])
    };
  }

