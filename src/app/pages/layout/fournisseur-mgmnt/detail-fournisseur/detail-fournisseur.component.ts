import { Component, Input, OnInit } from '@angular/core';
import { fournisseur } from '../../../../models/fournisseur';

@Component({
  selector: 'ngx-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.scss']
})
export class DetailFournisseurComponent implements OnInit {

  constructor() { }
  @Input() fournisseur : fournisseur;

  ngOnInit(): void {
  }

}
