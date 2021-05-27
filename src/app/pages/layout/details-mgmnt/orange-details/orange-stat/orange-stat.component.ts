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

@Component({
  selector: 'ngx-orange-stat',
  templateUrl: './orange-stat.component.html',
  styleUrls: ['./orange-stat.component.scss']
})
export class OrangeStatComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string;
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste top artiste.xlsx';
  details: details;
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['basic'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['info'];
  statuses7: NbComponentStatus[] = ['control'];
  shapes: NbComponentShape[] = ['round'];

  constructor(private excelExportService: ExcelExportService,
              private detaisSerivce: DetailsService, private r: Router, public token: TokenStorageService) {
  }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [ 1, 'desc' ],
      language : DatatableLanguage.datatableFrench
    };

    this.detaisSerivce.getStatArtiste().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getStatArtisteById(idUser).subscribe(data => {
            this.details = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.details = res;
          console.log(res);
          this.dtTrigger.next();
        }


      });
  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: WorkSheet = utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    writeFile(wb, this.fileName);
  }


  header = [['Nom Artiste', 'Net Revenu', 'Nombre d écoute']]

  public openPDF(): void {
    let DATA = document.getElementById('excel-table');

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

    uploadExcelData.append('file', this.selectedFile);
    this.excelExportService.uploadExcelToDetail(uploadExcelData).subscribe(response => {
      this.statut = response.status;
      this.message = response.body.valueOf()['message'];
    }, error => this.message = error.message);
  }


}
