import { Component, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
 
@Component({
  selector: 'ngx-orange-details',
  templateUrl: './orange-details.component.html',
  styleUrls: ['./orange-details.component.scss']
})
export class OrangeDetailsComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  file: any;

  constructor() { }

  ngOnInit(): void {
  }
  /*
  getFile(event: any) {
    this.file = event.target.files[0];
    
    const classe = {
      libelle: null,
      ecole: null,
      date_creation: null,
      nbre_etudiant: null
    };
    
    this.fileReader(this.file, classe);
  }
  // ...

  private fileReader(file: any, line: any) {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();

      for (let i = 0; i !== data.length; i++) {
        arr[i] = String.fromCharCode(data[i]);
      }

      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true });
      const first_sheet_name = workbook.SheetNames[0];

      const worksheet = workbook.Sheets[first_sheet_name];
      this.worksheet = XLSX.utils.sheet_to_json(worksheet, { raw: true });

     
      this.matchingCell(this.worksheet, line);
    };
    fileReader.readAsArrayBuffer(file);
  }
  */
}
