import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { devise } from '../../../../models/devise';
import { DeviseService } from '../../../../utils/services/devise.service';

@Component({
  selector: 'ngx-list-devise',
  templateUrl: './list-devise.component.html',
  styleUrls: ['./list-devise.component.scss']
})
export class ListDeviseComponent implements OnInit {

  devises: devise[] = [];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private deviseService: DeviseService, 
    private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.deviseService.getlistDevise().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.devises = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentdevise: devise;

  details(u: devise) {
    this.currentdevise = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-devise/']);
  }

  modifier(u: devise) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-devise/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: devise) {
    if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nomd + " ?")) {
      this.deviseService.deleteDevise(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.deviseService.getlistDevise().subscribe(res => {
          this.devises = res;

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
