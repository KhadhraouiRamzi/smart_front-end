import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { details } from '../../../../../models/details';
import { DetailsService } from '../../../../../utils/services/details.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'ngx-orange-stat-category',
  templateUrl: './orange-stat-category.component.html',
  styleUrls: ['./orange-stat-category.component.scss']
})
export class OrangeStatCategoryComponent implements OnInit {
 
  categorie: details[] = [];
  fileName = 'Liste Artistes.xlsx';  

  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private detailsService: DetailsService, private r: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.detailsService.getStatCategory().subscribe(
      res => {
        console.log(res);
        this.categorie = res;
        console.log(res);
        this.dtTrigger.next();

      });

  }
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }


  header = [['Nom', 'Prenom', 'Phone', 'Email', 'CIN', 'Part']]

  generatePdf() {
    var pdf = new jsPDF();

    pdf.setFontSize(2);
    pdf.text('Smart Technoloy PDF', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);


    (pdf as any).autoTable({
      head: this.header,
      body: this.categorie,
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
}