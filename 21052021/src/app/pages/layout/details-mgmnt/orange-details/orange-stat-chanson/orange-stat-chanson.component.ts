import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { details } from '../../../../../models/details';
import { DetailsService } from '../../../../../utils/services/details.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { NbComponentStatus } from '@nebular/theme';
@Component({
  selector: 'ngx-orange-stat-chanson',
  templateUrl: './orange-stat-chanson.component.html',
  styleUrls: ['./orange-stat-chanson.component.scss']
})
export class OrangeStatChansonComponent implements OnInit {
  
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  fileName = 'Liste top artistes.xlsx';
  details: details[];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['basic'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['info'];
  statuses7: NbComponentStatus[] = ['control'];

  constructor(private detaisSerivce: DetailsService, private r: Router) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language:{url:"/assets/datatable-French.json"},
    };

    this.detaisSerivce.getStatChanson().subscribe(
      res => {
        console.log(res);
        this.details = res;
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


  header = [['Nom Artiste', 'Net Revenu', 'Nombre d écoute']]

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
  Artiste(){    
    this.r.navigate(['/pages/layout/orange-stat/']);
  }

  Chanson(){    
    this.r.navigate(['/pages/layout/orange-stat-chanson/']);
  }
  Categorie(){    
    this.r.navigate(['/pages/layout/orange-stat-category/']);
  }

  Mois(){    
    this.r.navigate(['/pages/layout/orange-stat-date/']);
  }

  CountA(){    
    this.r.navigate(['/pages/layout/orange-stat-count-artsite/']);
  }

  CountD(){    
    this.r.navigate(['/pages/layout/orange-stat-count-chanson/']);
  }
}
