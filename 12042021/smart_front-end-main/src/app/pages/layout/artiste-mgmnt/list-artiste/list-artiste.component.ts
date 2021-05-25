import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../../@core/data/smart-table';
import { artiste } from '../../../../models/artiste';
import { ArtisteService } from '../../../../utils/services/artiste.service';

import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Subject } from 'rxjs';
@Component({
  selector: 'ngx-list-artiste',
  templateUrl: './list-artiste.component.html',
  styleUrls: ['./list-artiste.component.scss']
})
export class ListArtisteComponent implements OnInit {
  artistes: artiste[] = [];
  arts: artiste[] = [];
   statuses: NbComponentStatus[] = [ 'success'  ];
  statuses2: NbComponentStatus[] = [ 'primary'  ];
  statuses3: NbComponentStatus[] = [ 'danger'  ];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
 
 dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
 
  constructor(private service: SmartTableData, private artisteService: ArtisteService,private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 5
     };
     
     this.artisteService.getlistArtiste().subscribe(
       res => {
        // Swal.fire('This is a simple and sweet alert')
         console.log(res);
         this.artistes = res;
         console.log(res);
         this.dtTrigger.next();
 
         //  this.produit.categorie.nomC;
         // Calling the DT trigger to manually render the table
         //this.dtTrigger.next();
         /*this.setcategorie(2);
         if (this.produits) {
           
           alert("Edit avec succès du produit ");
         }*/
       });
   }
   
   ngOnDestroy(): void {
     // Do not forget to unsubscribe the event
     this.dtTrigger.unsubscribe();
   }
   displayBasic: boolean;
   currentartiste: artiste;
 
   details(u: artiste) {
     this.currentartiste = u;
     this.displayBasic = true;
   }
 
   modifier(u: artiste) {
 
     //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
     this.r.navigate(['/pages/layout/edit-artiste/' + u.id]);
     console.log(u);
 
     // }
 
   }
 
   delete(p: artiste) {
     if (window.confirm("êtes-vous sûr suprrimer le produit " + p.nom +" "+ p.prenom + " ?")) {
       this.artisteService.deleteArtiste(p.id).subscribe(res => {
         //alert('Produit deleted !');
 
         this.artisteService.getlistArtiste().subscribe(res => {
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
