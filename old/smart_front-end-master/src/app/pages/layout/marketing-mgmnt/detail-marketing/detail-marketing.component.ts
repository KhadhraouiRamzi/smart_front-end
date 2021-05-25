import { Component, Input, OnInit } from '@angular/core';
import { marketing } from '../../../../models/marketing';

@Component({
  selector: 'ngx-detail-marketing',
  templateUrl: './detail-marketing.component.html',
  styleUrls: ['./detail-marketing.component.scss']
})
export class DetailMarketingComponent implements OnInit {

  constructor() { }
  @Input() marketings : marketing;

  ngOnInit(): void {
  }

}
