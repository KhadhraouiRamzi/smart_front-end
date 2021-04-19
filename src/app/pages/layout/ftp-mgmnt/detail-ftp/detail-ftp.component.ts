import { Component, Input, OnInit } from '@angular/core';
import { FTP } from '../../../../models/FTP';

@Component({
  selector: 'ngx-detail-ftp',
  templateUrl: './detail-ftp.component.html',
  styleUrls: ['./detail-ftp.component.scss']
})
export class DetailFtpComponent implements OnInit {

  constructor() { }
  @Input() ftps : FTP;

  ngOnInit(): void {
  }

}
