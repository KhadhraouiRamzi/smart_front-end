import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { marketing } from '../../../../models/marketing';
import { MarketingService } from '../../../../utils/services/marketing.service';

@Component({
  selector: 'ngx-list-marketing',
  templateUrl: './list-marketing.component.html',
  styleUrls: ['./list-marketing.component.scss']
})
export class ListMarketingComponent implements OnInit {

  marketings: marketing[] = [];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private marketingService: MarketingService, 
    private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.marketingService.getlistMarketing().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.marketings = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentmarketing: marketing;

  details(u: marketing) {
    this.currentmarketing = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-marketing/']);
  }

  modifier(u: marketing) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-marketing/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: marketing) {
    if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nom + " ?")) {
      this.marketingService.deleteMarketing(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.marketingService.getlistMarketing().subscribe(res => {
          this.marketings = res;

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
