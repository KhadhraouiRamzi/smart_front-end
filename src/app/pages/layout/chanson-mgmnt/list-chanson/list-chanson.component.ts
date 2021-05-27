import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { chanson } from '../../../../models/chanson';
 import { ChansonService } from '../../../../utils/services/chanson.service';
import {TokenStorageService} from "../../../../auth/services/token-storage.service";
import {plateforme} from "../../../../models/plateforme";
/*import {TableModule} from 'primeng/table';
*/
@Component({
  selector: 'ngx-list-chanson',
  templateUrl: './list-chanson.component.html',
  styleUrls: ['./list-chanson.component.scss']
})
export class ListChansonComponent implements OnInit {

  chansons: chanson;
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private chansonService: ChansonService,
    private r: Router, private ar: ActivatedRoute,private token: TokenStorageService) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.chansonService.getlistChanson().subscribe(
      res => {
        let role=this.token.getUser()['roles'];
        let idUser=this.token.getUser().id;
        if (role=="ROLE_ARTISTE"){
          this.chansonService.getChansonsByUserId(idUser).subscribe(data=>{
            this.chansons=data;
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          this.chansons = res;
          console.log(res);
        }

        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentchanson: chanson;

  details(u: chanson) {
    this.currentchanson = u;
    this.displayBasic = true;
  }

  modifier(u: chanson) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    if (this.token.getUser()['roles']=="ROLE_ADMIN"){
      this.r.navigate(['/pages/layout/edit-chanson/' + u.id]);
      console.log(u);
    }
    else window.alert("Sorry you are not authorized !!");


    // }

  }


  ajouter() {
    if (this.token.getUser()['roles']=="ROLE_ADMIN") {
      this.r.navigate(['/pages/layout/form-chanson/']);
    }
    else window.alert("Sorry you are not authorised !!");
  }
  delete(p: chanson) {
    if (this.token.getUser()['roles']=="ROLE_ADMIN") {
      if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nom + " ?")) {
        this.chansonService.deleteChanson(p.id).subscribe(res => {
          //alert('Produit deleted !');

          this.chansonService.getlistChanson().subscribe(res => {
            this.chansons = res;

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
    else window.alert("Sorry you are not authorised !!");
  }

}
