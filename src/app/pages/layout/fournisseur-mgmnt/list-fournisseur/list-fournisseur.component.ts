import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
 import { users } from '../../../../models/users';
 import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.scss']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs: users;
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

  constructor(private service: SmartTableData, private fournisseurService: UsersService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.fournisseurService.getFours().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.fournisseurs = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentfournisseur: users;

  details(u: users) {
    this.currentfournisseur = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-fournisseur/']);
  }
  modifier(u: users) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-fournisseur/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: users) {
    if (window.confirm("êtes-vous sûr suprrimer le fournisseur " +  p.nom +" ?")) {
      this.fournisseurService.deleteUser(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.fournisseurService.getFournisseurs().subscribe(res => {
          this.fournisseurs = res;

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
