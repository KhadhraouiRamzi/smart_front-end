import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { plateforme } from '../../../../models/plateforme';
import { PlateformeService } from '../../../../utils/services/plateforme.service';

@Component({
  selector: 'ngx-list-plateforme',
  templateUrl: './list-plateforme.component.html',
  styleUrls: ['./list-plateforme.component.scss']
})
export class ListPlateformeComponent implements OnInit {

  plateformes: plateforme;
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

  constructor(private service: SmartTableData, private plateformeService: PlateformeService, private r: Router,
     private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.plateformeService.getlistPlateforme().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.plateformes = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentplateforme: plateforme;

  details(u: plateforme) {
    this.currentplateforme = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-plateforme/']);
  }
  modifier(u: plateforme) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-plateforme/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: plateforme) {
    if (window.confirm("êtes-vous sûr suprrimer le plateforme " +  p.nom +" ?")) {
      this.plateformeService.deletePlateforme(p.id).subscribe(res => {
        //alert('Produit deleted !');
        console.log(p);
        this.plateformeService.getPlateforme().subscribe(res => {
          this.plateformes = res;

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
