import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { artiste } from '../../../../models/artiste';
import { ArtisteService } from '../../../../utils/services/artiste.service';

@Component({
  selector: 'ngx-edit-artiste',
  templateUrl: './edit-artiste.component.html',
  styleUrls: ['./edit-artiste.component.scss']
})
export class EditArtisteComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : artiste;
  artiste : artiste[] =[];

  constructor(private artisteService :ArtisteService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

     ngOnInit(): void {
      let routeId = this.ar.snapshot.paramMap.get('id');
      let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
      console.log(id);
      if (!isNaN(id)){
       this.artisteService.getArtisteById(id).subscribe(
         response => {
           this.u = response;
           console.log(response);}
           
       )
  
      }else {
  
      }
     
  }
   
    update(u : artiste)
    {
   
      this.artisteService.editArtiste(u).subscribe(res =>
        {
          alert("Edit avec succès d'album "+this.u.nom+" "+this.u.prenom+" !");
          this.router.navigate(['/pages/layout/list-artiste']);
          console.log('aa' || this.u);
          //alert("Edit avec succès du produit "+this.u.nom+" !");
          this.u=new artiste();
  
        });
    } 
  
   
    annuler() {
      this.router.navigate(['/pages/layout/list-artiste/']);
  
    }
}
