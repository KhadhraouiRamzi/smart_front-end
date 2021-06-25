import { Component, Input, OnInit } from '@angular/core';
import { plateforme } from '../../../../models/plateforme';

@Component({
  selector: 'ngx-detail-plateforme',
  templateUrl: './detail-plateforme.component.html',
  styleUrls: ['./detail-plateforme.component.scss']
})
export class DetailPlateformeComponent implements OnInit {

  constructor() { }
  @Input() plateforme : plateforme; 

  ngOnInit(): void {
  }

}
