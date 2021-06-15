import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../../@core/data/smart-table';
import { users } from '../../../../models/users';

import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Subject } from 'rxjs';
import { UsersService } from '../../../../utils/services/users.service';
import { HttpClient } from '@angular/common/http';
import { details } from '../../../../models/details';
@Component({
  selector: 'ngx-list-artiste',
  templateUrl: './list-artiste.component.html',
  styleUrls: ['./list-artiste.component.scss']
})
export class ListArtisteComponent implements OnInit {
  artistes: users;
  art: users;

  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['basic'];
  statuses7: NbComponentStatus[] = ['control'];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  //img: String;
  private pic: string;

  constructor(private httpClient: HttpClient, private service: SmartTableData, private usersService: UsersService,
    private r: Router, private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8
    };

    this.usersService.getArts().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        res[1].name = res[1].name

        let array = res;
        for (let i = 0; i < array.length; i++) {
          let arr = array[i].picByte;
          //let img = this.artistes.prenom; this.artistes.name

          this.httpClient.get('http://localhost:8081/get/' + array[i].id).subscribe(
            response => {
              this.retrieveResonse = response;
              if (this.retrieveResonse.picByte == null) {
                this.retrievedImage = "assets/images/noPhoto.png"
                array[i].picByte = this.retrievedImage;
                res[i].picByte = array[i].picByte;
                this.artistes = res;
              }
              else
                array[i].picByte = this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
              res[i].picByte = array[i].picByte;
              this.artistes = res;
            }
          );
        }
        this.dtTrigger.next();
      }
    );
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  setDefaultPic() {
    this.pic = "/assets/images/noPhoto.png";
  }
  displayBasic: boolean;
  displayBasic2: boolean;
  currentartiste: users;
  currentdetails: users;

  details(u: users) {
    this.currentartiste = u;
    this.displayBasic = true;
    //this.r.navigate(['/pages/layout/detail-artiste/' + u.id]);
  }

  revenu(d: users) {
    this.currentdetails = d;
    this.displayBasic2 = true;
  }

  modifier(u: users) {
    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-artiste/' + u.id]);
    // }
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-artiste/']);
  }

  delete(p: users) {
    if (window.confirm("êtes-vous sûr suprrimer l'artiste " + p.nom + " " + p.prenom + " ?")) {
      this.usersService.deleteUser(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.usersService.getArtistes().subscribe(res => {
          this.artistes = res;

          // rerender datatable
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
          });

        });


      })

    }
  }

}
