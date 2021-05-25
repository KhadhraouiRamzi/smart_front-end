import { Component, Input, OnInit } from '@angular/core';
import { devise } from '../../../../models/devise';

@Component({
  selector: 'ngx-detail-devise',
  templateUrl: './detail-devise.component.html',
  styleUrls: ['./detail-devise.component.scss']
})
export class DetailDeviseComponent implements OnInit {

  constructor() { }
  @Input() devises : devise;

  ngOnInit(): void {
  }

}
