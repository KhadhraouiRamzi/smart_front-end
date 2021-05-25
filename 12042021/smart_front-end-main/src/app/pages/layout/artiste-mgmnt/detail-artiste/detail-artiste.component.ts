import { Component, Input, OnInit } from '@angular/core';
import { artiste } from '../../../../models/artiste';

@Component({
  selector: 'ngx-detail-artiste',
  templateUrl: './detail-artiste.component.html',
  styleUrls: ['./detail-artiste.component.scss']
})
export class DetailArtisteComponent implements OnInit {

  constructor() { }
  @Input() artiste : artiste;

  ngOnInit(): void {
  }

}
