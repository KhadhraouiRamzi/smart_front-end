import { Component, Input, OnInit } from '@angular/core';
import { operateur } from '../../../../models/operateur';

@Component({
  selector: 'ngx-detail-operateur',
  templateUrl: './detail-operateur.component.html',
  styleUrls: ['./detail-operateur.component.scss']
})
export class DetailOperateurComponent implements OnInit {

  constructor() { }
  @Input() operateur : operateur;
  ngOnInit(): void {
  }

}
