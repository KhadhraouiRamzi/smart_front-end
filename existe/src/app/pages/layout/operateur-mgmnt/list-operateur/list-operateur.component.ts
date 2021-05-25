import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { operateur } from '../../../../models/operateur';
import { OperateurService } from '../../../../utils/services/operateur.service';

@Component({
  selector: 'ngx-list-operateur',
  templateUrl: './list-operateur.component.html',
  styleUrls: ['./list-operateur.component.scss']
})
export class ListOperateurComponent implements OnInit {

  operateurs: operateur;
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

  constructor(private service: SmartTableData, private operateurService: OperateurService, 
    private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.operateurService.getlistOperateur().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.operateurs = res;
        console.log(res);
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentoperateur: operateur;
 
  details(u: operateur) {
    this.currentoperateur = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-operateur/']);
  }
  modifier(u: operateur) {
    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-operateur/' + u.id]);
    console.log(u);
    // }
  }

  delete(p: operateur) {
    if (window.confirm("êtes-vous sûr suprrimer le operateur " +  p.nom +" ?")) {
      this.operateurService.deleteOperateur(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.operateurService.getlistOperateur().subscribe(res => {
          this.operateurs = res;

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
