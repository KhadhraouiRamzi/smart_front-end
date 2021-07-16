import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { plateforme } from '../../../../models/plateforme';
import { PlateformeService } from '../../../../utils/services/plateforme.service';

@Component({
  selector: 'ngx-edit-plateforme',
  templateUrl: './edit-plateforme.component.html',
  styleUrls: ['./edit-plateforme.component.scss']
})
export class EditPlateformeComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : plateforme;
  plateforme : plateforme[] =[];
  constructor(private plateformeservice : PlateformeService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.plateformeservice.getPlateformeById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
     )
    }else {
    }  
}
  update(u : plateforme)
  {
    this.plateformeservice.editPlateforme(u).subscribe(res =>
      {
        alert("Edit avec succès de plateforme "+this.u.nom+" !");
        this.router.navigate(['/pages/layout/list-plateforme']);
        console.log('aa' || this.u);
         this.u=new plateforme();
      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-plateforme/']);
  } 
}
