import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { album } from '../../../../models/album';
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { TokenStorageService } from "../../../../auth/services/token-storage.service";
import { Browser } from "leaflet";
import { HistoriqueService } from '../../../../utils/services/historique.service';
import { historique } from '../../../../models/historique';
import { DatatableLanguage } from '../../../../../assets/data/DatatableLanguage';
import { utils, WorkBook, WorkSheet, writeFile } from "xlsx";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { details } from '../../../../models/details';
import { DetailsService } from '../../../../utils/services/details.service';
@Component({
  selector: 'ngx-list-historique',
  templateUrl: './list-historique.component.html',
  styleUrls: ['./list-historique.component.scss']
})
export class ListHistoriqueComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  selectedFile: File;
  message: string;
  error: string;
  statut: any;
  hide: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Hitorique Reneue artiste.xlsx';
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

  hist: any;
  form: any = {
    datedebut: null,
    datefin: null,
    retenue: null,
  };
  constructor(private detailsService: DetailsService, private historiqueService: HistoriqueService, private r: Router,
    private ar: ActivatedRoute, protected token: TokenStorageService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      order: [11, 'asc'],
      language: DatatableLanguage.datatableFrench,
    };

    this.historiqueService.getHistRevenu().subscribe(
      res => {

        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;

        if (role == "ROLE_ARTISTE") {
          this.historiqueService.getHistRevenuById(idUser).subscribe(data => {
            this.hist = data;
            this.dtTrigger.next();
          })
        }
        else {
          console.log(res);
          this.hist = res;
          console.log(res);
          this.dtTrigger.next();
        }
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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


  header = [['Nom Artiste', 'Net Revenu', 'Nombre d écoute']]

  public openPDF(): void {
    let DATA = document.getElementById('table-orange-stat');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Revenue artistes.pdf');
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
      body: this.hist,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc
    pdf.save('Revenue Artiste.pdf');
  }

  paye(p : details) {
    if (this.token.getUser()['roles'] == "ROLE_ADMIN") {
      
    const {namea,date1,date2} = this.form;

    console.log(p[0],p[1],p[2]);

   this.detailsService.paiementParMois(p[0],p[1],p[2]).subscribe(
     response=>{
       console.log("aa"+response)
     
        this.historiqueService.getHistRevenu().subscribe(
          res => {          
            this.hist = res;  
          // rerender datatable
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
          });
        });
      })
    }
    else window.alert("Désolé vous n'êtes pas autorisé !!");
  }

  nonPaye(p : details) {
    if (this.token.getUser()['roles'] == "ROLE_ADMIN") {
      
      const {namea,date1,date2} = this.form;
  
      console.log(p[0],p[1],p[2]);
  
     this.detailsService.compenseParMois(p[0],p[1],p[2]).subscribe(
       response=>{
         console.log("aa"+response)
       
          this.historiqueService.getHistRevenu().subscribe(
            res => {          
              this.hist = res;
            // rerender datatable
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              // Destroy the table first
              dtInstance.destroy();
              // Call the dtTrigger to rerender again
              this.dtTrigger.next();
            });
          });
        })
      }
      else window.alert("Désolé vous n'êtes pas autorisé !!");
  }

  /*
  delete(p: details) {
    if (this.token.getUser()['roles']=="ROLE_ADMIN") {
      if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nom + " ?")) {
        this.detailsService.(p.id).subscribe(res => {
          //alert('Produit deleted !');

          this.chansonService.getlistChanson().subscribe(res => {
            this.chansons = res;
            // rerender datatable
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              // Destroy the table first
              dtInstance.destroy();
              // Call the dtTrigger to rerender again
              this.dtTrigger.next();
            });
          });
        })
      }
    }
    else window.alert("Désolé vous n'êtes pas autorisé !!");
  }
*/
}