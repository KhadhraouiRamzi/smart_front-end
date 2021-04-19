import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { TokenStorageService } from '../../../../auth/services/token-storage.service';
import { chanson } from '../../../../models/chanson';
import { users } from '../../../../models/users';
import { ChansonService } from '../../../../utils/services/chanson.service';
import { UsersService } from '../../../../utils/services/users.service';
/*import {TableModule} from 'primeng/table';*/
@Component({
  selector: 'ngx-list-chanson',
  templateUrl: './list-chanson.component.html',
  styleUrls: ['./list-chanson.component.scss']
})
export class ListChansonComponent implements OnInit {

  chansons: chanson[] = [];
  chanson: chanson;
  pa: chanson;
  user: users;
  currentUser: any;

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
  role: any;

  constructor(private service: SmartTableData, private token: TokenStorageService, private chansonService: ChansonService,
    private r: Router, private userService: UsersService, private ar: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.role = this.token.getUser()['roles'];
    console.log(this.role[0]);
    if (this.role[0] == 'ROLE_ADMIN') {
      this.chansonService.getlistChanson().subscribe(
        res => {
          // Swal.fire('This is a simple and sweet alert')
          console.log(res);
          this.chansons = res;
          this.dtTrigger.next();
        });
    }
    else {
      let u = this.currentUser = this.token.getUser();

      this.userService.getUserById(u.id).subscribe(data => {
        this.user = data;
        console.log(this.user.roles);

        this.chansonService.getListChansonById(this.user.id).subscribe(
          res => {
            // Swal.fire('This is a simple and sweet alert')
            console.log(res);
            this.chansons = res;
            this.dtTrigger.next();
          });
      });
    }
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
    this.r.navigate(['/pages/layout/edit-chanson/' + u.id]);
    console.log(u);
    // }
  }
  ajouter() {
    this.r.navigate(['/pages/layout/form-chanson/']);
  }
  delete(p: chanson) {
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
}
