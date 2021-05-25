import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { users } from '../../../../../models/users';
import { UsersService } from '../../../../../utils/services/users.service';

@Component({
  selector: 'ngx-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  u: users;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;

   @Input() title: string;
   @Input() artiste: users;

  constructor(private ar: ActivatedRoute,protected ref: NbDialogRef<DialogComponent>,private httpClient: HttpClient, private artisteService: UsersService) {}
  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    throw new Error('Method not implemented.');
     if (this.artiste) {
      console.log(this.artiste.name)
    }
  }

  dismiss() {
    this.ref.close();
  }

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
  
} 
