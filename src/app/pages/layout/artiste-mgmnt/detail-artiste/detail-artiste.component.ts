import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { users } from '../../../../models/users';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-detail-artiste',
  templateUrl: './detail-artiste.component.html',
  styleUrls: ['./detail-artiste.component.scss']
})
export class DetailArtisteComponent implements OnInit {
  u: users;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;

  constructor(private httpClient: HttpClient, private artisteService: UsersService) { }
  @Input() artiste: users;
  // @Input() person:IContact;
  @Output() onChange: EventEmitter<users> = new EventEmitter();

  ngOnChanges() { // <- it will run every time and give you the latest value of fieldType
    if (this.artiste) {
      this.httpClient.get('http://localhost:8081/get/' + this.artiste.name).subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
    }
  }
  ngOnInit(): void {
    if (this.artiste) {

      console.log(this.artiste.name)

  
    }
  }
}