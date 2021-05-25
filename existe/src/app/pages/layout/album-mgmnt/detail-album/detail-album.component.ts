import { Component, Input, OnInit } from '@angular/core';
import { album } from '../../../../models/album';

@Component({
  selector: 'ngx-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.scss']
})
export class DetailAlbumComponent implements OnInit {

  @Input() album : album;

  constructor() { }

  ngOnInit(): void {
  }

}
