import { Component, Input, OnInit } from '@angular/core';
import { chanson } from '../../../../models/chanson';

@Component({
  selector: 'ngx-detail-chanson',
  templateUrl: './detail-chanson.component.html',
  styleUrls: ['./detail-chanson.component.scss']
})
export class DetailChansonComponent implements OnInit {

  constructor() { }
  @Input() chanson : chanson;

  ngOnInit(): void {
  }

}
