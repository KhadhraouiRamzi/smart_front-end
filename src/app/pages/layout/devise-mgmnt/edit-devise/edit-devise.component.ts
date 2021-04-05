import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { devise } from '../../../../models/devise';
import { DeviseService } from '../../../../utils/services/devise.service';

@Component({
  selector: 'ngx-edit-devise',
  templateUrl: './edit-devise.component.html',
  styleUrls: ['./edit-devise.component.scss']
})
export class EditDeviseComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : devise;
  devises : devise[] =[];
  constructor(private deviseService : DeviseService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.deviseService.getDeviseById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : devise)
  {
 
    this.deviseService.editDevise(u).subscribe(res =>
      {
        alert("Edit avec succès de devise "+this.u.nomd+" !");
        this.router.navigate(['/pages/layout/list-devise']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new devise();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-devise/']);

  } 
}
