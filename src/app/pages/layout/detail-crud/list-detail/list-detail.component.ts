import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { details } from '../../../../models/details';
import { DetailCrudService } from '../../../../utils/services/detail-crud.service';

@Component({
  selector: 'ngx-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  detail: details[] = [];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private detailService: DetailCrudService, 
    private r: Router, private ar: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.detailService.getlistDetail().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.detail = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentdetail: details;
/*
  details(u: details) {
    this.currentdetail = u;
    this.displayBasic = true;
  }
*/
  ajouter() {
    this.r.navigate(['/pages/layout/ngx-form-detail/']);
  }

  modifier(u: details) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/ngx-edit-detail/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: details) {
    if (window.confirm("êtes-vous sûr suprrimer le produit ?")) {
      this.detailService.deleteDetail(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.detailService.getlistDetail().subscribe(res => {
          this.detail = res;

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
