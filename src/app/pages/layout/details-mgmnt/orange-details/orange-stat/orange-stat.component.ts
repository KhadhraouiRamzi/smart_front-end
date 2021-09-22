import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { details } from '../../../../../models/details';
import { DetailsService } from '../../../../../utils/services/details.service';
import jsPDF from 'jspdf';
import { NbComponentShape, NbComponentStatus } from '@nebular/theme';
import html2canvas from 'html2canvas';
import { DataTableDirective } from 'angular-datatables';
import { utils, WorkBook, WorkSheet, writeFile } from "xlsx";
import { ExcelExportService } from '../../../../../utils/services/excel-export.service';
import { TokenStorageService } from '../../../../../auth/services/token-storage.service';
import { DatatableLanguage } from "../../../../../../assets/data/DatatableLanguage";
import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from '../../../../../utils/services/users.service';
import { users } from '../../../../../models/users';

declare var jQuery: any;

@Component({
  selector: 'ngx-orange-stat',
  templateUrl: './orange-stat.component.html',
  styleUrls: ['./orange-stat.component.scss'],
})
export class OrangeStatComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string[] = [];
  messageError: string[] = [];
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste top artiste.xlsx';
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

  constructor(private userSerivce: UsersService, private excelExportService: ExcelExportService,
    private detaisSerivce: DetailsService, private r: Router, public token: TokenStorageService) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [1, 'desc'],
      language: DatatableLanguage.datatableFrench,
    };

    this.detaisSerivce.getStatArtiste().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getStatArtisteById(idUser).subscribe(data => {
            this.details = data;

            /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

            setTimeout(function () {
              (function ($) {
                $(document).ready(function () {
                  $('#table-orange-stat').DataTable({
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

                      var tax_telecom = apiFiltre
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


                      function formatNumberEspace(num) {
                        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                      }

                      // Total filtré:
                      $(apiFiltre.column(0).footer()).html('Total Filtré');
                      $(apiFiltre.column(1).footer()).html(formatNumberEspace((ttc / 1000).toFixed()));
                      $(apiFiltre.column(2).footer()).html(formatNumberEspace(nbr_ecoute.toFixed(3)));
                      $(apiFiltre.column(3).footer()).html(formatNumberEspace((part_smart / 1000).toFixed(3)));
                      $(apiFiltre.column(4).footer()).html(formatNumberEspace((tax_telecom / 1000).toFixed(3)));
                      $(apiFiltre.column(5).footer()).html(formatNumberEspace((part_ttc / 1000).toFixed(3)));
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
        else {
          console.log(res);
          this.details = res;

          /* ------------script Js pour ajouter les totales filtrées et final des stats---------------*/

          setTimeout(function () {
            (function ($) {
              $(document).ready(function () {
                $('#table-orange-stat').DataTable({
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
                      .column(1, { page: 'current' })
                      .data()
                      .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                      }, 0)
                      ;

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

                    var tax_telecom = apiFiltre
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
                      }, 0);

                    function formatNumberEspace(num) {
                      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
                    }

                    // Total filtré:
                    $(apiFiltre.column(0).footer()).html('Total Filtré');
                    $(apiFiltre.column(1).footer()).html(formatNumberEspace(ttc.toFixed()));
                    $(apiFiltre.column(2).footer()).html(formatNumberEspace((nbr_ecoute / 1000).toFixed(3)));
                    $(apiFiltre.column(3).footer()).html(formatNumberEspace((part_smart / 1000).toFixed(3)));
                    $(apiFiltre.column(4).footer()).html(formatNumberEspace((tax_telecom / 1000).toFixed(3)));
                    $(apiFiltre.column(5).footer()).html(formatNumberEspace((part_ttc / 1000).toFixed(3)));
                    $(apiFiltre.column(6).footer()).html(formatNumberEspace((htva / 1000).toFixed(3)));

                  },
                  "order": [[2, "desc"]],
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

  displayBasic: boolean;
  currentartiste: users;

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

  Stat(u: users) {
    console.log("U stat-------->" + u);
    console.log(u[0]);

    this.userSerivce.getArtisteByNom(u[0]).subscribe(data => {
      this.details = data;
      console.log("getStatArtisteByNom ------->" + data); 
      this.currentartiste = data;
      this.displayBasic = true;
      //this.r.navigate(['/pages/layout/orange-stat-details/' + u[0]]);
    });
  }

  Artiste() {
    this.r.navigate(['/pages/layout/orange-stat/']);
  }
  Chanson() {
    this.r.navigate(['/pages/layout/orange-stat-chanson/']);
  }
  Categorie() {
    this.r.navigate(['/pages/layout/orange-stat-category/']);
  }
  Mois() {
    this.r.navigate(['/pages/layout/orange-stat-date/']);
  }
  CountA() {
    this.r.navigate(['/pages/layout/orange-stat-count-artsite/']);
  }
  CountD() {
    this.r.navigate(['/pages/layout/orange-stat-count-chanson/']);
  }
  Plateforme() {
    this.r.navigate(['/pages/layout/orange-stat-platefrome/']);
  }

  ajouter() {
    this.r.navigate(['/pages/layout/orange/']);
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
    this.excelExportService.uploadExcelOrangeToDetail(uploadExcelData).subscribe((response) => {
      this.submitted = false;
      this.message = response.body.valueOf()['message'];

    }, error => this.messageError = error.valueOf()['error']['message'])
  };

}
