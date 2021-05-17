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
  arrayBuffer: string | ArrayBuffer;

  constructor() { }

  ngOnInit(): void {
  }
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
  fileReader(file: any, classe: { libelle: any; ecole: any; date_creation: any; nbre_etudiant: any; }) {
    throw new Error('Method not implemented.');
  }
  // ...
 
}
